import { CheckCircle2, Sparkles, Trophy, FileCheck, Mic, Activity, Users } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI-Powered Personalized Guidance" },
  { icon: Trophy, title: "Industry-Aligned Learning Paths" },
  { icon: FileCheck, title: "Resume Optimization Tools" },
  { icon: Mic, title: "Real-Time Interview Feedback" },
  { icon: Activity, title: "Career Readiness Tracking" },
  { icon: Users, title: "Trusted by Thousands of Students" },
];

export function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Why Students Love <span className="text-gradient">NextStep AI</span></h2>
          <p className="text-muted-foreground text-lg mb-8">
            Built by educators and engineers, NextStep AI combines proven pedagogy with state-of-the-art AI to give every student a real advantage.
          </p>
          <div className="space-y-3">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3 glass rounded-2xl px-4 py-3 shadow-card">
                <div className="size-10 rounded-xl bg-gradient-brand grid place-items-center shrink-0">
                  <f.icon className="size-5 text-white" />
                </div>
                <span className="font-medium">{f.title}</span>
                <CheckCircle2 className="ml-auto size-5 text-brand" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="glass rounded-3xl p-6 shadow-glow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-muted-foreground">Career Readiness</div>
                <div className="text-2xl font-bold text-gradient">87%</div>
              </div>
              <div className="size-12 rounded-full bg-gradient-brand grid place-items-center">
                <Trophy className="size-6 text-white" />
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "Resume Strength", v: 92 },
                { label: "Technical Skills", v: 78 },
                { label: "Interview Prep", v: 85 },
                { label: "Portfolio Quality", v: 90 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{m.label}</span>
                    <span className="font-semibold">{m.v}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-brand rounded-full" style={{ width: `${m.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-gradient-brand text-white">
              <div className="text-xs opacity-90">AI Recommendation</div>
              <div className="font-semibold">Focus on system design this week 🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
