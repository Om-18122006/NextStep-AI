import { Star, Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { title: "AI & Machine Learning", desc: "Learn AI fundamentals, ML models, and practical real-world applications.", duration: "12 weeks", level: "Intermediate", rating: 4.9, hue: "from-blue-500 to-purple-600" },
  { title: "Full Stack Web Development", desc: "Master frontend and backend technologies to build complete applications.", duration: "16 weeks", level: "Beginner", rating: 4.8, hue: "from-purple-500 to-pink-500" },
  { title: "Data Science & Analytics", desc: "Analyze data, create visualizations, and make data-driven decisions.", duration: "10 weeks", level: "Intermediate", rating: 4.9, hue: "from-cyan-500 to-blue-600" },
  { title: "Cybersecurity Essentials", desc: "Understand network security, ethical hacking, and cyber defense.", duration: "8 weeks", level: "Beginner", rating: 4.7, hue: "from-indigo-500 to-purple-600" },
  { title: "Cloud Computing", desc: "Learn AWS, Azure, and modern cloud infrastructure concepts.", duration: "9 weeks", level: "Intermediate", rating: 4.8, hue: "from-blue-500 to-indigo-600" },
  { title: "UI/UX Design", desc: "Design beautiful and user-friendly digital experiences.", duration: "8 weeks", level: "Beginner", rating: 4.9, hue: "from-pink-500 to-purple-600" },
];

export function Courses() {
  return (
    <section id="courses" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Courses</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular <span className="text-gradient">Career Courses</span></h2>
          <p className="text-muted-foreground text-lg">Industry-aligned programs designed to make you job-ready.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="glass rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all hover:-translate-y-2 flex flex-col">
              <div className={`h-36 bg-gradient-to-br ${c.hue} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)]" />
                <div className="absolute bottom-3 left-4 text-white font-display font-bold text-xl drop-shadow">{c.title}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                  <span className="flex items-center gap-1"><Clock className="size-3.5" />{c.duration}</span>
                  <span className="flex items-center gap-1"><BarChart3 className="size-3.5" />{c.level}</span>
                  <span className="flex items-center gap-1"><Star className="size-3.5 fill-yellow-400 text-yellow-400" />{c.rating}</span>
                </div>
                <Button className="mt-auto bg-gradient-brand text-white border-0 hover:opacity-90">Enroll Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
