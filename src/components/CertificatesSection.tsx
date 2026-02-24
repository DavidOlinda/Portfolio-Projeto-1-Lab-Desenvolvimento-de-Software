import { Award } from "lucide-react";

const certificates = [
  { title: "Certificação Exemplo 1", issuer: "Instituição A", year: "2023" },
  { title: "Certificação Exemplo 2", issuer: "Instituição B", year: "2023" },
  { title: "Certificação Exemplo 3", issuer: "Instituição C", year: "2022" },
  { title: "Certificação Exemplo 4", issuer: "Instituição D", year: "2022" },
  { title: "Certificação Exemplo 5", issuer: "Instituição E", year: "2021" },
  { title: "Certificação Exemplo 6", issuer: "Instituição F", year: "2021" },
];

const CertificatesSection = () => {
  return (
    <section id="certificados" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Certificados</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16">
          Qualificações
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="group p-6 bg-card border border-border rounded-sm hover:border-primary/40 transition-all duration-300"
            >
              <Award className="w-8 h-8 text-primary/60 mb-4 group-hover:text-primary transition-colors" />
              <h3 className="text-foreground font-body font-semibold mb-1">{cert.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{cert.issuer}</p>
              <p className="text-primary/60 font-body text-xs mt-2">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
