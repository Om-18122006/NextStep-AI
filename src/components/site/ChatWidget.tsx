import { useState } from "react";
import { MessageCircle, X, Sparkles, Send } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open AI assistant"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-brand text-white grid place-items-center shadow-glow hover:scale-110 transition-transform"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] glass rounded-3xl shadow-glow overflow-hidden animate-fade-up">
          <div className="bg-gradient-brand text-white p-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-white/20 grid place-items-center">
              <Sparkles className="size-5" />
            </div>
            <div>
              <div className="font-bold">NextStep AI Assistant</div>
              <div className="text-xs opacity-90">Online · Ready to help</div>
            </div>
          </div>
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto">
            <div className="glass rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%]">
              Hi! 👋 I'm your AI career assistant. Ask me about courses, careers, or resume tips!
            </div>
            <div className="bg-gradient-brand text-white rounded-2xl rounded-tr-sm p-3 text-sm max-w-[85%] ml-auto">
              What career suits a CS student?
            </div>
            <div className="glass rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%]">
              Great question! Based on current trends: AI/ML Engineer, Full-Stack Developer, or Data Scientist are top picks. Want a personalized roadmap?
            </div>
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input placeholder="Ask anything..." className="flex-1 bg-transparent text-sm outline-none px-3" />
            <button className="size-9 rounded-xl bg-gradient-brand text-white grid place-items-center">
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
