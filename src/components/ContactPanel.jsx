import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { ArrowRight, PhoneCall, MessageCircle, CheckCircle2 } from "lucide-react";

const features = ["Modern UI/UX", "Fast Delivery", "SEO Friendly", "Full Support"];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ContactPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("✅ Thank you! Your message has been sent.");
      setFormData({name:"",email:"",phone:"",service:"Website Development",message:""});
    } catch(err){
      console.error(err);
      alert(" Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact-panel" className="contact-section-shell">
      <motion.div
        className="contact-layout"
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <motion.div
          className="contact-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.span className="contact-tag" variants={fadeUp}>
            LET'S WORK TOGETHER
          </motion.span>

          <motion.h2 variants={fadeUp}>
            Build a modern digital presence for your business.
          </motion.h2>

          <motion.p variants={fadeUp}>
            We create premium websites, branding systems, and digital experiences that help
            businesses grow faster and look more professional online.
          </motion.p>

          {/* FEATURES */}

          <motion.div className="contact-feature-list" variants={fadeUp}>
            {features.map((item) => (
              <motion.div
                key={item}
                className="contact-feature-item"
                whileHover={{
                  x: 6,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* STATS */}

          <motion.div className="contact-stats-grid" variants={fadeUp}>
            <motion.div
              className="contact-stat-card"
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <h3>25+</h3>
              <span>Projects Completed</span>
            </motion.div>

            <motion.div
              className="contact-stat-card"
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <h3>98%</h3>
              <span>Client Satisfaction</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT FORM CARD
        ===================================================== */}

        <motion.div
          className="contact-form-card"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          whileHover={{
            y: -6,
          }}
        >
          <motion.div
            className="contact-form-header"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeUp}>Start Your Project</motion.h3>

            <motion.p variants={fadeUp}>
              Tell us about your idea and we will contact you shortly.
            </motion.p>
          </motion.div>

          {/* FORM */}

          <motion.form
            className="contact-form-grid"
            onSubmit={handleSubmit}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.input variants={fadeUp} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />

            <motion.input variants={fadeUp} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />

            <motion.input variants={fadeUp} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />

            <motion.select variants={fadeUp} name="service" value={formData.service} onChange={handleChange}>
              <option>Website Development</option>
              <option>Branding</option>
              <option>Video Editing</option>
              <option>Social Media</option>
            </motion.select>

            <motion.textarea variants={fadeUp} rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project" required />

            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="btn btn-primary full-width-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <ArrowRight size={18} />
            </motion.button>
          </motion.form>

          {/* ACTION BUTTONS */}

          <motion.div
            className="contact-bottom-actions"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+919690070133"
              className="contact-action-pill"
              whileHover={{
                y: -4,
              }}
            >
              <PhoneCall size={16} />
              Call Us
            </motion.a>

            <motion.a
              href="https://wa.me/919690070133"
              target="_blank"
              rel="noreferrer"
              className="contact-action-pill"
              whileHover={{
                y: -4,
              }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPanel;
