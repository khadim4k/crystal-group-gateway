import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-crystal.png";

const subsidiaries = [
  { name: "Horizon TP", url: "/horizon-tp", description: "Travaux Publics" },
  { name: "Maison Solis", url: "/maison-solis", description: "Immobilier" },
  { name: "SE2I", url: "/se2i", description: "Ingénierie" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Empêcher le défilement quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      {/* Injection des polices magnifiques */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        body { font-family: 'Montserrat', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#accueil" className="flex items-center group">
            <img src={logo} alt="Crystal GROUP" className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Bouton Burger (Visible sur PC et Mobile) */}
          <button 
            onClick={() => setOpen(true)} 
            className="text-foreground p-2 hover:bg-accent/50 rounded-full transition-colors z-50" 
            aria-label="Menu"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </nav>

      {/* Menu Overlay Transparent en Arbre */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[20px] flex flex-col items-center justify-center overflow-y-auto animate-in fade-in duration-500">
          
          {/* Bouton Fermer (Absolu en haut à droite) */}
          <button 
            onClick={() => setOpen(false)} 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white p-3 hover:bg-white/10 rounded-full transition-all duration-300 z-[101] hover:rotate-90" 
            aria-label="Fermer"
          >
            <X className="h-10 w-10" />
          </button>

          <div className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center min-h-screen md:min-h-0 justify-center relative">
            
            {/* Racine : Crystal Group */}
            <div className="flex flex-col items-center animate-in zoom-in duration-700 slide-in-from-top-8">
              <a href="/" onClick={() => setOpen(false)} className="glass-card p-6 rounded-2xl text-center max-w-xl z-10 group transition-all duration-500 hover:bg-white/10">
                <img src={logo} alt="Crystal GROUP" className="h-20 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:scale-105" />
                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-secondary transition-colors">Crystal GROUP</h2>
                <p className="text-xs text-white/80 leading-relaxed mb-3 max-w-md mx-auto">
                  Un holding sénégalais fédérant des entreprises leaders dans les travaux publics, l'immobilier et l'ingénierie. Bâtir l'avenir à travers l'excellence.
                </p>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Holding International</p>
              </a>
              {/* Trait vertical racine */}
              <div className="h-8 w-0.5 bg-gradient-to-b from-white/20 to-transparent"></div>
            </div>

            {/* Structure des traits (Visible uniquement sur PC/Tablette) */}
            <div className="hidden md:flex w-full max-w-3xl justify-center relative mb-0.5">
              {/* Trait horizontal reliant le premier et le dernier enfant */}
              {/* Les enfants sont à 1/6, 3/6, 5/6 de la largeur. Le trait va de 1/6 à 5/6 */}
              <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Traits verticaux descendants vers les enfants */}
              <div className="w-1/3 flex justify-center"><div className="h-6 w-0.5 bg-gradient-to-b from-white/20 to-white/5"></div></div>
              <div className="w-1/3 flex justify-center"><div className="h-6 w-0.5 bg-gradient-to-b from-white/20 to-white/5"></div></div>
              <div className="w-1/3 flex justify-center"><div className="h-6 w-0.5 bg-gradient-to-b from-white/20 to-white/5"></div></div>
            </div>

            {/* Les Filiales (Enfants) */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-3xl justify-center">
              {subsidiaries.map((sub, i) => (
                <div key={sub.name} className="flex-1 flex flex-col items-center animate-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: `${150 + i * 150}ms` }}>
                  {/* Trait vertical mobile */}
                  <div className="md:hidden h-6 w-0.5 bg-white/20"></div>
                  
                  <Link 
                    to={sub.url} 
                    onClick={() => setOpen(false)}
                    className="glass-card p-4 rounded-xl w-full max-w-[180px] text-center relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-base font-bold text-white mb-1 relative z-10 group-hover:scale-105 transition-transform">{sub.name}</h3>
                    <p className="text-[10px] text-white/60 font-medium uppercase tracking-wider relative z-10 group-hover:text-white/90 transition-colors">{sub.description}</p>
                    <div className="mt-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <ChevronRight className="text-secondary w-4 h-4" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Informations de l'entreprise */}
            <div className="mt-24 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 text-white/80 animate-in fade-in duration-1000 delay-500 border-t border-white/10 pt-10">
                <div className="text-center md:text-left space-y-4">
                    <h4 className="text-xl font-playfair font-bold text-white mb-4">Navigation</h4>
                    <ul className="space-y-2">
                        <li><a href="#apropos" onClick={() => setOpen(false)} className="hover:text-secondary transition-colors text-sm uppercase tracking-wide">À Propos</a></li>
                        <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-secondary transition-colors text-sm uppercase tracking-wide">Contact</a></li>
                        <li><a href="#carrieres" onClick={() => setOpen(false)} className="hover:text-secondary transition-colors text-sm uppercase tracking-wide">Carrières</a></li>
                    </ul>
                </div>

                <div className="text-center md:text-left space-y-4">
                    <h4 className="text-xl font-playfair font-bold text-white mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center justify-center md:justify-start gap-3 group">
                            <MapPin className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> 
                            <span>Dakar, Sénégal</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-3 group">
                            <Phone className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> 
                            <a href="tel:+221774995757" className="hover:text-white transition-colors">+221 77 499 57 57</a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-3 group">
                            <Mail className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> 
                            <a href="mailto:contact@crystalgroup.sn" className="hover:text-white transition-colors">contact@crystalgroup.sn</a>
                        </li>
                    </ul>
                </div>

                <div className="text-center md:text-left space-y-4">
                    <h4 className="text-xl font-playfair font-bold text-white mb-4">Suivez-nous</h4>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Instagram className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
                    </div>
                    <div className="pt-2 flex items-center justify-center md:justify-start gap-2 text-xs text-white/50">
                        <Clock className="w-3 h-3" /> Lun - Ven : 8h - 18h
                    </div>
                </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
