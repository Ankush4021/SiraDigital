import { motion } from "framer-motion";

function ProjectCard({ project, index }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6, delay: index * 0.08 }}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border border-white/10
      bg-white/[0.03]
      mb-7
      break-inside-avoid
      "
    >

      {/* MEDIA */}

      <div className="relative overflow-hidden">

        {project.video ? (

          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="
            h-full
            w-full
            object-cover
            transition duration-700
            group-hover:scale-[1.04]
            "
          />

        ) : (

          <img
            src={project.image}
            alt={project.title}
            className="
            h-full
            w-full
            object-cover
            transition duration-700
            group-hover:scale-[1.04]
            "
          />

        )}

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <span className="
        text-[11px]
        uppercase
        tracking-[0.22em]
        text-[#c084fc]
        ">

          {project.category}

        </span>

        <h3 className="
        mt-3
        text-[22px]
        font-semibold
        text-white
        ">

          {project.title}

        </h3>

        <p className="
        mt-4
        text-sm
        leading-relaxed
        text-zinc-400
        ">

          {project.description}

        </p>

        <div className="
        mt-5
        flex
        flex-wrap
        gap-2
        ">

          {project.stack?.map((item) => (

            <span
              key={item}
              className="
              rounded-full
              border border-white/10
              bg-white/[0.04]
              px-3 py-1
              text-[11px]
              text-zinc-300
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </motion.div>

  )

}

export default ProjectCard;