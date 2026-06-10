import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, PlayCircle } from "lucide-react";
import { projects } from "../../data/projectsData";

const logoProjects = projects.filter((project) => project.size === "logo");
const showcaseProjects = projects.filter((project) => project.size !== "logo");

function ProjectMedia({ project }) {
  return (
    <div className="project-sample-media">
      <img src={project.image} alt={project.title} loading="lazy" decoding="async" />

      <div className="project-sample-shade" />

      {project.type === "video" && (
        <div className="project-play-badge" aria-hidden="true">
          <PlayCircle size={34} />
        </div>
      )}
    </div>
  );
}

function ProjectContent({ project }) {
  return (
    <div className="project-sample-content">
      <div className="project-sample-kicker">
        <span>{project.category}</span>
        {project.type === "video" ? <ExternalLink size={15} /> : <ArrowUpRight size={15} />}
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-sample-footer">
        <div className="project-sample-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {project.cta && <strong>{project.cta}</strong>}
      </div>
    </div>
  );
}

function ProjectTile({ project, index }) {
  const cardClass = `project-sample-card project-sample-card--${project.size} ${
    project.type === "video" ? "project-sample-card--video" : ""
  }`;

  const animationProps = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: {
      duration: 0.55,
      delay: Math.min(index * 0.035, 0.35),
      ease: [0.22, 1, 0.36, 1],
    },
  };

  if (project.url) {
    return (
      <motion.a
        {...animationProps}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={cardClass}
      >
        <ProjectMedia project={project} />
        <ProjectContent project={project} />
      </motion.a>
    );
  }

  return (
    <motion.article {...animationProps} className={cardClass}>
      <ProjectMedia project={project} />
      <ProjectContent project={project} />
    </motion.article>
  );
}

function LogoScroller() {
  const logos = [...logoProjects, ...logoProjects];

  return (
    <div className="project-logo-strip" aria-label="Logo work samples">
      <div className="project-logo-track">
        {logos.map((project, index) => (
          <div className="project-logo-item" key={`${project.id}-${index}`}>
            <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
            <span>{project.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsShowcase() {
  return (
    <section id="projects-showcase" className="projects-showcase-section">
      <div className="projects-showcase-shell">
        <div className="projects-showcase-head">
          <div>
            <span className="pill">Curated Work Samples</span>
            <h2>Premium visuals, brand work, thumbnails, and video stories.</h2>
          </div>

          <p>
            A focused selection from Payal's creative portfolio, added as optimized images and
            lightweight video links so the page stays fast.
          </p>
        </div>

        <LogoScroller />

        <div className="project-masonry">
          {showcaseProjects.map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;
