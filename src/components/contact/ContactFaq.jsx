import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Plus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "Most project inquiries receive a response within a few hours. We keep communication fast, clear, and collaborative from the very beginning.",
  },

  {
    question: "What types of projects do you usually work on?",
    answer:
      "We primarily work on premium websites, web applications, branding systems, and modern digital experiences for startups and growing businesses.",
  },

  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. We collaborate with businesses worldwide through streamlined online communication and structured project workflows.",
  },

  {
    question: "Can you help improve an existing website?",
    answer:
      "Absolutely. We often redesign outdated websites, improve performance, modernize UI/UX, and optimize overall user experience.",
  },
];

function ContactFaq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">FAQ</span>
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Questions clients
            <br />
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              usually ask.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
            Everything you need to know before starting your project with SIRA Digital.
          </p>
        </motion.div>

        {/* =========================================================
            FAQ LIST
        ========================================================= */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
              >
                {/* hover glow */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#a64dff]/10 blur-3xl" />
                </div>

                {/* active line */}

                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a64dff] to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* button */}

                <button
                  onClick={() => toggleFaq(index)}
                  className="relative flex w-full items-center justify-between gap-6 px-7 py-7 text-left"
                >
                  <div className="flex items-start gap-5">
                    {/* number */}

                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold text-white/50">
                      0{index + 1}
                    </div>

                    {/* content */}

                    <div>
                      <h3 className="text-lg font-medium text-white md:text-xl">{faq.question}</h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="mt-5 max-w-3xl leading-8 text-white/55">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* icon */}

                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
                  >
                    <Plus className="h-5 w-5 text-white/70" />
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            ASK ANYTHING CARD
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:p-10"
        >
          {/* glow */}

          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#a64dff]/15 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#e84ba4]/10 blur-3xl" />

          {/* top border */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a64dff] to-transparent" />

          <div className="relative z-10">
            {/* HEADER */}

            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  ASK ANYTHING
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                Still have questions?
              </h3>

              <p className="mt-4 text-lg leading-8 text-white/55">
                Ask us directly and we’ll help you understand the best solution for your project,
                timeline, or goals.
              </p>
            </div>

            {/* FORM */}

            <div className="mt-10 grid gap-5 md:grid-cols-[1fr_220px]">
              {/* textarea */}

              <div className="group relative">
                <textarea
                  rows="4"
                  placeholder="Tell us what you'd like to know..."
                  className="w-full rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-5 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/30 focus:border-[#a64dff]/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(166,77,255,0.12)]"
                />

                <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-transparent transition-all duration-300 group-focus-within:border-[#a64dff]/30" />
              </div>

              {/* side */}

              <div className="flex flex-col gap-5">
                {/* email */}

                <div className="group relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/30 focus:border-[#a64dff]/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(166,77,255,0.12)]"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-transparent transition-all duration-300 group-focus-within:border-[#a64dff]/30" />
                </div>

                {/* button */}

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-r from-[#a64dff] to-[#e84ba4] px-6 py-4 font-medium text-white shadow-[0_18px_60px_rgba(166,77,255,0.28)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Ask Anything
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>

                  {/* shine */}

                  <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
                </motion.button>

                {/* trust */}

                <p className="text-center text-sm text-white/35">
                  Usually replies within a few hours.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactFaq;
