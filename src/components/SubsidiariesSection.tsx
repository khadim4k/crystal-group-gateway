import { Building2, Home, Cpu, ArrowRight, Globe, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import horizonHero from "@/assets/horizon-hero.jpg";
import solisHero from "@/assets/solis-hero.jpg";
import se2iHero from "@/assets/se2i-hero.jpg";

const subsidiaries = [
  {
    name: "Horizon TP",
    description: "Spécialiste des Travaux Publics. Routes, ponts, infrastructures — nous bâtissons les fondations du progrès.",
    icon: Building2,
    url: "/horizon-tp",
    website: "https://horizontp.sn/",
    phone: "(+221) 77 499 57 57",
    external: false,
    color: "from-primary to-primary/80",
    image: horizonHero,
  },
  {
    name: "Maison Solis",
    description: "Expertise immobilière de premier plan. Construction, promotion et gestion de projets immobiliers d'exception.",
    icon: Home,
    url: "/maison-solis",
    website: "https://maisonsolis.sn/",
    phone: "+221 77 666 64 38",
    external: false,
    color: "from-secondary to-secondary/80",
    image: solisHero,
  },
  {
    name: "SE2I",
    description: "Solutions d'ingénierie et d'automatisme. Innovation technologique au service de la performance industrielle.",
    icon: Cpu,
    url: "/se2i",
    website: "https://www.se2i.com/",
    phone: "+221 77 499 57 57 / +221 78 786 58 55",
    external: false,
    color: "from-primary to-secondary",
    image: se2iHero,
  },
];

const SubsidiariesSection = () => (
  <section id="filiales" className="py-16 md:py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-secondary font-semibold uppercase tracking-[0.2em] mb-3 text-sm">Notre Écosystème</p>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Nos <span className="text-gradient">Filiales</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {subsidiaries.map((sub) => (
          <div
            key={sub.name}
            className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${sub.color} opacity-60 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-50`} />
              <img src={sub.image} alt={sub.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow relative">
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 -mt-12 relative z-20 shadow-lg">
                <sub.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{sub.name}</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-grow">{sub.description}</p>
              
              <div className="flex flex-col gap-2 mb-6 pt-4 border-t border-border/50">
                <a href={sub.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
                  <Globe className="h-4 w-4" /> Visiter le site
                </a>
                <a href={`tel:${sub.phone.split('/')[0].replace(/[^\d+]/g, '')}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
                  <Phone className="h-4 w-4" /> {sub.phone}
                </a>
              </div>

              <Link to={sub.url} className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                Découvrir <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SubsidiariesSection;
