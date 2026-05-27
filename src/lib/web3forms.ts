/**
 * Web3Forms — free email forwarding for static/edge apps.
 *
 * To get your access key:
 *   1. Go to https://web3forms.com/
 *   2. Enter elevatecomforthvac@gmail.com and click "Create Access Key"
 *   3. Check the inbox — the key will be emailed to you
 *   4. Paste it below and redeploy
 */
export const WEB3FORMS_KEY = ""; // ← paste your access key here

export async function submitToWeb3Forms(fields: Record<string, string>) {
  if (!WEB3FORMS_KEY) {
    // During development / before key is set: simulate success so the UI works.
    console.warn("Web3Forms key not configured — submission skipped.");
    await new Promise((r) => setTimeout(r, 600));
    return;
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      botcheck: false, // honeypot — bots that fill this get rejected
      ...fields,
    }),
  });

  const json: { success: boolean; message?: string } = await res.json();
  if (!json.success) {
    throw new Error(json.message ?? "Submission failed");
  }
}
