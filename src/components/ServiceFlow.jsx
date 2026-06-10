import { motion } from "framer-motion";

function ServiceFlow({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      className="service-flow-item"
      initial={{ opacity: 0, y: 34, clipPath: "inset(18% 0% 0% 0%)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.78, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
    >
      <div className="service-flow-index">0{index + 1}</div>
      <div className="service-flow-icon" style={{ color: service.accent }}>
        <Icon size={22} />
      </div>
      <div className="service-flow-main">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div className="service-flow-tags">
        {service.bullets.map((bullet) => (
          <span key={bullet}>{bullet}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default ServiceFlow;
