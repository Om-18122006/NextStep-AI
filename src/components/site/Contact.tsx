import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll reach out within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-muted-foreground text-lg mt-3">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "support@nextstepai.com" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-5 flex items-center gap-4 shadow-card">
                <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center shrink-0">
                  <c.icon className="size-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-5 shadow-card">
              <div className="text-sm font-semibold mb-3">Follow us</div>
              <div className="flex gap-3">
                {[Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
                  <a key={i} href="#" className="size-10 rounded-xl glass grid place-items-center hover:bg-gradient-brand hover:text-white transition-all">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <iframe
                title="NextStep AI Location"
                src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
                className="w-full h-48 border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-3xl p-8 shadow-card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Full Name" maxLength={100} />
              <Input required type="email" placeholder="Email Address" maxLength={255} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Phone Number" maxLength={20} />
              <Input required placeholder="Subject" maxLength={150} />
            </div>
            <Textarea required placeholder="Your Message" rows={6} maxLength={1000} />
            <Button type="submit" size="lg" className="w-full bg-gradient-brand text-white border-0 shadow-glow hover:opacity-90">
              Send Message <Send className="ml-2 size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
