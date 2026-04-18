import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const PROGRAMS = [
  {
    icon: "◆",
    title: "Quantum Sciences",
    short: "Probability, particles, possibility.",
    long: "Explore the foundational laws of reality — from quantum computing labs to advanced theoretical physics studios.",
    courses: ["Quantum Computing", "Particle Theory", "Cryo Engineering"],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: "◈",
    title: "Synthetic Intelligence",
    short: "Build minds that build with you.",
    long: "A faculty dedicated to AI, neural systems, alignment research and the new craft of human–machine collaboration.",
    courses: ["Neural Architecture", "AI Ethics", "Cognitive Systems"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "◉",
    title: "Bio Futures",
    short: "Life, redesigned with care.",
    long: "Genetic design, regenerative medicine and computational biology converge to shape the next era of living systems.",
    courses: ["Bioinformatics", "Gene Editing", "Synthetic Biology"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "✦",
    title: "Spatial Design",
    short: "Architecture for hybrid worlds.",
    long: "Where physical and digital space merge — an interdisciplinary studio for designers, architects and world-builders.",
    courses: ["Immersive Spaces", "XR Architecture", "Material Innovation"],
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "◊",
    title: "Climate Systems",
    short: "Engineering a livable planet.",
    long: "From planetary modeling to regenerative agriculture, our climate program trains the architects of Earth's recovery.",
    courses: ["Earth Modeling", "Carbon Engineering", "Ocean Sciences"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: "✧",
    title: "New Humanities",
    short: "Stories for a changing species.",
    long: "Philosophy, literature, ethics and culture — re-imagined for a world transformed by technology and time.",
    courses: ["Future Ethics", "Digital Anthropology", "Narrative Design"],
    color: "from-indigo-500 to-purple-500",
  },
];

const ProgramsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="programs" className="section-shell">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Chapter 02 · Disciplines
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">Six faculties.</span>{" "}
            <span className="text-gradient-aurora">One frontier.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            Tap a discipline to step inside.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className={`group relative text-left glass border-glow rounded-3xl p-7 overflow-hidden transition-all duration-500 ${
                  isOpen ? "ring-1 ring-primary/50 glow-primary md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Color glow */}
                <div
                  className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700`}
                />

                <div className="relative">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-2xl text-background shadow-lg`}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.short}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                          {p.long}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {p.courses.map((c) => (
                            <li
                              key={c}
                              className="text-xs px-3 py-1 rounded-full glass border border-foreground/10"
                            >
                              {c}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-secondary">
                    {isOpen ? "Close" : "Explore"}
                    <span
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      →
                    </span>
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
