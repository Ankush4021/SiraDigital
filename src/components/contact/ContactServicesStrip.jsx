import { motion } from "framer-motion";

import { Globe, Layers3, Code2, Rocket, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Premium websites built to elevate your brand presence and conversions.",
  },

  {
    icon: Layers3,
    title: "Brand Identity",
    description: "Strategic visuals and modern branding systems that feel memorable.",
  },

  {
    icon: Code2,
    title: "Web Applications",
    description: "Scalable and high-performance digital products for modern businesses.",
  },

  {
    icon: Rocket,
    title: "Growth Strategy",
    description: "Performance-focused solutions designed to help your business scale faster.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ContactServicesStrip() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* =========================================================
            HEADING
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              WHAT WE HELP WITH
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Designed for modern
            <br />
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              ambitious brands.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
            From premium websites to scalable digital experiences, we create systems that look
            sharp, perform fast, and help businesses grow online.
          </p>
        </motion.div>

        {/* =========================================================
            CARDS
        ========================================================= */}

        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                custom={index * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl"
              >
                {/* hover glow */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#a64dff]/20 blur-3xl" />

                  <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#e84ba4]/10 blur-3xl" />
                </div>

                {/* top line */}

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a64dff] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* content */}

                <div className="relative z-10">
                  {/* icon */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                    <Icon className="h-6 w-6 text-[#c084fc]" />
                  </div>

                  {/* title */}

                  <h3 className="mt-7 text-2xl font-semibold text-white">{service.title}</h3>

                  {/* text */}

                  <p className="mt-4 leading-8 text-white/55">{service.description}</p>

                  {/* footer */}

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 transition-all duration-300 group-hover:text-white/80">
                    Explore More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* border glow */}

                <div className="absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-[#a64dff]/30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactServicesStrip;
