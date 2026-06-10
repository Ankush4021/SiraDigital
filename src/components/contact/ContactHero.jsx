import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowUpRight, Sparkles, MousePointer2 } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ContactHero() {
  const scrollToContact = () => {
    const section = document.getElementById("contact-panel");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-20 h-[320px] w-[320px] rounded-full bg-[#a64dff]/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-40 h-[420px] w-[420px] rounded-full bg-[#e84ba4]/10 blur-3xl"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* BADGE */}

        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4 text-[#a64dff]" />

          <span className="text-sm uppercase tracking-[0.18em] text-white/60">
            Contact • SIRA DIGITAL
          </span>
        </motion.div>

        {/* HEADING */}

        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl"
        >
          Built for brands
          <br />
          <span className="relative inline-block">
            that refuse to look ordinary.
            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-3 left-0 h-[6px] w-full origin-left rounded-full bg-gradient-to-r from-[#a64dff] to-[#e84ba4]"
            />
          </span>
        </motion.h1>

        {/* DIVIDER */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.9,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 h-px w-40 bg-gradient-to-r from-[#a64dff] via-[#e84ba4] to-transparent"
        />

        {/* TEXT */}

        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 max-w-2xl text-lg leading-8 text-white/55 md:text-xl"
        >
          We partner with ambitious businesses to create premium websites, scalable digital
          products, and modern brand experiences that actually stand out.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {/* WORKING SCROLL BUTTON */}

          <motion.button
            type="button"
            whileHover={{
              scale: 1.03,
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={scrollToContact}
            className="btn btn-primary"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </motion.button>

          {/* WORKING ROUTE BUTTON */}

          <a href="tel:9690070133">
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="btn btn-secondary"
            >
              Book a Call
            </motion.div>
          </a>
        </motion.div>

        {/* BOTTOM STRIP */}

        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-8"
        >
          {["Available Worldwide", "Avg. response under 24h", "Web • Branding • Growth"].map(
            (item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#a64dff]" />

                <span className="text-sm tracking-wide text-white/45">{item}</span>
              </div>
            )
          )}
        </motion.div>

        {/* SCROLL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: {
              delay: 1.2,
              duration: 1,
            },

            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mt-20 flex flex-col items-center"
        >
          <MousePointer2 className="h-5 w-5 text-white/30" />

          <span className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;
