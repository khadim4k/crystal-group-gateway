import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-crystal.png";

const subsidiaries = [
  { name: "Horizon TP", url: "/horizon-tp", description: "Travaux Publics" },
  { name: "Maison Solis", url: "/maison-solis", description: "Immobilier" },
  { name: "SE2I", url: "/se2i", description: "Ingénierie" },
];

const externalLinks = [
  { name: "horizontp.sn", url: "https://horizontp.sn/" },
  { name: "maisonsolis.sn", url: "https://maisonsolis.sn/" },
  { name: "se2i.com", url: "https://www.se2i.com/" },
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

  const handleSubsidiaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    if (url) window.location.href = url;
  };

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    if (url) window.open(url, '_blank');
  };

  return (
    <>
      {/* Injection des polices magnifiques */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        body { font-family: 'Montserrat', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
        
        .glass-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .glass-card:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <nav className="sticky top-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Crystal GROUP" className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Selects Desktop */}
          <div className="hidden lg:flex items-center gap-4 ml-auto mr-8">
             <div className="relative group">
                <select 
                  onChange={handleSubsidiaryChange}
                  className="appearance-none bg-transparent font-medium text-sm border rounded-full px-4 py-2 pr-8 focus:outline-none focus:border-secondary cursor-pointer transition-colors text-foreground border-border hover:bg-accent/50"
                  defaultValue=""
                >
                  <option value="" disabled>Nos Filiales</option>
                  <option value="/horizon-tp">Horizon TP</option>
                  <option value="/maison-solis">Maison Solis</option>
                  <option value="/se2i">SE2I</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none rotate-90 text-muted-foreground" />
             </div>

             <div className="relative group">
                <select 
                  onChange={handleWebsiteChange}
                  className="appearance-none bg-transparent font-medium text-sm border rounded-full px-4 py-2 pr-8 focus:outline-none focus:border-secondary cursor-pointer transition-colors text-foreground border-border hover:bg-accent/50"
                  defaultValue=""
                >
                  <option value="" disabled>Découvrir les sites des filiales</option>
                  <option value="https://horizontp.sn/">horizontp.sn</option>
                  <option value="https://maisonsolis.sn/">maisonsolis.sn</option>
                  <option value="https://www.se2i.com/">se2i.com</option>
                </select>
                <Globe className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none text-muted-foreground" />
             </div>

             <a href="#contact" className="font-medium text-sm hover:text-secondary transition-colors uppercase tracking-wide text-foreground">
                Contact
             </a>
          </div>

          {/* Bouton Burger (Visible sur PC et Mobile) */}
          <button 
            onClick={() => setOpen(true)} 
            className="p-2 rounded-full transition-colors z-50 text-foreground hover:bg-accent/50"
            aria-label="Menu"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </nav>

      {/* Menu Overlay Transparent en Arbre */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex flex-col overflow-y-auto animate-in fade-in duration-300">
          
          {/* Bouton Fermer (Absolu en haut à droite) */}
          <div className="container mx-auto px-4 py-6 flex justify-end">
            <button 
              onClick={() => setOpen(false)} 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90" 
              aria-label="Fermer"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          <div className="container mx-auto px-4 flex-grow flex flex-col justify-center py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
              
              {/* Col 1: Infos Contact (Gauche) */}
              <div className="lg:col-span-3 flex flex-col justify-between lg:border-r border-white/10 lg:pr-8 space-y-8 lg:space-y-0">
                <div>
                  <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">GROUPE de Cristal</h4>
                  <div className="space-y-4 text-sm text-white/80">
                    <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-secondary" /> Dakar, Sénégal</p>
                    <a href="mailto:contact@crystalgroup.sn" className="flex items-center gap-3 hover:text-white transition-colors"><Mail className="h-4 w-4 text-secondary" /> contact@crystalgroup.sn</a>
                    <a href="tel:+221774995757" className="flex items-center gap-3 hover:text-white transition-colors"><Phone className="h-4 w-4 text-secondary" /> +221 77 499 57 57</a>
                    <p className="flex items-center gap-3"><Clock className="h-4 w-4 text-secondary" /> Lun - Ven : 8h - 18h</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-4">Suivez-nous</h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Facebook className="w-4 h-4" /></a>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Instagram className="w-4 h-4" /></a>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>

              {/* Col 2: Contenu Principal (Centre - Crystal Group & Filiales) */}
              <div className="lg:col-span-6 flex flex-col justify-center px-0 lg:px-12 space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Crystal GROUP</h2>
                  <p className="text-lg text-white/80 leading-relaxed">Un holding sénégalais fédérant des entreprises leaders dans les travaux publics, l'immobilier et l'ingénierie. Bâtir l'avenir à travers l'excellence.</p>
                  <span className="inline-block mt-4 px-4 py-1 rounded-full border border-secondary text-secondary text-xs font-bold uppercase tracking-wider">Holding International</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Nos Filiales</h3>
                  <div className="grid gap-4">
                    {subsidiaries.map(sub => (
                      <Link key={sub.name} to={sub.url} onClick={() => setOpen(false)} className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">{sub.name}</h3>
                          <p className="text-sm text-white/60">{sub.description}</p>
                        </div>
                        <ArrowRight className="text-white/30 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 3: Navigation (Droite) */}
              <div className="lg:col-span-3 flex flex-col lg:border-l border-white/10 lg:pl-8 justify-center space-y-12">
                <div>
                  <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                  <ul className="space-y-6 text-2xl font-playfair font-medium text-white">
                    <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-secondary transition-colors">Accueil</Link></li>
                    <li><a href="#apropos" onClick={() => setOpen(false)} className="hover:text-secondary transition-colors">À Propos</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-secondary transition-colors">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">Découvrir les sites des filiales</h4>
                  <div className="grid gap-4">
                    {externalLinks.map((site) => (
                      <a 
                        key={site.name} 
                        href={site.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-card p-4 rounded-xl flex items-center justify-between group transition-all"
                      >
                        <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{site.name}</span>
                        <Globe className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
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
