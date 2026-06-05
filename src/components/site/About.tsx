import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">About Us</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">About <span className="text-gradient">NextStep AI</span></h2>
          <p className="text-lg text-muted-foreground">
            NextStep AI is dedicated to helping students bridge the gap between education and employment.
            Using artificial intelligence, we provide personalized career recommendations, resume optimization,
            interview coaching, and skill assessments tailored to each learner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "Empower every student with AI-driven tools that make career growth accessible and achievable." },
            { icon: Eye, title: "Our Vision", text: "To become the world's most trusted AI career companion for students." },
          ].map((b) => (
            <div key={b.title} className="glass rounded-3xl p-8 shadow-card hover:shadow-glow transition-all hover:-translate-y-1">
              <div className="size-12 rounded-2xl bg-gradient-brand grid place-items-center mb-5 shadow-glow">
                <b.icon className="size-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
