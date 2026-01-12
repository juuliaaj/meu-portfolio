import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export function Section({ children, id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section"
    >
      {children}
    </motion.section>
  );
}
