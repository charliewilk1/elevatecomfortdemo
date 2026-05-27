import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Field, Select, TextArea } from "./GeneralQuoteForm";
import { CallNowButton } from "@/components/ui/cta";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  town: z.string().trim().min(1, "Town/area required").max(100),
  rooms: z.string().min(1, "Select an option"),
  hasUnit: z.string().min(1, "Select an option"),
  timing: z.string().min(1, "Select a timeframe"),
  notes: z.string().max(2000).optional(),
});

const rooms = ["1 room / area", "2 rooms / areas", "3 rooms / areas", "4+ / whole home"];
const hasUnit = ["No, need a system", "Yes, have a unit already", "Not sure"];
const timings = ["ASAP", "Within 1-2 weeks", "Within a month", "Just exploring"];

export function MiniSplitQuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const fe: Record<string, string> = {};
      for (const i of result.error.issues) fe[String(i.path[0])] = i.message;
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Got it — we'll reach out to confirm details.", {
      description: "Prefer to talk now? Call or text 347-215-1377.",
    });
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Name" name="name" error={errors.name} />
      <Field label="Phone" name="phone" type="tel" error={errors.phone} />
      <Field label="Town / area" name="town" error={errors.town} />
      <Select label="How many rooms / areas?" name="rooms" options={rooms} error={errors.rooms} />
      <Select label="Do you already have a unit?" name="hasUnit" options={hasUnit} error={errors.hasUnit} />
      <Select label="When are you looking to install?" name="timing" options={timings} error={errors.timing} />
      <TextArea
        label="Notes (optional)"
        name="notes"
        placeholder="Tell us about the space. Photos welcome later by text."
      />
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(to_bottom,oklch(0.74_0.18_45),oklch(0.67_0.19_45))] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-[0_2px_6px_rgba(180,70,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_4px_14px_rgba(180,70,0,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] active:scale-[0.98] disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Request Mini Split Quote"}
        </button>
        <CallNowButton size="lg" variant="navy" />
      </div>
    </form>
  );
}
