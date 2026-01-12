import { motion } from "framer-motion";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section id="projects">
        <h2>Meus Projetos</h2>

        <motion.div
            className="projects"
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
            {projects.map((project) => (
            <motion.div
                key={project.title}
                variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
                }}
            >
                <ProjectCard project={project} />
            </motion.div>
            ))}

        </motion.div>
    </Section>
  );
}
