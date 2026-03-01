import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      const hour = now.getHours();
      setGreeting(hour >= 18 || hour < 5 ? "Bonsoir" : "Bonjour");
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const phoneNumber = "221774995757";
  const message = `${greeting} 👋 ! Je souhaite avoir plus d'informations sur vos services.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[300px] sm:w-[350px] overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 border border-border">
          {/* Header */}
          <div className="bg-[#075E54] p-4 text-white flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">C</div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#075E54]"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm">GROUPE de Cristal</h3>
              <p className="text-[10px] opacity-90">Généralement répond en quelques minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="bg-[#E5DDD5] p-4 min-h-[200px] flex flex-col gap-2 bg-opacity-50">
            <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm self-start max-w-[85%] text-sm text-gray-800">
              <p>{greeting} 👋 ! Comment pouvons-nous vous aider ? N'hésitez pas à nous écrire.</p>
              <span className="text-[10px] text-gray-400 block text-right mt-1">{time}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-white border-t border-gray-100">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-full font-semibold text-sm transition-colors"
            >
              <Send className="h-4 w-4" /> Démarrer la conversation
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Ouvrir WhatsApp"
      >
        {isOpen ? <X className="h-7 w-7" /> : (
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.536 0 1.52 1.115 2.988 1.264 3.186.149.198 2.19 3.349 5.273 4.695 2.151.94 2.988.94 3.984.94.774 0 1.756-.316 2.005-1.042.249-.727.249-1.365.175-1.49-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.96.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;