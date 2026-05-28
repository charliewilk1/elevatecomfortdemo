import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

// ── Cloudflare env type ───────────────────────────────────────────────────────
interface D1Database {
  prepare(query: string): D1PreparedStatement;
  exec(query: string): Promise<D1ExecResult>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
}
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run<T = unknown>(): Promise<D1Result<T>>;
  all<T = unknown>(): Promise<D1Result<T>>;
}
interface D1Result<T = unknown> {
  results: T[];
  success: boolean;
  meta: Record<string, unknown>;
}
interface D1ExecResult {
  count: number;
  duration: number;
}

interface Env {
  DB: D1Database;
}

// Dashboard secret — change this to something only you know.
// Bookmark: https://yoursite.com/dashboard?key=THIS_VALUE
const DASHBOARD_KEY = "ec-admin-2025";

// ── Analytics API handlers ────────────────────────────────────────────────────

async function handleTrack(request: Request, env: Env): Promise<Response> {
  try {
    const body = await request.json() as {
      type: string;
      page: string;
      data: Record<string, unknown>;
      session_id: string;
      timestamp: number;
    };

    // Basic validation
    if (!body.type || !body.timestamp) {
      return new Response(JSON.stringify({ ok: false }), { status: 400 });
    }

    await env.DB.prepare(
      "INSERT INTO events (type, page, data, session_id, timestamp) VALUES (?, ?, ?, ?, ?)"
    )
      .bind(
        String(body.type).slice(0, 50),
        String(body.page || "/").slice(0, 200),
        JSON.stringify(body.data || {}),
        String(body.session_id || "unknown").slice(0, 64),
        Number(body.timestamp),
      )
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Track error:", err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}

async function handleDashboard(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  if (url.searchParams.get("key") !== DASHBOARD_KEY) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const now = Date.now();
    const dayAgo = now - 86_400_000;
    const weekAgo = now - 7 * 86_400_000;

    const [
      visitorsToday,
      visitorsWeek,
      visitorsAllTime,
      pageviewsToday,
      quotesToday,
      quotesWeek,
      phoneClicksToday,
      ctaClicksToday,
      pageBreakdown,
      quotesByService,
      ctaBreakdown,
      recentEvents,
    ] = await env.DB.batch<Record<string, unknown>>([
      // Unique visitors today
      env.DB.prepare(
        "SELECT COUNT(DISTINCT session_id) as n FROM events WHERE type='pageview' AND timestamp >= ?"
      ).bind(dayAgo),
      // Unique visitors this week
      env.DB.prepare(
        "SELECT COUNT(DISTINCT session_id) as n FROM events WHERE type='pageview' AND timestamp >= ?"
      ).bind(weekAgo),
      // Unique visitors all time
      env.DB.prepare(
        "SELECT COUNT(DISTINCT session_id) as n FROM events WHERE type='pageview'"
      ),
      // Page views today
      env.DB.prepare(
        "SELECT COUNT(*) as n FROM events WHERE type='pageview' AND timestamp >= ?"
      ).bind(dayAgo),
      // Quote submits today
      env.DB.prepare(
        "SELECT COUNT(*) as n FROM events WHERE type='form_submit' AND timestamp >= ?"
      ).bind(dayAgo),
      // Quote submits this week
      env.DB.prepare(
        "SELECT COUNT(*) as n FROM events WHERE type='form_submit' AND timestamp >= ?"
      ).bind(weekAgo),
      // Phone clicks today
      env.DB.prepare(
        "SELECT COUNT(*) as n FROM events WHERE type='phone_click' AND timestamp >= ?"
      ).bind(dayAgo),
      // CTA clicks today
      env.DB.prepare(
        "SELECT COUNT(*) as n FROM events WHERE type='cta_click' AND timestamp >= ?"
      ).bind(dayAgo),
      // Page views by page (last 7 days)
      env.DB.prepare(
        "SELECT page, COUNT(*) as views FROM events WHERE type='pageview' AND timestamp >= ? GROUP BY page ORDER BY views DESC LIMIT 10"
      ).bind(weekAgo),
      // Form submits by service (all time)
      env.DB.prepare(
        "SELECT json_extract(data,'$.service') as service, COUNT(*) as count FROM events WHERE type='form_submit' AND json_extract(data,'$.service') IS NOT NULL GROUP BY service ORDER BY count DESC"
      ),
      // CTA clicks by label (last 7 days)
      env.DB.prepare(
        "SELECT json_extract(data,'$.label') as label, COUNT(*) as count FROM events WHERE type='cta_click' AND timestamp >= ? AND json_extract(data,'$.label') IS NOT NULL GROUP BY label ORDER BY count DESC LIMIT 8"
      ).bind(weekAgo),
      // Recent 30 events
      env.DB.prepare(
        "SELECT type, page, data, timestamp FROM events ORDER BY timestamp DESC LIMIT 30"
      ),
    ]);

    const summary = {
      visitors_today: Number((visitorsToday.results[0] as { n: number })?.n ?? 0),
      visitors_week: Number((visitorsWeek.results[0] as { n: number })?.n ?? 0),
      visitors_all_time: Number((visitorsAllTime.results[0] as { n: number })?.n ?? 0),
      pageviews_today: Number((pageviewsToday.results[0] as { n: number })?.n ?? 0),
      quotes_today: Number((quotesToday.results[0] as { n: number })?.n ?? 0),
      quotes_week: Number((quotesWeek.results[0] as { n: number })?.n ?? 0),
      phone_clicks_today: Number((phoneClicksToday.results[0] as { n: number })?.n ?? 0),
      cta_clicks_today: Number((ctaClicksToday.results[0] as { n: number })?.n ?? 0),
    };

    return new Response(
      JSON.stringify({
        summary,
        pages: pageBreakdown.results,
        quotes_by_service: quotesByService.results,
        cta_breakdown: ctaBreakdown.results,
        recent: recentEvents.results,
        fetched_at: now,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Dashboard error:", err);
    return new Response(JSON.stringify({ error: "Query failed" }), { status: 500 });
  }
}

// ── TanStack Start handler ────────────────────────────────────────────────────

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

// ── Worker entry ──────────────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env, ctx: unknown) {
    const url = new URL(request.url);

    // Analytics API — handled before SSR so we have direct D1 access
    if (url.pathname === "/api/track" && request.method === "POST") {
      return handleTrack(request, env);
    }
    if (url.pathname === "/api/dashboard" && request.method === "GET") {
      return handleDashboard(request, env);
    }

    // Everything else goes to TanStack Start SSR
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
