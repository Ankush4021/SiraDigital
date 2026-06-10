// BuiltAroundClarity.jsx

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const content = [
  {
    title: "Modern by Default",
    text: "Clean interfaces, thoughtful spacing, and visual systems designed to feel current without looking overdesigned.",
  },
  {
    title: "Designed with Purpose",
    text: "Every layout, interaction, and visual choice is made to improve clarity, trust, and overall user experience.",
  },
  {
    title: "Built for Real Businesses",
    text: "SIRA Digital focuses on practical design systems that help brands communicate better and grow online with confidence.",
  },
];

function BuiltAroundClarity() {
  return (
    <section className="section-shell relative overflow-hidden py-28">
      {/* subtle ambient glow */}
      <div className="absolute left-[-10rem] top-20 h-[24rem] w-[24rem] rounded-full bg-[#a64dff]/10 blur-3xl" />

      <div className="relative z-[1] grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col justify-center"
        >
          {/* ambient glow */}
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#e84ba4]/10 blur-3xl" />

          <span className="eyebrow relative z-10">Built Around Clarity</span>

          <h2 className="relative z-10 mt-8 max-w-xl text-[clamp(2rem,3vw,3.4rem)] font-[800] leading-[1.02] tracking-[-0.04em] text-white">
            Digital presence should feel clear, modern, and easy to trust.
          </h2>

          <p className="relative z-10 mt-8 max-w-xl text-[1rem] leading-8 text-white/60">
            SIRA Digital creates clean visual systems for businesses that want stronger branding,
            modern websites, and more consistent digital experiences without unnecessary complexity.
          </p>

          {/* mini feature row */}
          <div className="mt-10 flex flex-wrap gap-4">
            {["Modern Design", "Clear Systems", "Built for Growth"].map((item) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70 backdrop-blur-xl"
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* small quote */}
          <div className="mt-12 border-l border-[#a64dff]/40 pl-5">
            <p className="max-w-md text-lg leading-8 text-white/75">
              “Good design creates confidence before a single word is read.”
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative flex min-h-[34rem] items-center justify-center"
        >
          {/* ambient glow */}
          <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[#a64dff]/10 blur-3xl" />

          {/* center main panel */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl"
          >
            {/* top line */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#a64dff] to-transparent opacity-70" />

            <span className="text-xs font-bold tracking-[0.25em] text-white/30">SIRA DIGITAL</span>

            <h3 className="mt-8 text-[2rem] font-[800] leading-tight text-white">
              Modern systems built with clarity and intent.
            </h3>

            <p className="mt-6 text-[0.98rem] leading-8 text-white/55">
              Focused on creating digital experiences that feel cleaner, more consistent, and easier
              to trust.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Workspace"
                className="h-56 w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#110719]/80 via-transparent to-transparent" />
            </div>
            {/* bottom stats */}
            <div className="mt-10 flex items-center gap-10 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-2xl font-bold text-white">20+</h4>

                <p className="mt-1 text-xs text-white/45">Projects</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white">24/7</h4>

                <p className="mt-1 text-xs text-white/45">Support</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white">Modern</h4>

                <p className="mt-1 text-xs text-white/45">Approach</p>
              </div>
            </div>
          </motion.div>

          {/* floating small card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-6 top-16 z-20 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-sm font-semibold text-white">Clear Communication</p>

            <p className="mt-1 text-xs text-white/45">Simple workflows & updates</p>
          </motion.div>

          {/* floating bottom card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-2 right-6 z-20 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-sm font-semibold text-white">Built for Growth</p>

            <p className="mt-1 text-xs text-white/45">Scalable digital systems</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BuiltAroundClarity;
