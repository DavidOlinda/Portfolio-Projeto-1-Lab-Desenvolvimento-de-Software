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
    "hero.name": "Jonas",
    "hero.highlight": "Martins",
    "hero.description": "Breve descrição sobre você, sua área de atuação e o que te motiva profissionalmente.",
    "hero.cta": "Entre em contato",
    "hero.cta2": "Saiba mais",
    // About
    "about.label": "Sobre mim",
    "about.title": "Conheça minha trajetória",
    "about.p1": "Escreva aqui um resumo sobre você, sua formação, seus interesses e o que te diferencia como profissional.",
    "about.p2": "Adicione informações sobre suas habilidades principais, tecnologias que domina e áreas de interesse.",
    "about.stat1": "Anos de experiência",
    "about.stat2": "Projetos realizados",
    "about.stat3": "Certificações",
    "about.stat4": "Áreas de atuação",
    // Experience
    "exp.label": "Experiência",
    "exp.title": "Minha jornada",
    "exp.professional": "Profissional",
    "exp.academic": "Acadêmica",
    "exp.role1": "Cargo Atual",
    "exp.company1": "Empresa X",
    "exp.desc1": "Descrição das suas responsabilidades e conquistas neste cargo.",
    "exp.role2": "Cargo Anterior",
    "exp.company2": "Empresa Y",
    "exp.desc2": "Descrição das suas responsabilidades e conquistas neste cargo.",
    "exp.role3": "Graduação em Sua Área",
    "exp.company3": "Universidade Z",
    "exp.desc3": "Detalhes sobre sua formação acadêmica e destaques.",
    "exp.role4": "Pós-graduação / Curso",
    "exp.company4": "Instituição W",
    "exp.desc4": "Detalhes sobre especializações ou cursos complementares.",
    // Projects
    "proj.label": "Projetos",
    "proj.title": "Trabalhos selecionados",
    "proj.imgPlaceholder": "Imagem do projeto",
    "proj.viewProject": "Ver projeto",
    "proj.code": "Código",
    "proj.proj1.title": "Nome do Projeto 1",
    "proj.proj1.desc": "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    "proj.proj2.title": "Nome do Projeto 2",
    "proj.proj2.desc": "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    "proj.proj3.title": "Nome do Projeto 3",
    "proj.proj3.desc": "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    "proj.proj4.title": "Nome do Projeto 4",
    "proj.proj4.desc": "Breve descrição do projeto, tecnologias utilizadas e seu papel no desenvolvimento.",
    // Certificates
    "cert.label": "Certificados",
    "cert.title": "Qualificações",
    // Contact
    "contact.label": "Contato",
    "contact.title": "Vamos conversar?",
    "contact.desc": "Estou disponível para novas oportunidades e colaborações. Entre em contato!",
    "contact.footer": "Todos os direitos reservados",
    // Game
    "game.label": "Mini Game",
    "game.title": "Snake 🐍",
    "game.desc": "Uma pausa divertida! Use as setas do teclado ou deslize na tela para jogar.",
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
    "hero.name": "Your Name",
    "hero.highlight": "Here.",
    "hero.description": "Brief description about you, your field and what drives you professionally.",
    "hero.cta": "Get in touch",
    "hero.cta2": "Learn more",
    // About
    "about.label": "About me",
    "about.title": "Get to know my journey",
    "about.p1": "Write a summary about yourself, your education, your interests and what sets you apart as a professional.",
    "about.p2": "Add information about your main skills, technologies you master and areas of interest.",
    "about.stat1": "Years of experience",
    "about.stat2": "Projects completed",
    "about.stat3": "Certifications",
    "about.stat4": "Areas of expertise",
    // Experience
    "exp.label": "Experience",
    "exp.title": "My journey",
    "exp.professional": "Professional",
    "exp.academic": "Academic",
    "exp.role1": "Current Position",
    "exp.company1": "Company X",
    "exp.desc1": "Description of your responsibilities and achievements in this role.",
    "exp.role2": "Previous Position",
    "exp.company2": "Company Y",
    "exp.desc2": "Description of your responsibilities and achievements in this role.",
    "exp.role3": "Degree in Your Field",
    "exp.company3": "University Z",
    "exp.desc3": "Details about your academic education and highlights.",
    "exp.role4": "Postgraduate / Course",
    "exp.company4": "Institution W",
    "exp.desc4": "Details about specializations or complementary courses.",
    // Projects
    "proj.label": "Projects",
    "proj.title": "Selected works",
    "proj.imgPlaceholder": "Project image",
    "proj.viewProject": "View project",
    "proj.code": "Code",
    "proj.proj1.title": "Project Name 1",
    "proj.proj1.desc": "Brief description of the project, technologies used and your role in development.",
    "proj.proj2.title": "Project Name 2",
    "proj.proj2.desc": "Brief description of the project, technologies used and your role in development.",
    "proj.proj3.title": "Project Name 3",
    "proj.proj3.desc": "Brief description of the project, technologies used and your role in development.",
    "proj.proj4.title": "Project Name 4",
    "proj.proj4.desc": "Brief description of the project, technologies used and your role in development.",
    // Certificates
    "cert.label": "Certificates",
    "cert.title": "Qualifications",
    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's talk?",
    "contact.desc": "I'm available for new opportunities and collaborations. Get in touch!",
    "contact.footer": "All rights reserved",
    // Game
    "game.label": "Mini Game",
    "game.title": "Snake 🐍",
    "game.desc": "A fun break! Use arrow keys or swipe on screen to play.",
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
