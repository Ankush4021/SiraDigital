// FinalCTA.jsx

import { motion } from "framer-motion";

function FinalCTA() {
  return (
    <section className="section-shell relative overflow-hidden py-32">
      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a64dff]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-[1] mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-8 py-20 text-center backdrop-blur-xl md:px-16"
      >
        {/* top glow line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#a64dff] to-transparent opacity-80" />

        {/* mini tag */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur-xl"
        >
          Let’s Build Something Meaningful
        </motion.div>

        {/* heading */}
        <h2 className="mx-auto mt-10 max-w-3xl text-[clamp(2.2rem,4vw,4rem)] font-[800] leading-[1.02] tracking-[-0.04em] text-white">
          Ready to create a digital presence that actually feels premium?
        </h2>

        {/* text */}
        <p className="mx-auto mt-8 max-w-2xl text-[1rem] leading-8 text-white/60">
          SIRA Digital helps businesses build modern websites, stronger branding, and visually
          consistent digital experiences designed for clarity, trust, and long-term growth.
        </p>

        {/* buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="/contact" className="btn btn-primary">
            Start a Project
          </a>

          <a href="/projects" className="btn btn-secondary">
            View Work
          </a>
        </div>

        {/* bottom small info */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-lg font-bold text-white">Modern</p>

            <p className="mt-1 text-xs tracking-[0.2em] text-white/40">DESIGN SYSTEMS</p>
          </div>

          <div className="hidden h-10 w-px bg-white/10 sm:block" />

          <div>
            <p className="text-lg font-bold text-white">Clear</p>

            <p className="mt-1 text-xs tracking-[0.2em] text-white/40">COMMUNICATION</p>
          </div>

          <div className="hidden h-10 w-px bg-white/10 sm:block" />

          <div>
            <p className="text-lg font-bold text-white">Scalable</p>

            <p className="mt-1 text-xs tracking-[0.2em] text-white/40">DIGITAL EXPERIENCES</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FinalCTA;
