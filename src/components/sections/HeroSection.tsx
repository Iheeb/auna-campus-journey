import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroScene from "./three/HeroScene";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* 3D Canvas backdrop */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Gradient veils */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-70" />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative"
        >
          <div className="relative h-20 w-20 md:h-24 md:w-24">
            <div className="absolute inset-0 rounded-2xl bg-aurora blur-xl opacity-70 animate-glow-pulse" />
            <div className="relative h-full w-full rounded-2xl glass-strong flex items-center justify-center border-glow">
              <span className="font-display text-3xl md:text-4xl font-bold text-gradient-aurora">
                A
              </span>
            </div>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          Advanced University of New Age
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl"
        >
          <span className="text-gradient">Shape the Future</span>
          <br />
          <span className="text-gradient-aurora">with AUNA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
        >
          A new kind of university — where curiosity becomes capability, and
          every student walks an immersive path into tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 rounded-full bg-aurora px-7 py-3 text-sm font-semibold text-primary-foreground glow-primary transition-transform hover:scale-105"
          >
            Begin the Journey
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#campus"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 text-sm font-semibold hover:bg-foreground/5 transition-colors"
          >
            Explore Campus
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Scroll to explore
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-foreground/60 to-transparent">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-[1px] bg-foreground"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
