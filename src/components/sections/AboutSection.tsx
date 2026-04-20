import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./sections.css";

const STORY = [
  {
    year: "2031",
    title: "A new kind of university is born",
    body: "AUNA opens its doors with one mission — to dissolve the line between learning and creating.",
  },
  {
    year: "Today",
    title: "Where 12,000 minds collide",
    body: "Students from 84 countries collaborate across labs, studios and immersive virtual spaces.",
  },
  {
    year: "Tomorrow",
    title: "Yours to write",
    body: "Every chapter of AUNA is co-authored with the next generation of thinkers, builders and dreamers.",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" className="section-shell">
      <div ref={ref} className="about-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="eyebrow">Chapter 01 · Origins</span>
          <h2 className="section-title">
            <span className="text-gradient">A story still</span>{" "}
            <span className="text-gradient-aurora">being written.</span>
          </h2>
          <p className="section-lead mx-auto" style={{ marginLeft: "auto", marginRight: "auto" }}>
            AUNA isn't a place you attend. It's a journey you become part of —
            an evolving constellation of disciplines, technologies and people.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />

          <div className="timeline-list">
            {STORY.map((s, i) => (
              <motion.div
                key={s.year}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.2 }}
                className={`timeline-item${i % 2 === 1 ? " is-flipped" : ""}`}
              >
                <div className="timeline-half">
                  <div className="timeline-card glass border-glow" style={{ borderRadius: "1.5rem" }}>
                    <div className="timeline-year">{s.year}</div>
                    <h3 className="timeline-title text-gradient">{s.title}</h3>
                    <p className="timeline-body">{s.body}</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <span className="timeline-node-ping" />
                  <span className="timeline-node-core glow-primary" />
                </div>

                <div className="timeline-half" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
