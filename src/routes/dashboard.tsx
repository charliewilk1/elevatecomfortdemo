import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { z } from "zod";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Users,
  Eye,
  FileText,
  Phone,
  MousePointerClick,
  RefreshCw,
  TrendingUp,
  Clock,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
const searchSchema = z.object({
  key: z.string().optional().catch(undefined),
});

type DashboardData = {
  summary: {
    visitors_today: number;
    visitors_week: number;
    visitors_all_time: number;
    pageviews_today: number;
    quotes_today: number;
    quotes_week: number;
    phone_clicks_today: number;
    cta_clicks_today: number;
  };
  pages: { page: string; views: number }[];
  quotes_by_service: { service: string; count: number }[];
  cta_breakdown: { label: string; count: number }[];
  recent: { type: string; page: string; data: string; timestamp: number }[];
  fetched_at: number;
};

// ── Route ─────────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/dashboard")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Dashboard — Elevate Comfort" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DashboardPage,
});

// ── Helpers ───────────────────────────────────────────────────────────────────
const REFRESH_INTERVAL = 30_000; // 30 seconds

function timeAgo(ts: number): string {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

function friendlyPage(page: string): string {
  const map: Record<string, string> = {
    "/": "Home",
    "/services": "Services",
    "/mini-splits": "Mini Splits",
    "/specials": "Specials",
    "/contact": "Contact",
    "/about": "About",
    "/dashboard": "Dashboard",
  };
  return map[page] ?? page;
}

function friendlyEvent(type: string, page: string, dataStr: string): string {
  try {
    const data = JSON.parse(dataStr) as Record<string, string>;
    switch (type) {
      case "pageview": return `Viewed ${friendlyPage(page)}`;
      case "form_submit": return `Quote request — ${data.service ?? "unknown service"}`;
      case "phone_click": return `Tapped phone number on ${friendlyPage(page)}`;
      case "cta_click": return `Clicked "${data.label ?? "button"}" on ${friendlyPage(page)}`;
      default: return `${type} on ${friendlyPage(page)}`;
    }
  } catch {
    return `${type} on ${friendlyPage(page)}`;
  }
}

function eventDot(type: string): string {
  switch (type) {
    case "form_submit": return "bg-orange";
    case "phone_click": return "bg-green-500";
    case "cta_click": return "bg-sky";
    default: return "bg-navy/30";
  }
}

const NAVY = "#1b2d52";
const ORANGE = "#d97706";
const SKY = "#4a89c8";

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: number | string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className={`rounded-xl border p-5 ${accent ? "border-orange/30 bg-orange/5" : "border-border bg-card"}`}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
        <Icon className={`h-4 w-4 ${accent ? "text-orange" : "text-navy/40"}`} />
      </div>
      <p className={`mt-3 text-3xl font-extrabold ${accent ? "text-orange" : "text-navy"}`}>{value}</p>
      {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
function DashboardPage() {
  const { key } = useSearch({ from: "/dashboard" });
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(REFRESH_INTERVAL / 1000);

  const fetchData = useCallback(async () => {
    if (!key) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/dashboard?key=${encodeURIComponent(key)}`);
      if (res.status === 401) {
        setError("Invalid key. Check your bookmarked URL.");
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json() as DashboardData;
      setData(json);
      setError(null);
      setCountdown(REFRESH_INTERVAL / 1000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, [key]);

  // Initial load
  useEffect(() => { void fetchData(); }, [fetchData]);

  // Auto-refresh
  useEffect(() => {
    if (!key) return;
    const interval = setInterval(() => { void fetchData(); }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [key, fetchData]);

  // Countdown timer
  useEffect(() => {
    if (!data) return;
    const tick = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(tick);
  }, [data]);

  // ── No key ──────────────────────────────────────────────────────────────────
  if (!key) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center p-8">
        <div className="max-w-sm text-center">
          <div className="text-4xl">🔒</div>
          <h1 className="mt-4 text-2xl font-bold text-navy">Dashboard access required</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Open this page with your key in the URL:
          </p>
          <code className="mt-3 block rounded-lg bg-ice/60 px-4 py-3 text-sm text-navy">
            /dashboard?key=ec-admin-2025
          </code>
          <p className="mt-3 text-xs text-muted-foreground">Bookmark that URL for quick access.</p>
        </div>
      </div>
    );
  }

  // ── Error ───────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center p-8">
        <div className="max-w-sm text-center">
          <div className="text-4xl">⚠️</div>
          <h1 className="mt-4 text-xl font-bold text-navy">Could not load dashboard</h1>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <button
            onClick={() => void fetchData()}
            className="mt-4 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // ── Loading skeleton ────────────────────────────────────────────────────────
  if (!data) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="flex items-center gap-3 text-muted-foreground">
          <RefreshCw className="h-5 w-5 animate-spin" />
          <span className="text-sm">Loading analytics…</span>
        </div>
      </div>
    );
  }

  const { summary, pages, quotes_by_service, cta_breakdown, recent } = data;

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <div className="border-b border-border bg-navy px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Elevate Comfort</p>
            <h1 className="text-lg font-bold text-white">Analytics Dashboard</h1>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/50">
            {loading && <RefreshCw className="h-3.5 w-3.5 animate-spin text-orange" />}
            <span>Refreshes in {countdown}s</span>
            <button
              onClick={() => void fetchData()}
              className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
            >
              Refresh now
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-8 sm:px-8">

        {/* ── Summary stats ─────────────────────────────────────────────────── */}
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Today</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard icon={Users} label="Visitors" value={summary.visitors_today} sub={`${summary.visitors_week} this week · ${summary.visitors_all_time} all time`} />
            <StatCard icon={Eye} label="Page views" value={summary.pageviews_today} sub="Unique page loads today" />
            <StatCard icon={FileText} label="Quote requests" value={summary.quotes_today} sub={`${summary.quotes_week} this week`} accent />
            <StatCard icon={Phone} label="Phone taps" value={summary.phone_clicks_today} sub={`${summary.cta_clicks_today} CTA clicks today`} />
          </div>
        </div>

        {/* ── Charts row ────────────────────────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Pages this week */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-navy/50" />
              <h2 className="text-sm font-bold text-navy">Top pages — last 7 days</h2>
            </div>
            {pages.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">No data yet</p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={pages.map((p) => ({ name: friendlyPage(p.page), views: p.views }))} layout="vertical" margin={{ left: 0, right: 16, top: 0, bottom: 0 }}>
                  <XAxis type="number" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "rgba(0,0,0,0.04)" }}
                    contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
                  />
                  <Bar dataKey="views" radius={[0, 4, 4, 0]}>
                    {pages.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? NAVY : `rgba(27,45,82,${0.5 - i * 0.05})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Quotes by service */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-2">
              <FileText className="h-4 w-4 text-navy/50" />
              <h2 className="text-sm font-bold text-navy">Quote requests by service — all time</h2>
            </div>
            {quotes_by_service.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">No quote submissions yet</p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={quotes_by_service.map((q) => ({ name: q.service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), count: q.count }))} layout="vertical" margin={{ left: 0, right: 16, top: 0, bottom: 0 }}>
                  <XAxis type="number" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={100} axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "rgba(0,0,0,0.04)" }}
                    contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {quotes_by_service.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? ORANGE : `rgba(217,119,6,${0.6 - i * 0.08})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* ── CTA clicks ────────────────────────────────────────────────────── */}
        {cta_breakdown.length > 0 && (
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-2">
              <MousePointerClick className="h-4 w-4 text-navy/50" />
              <h2 className="text-sm font-bold text-navy">CTA clicks — last 7 days</h2>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={cta_breakdown.map((c) => ({ name: c.label, count: c.count }))} margin={{ left: 0, right: 16, top: 0, bottom: 0 }}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.04)" }}
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
                />
                <Bar dataKey="count" fill={SKY} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* ── Recent activity ────────────────────────────────────────────────── */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-2">
            <Clock className="h-4 w-4 text-navy/50" />
            <h2 className="text-sm font-bold text-navy">Recent activity</h2>
            <span className="ml-auto text-xs text-muted-foreground">Last {recent.length} events</span>
          </div>

          {recent.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">No events yet — visit the site to start recording data.</p>
          ) : (
            <ul className="space-y-2.5">
              {recent.map((e, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${eventDot(e.type)}`} />
                  <span className="flex-1 text-foreground">
                    {friendlyEvent(e.type, e.page, e.data)}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">{timeAgo(e.timestamp)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <p className="pb-4 text-center text-xs text-muted-foreground">
          Data from Cloudflare D1 · Auto-refreshes every 30s · Last fetched {timeAgo(data.fetched_at)}
        </p>
      </div>
    </div>
  );
}
