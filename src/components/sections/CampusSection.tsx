import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CampusScene from "../three/CampusScene";
import "./sections.css";

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
    <section ref={ref} id="campus" className="campus">
      <div className="campus-canvas">
        <CampusScene />
      </div>
      <div className="campus-veil-1" />
      <div className="campus-veil-2" />

      <motion.div style={{ y }} className="campus-wrap">
        <div className="campus-col">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Chapter 03 · Place
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="section-title"
          >
            <span className="text-gradient">Walk through</span>{" "}
            <span className="text-gradient-aurora">the campus.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-lead"
          >
            A living environment of luminous towers, hybrid studios and
            atriums that respond to the people inside them. Drag, drift, and
            discover.
          </motion.p>

          <div className="campus-pois">
            {POIS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="poi-card glass"
              >
                <div className="poi-head">
                  <span className="poi-dot" />
                  <span className="poi-label">{p.label}</span>
                </div>
                <p className="poi-desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CampusSection;
