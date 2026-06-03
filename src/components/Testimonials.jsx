import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ArrowUpRight,
} from "lucide-react";

import { fadeUp } from "../data/motion";
import Section from "./Section";

const testimonials = [
  {
    name: "CH Info Solutions",
    role: "Business Website Development",
    quote:
      "SIRA Digital delivered a modern website that instantly improved our brand image and client trust. The entire process felt smooth, fast, and highly professional.",
    result: "+ Better Brand Presence",
  },
  {
    name: "Dinesh Caterers",
    role: "Catering Business Website",
    quote:
      "We started getting more direct inquiries after launching the website. The design perfectly matched our catering brand and looked premium on mobile too.",
    result: "+ More Customer Leads",
  },
  {
    name: "Local Fitness Studio",
    role: "Social Media & Branding",
    quote:
      "Their creative direction and content strategy helped us stand out locally. The visuals, reels, and branding gave our business a completely fresh identity.",
    result: "+ Stronger Social Reach",
  },
];

function Testimonials() {
  return (
    <Section
      eyebrow="Client feedback"
      title="Trusted by businesses that wanted something better than average."
      headingClassName="testimonial-heading"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="testimonial-card group"
            >
              <div className="testimonial-glow" />

              <div className="testimonial-top">
                <div className="testimonial-icon">
                  <Quote size={18} />
                </div>

                <motion.div
                  className="testimonial-stars"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    duration: 0.4,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </motion.div>
              </div>

              <motion.p
                className="testimonial-quote"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                }}
              >
                “{testimonial.quote}”
              </motion.p>

              <div className="testimonial-bottom">
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>

                <motion.div
                  className="testimonial-result"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  {testimonial.result}
                  <ArrowUpRight size={15} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default Testimonials;