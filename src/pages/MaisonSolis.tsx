import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import solisHero from "@/assets/solis-hero.jpg";

const services = [
  "Promotion immobilière résidentielle et commerciale",
  "Construction de villas et résidences de standing",
  "Gestion et administration de biens immobiliers",
  "Conseil en investissement immobilier",
  "Aménagement et décoration intérieure",
  "Lotissement et viabilisation de terrains",
];

const MaisonSolis = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <TopBar />
      <Navbar />

      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={solisHero} alt="Maison Solis" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative z-10 flex items-center h-full container mx-auto px-4">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-wider mb-4 hover:opacity-80">
              <ArrowLeft className="h-4 w-4" /> Retour à Crystal GROUP
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                <Home className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">Maison Solis</h1>
            </div>
            <p className="text-primary-foreground/80 text-lg">Expertise Immobilière de Premier Plan</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                Des espaces de vie <span className="text-gradient">d'exception</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Maison Solis est la filiale immobilière de Crystal GROUP. Nous concevons et développons 
                des programmes immobiliers qui allient confort moderne, design contemporain et qualité de construction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Que ce soit pour des résidences de standing, des complexes commerciaux ou des lotissements, 
                notre équipe d'architectes et d'ingénieurs met son savoir-faire au service de projets 
                qui valorisent le cadre de vie.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre approche intégrée — de l'acquisition foncière à la livraison des clés — garantit 
                une maîtrise totale de la chaîne de valeur immobilière.
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
                <h4 className="font-bold text-foreground mb-3">Contactez Maison Solis</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> Dakar, Sénégal</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +221 XX XXX XX XX</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> contact@maisonsolis.sn</p>
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

export default MaisonSolis;
