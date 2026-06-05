import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does AI career guidance work?", a: "Our AI analyzes your interests, skills, and goals to recommend suitable career paths personalized to you." },
  { q: "Is the resume builder ATS-friendly?", a: "Yes, all resumes generated are optimized for Applicant Tracking Systems used by top recruiters." },
  { q: "Can beginners use NextStep AI?", a: "Absolutely. The platform is designed for students at all levels — from first-year students to graduates." },
  { q: "Are courses certified?", a: "Yes, you receive a verifiable certificate of completion for every course you finish." },
  { q: "Is there a free plan available?", a: "Yes, students can access core features for free. Upgrade anytime to unlock advanced AI tools." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked <span className="text-gradient">Questions</span></h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass rounded-2xl px-6 border-0 shadow-card">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
