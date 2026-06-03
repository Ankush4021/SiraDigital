import { motion } from "framer-motion";
import { fadeUp } from "../data/motion";

function Stats() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="stats-grid"
    >
      {[
        ["25+", "Projects shaped"],
        ["4", "Core services"],
        ["100%", "Custom approach"],
        ["2x", "Sharper launches"],
      ].map(([value, label]) => (
        <div key={label} className="stat-card">
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default Stats;
