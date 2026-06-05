import { Brain, FileText, MessageSquare, Gauge, Map, LineChart } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Career Guidance", desc: "Personalized career recommendations based on your interests, strengths, and goals." },
  { icon: FileText, title: "Resume Builder", desc: "Generate ATS-friendly resumes with AI suggestions and professional templates." },
  { icon: MessageSquare, title: "Interview Preparation", desc: "Practice mock interviews and receive instant, actionable AI feedback." },
  { icon: Gauge, title: "Skill Assessment", desc: "Identify your strengths and skill gaps through AI-powered diagnostic tests." },
  { icon: Map, title: "Learning Roadmaps", desc: "Get customized step-by-step learning paths for your dream career." },
  { icon: LineChart, title: "Career Analytics", desc: "Track your progress and receive data-driven improvement recommendations." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI-Powered <span className="text-gradient">Services</span></h2>
          <p className="text-muted-foreground text-lg">Everything you need to launch and grow your career — powered by intelligent AI.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="group glass rounded-3xl p-7 shadow-card hover:shadow-glow transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="size-14 rounded-2xl bg-gradient-brand grid place-items-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                <s.icon className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
              <div className="mt-4 text-xs font-mono text-brand">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
