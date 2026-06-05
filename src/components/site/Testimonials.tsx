import { Quote } from "lucide-react";

const items = [
  { quote: "NextStep AI helped me identify the perfect career path and land my first internship.", name: "Priya Sharma", role: "Computer Science Student" },
  { quote: "The AI resume builder improved my resume significantly and helped me get interview calls.", name: "Rahul Verma", role: "Engineering Graduate" },
  { quote: "The mock interview feature boosted my confidence before placements.", name: "Sneha Patel", role: "Final-Year Student" },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold">Success <span className="text-gradient">Stories</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={t.name} className="glass rounded-3xl p-7 shadow-card hover:shadow-glow transition-all hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <Quote className="size-8 text-brand mb-4" />
              <p className="text-foreground/90 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-full bg-gradient-brand grid place-items-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
