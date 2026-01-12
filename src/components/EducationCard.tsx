import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaCalendar, FaImage } from "react-icons/fa";

interface EducationCardProps {
  title: string;
  place: string;
  image?: string;
  startDate?: number;
  endDate?: number;
  endMonth?: number;
}

export function EducationCard({ title, place, image, startDate, endDate, endMonth }: EducationCardProps) {
  const [open, setOpen] = useState(false);
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth() + 1;

  return (
    <>
      <motion.div
        className="education-card"
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 143, 171, 0.3)" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="education-info">
          <h3>{title}</h3>
          <h4>{place}</h4>

          {startDate && (
            <p style={{
              marginTop: '10px',
              marginBottom: '0px',
              width: 'fit-content',
              display: 'inline-block',
            }}>
              <FaCalendar style={{ marginRight: "8px", color: "#ddd" }} />
              {startDate} {endDate && startDate !== endDate ? " - " + endDate : ""}
            </p>
          )}

          {(startDate && (!endDate || (endDate >= thisYear && (!endMonth || endMonth > thisMonth))) && (
            <span className="education-tag">
              Em Andamento
            </span>
          )) || (
            <span className="education-tag">
              Concluído
            </span>
          )}

          {image && (
            <button
              className="project-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                float: 'right',
                marginTop: '10px',
              }}
              onClick={() => setOpen(true)}
            >
              <FaImage />
              Ver imagem
            </button>
          )}
        </div>
      </motion.div>

      {open && (
        <div className="event-modal">
          <div className="event-modal-content">
            <button
              className="event-modal-close"
              onClick={() => setOpen(false)}
            >
              <FaTimes style={{ position: "absolute" }} />
            </button>

            <img src={image} alt={title} />
          </div>
        </div>
      )}
    </>
  );
}
