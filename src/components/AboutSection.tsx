const AboutSection = () => (
  <section id="apropos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-secondary font-bold uppercase tracking-[0.3em] mb-4 text-xs">Qui sommes-nous</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
          Un groupe au service de <span className="text-gradient italic">l'excellence</span>
        </h2>
        <div className="w-24 h-1.5 gradient-primary mx-auto mt-2 mb-10 rounded-full opacity-80" />
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          <p>
            <strong className="text-foreground font-medium">Crystal GROUP</strong> est un holding sénégalais qui fédère des entreprises leaders dans les secteurs des travaux publics, 
            de l'immobilier et de l'ingénierie. Notre vision : accompagner le développement économique de l'Afrique 
            à travers des projets d'envergure portés par l'innovation et le savoir-faire.
          </p>
          <p>
            Fondé sur des valeurs de <span className="text-foreground font-medium">rigueur</span>, d'<span className="text-foreground font-medium">intégrité</span> et d'<span className="text-foreground font-medium">engagement</span>, Crystal GROUP s'appuie sur la complémentarité 
            de ses filiales pour offrir des solutions globales à ses partenaires.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
