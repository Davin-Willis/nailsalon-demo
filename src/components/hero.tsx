"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { shop } from "@/lib/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section id="top" className="pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <motion.p
              variants={item}
              className="text-xs font-medium tracking-[0.3em] text-rose uppercase"
            >
              Nail studio · Louisville Highlands
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-8 font-display text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.1] tracking-tight text-balance"
            >
              An hour that&apos;s{" "}
              <em className="text-rose italic">entirely</em> yours.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-8 max-w-md text-lg leading-relaxed text-balance text-muted"
            >
              Manicures, pedicures, and hand-painted nail art in a calm,
              sunlit studio. Leave with a set you&apos;ll catch yourself
              admiring all week.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={shop.phoneHref}
                className="bg-rose px-7 py-4 text-sm font-medium tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-cocoa"
              >
                Book an appointment
              </a>
              <a
                href="#menu"
                className="border border-line px-7 py-4 text-sm font-medium tracking-[0.2em] text-cocoa uppercase transition-colors duration-300 hover:border-cocoa"
              >
                View the menu
              </a>
            </motion.div>
            <motion.p
              variants={item}
              className="mt-10 text-xs font-medium tracking-[0.25em] text-muted uppercase"
            >
              Tue-Sun · Walk-ins when the chair allows
            </motion.p>
          </div>
          <motion.div variants={item}>
            <PhotoPlaceholder
              label="Fresh set, rose gold chrome"
              aspect="aspect-[3/4]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
