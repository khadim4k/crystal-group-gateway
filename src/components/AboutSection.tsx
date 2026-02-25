const AboutSection = () => (
  <section id="apropos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-secondary font-semibold uppercase tracking-[0.2em] mb-3 text-sm">Qui sommes-nous</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
          Un groupe au service de <span className="text-gradient">l'excellence</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mt-2 mb-8 rounded-full" />
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Crystal GROUP est un holding sénégalais qui fédère des entreprises leaders dans les secteurs des travaux publics, 
          de l'immobilier et de l'ingénierie. Notre vision : accompagner le développement économique de l'Afrique 
          à travers des projets d'envergure portés par l'innovation et le savoir-faire.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Fondé sur des valeurs de rigueur, d'intégrité et d'engagement, Crystal GROUP s'appuie sur la complémentarité 
          de ses filiales pour offrir des solutions globales à ses partenaires.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
