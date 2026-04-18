import { motion } from "framer-motion";

const STEPS = [
  { n: "01", t: "Discover", d: "Browse programs and connect with mentors." },
  { n: "02", t: "Apply", d: "A single, story-driven application." },
  { n: "03", t: "Converse", d: "An immersive conversation, not an interview." },
  { n: "04", t: "Arrive", d: "Step onto campus — physical or virtual." },
];

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="section-shell">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Chapter 05 · Entry
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">Four steps to</span>{" "}
            <span className="text-gradient-aurora">your beginning.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative glass border-glow rounded-3xl p-7"
            >
              <div className="text-5xl font-display font-bold text-gradient-aurora opacity-80 mb-4">
                {s.n}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass-strong border-glow rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-aurora opacity-10" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[80%] bg-aurora blur-3xl opacity-30" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Applications open for</span>
              <br />
              <span className="text-gradient-aurora">Autumn 2026</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Early decisions close on March 15. Begin your application in
              under five minutes.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-aurora px-8 py-3.5 text-sm font-semibold text-primary-foreground glow-primary hover:scale-105 transition-transform"
            >
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
