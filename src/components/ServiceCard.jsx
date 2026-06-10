import { motion } from "framer-motion";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 46, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.78, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, rotateX: 1.5, rotateY: index % 2 === 0 ? -1.5 : 1.5 }}
      className="premium-card"
    >
      <div className="card-shine" />
      <div className="service-card-number">0{index + 1}</div>
      <div className="icon-shell" style={{ color: service.accent }}>
        <Icon size={22} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="service-bullets">
        {service.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </motion.article>
  );
}

export default ServiceCard;
