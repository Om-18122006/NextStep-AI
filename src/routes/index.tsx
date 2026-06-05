import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Courses } from "@/components/site/Courses";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Newsletter } from "@/components/site/Newsletter";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NextStep AI — Your AI-Powered Path to Career Success" },
      { name: "description", content: "AI career guidance, resume builder, mock interviews, skill assessments, and personalized learning roadmaps for students." },
      { property: "og:title", content: "NextStep AI — AI Career Guidance for Students" },
      { property: "og:description", content: "Discover careers, build resumes, ace interviews — powered by AI." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Courses />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <Toaster />
    </div>
  );
}
