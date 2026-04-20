import { motion } from "framer-motion";
import "./sections.css";

const STEPS = [
  { n: "01", t: "Discover", d: "Browse programs and connect with mentors." },
  { n: "02", t: "Apply", d: "A single, story-driven application." },
  { n: "03", t: "Converse", d: "An immersive conversation, not an interview." },
  { n: "04", t: "Arrive", d: "Step onto campus — physical or virtual." },
];

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="section-shell">
      <div className="about-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="eyebrow">Chapter 05 · Entry</span>
          <h2 className="section-title">
            <span className="text-gradient">Four steps to</span>{" "}
            <span className="text-gradient-aurora">your beginning.</span>
          </h2>
        </motion.div>

        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="step glass border-glow"
            >
              <div className="step-num">{s.n}</div>
              <h3 className="step-title">{s.t}</h3>
              <p className="step-desc">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="admissions-cta glass-strong border-glow"
        >
          <div className="admissions-cta-bg" />
          <div className="admissions-cta-glow" />
          <div className="admissions-cta-inner">
            <h3 className="admissions-cta-title">
              <span className="text-gradient">Applications open for</span>
              <br />
              <span className="text-gradient-aurora">Autumn 2026</span>
            </h3>
            <p className="admissions-cta-lead">
              Early decisions close on March 15. Begin your application in
              under five minutes.
            </p>
            <a href="#contact" className="btn-primary">
              Start your application
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
