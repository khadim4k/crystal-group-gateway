import { Building2, Home, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const subsidiaries = [
  {
    name: "Horizon TP",
    description: "Spécialiste des Travaux Publics. Routes, ponts, infrastructures — nous bâtissons les fondations du progrès.",
    icon: Building2,
    url: "/horizon-tp",
    external: false,
    color: "from-primary to-primary/80",
  },
  {
    name: "Maison Solis",
    description: "Expertise immobilière de premier plan. Construction, promotion et gestion de projets immobiliers d'exception.",
    icon: Home,
    url: "/maison-solis",
    external: false,
    color: "from-secondary to-secondary/80",
  },
  {
    name: "SE2I",
    description: "Solutions d'ingénierie et d'automatisme. Innovation technologique au service de la performance industrielle.",
    icon: Cpu,
    url: "/se2i",
    external: false,
    color: "from-primary to-secondary",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {subsidiaries.map((sub) => (
          <Link
            key={sub.name}
            to={sub.url}
            className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border hover:-translate-y-2"
          >
            <div className={`h-2 bg-gradient-to-r ${sub.color}`} />
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-6">
                <sub.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{sub.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{sub.description}</p>
              <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SubsidiariesSection;
