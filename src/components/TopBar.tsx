import { Phone, Mail, Clock, MapPin, Facebook, Linkedin, Instagram, Twitter, Award } from "lucide-react";

const TopBar = () => (
  <div className="bg-foreground text-primary-foreground py-3 border-b border-white/10">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-3 lg:gap-0">
      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-sm font-medium">
        <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-default">
          <MapPin className="h-4 w-4 text-secondary" /> Dakar, Sénégal
        </span>
        <a href="mailto:contact@crystalgroup.sn" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Mail className="h-4 w-4 text-secondary" /> contact@crystalgroup.sn
        </a>
        <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-default hidden sm:flex">
          <Clock className="h-4 w-4 text-secondary" /> Lun - Ven : 8h - 18h
        </span>
        <span className="flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-xs ml-2">
          <Award className="h-4 w-4" /> GROUPE de Cristal
        </span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-white/20 pr-6 mr-2">
          <a href="#" aria-label="Facebook" className="hover:text-secondary transition-colors transform hover:scale-110"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-secondary transition-colors transform hover:scale-110"><Twitter className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-secondary transition-colors transform hover:scale-110"><Instagram className="h-4 w-4" /></a>
          <a href="#" aria-label="Linkedin" className="hover:text-secondary transition-colors transform hover:scale-110"><Linkedin className="h-4 w-4" /></a>
        </div>
        <a href="tel:+221774995757" className="flex items-center gap-2 hover:text-secondary transition-colors font-bold text-sm">
          <Phone className="h-4 w-4 text-secondary" /> +221 77 499 57 57
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
