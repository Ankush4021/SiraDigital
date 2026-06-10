import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/siteData";

function ServicesShowcase() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl space-y-40">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* FLOATING NUMBER */}
                <div className="absolute left-8 top-8 z-20">
                  <p className="text-7xl font-[900] tracking-[-0.06em] text-white/20">
                    0{index + 1}
                  </p>
                </div>

                {/* FLOATING BADGE */}
                <div
                  className="absolute bottom-8 left-8 z-20 rounded-full border border-white/10 px-5 py-3 backdrop-blur-xl"
                  style={{
                    background: `${service.accent}20`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} style={{ color: service.accent }} />

                    <p className="text-sm text-white/80">{service.short}</p>
                  </div>
                </div>
              </motion.div>

              {/* CONTENT */}
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/40">
                  Service Category
                </p>

                <h2 className="mt-6 text-[clamp(2.8rem,4vw,4.5rem)] font-[800] leading-[0.95] tracking-[-0.05em] text-white">
                  {service.title}
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
                  {service.description}
                </p>

                {/* BULLETS */}
                <div className="mt-10 space-y-4">
                  {service.bullets.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: service.accent }}
                      />

                      <p className="text-base text-white/75">{item}</p>
                    </motion.div>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-12 h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesShowcase;
