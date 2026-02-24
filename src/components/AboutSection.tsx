const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Sobre mim</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Conheça minha trajetória
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Escreva aqui um resumo sobre você, sua formação, seus interesses e o que te diferencia como profissional.
            </p>
            <p>
              Adicione informações sobre suas habilidades principais, tecnologias que domina e áreas de interesse.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { number: "+5", label: "Anos de experiência" },
            { number: "+20", label: "Projetos realizados" },
            { number: "+10", label: "Certificações" },
            { number: "+3", label: "Áreas de atuação" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-sm bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <p className="text-3xl font-display font-bold text-gradient mb-1">{stat.number}</p>
              <p className="text-muted-foreground text-sm font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
