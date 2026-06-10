import { motion } from "framer-motion";
import { fadeUp } from "../data/motion";

function PageShell({ eyebrow, title, children }) {
  return (
    <section className="page-shell">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="page-hero"
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </motion.div>
      {children}
    </section>
  );
}

export default PageShell;
