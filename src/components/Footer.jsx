import { Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { pageLinks, services } from "../data/siteData";

function Footer({ navigate }) {
  const goTo = (nextPath) => {
    navigate(nextPath);
  };

  return (
    <>
      <a
        href="https://wa.me/919690070133"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat with SIRA Digital on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3.2A12.7 12.7 0 0 0 5.3 22.66L4 29l6.5-1.7A12.68 12.68 0 1 0 16.04 3.2Zm0 2.27a10.4 10.4 0 1 1-5.29 19.36l-.38-.23-3.84 1 1.03-3.73-.25-.39A10.42 10.42 0 0 1 16.04 5.47Zm-4.4 5.28c-.23 0-.6.09-.92.44-.32.35-1.21 1.18-1.21 2.88 0 1.7 1.24 3.35 1.41 3.57.17.23 2.4 3.84 5.95 5.23 2.95 1.16 3.56.93 4.2.87.64-.06 2.07-.85 2.36-1.67.29-.82.29-1.52.2-1.67-.09-.14-.32-.23-.67-.4-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.17-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.41.26-.76.09-.35-.18-1.48-.55-2.82-1.74-1.04-.93-1.75-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.15.35-.4.52-.61.17-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.9-1.07-2.6-.28-.67-.57-.58-.78-.59h-.67Z" />
        </svg>
      </a>

      <footer className="footer-shell">
        <div className="footer-topline" />

        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-brand">
              <img src="/SiraDigitalLogo.png" alt="SIRA Digital logo" />
              <div>
                <strong>SIRA Digital</strong>
                <span>Clear / Functional / Visually Strong</span>
              </div>
            </div>
            <p>
              We craft websites, brand visuals, motion content, and digital presence systems that help growing brands
              look sharper, clearer, and more trusted online.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/siradigital.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/sira-digital-in/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">
                <Send size={18} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Pages</h3>
            {pageLinks.map((item) => (
              <button key={item.path} type="button" onClick={() => goTo(item.path)}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            {services.map((service) => (
              <button key={service.slug} type="button" onClick={() => goTo("/services")}>
                {service.title}
              </button>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <a href="mailto:siradigital@gmail.com">
              <Mail size={16} />
            siradigital@gmail.com
            </a>
            <a href="tel:+919690070133">
              <Phone size={16} />
              +91-9690070133
            </a>
            <a href="tel:+918755906346">
              <Phone size={16} />
              +91-8755906346
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SIRA Digital. All rights reserved.</span>
          <span>Built for small businesses, startups, creators, and local brands.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
