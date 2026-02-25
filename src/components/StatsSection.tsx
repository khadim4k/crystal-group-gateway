import { Briefcase, Calendar, Users, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "150+", label: "Projets Réalisés" },
  { icon: Calendar, value: "15+", label: "Années d'Expérience" },
  { icon: Users, value: "500+", label: "Collaborateurs" },
  { icon: Award, value: "3", label: "Filiales Spécialisées" },
];

const StatsSection = () => (
  <section className="py-20 gradient-primary">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-1">{stat.value}</div>
            <div className="text-primary-foreground/70 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
