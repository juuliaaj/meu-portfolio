import { motion } from "framer-motion";
import { useState } from "react";
import type { Event } from "../data/events";
import { FaImage, FaTimes } from "react-icons/fa";

type Props = {
  event: Event;
};

export function EventCard({ event }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="event-card">
          <h3>{event.title}</h3>
          <span className="event-date" style={{ color: "#ff0ab1", textAlign: "right" }}> {event.date}</span>
          <p style={{ color: "#b5b5c3ec", gridColumn: 'span 2' }}>{event.description}</p>

          <button
            className="event-button"
            onClick={() => setOpen(true)}
          >
            <FaImage className="icon-events" />
            Ver imagem do evento
          </button>
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

            <img src={event.img} alt={event.title} />
          </div>
        </div>
      )}
    </>
  );
}
