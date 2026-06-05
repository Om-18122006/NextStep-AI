import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl p-10 md:p-14 bg-gradient-brand text-white overflow-hidden shadow-glow">
          <div className="absolute -top-10 -right-10 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-medium mb-3">
                <Sparkles className="size-3.5" /> Weekly Career Tips
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Stay ahead in your career</h3>
              <p className="opacity-90">Get AI-curated career insights, free resources, and exclusive course offers.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed! Check your inbox."); (e.target as HTMLFormElement).reset(); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input type="email" required placeholder="you@email.com" className="bg-white/15 border-white/30 text-white placeholder:text-white/70" />
              <Button type="submit" className="bg-white text-brand hover:bg-white/90 font-semibold">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
