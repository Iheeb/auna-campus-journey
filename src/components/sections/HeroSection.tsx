import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroScene from "../three/HeroScene";
import "./sections.css";

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
    <section ref={ref} id="hero" className="hero">
      <div className="hero-canvas">
        <HeroScene />
      </div>

      <div className="hero-veil-1" />
      <div className="hero-veil-2" />

      <motion.div style={{ y, opacity, scale }} className="hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="hero-logo-wrap"
        >
          <div className="hero-logo">
            <div className="hero-logo-glow" />
            <div className="hero-logo-mark border-glow">
              <span className="hero-logo-letter">A</span>
            </div>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-eyebrow"
        >
          <span className="hero-eyebrow-dot" />
          Advanced University of New Age
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title"
        >
          <span className="text-gradient">Shape the Future</span>
          <br />
          <span className="text-gradient-aurora">with AUNA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="hero-lead"
        >
          A new kind of university — where curiosity becomes capability, and
          every student walks an immersive path into tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hero-actions"
        >
          <a href="#about" className="btn-primary">
            Begin the Journey
            <svg className="hero-arrow" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#campus" className="btn-ghost">
            Explore Campus
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="hero-scroll-cue"
        >
          <span className="hero-scroll-label">Scroll to explore</span>
          <div className="hero-scroll-track">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hero-scroll-bead"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
