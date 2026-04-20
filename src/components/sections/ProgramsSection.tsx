import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./sections.css";

const PROGRAMS = [
  {
    icon: "◆",
    title: "Quantum Sciences",
    short: "Probability, particles, possibility.",
    long: "Explore the foundational laws of reality — from quantum computing labs to advanced theoretical physics studios.",
    courses: ["Quantum Computing", "Particle Theory", "Cryo Engineering"],
    color: "violet",
  },
  {
    icon: "◈",
    title: "Synthetic Intelligence",
    short: "Build minds that build with you.",
    long: "A faculty dedicated to AI, neural systems, alignment research and the new craft of human–machine collaboration.",
    courses: ["Neural Architecture", "AI Ethics", "Cognitive Systems"],
    color: "cyan",
  },
  {
    icon: "◉",
    title: "Bio Futures",
    short: "Life, redesigned with care.",
    long: "Genetic design, regenerative medicine and computational biology converge to shape the next era of living systems.",
    courses: ["Bioinformatics", "Gene Editing", "Synthetic Biology"],
    color: "pink",
  },
  {
    icon: "✦",
    title: "Spatial Design",
    short: "Architecture for hybrid worlds.",
    long: "Where physical and digital space merge — an interdisciplinary studio for designers, architects and world-builders.",
    courses: ["Immersive Spaces", "XR Architecture", "Material Innovation"],
    color: "amber",
  },
  {
    icon: "◊",
    title: "Climate Systems",
    short: "Engineering a livable planet.",
    long: "From planetary modeling to regenerative agriculture, our climate program trains the architects of Earth's recovery.",
    courses: ["Earth Modeling", "Carbon Engineering", "Ocean Sciences"],
    color: "emerald",
  },
  {
    icon: "✧",
    title: "New Humanities",
    short: "Stories for a changing species.",
    long: "Philosophy, literature, ethics and culture — re-imagined for a world transformed by technology and time.",
    courses: ["Future Ethics", "Digital Anthropology", "Narrative Design"],
    color: "indigo",
  },
];

const ProgramsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="programs" className="section-shell">
      <div className="programs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="section-header tight"
        >
          <span className="eyebrow">Chapter 02 · Disciplines</span>
          <h2 className="section-title">
            <span className="text-gradient">Six faculties.</span>{" "}
            <span className="text-gradient-aurora">One frontier.</span>
          </h2>
          <p className="section-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Tap a discipline to step inside.
          </p>
        </motion.div>

        <div className="programs-grid">
          {PROGRAMS.map((p, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.button
                key={p.title}
                layout
                onClick={() => setOpenIndex(isOpen ? null : i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`program-card glass border-glow${isOpen ? " is-open" : ""}`}
              >
                <div className={`program-glow ${p.color}`} />

                <div style={{ position: "relative" }}>
                  <div className={`program-icon ${p.color}`}>{p.icon}</div>
                  <h3 className="program-title">{p.title}</h3>
                  <p className="program-short">{p.short}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="program-body">{p.long}</p>
                        <ul className="program-tags">
                          {p.courses.map((c) => (
                            <li key={c} className="program-tag">{c}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="program-cta">
                    {isOpen ? "Close" : "Explore"}
                    <span className={`program-cta-arrow${isOpen ? " is-open" : ""}`}>→</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
