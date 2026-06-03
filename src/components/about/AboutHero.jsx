
import { motion } from "framer-motion";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 50,
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

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

function AboutHero() {
    return (
        <section className="relative z-[1] overflow-hidden px-6 pb-24 pt-36">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                {/* LEFT */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={fadeUp}>
                        <span className="pill">
                            About SIRA Digital
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-6 max-w-3xl text-[clamp(2.6rem,5vw,4.5rem)] font-[800] leading-[0.98] tracking-[-0.04em] text-white"
                    >
                        We create digital experiences that feel clear, premium, and built with intent.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-8 max-w-2xl text-[1.04rem] leading-8 text-white/65"
                    >
                        SIRA Digital helps businesses build stronger online identities
                        through websites, branding, social media, and visual systems
                        designed for trust, clarity, and long-term growth.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a href="/contact" className="btn btn-primary">
                            Start a Project
                        </a>

                        <a href="/projects" className="btn btn-secondary">
                            View Work
                        </a>
                    </motion.div>

                    {/* Trust row */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3"
                    >
                        {[
                            ["Fast Delivery", "Clear workflow"],
                            ["Modern UI", "Premium visuals"],
                            ["Growth Focused", "Built with strategy"],
                        ].map(([title, subtitle]) => (
                            <motion.div
                                whileHover={{ y: -4 }}
                                key={title}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300"
                            >
                                <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-[#a64dff] to-[#e84ba4]" />

                                <h4 className="mt-4 text-sm font-bold text-white">
                                    {title}
                                </h4>

                                <p className="mt-2 text-xs leading-6 text-white/45">
                                    {subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9 }}
                    className="relative"
                >
                    {/* subtle glow */}
                    <motion.div
                        animate={{
                            opacity: [0.4, 0.7, 0.4],
                            scale: [1, 1.08, 1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-[#a64dff]/10 blur-3xl"
                    />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">

                        {/* top glow line */}
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#a64dff] to-transparent opacity-80" />

                        {/* floating tag */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur-xl"
                        >
                            Clear • Functional • Visually Strong
                        </motion.div>

                       <div className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-white/10">

    <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        alt="SIRA Digital"
        className="h-[24rem] w-full object-cover"
    />

    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#110719]/90 via-transparent to-transparent" />

    {/* floating card */}
    <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl"
    >
        <p className="text-sm font-semibold text-white">
            Design that builds trust
        </p>

        <p className="mt-1 text-xs text-white/55">
            Built for modern brands & businesses
        </p>
    </motion.div>
</div>

                        {/* stats */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {[
                                ["20+", "Projects Completed"],
                                ["100%", "Custom Design Focus"],
                                ["24/7", "Client Support"],
                                ["Modern", "UI & Branding"],
                            ].map(([title, subtitle]) => (
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.25 }}
                                    key={title}
                                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5"
                                >
                                    <h4 className="text-3xl font-extrabold text-white">
                                        {title}
                                    </h4>

                                    <div className="mt-3 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#a64dff] to-[#e84ba4]" />

                                    <p className="mt-4 text-sm text-white/50">
                                        {subtitle}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutHero;
