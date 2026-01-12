import { motion } from "framer-motion";
import { events } from "../data/events";
import { EventCard } from "./EventCard";
import { Section } from "./Section";

export function Events() {
  return (
    <Section id="events">
        <h2>Participações em Eventos</h2>

        <motion.div
            className="events"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
            hidden: {},
            visible: {
                transition: {
                staggerChildren: 0.2,
                },
            },
            }}
        >
            {events.map((event) => (
                <motion.div
                key={event.title}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <EventCard event={event} />
                </motion.div>
            ))}
        </motion.div>
    </Section>  
  );
}