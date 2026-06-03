import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { audienceChips, services } from "../data/siteData";
import { fadeUp } from "../data/motion";
import ContactPanel from "../components/ContactPanel";
import LogoStrip from "../components/LogoStrip";
import ProjectGrid from "../components/ProjectGrid";
import Section from "../components/Section";
import ServiceFlow from "../components/ServiceFlow";
import ServiceSlider from "../components/ServiceSlider";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
function Home({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <LogoStrip />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview /> 
      <ContactBand />
      <Testimonials />
    </>
  );
}

function Hero({navigate}) {
  return (
    <section className="hero-shell">
      <motion.div
        className="hero-orbit"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <div className="hero-grid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <motion.div
            className="pill"
            animate={{ y: [0, -4, 0], boxShadow: ["0 0 28px rgba(166, 77, 255, 0.2)", "0 0 54px rgba(166, 77, 255, 0.36)", "0 0 28px rgba(166, 77, 255, 0.2)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={15} />
            Clear / Functional / Visually Strong
          </motion.div>
          <h1>Digital presence that feels clear, useful, and built with intent.</h1>
          <p>
            SIRA Digital helps small businesses, creators, startups, and local brands look sharper online through
            websites, branding, video, and consistent digital content
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="tel:+919690070133" className="btn btn-primary">
              Free consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="/projects"
              onClick={(event) => {
                event.preventDefault();
                navigate("/projects");
              }}
              className="btn btn-secondary"
            >
              See portfolio
            </a>
          </div>
        </motion.div>

        <ServiceSlider />
      </div>
    </section>
  );
}

function ServicesPreview() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 86%", "end 28%"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [38, -14]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0.76, 1, 1]);

  return (
    <Section
      eyebrow="Our Digital Services"
      title="Everything your brand needs to look stronger online."
      className="services-section"
      headingClassName="services-title"
    >
      <motion.div ref={sectionRef} className="service-flow-list" style={{ y: gridY, opacity: gridOpacity }}>
        {services.map((service, index) => (
          <ServiceFlow key={service.title} service={service} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}

function AboutPreview() {
  return (
    <Section eyebrow="About SIRA" title="We build digital experiences that actually grow your business">
      <div className="about-panel">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xl leading-9 text-white/74">
            At SIRA Digital, we solve business problems with websites, visuals, and digital systems that are clear,
            polished, and built to work.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Clear direction", "Functional execution", "Visual consistency"].map((item) => (
              <div key={item} className="check-item">
                <BadgeCheck size={18} />
                {item}
              </div>
            ))}
          </div>
          <div className="audience-chips mt-8">
            {audienceChips.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
        <Stats />
      </div>
    </Section>
  );
}

function ProjectsPreview() {
  return (
    <Section eyebrow="Portfolio" title="Selected work shaped around clarity, trust, and conversion.">
      <ProjectGrid />
    </Section>
  );
}

function ContactBand() {
  return (
    <section className="section-shell">
      <ContactPanel />
    </section>
  );
}

export default Home;
