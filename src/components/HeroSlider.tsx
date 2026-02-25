import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";


const slides = [
  {
    image: slide1,
    subtitle: "Travaux Publics",
    title: "Construire les infrastructures de demain",
    description: "Horizon TP, notre filiale spécialisée dans les travaux publics, réalise des projets d'envergure : routes, ponts et ouvrages d'art.",
    cta: { label: "Découvrir Horizon TP", href: "/horizon-tp" },
  },
  {
    image: slide2,
    subtitle: "Immobilier",
    title: "Des espaces de vie d'exception",
    description: "Maison Solis conçoit et développe des programmes immobiliers résidentiels et commerciaux de standing.",
    cta: { label: "Découvrir Maison Solis", href: "/maison-solis" },
  },
  {
    image: slide3,
    subtitle: "Ingénierie & Automatisme",
    title: "L'innovation au service de la performance",
    description: "SE2I apporte des solutions d'ingénierie et d'automatisme pour l'industrie et les grandes infrastructures.",
    cta: { label: "Découvrir SE2I", href: "/se2i" },
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="accueil" className="relative h-[80vh] md:h-[85vh] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.subtitle}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Left panel with diagonal clip */}
      <div className="relative z-10 flex w-full h-full">
        <div className="relative w-full md:w-[58%] flex items-center">
          <div
            className="absolute inset-0 gradient-hero-overlay"
            style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }}
          />
          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-16 max-w-xl">
            <p
              key={`sub-${current}`}
              className="text-secondary font-semibold uppercase tracking-[0.25em] mb-4 text-xs animate-fade-up"
            >
              {slide.subtitle}
            </p>
            <h1
              key={`title-${current}`}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-5 animate-fade-up"
              style={{ animationDelay: "0.12s" }}
            >
              {slide.title}
            </h1>
            <p
              key={`desc-${current}`}
              className="text-primary-foreground/70 text-sm md:text-base leading-relaxed mb-8 animate-fade-up"
              style={{ animationDelay: "0.24s" }}
            >
              {slide.description}
            </p>
            <div
              key={`cta-${current}`}
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.36s" }}
            >
              <a
                href={slide.cta.href}
                className="bg-secondary text-secondary-foreground px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                {slide.cta.label}
              </a>
              <a
                href="#contact"
                className="border-2 border-primary-foreground/60 text-primary-foreground px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-2 border-primary-foreground/40 flex items-center justify-center text-primary-foreground/60 hover:border-primary-foreground hover:text-primary-foreground transition-colors"
        aria-label="Précédent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary hover:bg-secondary/20 transition-colors"
        aria-label="Suivant"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-secondary" : "w-2.5 bg-primary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Integrated BottomBar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
      </div>
    </section>
  );
};

export default HeroSlider;
