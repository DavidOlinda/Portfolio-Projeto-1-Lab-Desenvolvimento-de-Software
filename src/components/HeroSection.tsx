import { User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Foto de Perfil */}
        <div className="shrink-0 animate-fade-in">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-2 border-primary/30 overflow-hidden bg-card flex items-center justify-center">
            {/* Substitua pelo seu <img>: <img src="..." alt="Foto de perfil" className="w-full h-full object-cover" /> */}
            <User className="w-20 h-20 text-muted-foreground/40" />
          </div>
        </div>

        <div>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Portfólio Profissional
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span className="text-foreground">Seu Nome</span>
            <br />
            <span className="text-gradient">Aqui.</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Breve descrição sobre você, sua área de atuação e o que te motiva profissionalmente.
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <a href="#contato" className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity">
              Entre em contato
            </a>
            <a href="#sobre" className="px-8 py-3 border border-border text-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:border-primary/50 transition-colors">
              Saiba mais
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
