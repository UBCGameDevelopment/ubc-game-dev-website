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
    <section className="relative py-12 md:py-16">
      {/* Background Effects */}
      <div className="hex-grid pointer-events-none absolute inset-0 opacity-20"></div>

      <div className="container-page relative z-10">
        <h2 className="font-pixel text-neon text-center text-3xl tracking-widest uppercase md:text-4xl">{title}</h2>
        <p className="mt-3 text-center font-mono text-sm text-[var(--text-muted)] md:text-base">{subtitle}</p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 grid max-w-3xl gap-6 border border-[var(--brand)]/30 bg-[var(--surface)]/80 p-8 shadow-[0_0_30px_-10px_var(--brand)] backdrop-blur-lg"
          style={{
            clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
          }}
        >
          {/* Name */}
          <div>
            <label className="mb-2 block text-xs font-medium tracking-widest text-[var(--brand)] uppercase">
              <span className="text-neon">{">"}</span> Name <span className="text-[var(--accent)]">*</span>
            </label>
            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <span className="mb-1 block text-xs text-[var(--text-muted)]">First Name</span>
                <input
                  required
                  name="first_name"
                  type="text"
                  className="w-full border border-[var(--brand)]/30 bg-[var(--surface)]/50 px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] transition-all duration-200 hover:border-[var(--brand)]/60 focus:border-[var(--brand)] focus:shadow-[0_0_10px_var(--brand)] focus:outline-none"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
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
                  className="w-full border border-[var(--brand)]/30 bg-[var(--surface)]/50 px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] transition-all duration-200 hover:border-[var(--brand)]/60 focus:border-[var(--brand)] focus:shadow-[0_0_10px_var(--brand)] focus:outline-none"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                  placeholder="Doe"
                  onChange={() => message?.type === "error" && hideMessage()}
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-medium tracking-widest text-[var(--brand)] uppercase">
              <span className="text-neon">{">"}</span> Email <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              required
              name="email"
              type="email"
              className="mt-2 w-full border border-[var(--brand)]/30 bg-[var(--surface)]/50 px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] transition-all duration-200 hover:border-[var(--brand)]/60 focus:border-[var(--brand)] focus:shadow-[0_0_10px_var(--brand)] focus:outline-none"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
              placeholder="you@ubc.ca"
              onChange={() => message?.type === "error" && hideMessage()}
            />
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-xs font-medium tracking-widest text-[var(--brand)] uppercase">
              <span className="text-neon">{">"}</span> Subject <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              required
              name="subject"
              type="text"
              className="mt-2 w-full border border-[var(--brand)]/30 bg-[var(--surface)]/50 px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] transition-all duration-200 hover:border-[var(--brand)]/60 focus:border-[var(--brand)] focus:shadow-[0_0_10px_var(--brand)] focus:outline-none"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
              placeholder="How can we help you?"
              onChange={() => message?.type === "error" && hideMessage()}
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-xs font-medium tracking-widest text-[var(--brand)] uppercase">
              <span className="text-neon">{">"}</span> Message <span className="text-[var(--accent)]">*</span>
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y border border-[var(--brand)]/30 bg-[var(--surface)]/50 px-4 py-2.5 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] transition-all duration-200 hover:border-[var(--brand)]/60 focus:border-[var(--brand)] focus:shadow-[0_0_10px_var(--brand)] focus:outline-none"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
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
                className={`border px-4 py-3 font-mono text-sm ${
                  message.type === "success"
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

          {/* Submit */}
          <div className="mt-4 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="box-neon glow-pulse font-pixel bg-[var(--brand)] px-8 py-3 tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-[var(--brand-hover)] disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              {isSubmitting ? "> Transmitting..." : "> Send Message"}
            </button>
          </div>

          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 h-6 w-6 border-t border-l border-[var(--brand)]/50"></div>
          <div className="absolute right-0 bottom-0 h-6 w-6 border-r border-b border-[var(--brand)]/50"></div>
        </form>

        <p className="mt-6 text-center font-mono text-xs text-[var(--text-muted)] opacity-60">
          // Response time: 24-48 hours
        </p>
      </div>
    </section>
  );
}
