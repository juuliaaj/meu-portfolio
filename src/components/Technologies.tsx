import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJs,
    FaNodeJs,
    FaGitAlt,
    FaDatabase,
    FaJava
} from "react-icons/fa";
import { SiTypescript, SiPython } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

import { TechCard } from "./TechCard";

export function Technologies() {
    return (
        <section className="technologies" id="tecnologias">
            <h2>Tecnologias</h2>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
            </motion.h2>

            <div className="tech-grid">
                <TechCard
                    name="HTML / CSS"
                    icon={
                        <>
                            <FaHtml5 color="#e34f26" />
                            <FaCss3Alt color="#1572b6" />
                        </>
                    }
                />
                <TechCard
                    name="Java"
                    icon={<FaJava color="#f89820" />}
                />
                <TechCard name="React / React Native" icon={<FaReact color="#61dafb" />} />
                <TechCard name="JavaScript" icon={<FaJs color="#f7df1e" />} />
                <TechCard name="TypeScript" icon={<SiTypescript color="#3178c6" />} />
                <TechCard name="Node.js" icon={<FaNodeJs color="#3c873a" />} />
                <TechCard name="Python" icon={<SiPython color="#f7c33c" />} />
                <TechCard name="Git" icon={<FaGitAlt color="#f05032" />} />
                <TechCard name="SQL" icon={<FaDatabase color="#4db6ac" />} />
                <TechCard
                    name="PostgreSQL"
                    icon={<SiPostgresql color="#336791" />}
                />

            </div>
        </section>
    );
}
