import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, CheckCircle, MapPin, Phone, Mail, Globe } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import se2iHero from "@/assets/se2i-hero.jpg";

const services = [
  "Automatisme industriel et contrôle-commande",
  "Systèmes SCADA et supervision industrielle",
  "Ingénierie électrique et instrumentation",
  "Intégration de systèmes et IoT industriel",
  "Maintenance préventive et curative",
  "Formation et transfert de compétences",
];

const SE2I = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <TopBar />
      <Navbar />

      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={se2iHero} alt="SE2I Ingénierie" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative z-10 flex items-center h-full container mx-auto px-4">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-wider mb-4 hover:opacity-80">
              <ArrowLeft className="h-4 w-4" /> Retour à Crystal GROUP
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </Link>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">SE2I</h1>
            </div>
            <p className="text-primary-foreground/80 text-lg">Solutions d'Ingénierie et d'Automatisme</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
            
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4 text-sm">Technologie & Industrie</p>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  L'innovation au service de la <span className="text-gradient italic">performance</span>
                </h2>
                <div className="w-24 h-1.5 gradient-primary mt-2 mb-10 rounded-full opacity-80" />
                
                <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    <strong className="text-foreground font-medium">SE2I</strong> (Société d'Études, d'Ingénierie et d'Informatique) est la filiale technologique 
                    de Crystal GROUP. Nous concevons et déployons des solutions d'automatisme et de contrôle 
                    pour les secteurs industriels, énergétiques et des infrastructures.
                  </p>
                  <p>
                    Notre expertise couvre l'ensemble du cycle de projet : études de conception, 
                    développement de systèmes de supervision SCADA, intégration d'automates programmables 
                    et mise en service des installations.
                  </p>
                  <p>
                    Avec une équipe d'ingénieurs hautement qualifiés et des partenariats technologiques 
                    de premier plan, SE2I accompagne la <span className="text-foreground font-medium">transformation digitale</span> de l'industrie africaine.
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
                <h4 className="text-xl font-bold mb-6">Contactez SE2I</h4>
                <div className="space-y-5 text-sm md:text-base">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><MapPin className="h-5 w-5 text-secondary" /></div>
                    <span>Dakar, Sénégal</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Phone className="h-5 w-5 text-secondary" /></div>
                    <span>+221 77 499 57 57 // +221 78 786 58 55</span>
                  </div>
                  <a href="mailto:contact@se2i.com" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Mail className="h-5 w-5 text-secondary" /></div>
                    <span>contact@se2i.com</span>
                  </a>
                  <a href="https://www.se2i.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Globe className="h-5 w-5 text-secondary" /></div>
                    se2i.com
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

export default SE2I;
