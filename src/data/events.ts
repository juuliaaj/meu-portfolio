import evento1 from "../assets/evento-1.jpeg";
import evento2 from "../assets/evento-2.jpeg";

export type Event = {
  title: string;
  description: string;
  img: string;
  date: string;
};

export const events: Event[] = [
  {
    title: "Taquara Summit",
    description: "O maior encontro de inovação, empreendedorismo e gestão da região do Vale do Paranhana. Onde empresas se conectam e soluções se tornam reais.",
    img: evento1,
    date: "2025",
  },
  {
    title: "Oktober Summit",
    description: "Um evento que reúne líderes empresariais, startups, universidades e governo em um só lugar para transformar conhecimento em ação.",
    img: evento2,
    date: "2025",
  },
];

