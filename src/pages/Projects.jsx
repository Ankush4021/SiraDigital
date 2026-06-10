import ProjectsHero from "../components/projects/ProjectsHero";
import Testimonials from "../components/Testimonials";
import ProjectsShowcase from "../components/projects/ProjectsShowcase";
import ProcessSection from "../components/about/ProcessSection";
import FinalCTA from "../components/about/FinalCTA";

function Projects({ navigate }) {
  return (
    <>
      <ProjectsHero navigate={navigate} />
      <ProjectsShowcase />
      <ProcessSection />
      <FinalCTA navigate={navigate} />
      <Testimonials />
    </>
  );
}

export default Projects;
