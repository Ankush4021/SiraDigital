import { motion } from "framer-motion";
import { fadeUp } from "../data/motion";

function Section({ eyebrow, title, children, className = "", headingClassName = "" }) {
  return (
    <section className={`section-shell ${className}`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h2 className={`section-title ${headingClassName}`}>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

export default Section;
