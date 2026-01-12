import { EducationCard } from "./EducationCard";
import certificado from "../assets/certificado-react.png";

export function Education() {
  return (
    <section className="education" id="education">
      <h2>Formação Acadêmica</h2>

      <div className="education-grid">
        <EducationCard
          title="Curso de Sistemas de Informação"
          place="FEEVALE"
          startDate={2026}
        />

        <EducationCard
          title="Curso Técnico em Informática"
          place="Escola Técnica Estadual Monteiro Lobato"
          startDate={2023}
          endDate={2026}
          endMonth={8}
        />
        
        <EducationCard
          title="Curso de IPV6"
          place="NIC.br"
          image={certificado}
          startDate={2025}
          endDate={2025}
        />
      </div>
    </section>
  );
}
