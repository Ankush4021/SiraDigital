import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectGrid from "../components/ProjectGrid";
import Testimonials from "../components/Testimonials";
import ProjectsShowcase from "../components/projects/ProjectsShowcase";
import LogoMarquee from "../components/LogoMarquee";
import ProcessSection from "../components/about/ProcessSection";
import FinalCTA from "../components/about/FinalCTA";

function Projects({ navigate }) {
  return (
    <>
      <ProjectsHero navigate={navigate} />
      <ProjectsShowcase />
      <LogoMarquee />
      <ProcessSection />
      <FinalCTA navigate={navigate} />
      {/* <ProjectGrid /> */}
      <Testimonials />
    </>
  );
}

export default Projects;