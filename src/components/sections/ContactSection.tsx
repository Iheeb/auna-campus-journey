import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import "./sections.css";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Welcome to the journey", {
        description: "We'll be in touch shortly with your next step.",
      });
    }, 900);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="contact-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="section-header"
          style={{ marginBottom: "3rem" }}
        >
          <span className="eyebrow">Chapter 06 · You</span>
          <h2 className="section-title">
            <span className="text-gradient">Say hello,</span>{" "}
            <span className="text-gradient-aurora">future AUNA.</span>
          </h2>
          <p className="section-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Tell us a little about yourself. We'll reply with the right path.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-form glass-strong border-glow"
        >
          <div className="contact-row">
            <Field label="Name" name="name" placeholder="Ada Lovelace" required />
            <Field label="Email" name="email" type="email" placeholder="you@future.edu" required />
          </div>

          <Field label="Interested program" name="program" placeholder="e.g. Synthetic Intelligence" />

          <div>
            <label className="field-label">Your message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="What draws you to AUNA?"
              className="field-textarea"
            />
          </div>

          <button type="submit" disabled={submitting} className="btn-primary contact-submit">
            {submitting ? "Sending…" : "Send message"}
            <span>→</span>
          </button>
        </motion.form>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="contact-footer"
        >
          <div className="contact-footer-row">
            <span className="contact-footer-dot" />
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
    <label className="field-label">{label}</label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="field-input"
    />
  </div>
);

export default ContactSection;
