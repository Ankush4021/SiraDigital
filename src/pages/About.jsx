
import { audienceChips } from "../data/siteData";
import PageShell from "../components/PageShell";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import AboutHero from "../components/about/AboutHero";
import BuiltAroundClarity from "../components/about/BuiltAroundClarity";
import ProcessSection from "../components/about/ProcessSection";
import FinalCTA from "../components/about/FinalCTA";

function About() {
  return (
    <>
      <AboutHero />
      <BuiltAroundClarity />
      <ProcessSection />
      <FinalCTA />
      <Testimonials />
    </>
  );
}

export default About;

