import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { services } from "../data/siteData";
import { fadeUp } from "../data/motion";

function ServiceSlider() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const Icon = service.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % services.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="slider-card"
    >
      <div className="slider-topbar">
        <span />
        <span />
        <span />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={service.title}
          initial={{ opacity: 0, x: 45, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -45, scale: 0.96 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="service-slide"
        >
          <div className={`service-visual ${service.image}`}>
            <img src={service.imageSrc} alt={`${service.title} visual`} className="service-image" />
            <div className="service-visual-grid" />
            <div className="floating-card floating-card-one">
              <Icon size={18} />
              <span>{service.short}</span>
            </div>
            <div className="floating-card floating-card-two">
              <BarChart3 size={18} />
              <span>Visually strong</span>
            </div>
          </div>
          <div className="slider-content">
            <div className="icon-shell" style={{ color: service.accent }}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white/48">Featured service</p>
              <h3 className="mt-1 text-2xl font-semibold">{service.title}</h3>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="slider-dots">
        {services.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActive(index)}
            className={active === index ? "active" : ""}
            aria-label={`Show ${item.title}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ServiceSlider;
