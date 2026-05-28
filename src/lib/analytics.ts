/**
 * Client-side analytics tracker.
 * Fire-and-forget — never blocks the UI, never throws to the caller.
 */

export type EventType =
  | "pageview"
  | "cta_click"
  | "phone_click"
  | "form_submit"
  | "service_view";

export type EventData = Record<string, string | number | boolean>;

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem("_ec_sid");
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem("_ec_sid", id);
    }
    return id;
  } catch {
    return "unknown";
  }
}

export function track(type: EventType, page: string, data?: EventData): void {
  try {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true, // survives page navigation
      body: JSON.stringify({
        type,
        page,
        data: data ?? {},
        session_id: getSessionId(),
        timestamp: Date.now(),
      }),
    }).catch(() => {}); // silently ignore network errors
  } catch {
    // never let tracking errors surface to the user
  }
}
