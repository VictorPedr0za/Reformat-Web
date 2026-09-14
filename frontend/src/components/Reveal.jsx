import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({ as = "div", className = "", delay = 0, children }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
