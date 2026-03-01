import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, CheckCircle, MapPin, Phone, Mail, Globe } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import horizonHero from "@/assets/horizon-hero.jpg";

const services = [
  "Construction et réhabilitation de routes",
  "Ouvrages d'art : ponts, viaducs, échangeurs",
  "Terrassement et VRD (Voirie et Réseaux Divers)",
  "Assainissement et drainage",
  "Aménagement urbain et paysager",
  "Construction de bâtiments industriels",
];

const HorizonTP = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={horizonHero} alt="Horizon TP Chantier" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative z-10 flex items-center h-full container mx-auto px-4">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-wider mb-4 hover:opacity-80">
              <ArrowLeft className="h-4 w-4" /> Retour à Crystal GROUP
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </Link>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">Horizon TP</h1>
            </div>
            <p className="text-primary-foreground/80 text-lg">Spécialiste des Travaux Publics et Infrastructures</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
            
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4 text-sm">Expertise & Innovation</p>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  Bâtir les <span className="text-gradient italic">fondations du progrès</span>
                </h2>
                <div className="w-24 h-1.5 gradient-primary mt-2 mb-10 rounded-full opacity-80" />
                
                <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    <strong className="text-foreground font-medium">Horizon TP</strong> est la filiale de Crystal GROUP dédiée aux travaux publics et au génie civil. 
                    Forte de plus de <span className="text-foreground font-medium">15 ans d'expérience</span>, notre équipe d'ingénieurs et de techniciens qualifiés 
                    intervient sur les plus grands chantiers d'Afrique de l'Ouest.
                  </p>
                  <p>
                    De la conception à la réalisation, nous mettons notre expertise au service de projets 
                    d'infrastructures qui transforment le paysage urbain et rural : <span className="text-foreground font-medium">routes nationales, 
                    ponts, ouvrages hydrauliques et aménagements urbains</span>.
                  </p>
                  <p>
                    Notre engagement : livrer des ouvrages de qualité, dans les délais et les budgets impartis, 
                    tout en respectant les normes environnementales les plus strictes.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-10">
              <div className="p-8 rounded-2xl bg-muted/50 border border-border/50 hover:border-secondary/30 transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 gradient-primary rounded-full"></span>
                  Nos Services
                </h3>
                <ul className="space-y-4">
                  {services.map((s) => (
                    <li key={s} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl gradient-primary text-primary-foreground shadow-xl">
                <h4 className="text-xl font-bold mb-6">Contactez Horizon TP</h4>
                <div className="space-y-5 text-sm md:text-base">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><MapPin className="h-5 w-5 text-secondary" /></div>
                    <span>Dakar, Sénégal</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Phone className="h-5 w-5 text-secondary" /></div>
                    <span>(+221) 77 499 57 57</span>
                  </div>
                  <a href="mailto:contact@horizontp.sn" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Mail className="h-5 w-5 text-secondary" /></div>
                    <span>contact@horizontp.sn</span>
                  </a>
                  <a href="https://horizontp.sn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Globe className="h-5 w-5 text-secondary" /></div>
                    horizontp.sn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HorizonTP;
