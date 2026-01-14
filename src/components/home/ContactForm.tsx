import { useState, type FormEvent } from "react";
import { EmailService } from "../../services/EmailService";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  title = "GET IN TOUCH",
  subtitle = "Have a question or want to collaborate? Send us a message and we'll get back to you!",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    // Scroll message into view
    setTimeout(() => {
      document.getElementById("form-message")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const hideMessage = () => {
    setMessage(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const contactData = {
      firstName: ((formData.get("first_name") as string) || "").trim(),
      lastName: ((formData.get("last_name") as string) || "").trim(),
      email: ((formData.get("email") as string) || "").trim(),
      subject: ((formData.get("subject") as string) || "").trim(),
      message: ((formData.get("message") as string) || "").trim(),
    };

    // Validate and sanitize
    const validation = EmailService.validateFormData(contactData);
    if (!validation.isValid) {
      showMessage(validation.error!, "error");
      return;
    }

    // Submit
    setIsSubmitting(true);
    const result = await EmailService.sendContactForm(validation.sanitizedData!);
    setIsSubmitting(false);

    if (result.success) {
      showMessage("✓ Message sent successfully! We'll get back to you soon", "success");
      e.currentTarget.reset();
    } else {
      showMessage(result.error!, "error");
    }
  };

  return (
    <section className="relative">
      <div className="container-page py-12 md:py-16">
        <h2 className="font-pixel text-center text-3xl tracking-tight text-[var(--text)] md:text-4xl">{title}</h2>
        <p className="mt-3 text-center text-sm text-[var(--text-muted)] md:text-base">{subtitle}</p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 grid max-w-3xl gap-5"
        >
          {/* Name */}
          <div>
            <label className="block font-semibold text-[var(--text)]">
              Name <span className="text-[var(--brand)]">*</span>
            </label>
            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <span className="mb-1 block text-xs text-[var(--text-muted)]">First Name</span>
                <input
                  required
                  name="first_name"
                  type="text"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--text-muted)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/50 focus:outline-none"
                  placeholder="Jane"
                  onChange={() => message?.type === "error" && hideMessage()}
                />
              </div>
              <div>
                <span className="mb-1 block text-xs text-[var(--text-muted)]">Last Name</span>
                <input
                  required
                  name="last_name"
                  type="text"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--text-muted)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/50 focus:outline-none"
                  placeholder="Doe"
                  onChange={() => message?.type === "error" && hideMessage()}
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-[var(--text)]">
              Email <span className="text-[var(--brand)]">*</span>
            </label>
            <input
              required
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--text-muted)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/50 focus:outline-none"
              placeholder="you@ubc.ca"
              onChange={() => message?.type === "error" && hideMessage()}
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block font-semibold text-[var(--text)]">
              Subject <span className="text-[var(--brand)]">*</span>
            </label>
            <input
              required
              name="subject"
              type="text"
              className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--text-muted)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/50 focus:outline-none"
              placeholder="How can we help you?"
              onChange={() => message?.type === "error" && hideMessage()}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-[var(--text)]">
              Message <span className="text-[var(--brand)]">*</span>
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--text-muted)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/50 focus:outline-none"
              placeholder="Tell us what's on your mind..."
              onChange={() => message?.type === "error" && hideMessage()}
            />
          </div>

          {/* Error/Success Messages */}
          <AnimatePresence mode="wait">
            {message && (
              <motion.div
                id="form-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-xl border px-4 py-3 text-sm ${
                  message.type === "success"
                    ? "border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400"
                    : "border-red-500/50 bg-red-500/10 text-red-600 dark:text-red-400"
                }`}
              >
                <p>{message.text}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <div className="mt-2 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-[var(--brand)] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[var(--brand-hover)] hover:shadow-[var(--brand)]/20 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-xs text-[var(--text-muted)]">We typically respond within 24-48 hours.</p>
      </div>
    </section>
  );
}
