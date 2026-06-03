import FinalCTA from "../components/about/FinalCTA";
import ProcessSection from "../components/about/ProcessSection";
import ServiceHero from "../components/services/ServiceHero";
import ServicesShowcase from "../components/services/ServicesShowcase";
import Testimonials from "../components/Testimonials";

function Services({ navigate }) {
  return (
    <>

      {/* HERO */}
      <ServiceHero navigate={navigate} />
      <ServicesShowcase />
      <ProcessSection />
      <FinalCTA />
      <Testimonials />
    </>
  );
}

export default Services;