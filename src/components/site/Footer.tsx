import { Sparkles, Linkedin, Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <span className="size-9 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
              <Sparkles className="size-5 text-white" />
            </span>
            <span className="text-gradient">NextStep AI</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Your AI-powered companion for career success.</p>
          <div className="flex gap-2">
            {[Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="size-9 rounded-lg glass grid place-items-center hover:bg-gradient-brand hover:text-white transition-all">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "About", "Services", "Courses", "FAQ", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Blog", "Career Guides", "Resume Templates", "Student Community"].map((l) => (
              <li key={l}><a href="#" className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>support@nextstepai.com</li>
            <li>+91 98765 43210</li>
            <li>Pune, Maharashtra, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2026 NextStep AI. All Rights Reserved.
      </div>
    </footer>
  );
}
