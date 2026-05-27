import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CallNowButton, CtaButton } from "@/components/ui/cta";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  town: z.string().trim().min(1, "Town/area required").max(100),
  service: z.string().min(1, "Pick a service"),
  timing: z.string().min(1, "Select a timeframe"),
  notes: z.string().max(2000).optional(),
});

// Match these labels to the slug map below — keep them in sync.
const SERVICE_OPTIONS = [
  "Mini split installation & service",
  "Central AC installation / repair",
  "Furnace installation / service",
  "Electric heating",
  "Baseboard heating",
  "Through-wall unit removal & restoration",
  "Maintenance / service call",
  "Not sure yet",
];

// Maps service slugs from /services to the matching form option label.
const SLUG_TO_SERVICE: Record<string, string> = {
  "mini-splits":       "Mini split installation & service",
  "central-ac":        "Central AC installation / repair",
  "furnace":           "Furnace installation / service",
  "electric-heating":  "Electric heating",
  "baseboard-heating": "Baseboard heating",
  "wall-unit-removal": "Through-wall unit removal & restoration",
};

const timings = [
  "ASAP",
  "Within 1 week",
  "Within 2-4 weeks",
  "Just exploring",
];

export function GeneralQuoteForm({ defaultService }: { defaultService?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const preselected = defaultService ? (SLUG_TO_SERVICE[defaultService] ?? "") : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Frontend-only stub; wire to backend later.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Thanks! We'll be in touch shortly.", {
      description: "Need it faster? Call or text 347-215-1377.",
    });
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Name" name="name" error={errors.name} />
      <Field label="Phone" name="phone" type="tel" error={errors.phone} />
      <Field label="Town / area" name="town" error={errors.town} />

      <Select
        label="Service needed"
        name="service"
        options={SERVICE_OPTIONS}
        defaultValue={preselected}
        error={errors.service}
      />
      <Select
        label="How soon do you need help?"
        name="timing"
        options={timings}
        error={errors.timing}
      />

      <TextArea
        label="Notes (optional)"
        name="notes"
        placeholder="Tell us about the space, photos welcome later by text."
      />

      <div className="flex flex-wrap gap-3 pt-2">
        <CtaButton type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Request a Quote"}
        </CtaButton>
        <CallNowButton size="lg" variant="navy" />
      </div>
    </form>
  );
}

function fieldBase(error?: string) {
  return [
    "w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground transition-colors outline-none",
    error
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-navy",
  ].join(" ");
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy">
      {children}
    </label>
  );
}

export function Field({
  label, name, type = "text", error,
}: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input id={name} name={name} type={type} className={fieldBase(error)} />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function Select({
  label, name, options, error, defaultValue = "",
}: { label: string; name: string; options: string[]; error?: string; defaultValue?: string }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select id={name} name={name} className={fieldBase(error)} defaultValue={defaultValue}>
        <option value="" disabled>Select an option…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function TextArea({
  label, name, placeholder, error,
}: { label: string; name: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        rows={4}
        placeholder={placeholder}
        className={fieldBase(error)}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
