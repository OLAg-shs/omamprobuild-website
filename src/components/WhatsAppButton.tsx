import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+233595787048"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
