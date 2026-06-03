import FinalCTA from "../components/about/FinalCTA";
import ContactFaq from "../components/contact/ContactFaq";
import ContactHero from "../components/contact/ContactHero";
import ContactServicesStrip from "../components/contact/ContactServicesStrip";
import ContactPanel from "../components/ContactPanel";
import PageShell from "../components/PageShell";

function Contact() {
  return (
  <>
  <ContactHero />
  <ContactServicesStrip />
  <ContactPanel />
  <ContactFaq />
  <FinalCTA />
  
  </>
  );
}

export default Contact;
