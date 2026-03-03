import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pt" | "en";

const translations = {
  pt: {
    // Navbar
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.certificates": "Certificados",
    "nav.contact": "Contato",

    // Hero
    "hero.subtitle": "Portfólio Profissional",
    "hero.name": "David",
    "hero.highlight": "Olinda",
    "hero.description":
      "Product Owner Intern com experiência em tecnologia, produtos digitais e suporte técnico. Apaixonado por inovação, resolução de problemas e criação de soluções que geram impacto real.",
    "hero.cta": "Entre em contato",
    "hero.cta2": "Saiba mais",

    // About
    "about.label": "Sobre mim",
    "about.title": "Conheça minha trajetória",
    "about.p1":
      "Estudante de Engenharia com experiência prática em produtos digitais, suporte técnico e atendimento ao cliente. Ao longo da minha trajetória, desenvolvi habilidades analíticas e visão estratégica voltadas para tecnologia.",
    "about.p2":
      "Possuo experiência com gestão de produto, levantamento de requisitos, suporte técnico e melhoria contínua de processos. Tenho interesse em inovação, tecnologia e desenvolvimento de soluções digitais.",
    "about.stat1": "Anos de experiência",
    "about.stat2": "Projetos realizados",
    "about.stat3": "Certificações",
    "about.stat4": "Áreas de atuação",

    // Experience
    "exp.label": "Experiência",
    "exp.title": "Minha jornada",
    "exp.professional": "Profissional",
    "exp.academic": "Formação acadêmica",

    "exp.role1": "Product Owner Intern",
    "exp.company1": "dti digital",
    "exp.desc1":
      "Atuação como Product Owner Intern, apoiando no gerenciamento de backlog, definição de requisitos e acompanhamento do desenvolvimento de produtos digitais.",

    "exp.role2": "Estagiário de Serviços",
    "exp.company2": "Sisloc Softwares",
    "exp.desc2":
      "Responsável por suporte técnico, atendimento a clientes e apoio na resolução de demandas relacionadas ao sistema.",

    "exp.role3": "Estagiário de Suporte",
    "exp.company3": "Prefeitura de Belo Horizonte",
    "exp.desc3":
      "Prestação de suporte técnico a usuários, manutenção básica de sistemas e apoio às demandas internas de TI.",

    "exp.role4": "Vendedor PAP",
    "exp.company4": "Claro Brasil",
    "exp.desc4":
      "Experiência em vendas externas, negociação e atendimento ao cliente, desenvolvendo habilidades de comunicação e persuasão.",

    // Projects
    "proj.label": "Projetos",
    "proj.title": "Trabalhos selecionados",
    "proj.imgPlaceholder": "Imagem do projeto",
    "proj.viewProject": "Ver projeto",
    "proj.code": "Código",

    "proj.proj1.title": "Projeto de Gestão de Produto",
    "proj.proj1.desc":
      "Projeto focado em organização de backlog, definição de requisitos e acompanhamento de desenvolvimento utilizando metodologias ágeis.",

    "proj.proj2.title": "Sistema de Suporte Técnico",
    "proj.proj2.desc":
      "Atuação na melhoria de processos de atendimento e suporte, garantindo maior eficiência na resolução de chamados.",

    "proj.proj3.title": "Projeto Acadêmico em Engenharia",
    "proj.proj3.desc":
      "Desenvolvimento de solução prática aplicada durante a graduação, com foco em análise de problemas e implementação técnica.",

    "proj.proj4.title": "Projeto Comercial",
    "proj.proj4.desc":
      "Aplicação de estratégias de abordagem e negociação para aumento de conversão em vendas externas.",

    // Certificates
    "cert.label": "Certificados",
    "cert.title": "Qualificações",

    // Contact
    "contact.label": "Contato",
    "contact.title": "Vamos conversar?",
    "contact.desc":
      "Estou disponível para novas oportunidades, especialmente na área de tecnologia e produtos digitais. Entre em contato!",
    "contact.footer": "Todos os direitos reservados",

    // Game
    "game.label": "Mini Game",
    "game.title": "Snake 🐍",
    "game.desc":
      "Uma pausa divertida! Use as setas do teclado ou deslize na tela para jogar.",
    "game.score": "Pontos",
    "game.highscore": "Recorde",
    "game.play": "Jogar",
    "game.controls": "Use ↑ ↓ ← → ou W A S D",
    "game.points": "pontos",
    "game.retry": "Jogar novamente",
  },

  en: {
    // Navbar
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Professional Portfolio",
    "hero.name": "David",
    "hero.highlight": "Olinda",
    "hero.description":
      "Product Owner Intern with experience in technology, digital products and technical support. Passionate about innovation, problem-solving and building impactful digital solutions.",
    "hero.cta": "Get in touch",
    "hero.cta2": "Learn more",

    // About
    "about.label": "About me",
    "about.title": "Get to know my journey",
    "about.p1":
      "Engineering student with practical experience in digital products, technical support and customer service. Throughout my journey, I have developed analytical skills and a strategic mindset focused on technology.",
    "about.p2":
      "Experience with product management, requirements gathering, technical support and continuous process improvement. Interested in innovation, technology and digital product development.",
    "about.stat1": "Years of experience",
    "about.stat2": "Projects completed",
    "about.stat3": "Certifications",
    "about.stat4": "Areas of expertise",

    // Experience
    "exp.label": "Experience",
    "exp.title": "My journey",
    "exp.professional": "Professional",
    "exp.academic": "Academic education",

    "exp.role1": "Product Owner Intern",
    "exp.company1": "dti digital",
    "exp.desc1":
      "Working as a Product Owner Intern, supporting backlog management, requirement definition and digital product development follow-up.",

    "exp.role2": "Service Intern",
    "exp.company2": "Sisloc Softwares",
    "exp.desc2":
      "Responsible for technical support, customer service and assisting in resolving system-related demands.",

    "exp.role3": "Support Intern",
    "exp.company3": "Prefeitura de Belo Horizonte",
    "exp.desc3":
      "Provided technical support to users, basic system maintenance and internal IT assistance.",

    "exp.role4": "Field Sales Representative",
    "exp.company4": "Claro Brasil",
    "exp.desc4":
      "Experience in external sales, negotiation and customer service, strengthening communication and persuasion skills.",

    // Projects
    "proj.label": "Projects",
    "proj.title": "Selected works",
    "proj.imgPlaceholder": "Project image",
    "proj.viewProject": "View project",
    "proj.code": "Code",

    "proj.proj1.title": "Product Management Project",
    "proj.proj1.desc":
      "Project focused on backlog organization, requirement definition and agile product development follow-up.",

    "proj.proj2.title": "Technical Support System",
    "proj.proj2.desc":
      "Improvement of service and support processes, ensuring greater efficiency in ticket resolution.",

    "proj.proj3.title": "Engineering Academic Project",
    "proj.proj3.desc":
      "Development of a practical solution during graduation, focused on problem analysis and technical implementation.",

    "proj.proj4.title": "Commercial Project",
    "proj.proj4.desc":
      "Application of sales and negotiation strategies to increase conversion in field sales.",

    // Certificates
    "cert.label": "Certificates",
    "cert.title": "Qualifications",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's talk?",
    "contact.desc":
      "I'm available for new opportunities, especially in technology and digital product areas. Get in touch!",
    "contact.footer": "All rights reserved",

    // Game
    "game.label": "Mini Game",
    "game.title": "Snake 🐍",
    "game.desc":
      "A fun break! Use arrow keys or swipe on screen to play.",
    "game.score": "Score",
    "game.highscore": "High Score",
    "game.play": "Play",
    "game.controls": "Use ↑ ↓ ← → or W A S D",
    "game.points": "points",
    "game.retry": "Play again",
  },
};

type Translations = typeof translations.pt;

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");

  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  const t = (key: keyof Translations) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};