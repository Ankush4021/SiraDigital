import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { pageLinks } from "../data/siteData";

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);

  const goTo = (nextPath) => {
    navigate(nextPath);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#110719]/72 backdrop-blur-xl">
      {/* NAVBAR */}

      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* LOGO */}

        <button type="button" onClick={() => goTo("/")} className="flex items-center gap-3">
          <img
            src="/SiraDigitalLogo.png"
            alt="SIRA Digital logo"
            className="h-9 w-9 rounded-full object-cover shadow-glow"
          />

          <span className="text-[11px] font-semibold tracking-[0.18em] text-white">
            SIRA DIGITAL
          </span>
        </button>

        {/* DESKTOP LINKS */}

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] p-1 md:flex">
          {pageLinks.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => goTo(item.path)}
              className={`nav-link ${path === item.path ? "nav-link-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* DESKTOP ONLY CTA */}

        <button
          type="button"
          onClick={() => goTo("/contact")}
          className="
          hidden
          md:flex

          btn
          btn-ghost

          h-[48px]
          px-5
          text-[14px]
          rounded-full
          border-white/10
          bg-white/[0.045]
          "
        >
          Start Project
          <ArrowRight size={16} />
        </button>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className="mobile-menu-btn md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.22,
            }}
            className="
            mx-4
            mt-2
            mb-4
            rounded-[28px]
            border
            border-white/10
            bg-[#1A1126]/92
            p-4
            shadow-soft
            backdrop-blur-2xl
            md:hidden
            "
          >
            {/* MOBILE LINKS */}

            {pageLinks.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => goTo(item.path)}
                className={`mobile-nav-link ${path === item.path ? "mobile-nav-link-active" : ""}`}
              >
                {item.label}
              </button>
            ))}

            {/* MOBILE CTA ONLY */}

            <button
              type="button"
              onClick={() => goTo("/contact")}
              className="
              mobile-menu-cta

              btn
              btn-primary

              mt-4
              w-full
              "
            >
              Start Project
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
