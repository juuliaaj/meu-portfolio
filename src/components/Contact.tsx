import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <>
    <div className="contact">
    <section id="contato">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contato
      </motion.h2>

      <div className="contact-list">
        <motion.a
          href="mailto:juliajardim765@gmail.com"
          className="contact-card"
          whileHover={{ y: -4 }}
        >
          <MdEmail className="icon email" />
          <span>juliajardim765@gmail.com</span>
        </motion.a>

        <motion.a
          href="https://github.com/juuliaaj"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -4 }}
        >
          <FaGithub className="icon github" />
          <span>github.com/juuliaaj</span>
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/júlia-jardim-828867367"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -4 }}
        >
          <FaLinkedin className="icon linkedin" />
          <span>linkedin.com/in/júlia-jardim-828867367</span>
        </motion.a>
      </div>
    </section>
    </div>
    </>
  );
}
