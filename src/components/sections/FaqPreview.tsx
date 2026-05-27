import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/content/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqPreview() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            subtitle="Quick answers to what most people ask before booking. Still curious? Just call or text."
          />
        </div>
        <div className="md:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-bold uppercase text-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
