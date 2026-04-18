import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Welcome to the journey",
        description: "We'll be in touch shortly with your next step.",
      });
    }, 900);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Chapter 06 · You
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">Say hello,</span>{" "}
            <span className="text-gradient-aurora">future AUNA.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us a little about yourself. We'll reply with the right path.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong border-glow rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Ada Lovelace" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@future.edu"
              required
            />
          </div>

          <Field
            label="Interested program"
            name="program"
            placeholder="e.g. Synthetic Intelligence"
          />

          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Your message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="What draws you to AUNA?"
              className="w-full rounded-2xl bg-input/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-aurora px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-primary hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send message"}
            <span>→</span>
          </button>
        </motion.form>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center text-xs text-muted-foreground"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            AUNA · Advanced University of New Age
          </div>
          <div>© 2026 — Shaping the future, one mind at a time.</div>
        </motion.footer>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div>
    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-2xl bg-input/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
    />
  </div>
);

export default ContactSection;
