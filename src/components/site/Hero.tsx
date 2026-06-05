import { ArrowRight, Play, Sparkles, Brain, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ai.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-brand/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 size-96 rounded-full bg-brand-2/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-6">
            <Sparkles className="size-4 text-brand" />
            AI-Powered Career Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Your AI-Powered Path to{" "}
            <span className="text-gradient">Career Success</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Discover your strengths, build an impressive resume, master interviews, and unlock
            career opportunities with AI-driven guidance tailored just for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-brand text-white border-0 shadow-glow hover:opacity-90 h-12 px-7">
              Get Started Free <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-7 glass">
              <Play className="mr-1 size-4" /> Explore Courses
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="size-9 rounded-full border-2 border-background bg-gradient-brand" />
              ))}
            </div>
            Trusted by 25,000+ students worldwide
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-3xl overflow-hidden glass shadow-glow">
            <img
              src={heroImg}
              alt="Students learning with AI"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          {/* floating cards */}
          <div className="absolute -left-6 top-12 glass rounded-2xl p-4 shadow-card animate-float hidden sm:flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-brand grid place-items-center">
              <Brain className="size-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Career Match</div>
              <div className="font-bold">98%</div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-16 glass rounded-2xl p-4 shadow-card animate-float hidden sm:flex items-center gap-3" style={{ animationDelay: "1.5s" }}>
            <div className="size-10 rounded-xl bg-gradient-brand grid place-items-center">
              <Target className="size-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Goals Hit</div>
              <div className="font-bold">12 / 15</div>
            </div>
          </div>
          <div className="absolute right-10 -top-4 glass rounded-2xl p-3 shadow-card animate-float hidden md:flex items-center gap-2" style={{ animationDelay: "0.8s" }}>
            <Rocket className="size-4 text-brand-2" />
            <span className="text-xs font-medium">Interview Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
