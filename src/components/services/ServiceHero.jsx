import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


function ServiceHero({ navigate }) {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-white/45">
            Our Digital Services
          </p>

          <h1 className="text-[clamp(2.8rem,5vw,4.8rem)] font-[800] leading-[0.98] tracking-[-0.04em] text-white">
            Digital solutions built for modern brands.
          </h1>

          <p className="mt-8 max-w-2xl text-[1.04rem] leading-8 text-white/65">
            We craft scalable websites, visual identities, and digital
            experiences that help brands grow with clarity and confidence.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            {/* START PROJECT */}
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>

            {/* PORTFOLIO */}
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
            >
              View Portfolio
            </button>

          </div>

          {/* MINI TAGS */}
          <div className="mt-14 flex flex-wrap gap-3">

            {["Web Design", "Development", "Branding", "SEO"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white/50 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl" />

          <div className="relative space-y-5">

            {/* TOP CARD */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl">

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                    Core Services
                  </p>

                  <h3 className="mt-4 text-3xl font-[800] leading-tight text-white">
                    Crafted for growth-driven brands.
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/60">
                  SIRA
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Web Design",
                  "Development",
                  "UI Systems",
                  "Brand Identity",
                  "SEO",
                  "Motion",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/65"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">

                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Experience
                </p>

                <h3 className="mt-4 text-2xl font-[800] text-white">
                  Modern digital systems with clean scalable architecture.
                </h3>

              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">

                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Approach
                </p>

                <h3 className="mt-4 text-2xl font-[800] text-white">
                  Design focused on clarity, interaction, and performance.
                </h3>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ServiceHero;