import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_10px_40px_-10px_rgba(184,135,58,0.6)] hover:scale-105 transition-transform"
    >
      <MessageCircle size={22} />
    </a>
  );
}
