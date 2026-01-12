import { motion } from "framer-motion";

interface TechCardProps {
  name: string;
  icon: React.ReactNode;
}

export function TechCard({ name, icon }: TechCardProps) {
  return (
    <motion.div
      className="tech-card"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="tech-icon">{icon}</div>
      <span>{name}</span>
    </motion.div>
  );
}
