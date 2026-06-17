import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { fadeUp } from "../../data/motion";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

function ProjectsHero({ navigate }) {
  const handleExplore = () => {
    document.getElementById("projects-showcase")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden px-6 pt-26 pb-32 lg:pt-36 lg:pb-40">
      {/* ambient background */}

      <div className="absolute left-[8%] top-[0%] h-[24rem] w-[24rem] rounded-full bg-[#a64dff]/12 blur-[130px]" />

      <div className="absolute right-[4%] bottom-[0%] h-[28rem] w-[28rem] rounded-full bg-[#ff4fd8]/10 blur-[160px]" />

      {/* grid texture */}

      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="
                relative
                z-10
                mx-auto
                grid
                max-w-7xl
                gap-20
                lg:grid-cols-[1.05fr_0.95fr]
                lg:items-center
                "
      >
        {/* LEFT */}

        <motion.div variants={fadeUp}>
          <div className="pill mb-7">
            <Sparkles size={14} />
            Selected Work
          </div>
          <motion.h1
            variants={fadeUp}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
    mt-10
    max-w-[12ch]
    text-[clamp(2.5rem,9vw,4.8rem)]
    font-[800]
    leading-[0.95]
    tracking-[-0.05em]
    text-white
  "
          >
            Designing digital experiences that feel premium, modern, and built to stand out.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
    mt-7
    max-w-[610px]
    text-[1rem]
    leading-[1.9]
    text-white/62
  "
          >
            Explore a curated collection of websites, interfaces,
            creative branding, motion visuals, and digital experiences
            crafted with thoughtful design and modern development.
          </motion.p>

          {/* CTA BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={handleExplore} className="btn btn-primary">
              Explore Projects
              <ArrowUpRight size={18} />
            </button>

            <button onClick={() => navigate("/contact")} className="btn btn-secondary">
              Start A Project
            </button>
          </div>

          {/* stats */}

          <motion.div variants={fadeUp} className="mt-16 flex flex-wrap gap-12">
            {[
              ["25+", "Projects Delivered"],
              ["98%", "Client Satisfaction"],
              ["Modern", "Scalable Stack"],
            ].map(([value, label]) => (
              <div key={label}>
                <h3 className="text-[2rem] font-black text-white">{value}</h3>

                <p
                  className="
                                mt-2
                                text-[11px]
                                uppercase
                                tracking-[0.24em]
                                text-white/42
                                "
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL STACK */}

        <motion.div variants={fadeUp} className="relative min-h-[620px]">
          {/* floating glow */}

          <div
            className="
                    absolute
                    left-[20%]
                    top-[30%]
                    h-[12rem]
                    w-[12rem]
                    rounded-full
                    bg-[#a64dff]/20
                    blur-[100px]
                    "
          />

          {/* TOP CARD */}

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
                        absolute
                        right-0
                        top-0
                        w-[76%]
                        rotate-[8deg]
                        "
          >
            <div
              className="
                        rounded-[2rem]
                        border border-white/10
                        bg-white/[0.04]
                        p-4
                        backdrop-blur-xl
                        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                        "
            >
              <img
                src="https://i.pinimg.com/736x/bb/77/72/bb7772074ede4af7dd24a843856c691a.jpg"
                alt=""
                className="
                                h-[320px]
                                w-full
                                rounded-[1.5rem]
                                object-cover
                                "
              />
            </div>
          </motion.div>

          {/* MAIN CARD */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
            }}
            className="
                        absolute
                        left-0
                        bottom-0
                        z-20
                        w-[84%]
                        -rotate-[6deg]
                        "
          >
            <div
              className="
                        rounded-[2rem]
                        border border-white/10
                        bg-[#171020]/85
                        p-5
                        backdrop-blur-xl
                        shadow-[0_35px_100px_rgba(0,0,0,0.45)]
                        "
            >
              <img
                src="https://i.pinimg.com/1200x/e2/36/f3/e236f32a9d24460389e1df94e75560b6.jpg"
                alt=""
                className="
                                h-[430px]
                                w-full
                                rounded-[1.6rem]
                                object-cover
                                "
              />

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p
                    className="
                                    text-[11px]
                                    uppercase
                                    tracking-[0.22em]
                                    text-[#b879ff]
                                    "
                  >
                    UI / Development
                  </p>

                  <h3
                    className="
                                    mt-2
                                    text-[1.35rem]
                                    font-bold
                                    text-white
                                    "
                  >
                    Premium Product Experience
                  </h3>
                </div>

                <ArrowUpRight className="text-white/50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ProjectsHero;
