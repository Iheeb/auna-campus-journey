import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      <div ref={ref} className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Chapter 01 · Origins
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">A story still</span>{" "}
            <span className="text-gradient-aurora">being written.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
            AUNA isn't a place you attend. It's a journey you become part of —
            an evolving constellation of disciplines, technologies and people.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {STORY.map((s, i) => (
              <motion.div
                key={s.year}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <div className="glass border-glow rounded-3xl p-8 hover:bg-card-glow transition-all duration-500 group">
                    <div className="text-xs tracking-[0.25em] uppercase text-secondary mb-3">
                      {s.year}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 text-gradient">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-aurora animate-ping opacity-50" />
                  <span className="relative h-3 w-3 rounded-full bg-aurora glow-primary" />
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
