import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      id="project-card"
    >
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.technologies.map((tech: string) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={project.github ? "project-link" : "project-github"}
            >
              Acessar <FiExternalLink />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
            >
              <FaGithub className="github" />
              Ver no GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
