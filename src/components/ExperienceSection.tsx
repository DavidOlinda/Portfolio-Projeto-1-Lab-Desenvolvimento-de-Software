import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      type: t("exp.professional"),
      items: [
        { period: "2025 — Present", role: t("exp.role1"), company: t("exp.company1"), description: t("exp.desc1") },
        { period: "2025 — 2025", role: t("exp.role2"), company: t("exp.company2"), description: t("exp.desc2") },

        { period: "2024 — 2025", role: t("exp.role3"), company: t("exp.company3"), description: t("exp.desc3") },
        { period: "2024", role: t("exp.role4"), company: t("exp.company4"), description: t("exp.desc4") },
      ],
    },
    {
      type: t("exp.academic"),
      items: [
        {
          period: "fev de 2024 - dez de 2027",
          role: "Bacharelado em Engenharia, Engenharia de Software",
          company: "PUC Minas",
          description: "Capacidade de organização, Habilidades analíticas e mais 9 competências",
          logo: "/logos/puc-minas.png",
        },
        {
          period: "fev de 2021 - dez de 2023",
          role: "High School Diploma, Redes de computadores",
          company: "Centro Federal de Educação Tecnológica de Minas Gerais",
          description: "Capacidade de organização, Operating Systems e mais 15 competências",
          logo: "/logos/cefet.png",
        },
      ],
    },
  ];

  return (
    <section id="experiencia" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">{t("exp.label")}</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16">
          {t("exp.title")}
        </h2>

        <div className="space-y-16">
          {experiences.map((group) => (
            <div key={group.type}>
              <h3 className="text-primary font-display text-xl font-semibold mb-8 pb-2 border-b border-primary/20 inline-block">
                {group.type}
              </h3>
              <div className="space-y-0">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-b border-border last:border-b-0 hover:bg-card/50 transition-colors -mx-4 px-4 rounded-sm"
                  >
                    <p className="text-muted-foreground font-body text-sm pt-1">{item.period}</p>
                    <div>
                      <h4 className="text-foreground font-body font-semibold text-lg group-hover:text-primary transition-colors">
                        {item.role}
                      </h4>
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="h-10 w-auto mb-1"
                        />
                      )}
                      <p className="text-primary/80 font-body text-sm mb-2">{item.company}</p>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
