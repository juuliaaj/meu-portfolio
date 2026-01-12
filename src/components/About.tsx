import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

export function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="about">
                <h2>Sobre mim</h2>

                <p>
                    Sou estudante da <b>Escola Técnica Estadual Monteiro Lobato</b>, onde curso <b>Informática</b>. Tenho <b>18 anos</b> e estou em busca de uma <b>oportunidade de estágio</b> na área de Tecnologia da Informação.
                </p>
                <p>
                    Possuo experiência em desenvolvimento <b>fullstack</b>, com domínio de tecnologias como <b>HTML</b>, <b>CSS</b>, <b>Java</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>Node.js</b>, <b>Python</b>, <b>Git</b>, <b>SQL</b> e <b>PostgreSQL</b>. Apesar disso, tenho um carinho especial pelo <b>desenvolvimento frontend</b> e pelo <b>design de interfaces</b>, áreas nas quais posso unir criatividade e tecnologia para criar experiências visuais e funcionais.
                </p>

                <a href="/cv.pdf" download className="btn">
                    <IoMdDownload className="icon" />
                    <span className="buttonText">Download CV</span>
                </a>
            </div>
        </motion.section>
    );
}
