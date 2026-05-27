import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Field, Select, TextArea } from "./GeneralQuoteForm";
import { CallNowButton, CtaButton } from "@/components/ui/cta";
import { submitToWeb3Forms } from "@/lib/web3forms";

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
    const form = e.currentTarget; // capture before any await — currentTarget goes null after async
    const data = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const fe: Record<string, string> = {};
      for (const i of result.error.issues) fe[String(i.path[0])] = i.message;
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await submitToWeb3Forms({
        subject: `Mini Split Quote — ${result.data.name}`,
        from_name: result.data.name,
        Name: result.data.name,
        Phone: result.data.phone,
        "Town / Area": result.data.town,
        "Rooms / Areas": result.data.rooms,
        "Has Unit Already": result.data.hasUnit,
        Timing: result.data.timing,
        Notes: result.data.notes ?? "",
      });
      toast.success("Got it — we'll reach out to confirm details.", {
        description: "Prefer to talk now? Call or text 347-215-1377.",
      });
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      toast.error("Something went wrong sending your request.", {
        description: `${msg} — or call/text us at 347-215-1377.`,
      });
    } finally {
      setSubmitting(false);
    }
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
        <CtaButton type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Request Mini Split Quote"}
        </CtaButton>
        <CallNowButton size="lg" variant="navy" />
      </div>
    </form>
  );
}
