import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/siteData";
import { fadeUp } from "../data/motion";

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          key={project.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="project-card"
        >
          <div className="project-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-overlay">
              <span>{project.category}</span>
              <strong>{project.metric}</strong>
            </div>
          </div>

          <div className="project-content">
            <div>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
            </div>

            <div className="project-link">
              View Project
              <ArrowUpRight size={18} />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default ProjectGrid;