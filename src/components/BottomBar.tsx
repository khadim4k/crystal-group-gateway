import { Building2, Home, Cpu, Award } from "lucide-react";
import { Phone, Mail } from "lucide-react";

const subsidiaries = [
  { name: "Horizon TP", icon: Building2, url: "https://www.horizontp.sn" },
  { name: "Maison Solis", icon: Home, url: "https://www.maisonsolis.sn" },
  { name: "SE2I", icon: Cpu, url: "https://www.se2i.com" },
  { name: "Crystal GROUP", icon: Award, url: "#apropos" },
];

const BottomBar = () => (
  <section className="bg-foreground">
    <div className="container mx-auto flex flex-col md:flex-row items-stretch">
      {/* Left contact area */}
      <div className="bg-secondary px-6 py-5 md:w-[35%]">
        <p className="text-secondary-foreground font-bold text-sm mb-2">
          Pour toute question, contactez-nous
        </p>
        <div className="flex flex-wrap gap-4 text-secondary-foreground/80 text-xs">
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> +221 77 499 57 57 // +221 78 786 58 55
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" /> contact@crystalgroup.sn
          </span>
        </div>
      </div>

      {/* Right subsidiaries */}
      <div className="flex-1 flex items-center justify-center md:justify-end gap-0">
        <div className="hidden md:flex items-center px-6 text-primary-foreground/40 text-[10px] uppercase tracking-widest font-bold">
          <span>Un groupe,<br />3 filiales</span>
        </div>
        {subsidiaries.map((sub) => (
          <a
            key={sub.name}
            href={sub.url}
            target={sub.url.startsWith("http") ? "_blank" : undefined}
            rel={sub.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center justify-center px-6 py-5 border-l border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors"
          >
            <sub.icon className="h-7 w-7 text-secondary mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-primary-foreground text-[11px] font-bold uppercase tracking-wider">{sub.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BottomBar;
