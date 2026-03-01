import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-crystal.png";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        <div>
          <a href="#accueil">
            <img src={logo} alt="Crystal GROUP" className="h-12 md:h-14 mb-4 transition-opacity hover:opacity-80" />
          </a>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Crystal GROUP — Bâtir l'avenir à travers l'excellence. Un holding de confiance au service du développement.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Nos Filiales</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/horizon-tp" className="hover:text-secondary transition-colors">Horizon TP</Link></li>
            <li><Link to="/maison-solis" className="hover:text-secondary transition-colors">Maison Solis</Link></li>
            <li><Link to="/se2i" className="hover:text-secondary transition-colors">SE2I</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-secondary shrink-0" /> Dakar, Sénégal</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-secondary shrink-0" /> +221 77 499 57 57 // +221 78 786 58 55</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-secondary shrink-0" /> contact@crystalgroup.sn</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-primary-foreground/40 text-sm">
          © Groupe Cristal 2026. Tous droits réservés.
        </p>
        <p className="text-primary-foreground/30 text-xs">
          Site réalisé par{" "}
          <a href="https://afribanios.com" target="_blank" rel="noopener noreferrer" className="text-secondary/70 hover:text-secondary transition-colors font-semibold">
            Afribanios
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
