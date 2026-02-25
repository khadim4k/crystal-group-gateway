import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-[75vh] flex items-stretch overflow-hidden">
    {/* Background image */}
    <img
      src={heroBg}
      alt="Crystal GROUP Infrastructure"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-foreground/40" />

    {/* Left content panel with angled edge */}
    <div className="relative z-10 flex w-full">
      <div className="relative w-full md:w-[55%] flex items-center">
        {/* Blue overlay with angled right edge */}
        <div
          className="absolute inset-0 gradient-hero-overlay"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
          }}
        />
        <div className="relative z-10 px-8 md:px-16 py-20 max-w-xl">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] mb-4 text-xs">
            Corporate Holding
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-6">
            Crystal GROUP :<br />
            Bâtir l'avenir <span className="text-secondary font-black">à travers</span>
            <br />l'excellence
          </h1>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8 max-w-md">
            Un groupe leader dans les travaux publics, l'immobilier et l'ingénierie au service du développement économique de l'Afrique.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#filiales"
              className="bg-secondary text-secondary-foreground px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Nos Filiales
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-foreground text-primary-foreground px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Nav arrows */}
    <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-2 border-primary-foreground/40 flex items-center justify-center text-primary-foreground/60 hover:border-primary-foreground hover:text-primary-foreground transition-colors hidden md:flex" aria-label="Précédent">
      <ChevronLeft className="h-5 w-5" />
    </button>
    <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-2 border-secondary/60 flex items-center justify-center text-secondary hover:border-secondary hover:bg-secondary/10 transition-colors hidden md:flex" aria-label="Suivant">
      <ChevronRight className="h-5 w-5" />
    </button>
  </section>
);

export default HeroSection;
