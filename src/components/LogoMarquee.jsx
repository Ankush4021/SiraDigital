import { motion } from "framer-motion";
import { useState } from "react";

const logos = [

    "/logos/CH-INFO-LOGO.webp",
    "/logos/Picture1.png",
    "/logos/Picture2.webp",
    "/logos/Picture3.webp",
    "/logos/Picture4.webp",

];

function LogoMarquee() {

    const [paused, setPaused] = useState(false);

    return (

        <section className="relative overflow-hidden py-28">

            <div className="mx-auto mb-20 max-w-7xl px-6 text-center">

                <span className="
inline-flex
rounded-full
border border-[#9333ea]/20
bg-[#9333ea]/10
px-4 py-2
text-[11px]
uppercase
tracking-[0.22em]
text-[#c084fc]
">

                    Brand Identity

                </span>

                <h3 className="
mt-6
text-4xl
font-semibold
leading-tight
text-white
lg:text-6xl
">

                    Logo Showcase

                </h3>

                <p className="
mx-auto
mt-6
max-w-2xl
text-zinc-500
leading-relaxed
">

                    Logos, symbols and visual identities
                    crafted for modern brands.

                </p>

            </div>

            <div className="relative overflow-hidden">

                {/* LEFT FADE */}

                <div className="
pointer-events-none
absolute
left-0
top-0
z-20
h-full
w-40
bg-gradient-to-r
from-[#07020f]
to-transparent
"/>

                {/* RIGHT FADE */}

                <div className="
pointer-events-none
absolute
right-0
top-0
z-20
h-full
w-40
bg-gradient-to-l
from-[#07020f]
to-transparent
"/>

                <motion.div

                    animate={{
                        x: paused ? undefined : ["0%", "-50%"]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}

                    onHoverStart={() => setPaused(true)}
                    onHoverEnd={() => setPaused(false)}

                    className="
flex
w-max
items-center
gap-20
"

                >

                    {[...logos, ...logos].map((logo, index) => (

                        <motion.div

                            key={index}

                            whileHover={{
                                y: -10,
                                scale: 1.08
                            }}

                            transition={{
                                duration: .35
                            }}

                            className="
group
relative
flex
items-center
justify-center
px-8
py-8
cursor-pointer
"

                        >

                            {/* HOVER GLOW */}

                            <div className="
absolute
h-[150px]
w-[150px]
rounded-full
bg-[#9333ea]/20
blur-[85px]
opacity-0
transition-all
duration-500
group-hover:opacity-100
"/>

                            <img
                                src={logo}
                                alt="logo"

                                className="
relative
z-10

max-h-[150px]
max-w-[300px]

object-contain

opacity-80

transition-all
duration-500

group-hover:opacity-100
group-hover:scale-110

drop-shadow-[0_0_35px_rgba(166,77,255,0.30)]
"
                            />

                        </motion.div>

                    ))}

                </motion.div>

            </div>

        </section>

    )

}

export default LogoMarquee;