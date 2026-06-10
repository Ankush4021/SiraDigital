import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const heights = {
  large: "h-[620px]",
  medium: "h-[430px]",
  small: "h-[300px]",
  wide: "h-[520px]",
  tall: "h-[760px]",
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -14,
      }}
      className="
group
relative
mb-7
break-inside-avoid
overflow-hidden
rounded-[34px]
border border-white/10
bg-[#0b0713]
"
    >
      <div className={`${heights[project.size]} relative`}>
        {/* IMAGE */}

        <img
          src={project.image}
          alt={project.title}
          className="
h-full
w-full
object-cover
transition-all
duration-[900ms]
group-hover:scale-110
"
        />

        {/* overlays */}

        <div
          className="
absolute inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
"
        />

        <div
          className="
absolute inset-0
opacity-0
transition-all
duration-700
group-hover:opacity-100
bg-gradient-to-br
from-[#9333ea]/30
via-transparent
to-transparent
"
        />

        {/* content */}

        <div
          className="
absolute inset-0
flex flex-col
justify-between
p-7
"
        >
          <div className="flex items-start justify-between">
            <span
              className="
rounded-full
border border-white/10
bg-black/30
backdrop-blur-xl
px-4 py-2
text-xs
text-zinc-200
"
            >
              {project.category}
            </span>

            <motion.div whileHover={{ rotate: 45 }}>
              <ArrowUpRight
                className="
text-zinc-300
"
              />
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileHover={{
                opacity: 1,
                y: 0,
              }}
              className="
mb-5
opacity-0
transition-all
duration-500
group-hover:opacity-100
"
            >
              <p
                className="
mb-5
max-w-[320px]
text-sm
leading-relaxed
text-zinc-400
"
              >
                {project.description}
              </p>

              <div
                className="
flex flex-wrap
gap-2
"
              >
                {project.stack?.map((item) => (
                  <span
                    key={item}
                    className="
rounded-full
border border-white/10
bg-white/5
px-3 py-1
text-[11px]
text-zinc-300
"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <h3
              className="
text-3xl
font-semibold
text-white
"
            >
              {project.title}
            </h3>

            <p
              className="
mt-3
text-sm
tracking-[0.18em]
uppercase
text-zinc-500
"
            >
              {project.year}
            </p>
          </div>
        </div>

        {/* animated border */}

        <div
          className="
pointer-events-none
absolute inset-0
rounded-[34px]
border border-transparent
transition-all
duration-700
group-hover:border-[#9333ea]/40
"
        />
      </div>
    </motion.article>
  );
}

export default ProjectCard;
