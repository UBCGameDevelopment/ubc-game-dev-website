import { useState, type FormEvent } from "react";
import { EmailService } from "../../services/EmailService";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
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

    const validation = EmailService.validateFormData(contactData);
    if (!validation.isValid) {
      showMessage(validation.error!, "error");
      return;
    }

    setIsSubmitting(true);
    const result = await EmailService.sendContactForm(validation.sanitizedData!);
    setIsSubmitting(false);

    if (result.success) {
      setIsSent(true);
    } else {
      showMessage(result.error!, "error");
    }
  };

  return (
    <section className="relative py-12 md:py-16">
      <div className="hex-grid pointer-events-none absolute inset-0 opacity-20"></div>

      <div className="container-page relative z-10">
        {isSent ? (
          <p className="mx-auto max-w-3xl border border-[var(--border-dim)] bg-[var(--bg-panel)]/80 p-8 text-center text-lg text-[var(--text-muted)]">
            Sent!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto grid max-w-3xl gap-6 border border-[var(--border-dim)] bg-[var(--bg-panel)]/80 p-8"
          >
            <div>
              <label className="mb-2 block text-sm font-medium tracking-widest text-[var(--text-muted)] uppercase">
                Name <span className="text-[var(--accent)]">*</span>
              </label>
              <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <span className="mb-1 block text-xs text-[var(--text-muted)]">First Name</span>
                  <input
                    required
                    name="first_name"
                    type="text"
                    className="w-full border border-[var(--border-dim)] bg-[var(--bg-deep)] px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none"
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
                    className="w-full border border-[var(--border-dim)] bg-[var(--bg-deep)] px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none"
                    placeholder="Doe"
                    onChange={() => message?.type === "error" && hideMessage()}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium tracking-widest text-[var(--text-muted)] uppercase">
                Email <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                required
                name="email"
                type="email"
                className="mt-2 w-full border border-[var(--border-dim)] bg-[var(--bg-deep)] px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none"
                placeholder="you@ubc.ca"
                onChange={() => message?.type === "error" && hideMessage()}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium tracking-widest text-[var(--text-muted)] uppercase">
                Subject <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                required
                name="subject"
                type="text"
                className="mt-2 w-full border border-[var(--border-dim)] bg-[var(--bg-deep)] px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none"
                placeholder="How can we help you?"
                onChange={() => message?.type === "error" && hideMessage()}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium tracking-widest text-[var(--text-muted)] uppercase">
                Message <span className="text-[var(--accent)]">*</span>
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y border border-[var(--border-dim)] bg-[var(--bg-deep)] px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none"
                placeholder="Tell us what's on your mind..."
                onChange={() => message?.type === "error" && hideMessage()}
              />
            </div>

            <AnimatePresence mode="wait">
              {message && (
                <motion.div
                  id="form-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`border px-4 py-3 font-mono text-sm ${message.type === "success"
                      ? "border-green-500/50 bg-green-500/10 text-green-600 shadow-[0_0_15px_rgba(34,197,94,0.3)] dark:text-green-400"
                      : "border-red-500/50 bg-red-500/10 text-red-600 shadow-[0_0_15px_rgba(239,68,68,0.3)] dark:text-red-400"
                    }`}
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <p>{message.text}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-pixel bg-[var(--brand)] px-8 py-3 tracking-widest text-white uppercase disabled:cursor-not-allowed disabled:opacity-50"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                {isSubmitting ? "Transmitting..." : "Send Message"}
              </button>
            </div>

          </form>
        )}
      </div>
    </section>
  );
}
