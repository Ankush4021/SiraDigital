import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

function ServiceHero({ navigate }) {
  return (
    <section className="hero-shell">
      {/* Orbit */}
      <motion.div
        className="hero-orbit"
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="hero-grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT SIDE */}
        <motion.div
          className="hero-copy"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="pill">
            <Sparkles size={10} />
            SERVICES BY SIRA DIGITAL
          </div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-4 max-w-[10ch] text-2xl font-[800] leading-[1.02] tracking-[-0.04em] text-white">
            Digital Solutions
            For Growing
            Businesses.
          </motion.h1>

          <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-white/65">
            SIRA Digital helps businesses build a powerful online presence
            through website development, branding, graphic design, video
            editing, SEO, and social media marketing solutions designed to
            drive growth and visibility.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-primary"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </button>

            <button
              onClick={() => navigate("/projects")}
              className="btn btn-secondary"
            >
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          className="slider-card max-w-[560px] ml-auto"
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -6,
          }}
        >
          <div className="slider-topbar">
            <span />
            <span />
            <span />
          </div>

          <div className="relative p-4">

            <motion.div
              className="absolute right-6 top-6 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-300">
                  WHAT WE DO
                </p>

                <h3 className="mt-3 max-w-xs text-2xl font-bold text-white">
                  Digital services crafted for growth.
                </h3>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                SIRA
              </div>
            </div>

            <div className="mt-8 h-px bg-white/10" />

            <div className="mt-8 grid grid-cols-3 gap-4">

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center"
              >
                <h4 className="text-2xl font-black text-white">
                  25+
                </h4>

                <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  Projects
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center"
              >
                <h4 className="text-2xl font-black text-white">
                  4+
                </h4>

                <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  Services
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center"
              >
                <h4 className="text-2xl font-black text-white">
                  100%
                </h4>

                <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  Custom
                </p>
              </motion.div>

            </div>

            <div className="mt-6 grid gap-4">

              <motion.div
                whileHover={{ x: 4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      Web Development
                    </h4>

                    <p className="mt-1 text-sm text-white/55">
                      Fast, scalable and responsive websites.
                    </p>
                  </div>

                  <ArrowUpRight size={18} className="text-white/50" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      Branding & Design
                    </h4>

                    <p className="mt-1 text-sm text-white/55">
                      Build a strong and memorable identity.
                    </p>
                  </div>

                  <ArrowUpRight size={18} className="text-white/50" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      SEO & Marketing
                    </h4>

                    <p className="mt-1 text-sm text-white/55">
                      Improve visibility and generate leads.
                    </p>
                  </div>

                  <ArrowUpRight size={18} className="text-white/50" />
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceHero;