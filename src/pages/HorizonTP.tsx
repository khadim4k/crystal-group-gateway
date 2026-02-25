import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
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
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">Horizon TP</h1>
            </div>
            <p className="text-primary-foreground/80 text-lg">Spécialiste des Travaux Publics et Infrastructures</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                Bâtir les <span className="text-gradient">fondations du progrès</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Horizon TP est la filiale de Crystal GROUP dédiée aux travaux publics et au génie civil. 
                Forte de plus de 15 ans d'expérience, notre équipe d'ingénieurs et de techniciens qualifiés 
                intervient sur les plus grands chantiers d'Afrique de l'Ouest.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                De la conception à la réalisation, nous mettons notre expertise au service de projets 
                d'infrastructures qui transforment le paysage urbain et rural : routes nationales, 
                ponts, ouvrages hydrauliques et aménagements urbains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre engagement : livrer des ouvrages de qualité, dans les délais et les budgets impartis, 
                tout en respectant les normes environnementales les plus strictes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Nos Services</h3>
              <ul className="space-y-4">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 rounded-xl bg-muted border border-border">
                <h4 className="font-bold text-foreground mb-3">Contactez Horizon TP</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> Dakar, Sénégal</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +221 XX XXX XX XX</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> contact@horizontp.sn</p>
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
