import { Building2, Home, Cpu, Award } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const subsidiaries = [
  { name: "Horizon TP", icon: Building2, url: "https://www.horizontp.sn" },
  { name: "Maison Solis", icon: Home, url: "https://www.maisonsolis.sn" },
  { name: "SE2I", icon: Cpu, url: "https://www.se2i.com" },
  { name: "GROUPE de Cristal", icon: Award, url: "/#apropos" },
];

const BottomBar = () => (
  <div className="bg-foreground/95 backdrop-blur-sm border-t border-white/10">
    <div className="container mx-auto flex flex-col md:flex-row items-stretch">
      {/* Left contact area */}
      <div className="bg-secondary px-4 py-3 md:px-6 md:py-5 md:w-[35%]">
        <p className="text-secondary-foreground font-bold text-xs md:text-sm mb-1 md:mb-2">
          Pour toute question, contactez-nous
        </p>
        <div className="flex flex-wrap gap-2 md:gap-4 text-secondary-foreground/80 text-[10px] md:text-xs">
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
        {subsidiaries.map((sub) => {
          const isExternal = sub.url.startsWith("http");
          const content = (
            <>
              <sub.icon className="h-7 w-7 text-secondary mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-primary-foreground text-[11px] font-bold uppercase tracking-wider">{sub.name}</span>
            </>
          );

          return isExternal ? (
            <a
              key={sub.name}
              href={sub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center px-3 py-3 md:px-6 md:py-5 border-l border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors"
            >
              {content}
            </a>
          ) : (
            <Link key={sub.name} to="/" className="group flex flex-col items-center justify-center px-3 py-3 md:px-6 md:py-5 border-l border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors">
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

export default BottomBar;
