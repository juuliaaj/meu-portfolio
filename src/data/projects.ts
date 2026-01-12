export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Portfólio Pessoal",
    description: "Meu portfólio pessoal.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/juuliaaj/meu-portfolio",
  },
  {
    title: "Projeto SMOV",
    description:
      "Sistema de Mapeamento de ONGs da Região do Vale dos Sinos.",
    technologies: ["React", "JavaScript", "Supabase", "Node.js"],
    link: "https://www.projetosmov.com.br/",
    github: "https://github.com/juuliaaj/ProjetoSmov",
  },
  {
    title: "E-station",
    description:
      "Sistema de gerenciamento e mapeamento de estações de recarga para veículos elétricos.",
    technologies: ["TypeScript", "React", "Node.js", "Expo Go"],
    github: "https://github.com/juuliaaj/urna",
  },
  {
    title: "Protótipo no Figma da E-station",
    description: "Protótipo criado no Figma para o sistema E-station.",
    technologies: ["Figma"],
    link: "https://www.figma.com/design/dY3yTTcupfMdZHoJi041ET/E-Station",
  },
  {
    title: "API de Gerenciamento de Tarefas",
    description: "API desenvolvida em Node.js para gerenciar tarefas diárias.",
    technologies: ["JavaScript"],
    github: "https://github.com/juuliaaj/Projeto_Integrador.git",
  },
  {
    title: "Protótipo no Figma do Javali Gaúcho",
    description: "Protótipo criado no Figma para a rede social Javali Gaúcho.",
    technologies: ["Figma"],
    link: "https://www.figma.com/design/QpsLyMi7abrz3eVZrayEtB/Javali-Ga%C3%BAcho",
  },
];

