import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CampusScene from "../three/CampusScene";

const POIS = [
  { label: "Atrium of Ideas", desc: "Where every journey begins." },
  { label: "Quantum Labs", desc: "Sub-zero research at the edge of physics." },
  { label: "Hybrid Studios", desc: "Where physical meets virtual creation." },
  { label: "The Greenhouse", desc: "Living architecture, breathing campus." },
];

const CampusSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      id="campus"
      className="relative min-h-[110vh] w-full overflow-hidden flex items-center px-6 py-24 md:px-12"
    >
      {/* 3D campus backdrop */}
      <div className="absolute inset-0">
        <CampusScene />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      <motion.div
        style={{ y }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-secondary mb-4"
          >
            Chapter 03 · Place
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-gradient">Walk through</span>{" "}
            <span className="text-gradient-aurora">the campus.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-muted-foreground text-lg"
          >
            A living environment of luminous towers, hybrid studios and
            atriums that respond to the people inside them. Drag, drift, and
            discover.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {POIS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-5 hover:bg-card-glow transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-semibold">{p.label}</span>
                </div>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CampusSection;
