import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nome do Projeto 1",
    description: "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Nome do Projeto 2",
    description: "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    tags: ["Node.js", "PostgreSQL", "API REST"],
    link: "#",
    github: "#",
  },
  {
    title: "Nome do Projeto 3",
    description: "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    tags: ["Python", "Machine Learning"],
    link: "#",
    github: "#",
  },
  {
    title: "Nome do Projeto 4",
    description: "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    tags: ["Figma", "UI/UX", "Design System"],
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Projetos</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16">
          Trabalhos selecionados
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-6 bg-card border border-border rounded-sm hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="w-full h-40 bg-secondary rounded-sm mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground/30 font-body text-xs tracking-widest uppercase">
                  Imagem do projeto
                </span>
              </div>

              <h3 className="text-foreground font-body font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary text-sm font-body transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Ver projeto
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary text-sm font-body transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
