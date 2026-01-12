import { motion } from "framer-motion";
import minhaFoto from "../assets/minha-foto.jpeg";

export function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={minhaFoto}
        alt="Minha foto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          overflowClipMargin: "unset",
        }}
      />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Olá, meu nome é <span>Júlia Jardim!</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Desenvolvedora front-end
      </motion.p>
    </motion.section>
  );
}
