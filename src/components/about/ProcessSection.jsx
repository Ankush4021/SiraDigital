// ProcessSection.jsx

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding the business, audience, and overall direction before moving into visuals or development.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Planning layouts, content structure, branding, and user experience with clarity and consistency.",
  },
  {
    number: "03",
    title: "Design & Build",
    text: "Creating modern digital experiences that feel clean, responsive, and visually aligned with the brand.",
  },
  {
    number: "04",
    title: "Refine",
    text: "Improving interactions, polishing details, and optimizing the experience across devices.",
  },
  {
    number: "05",
    title: "Launch & Support",
    text: "Helping businesses go live confidently with ongoing support and scalable digital systems.",
  },
];

function ProcessSection() {
  return (
    <section className="section-shell relative overflow-hidden py-32">
      {/* ambient glow */}
      <div className="absolute right-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[#a64dff]/10 blur-3xl" />

      <div className="relative z-[1]">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">
            How We Work
          </span>

          <h2 className="mt-8 text-[clamp(2.2rem,4vw,4rem)] font-[800] leading-[1.02] tracking-[-0.04em] text-white">
            A structured process built around clarity and thoughtful execution.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-[1rem] leading-8 text-white/60">
            Every project follows a focused workflow designed to keep communication clear,
            decisions intentional, and the final experience visually consistent.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mx-auto mt-28 max-w-6xl">
          {/* center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* center dot */}
                  <div className="absolute left-1/2 top-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border border-white/10 bg-[#a64dff] shadow-[0_0_30px_rgba(166,77,255,0.8)] lg:block" />

                  {/* CARD */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                  >
                    {/* hover glow */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#a64dff]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* top line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#a64dff] to-transparent opacity-70" />

                    <div className="flex items-start justify-between gap-6">
                      {/* content */}
                      <div>
                        <span className="text-sm font-bold tracking-[0.2em] text-white/25">
                          STEP {step.number}
                        </span>

                        <h3 className="mt-5 text-3xl font-[800] text-white">
                          {step.title}
                        </h3>

                        <p className="mt-5 max-w-lg text-[0.98rem] leading-8 text-white/55">
                          {step.text}
                        </p>
                      </div>

                      {/* number */}
                      <span className="text-6xl font-[800] leading-none tracking-[-0.05em] text-white/[0.05]">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;