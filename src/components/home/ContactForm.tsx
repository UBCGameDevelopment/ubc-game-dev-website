import { useState, type FormEvent } from 'react';
import { EmailService } from '../../services/EmailService';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
    title?: string;
    subtitle?: string;
}

export default function ContactForm({
    title = "GET IN TOUCH",
    subtitle = "Have a question or want to collaborate? Send us a message and we'll get back to you!"
}: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    const showMessage = (text: string, type: 'success' | 'error') => {
        setMessage({ text, type });
        // Scroll message into view
        setTimeout(() => {
            document.getElementById('form-message')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
            firstName: ((formData.get('first_name') as string) || '').trim(),
            lastName: ((formData.get('last_name') as string) || '').trim(),
            email: ((formData.get('email') as string) || '').trim(),
            subject: ((formData.get('subject') as string) || '').trim(),
            message: ((formData.get('message') as string) || '').trim(),
        };

        // Validate and sanitize
        const validation = EmailService.validateFormData(contactData);
        if (!validation.isValid) {
            showMessage(validation.error!, 'error');
            return;
        }

        // Submit
        setIsSubmitting(true);
        const result = await EmailService.sendContactForm(validation.sanitizedData!);
        setIsSubmitting(false);

        if (result.success) {
            showMessage("✓ Message sent successfully! We'll get back to you soon", 'success');
            e.currentTarget.reset();
        } else {
            showMessage(result.error!, 'error');
        }
    };

    return (
        <section className="relative">
            <div className="container-page py-12 md:py-16">
                <h2 className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
                    {title}
                </h2>
                <p className="mt-3 text-center text-sm text-gray-50/85 md:text-base">{subtitle}</p>

                <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 grid max-w-3xl gap-5">
                    {/* Name */}
                    <div>
                        <label className="block font-semibold text-gray-50">
                            Name <span className="text-brand-400">*</span>
                        </label>
                        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <span className="mb-1 block text-xs text-gray-400">First Name</span>
                                <input
                                    required
                                    name="first_name"
                                    type="text"
                                    className="focus:border-brand-500 focus:ring-brand-500/50 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-white placeholder-gray-400 transition-colors duration-200 hover:border-white/25 focus:ring-2 focus:outline-none"
                                    placeholder="Jane"
                                    onChange={() => message?.type === 'error' && hideMessage()}
                                />
                            </div>
                            <div>
                                <span className="mb-1 block text-xs text-gray-400">Last Name</span>
                                <input
                                    required
                                    name="last_name"
                                    type="text"
                                    className="focus:border-brand-500 focus:ring-brand-500/50 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-white placeholder-gray-400 transition-colors duration-200 hover:border-white/25 focus:ring-2 focus:outline-none"
                                    placeholder="Doe"
                                    onChange={() => message?.type === 'error' && hideMessage()}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-semibold text-gray-50">
                            Email <span className="text-brand-400">*</span>
                        </label>
                        <input
                            required
                            name="email"
                            type="email"
                            className="focus:border-brand-500 focus:ring-brand-500/50 mt-2 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-white placeholder-gray-400 transition-colors duration-200 hover:border-white/25 focus:ring-2 focus:outline-none"
                            placeholder="you@ubc.ca"
                            onChange={() => message?.type === 'error' && hideMessage()}
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block font-semibold text-gray-50">
                            Subject <span className="text-brand-400">*</span>
                        </label>
                        <input
                            required
                            name="subject"
                            type="text"
                            className="focus:border-brand-500 focus:ring-brand-500/50 mt-2 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-white placeholder-gray-400 transition-colors duration-200 hover:border-white/25 focus:ring-2 focus:outline-none"
                            placeholder="How can we help you?"
                            onChange={() => message?.type === 'error' && hideMessage()}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-semibold text-gray-50">
                            Message <span className="text-brand-400">*</span>
                        </label>
                        <textarea
                            required
                            name="message"
                            rows={5}
                            className="focus:border-brand-500 focus:ring-brand-500/50 mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-white placeholder-gray-400 transition-colors duration-200 hover:border-white/25 focus:ring-2 focus:outline-none"
                            placeholder="Tell us what's on your mind..."
                            onChange={() => message?.type === 'error' && hideMessage()}
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
                                className={`rounded-xl border px-4 py-3 text-sm ${message.type === 'success'
                                        ? 'border-green-500/50 bg-green-500/10 text-green-300'
                                        : 'border-red-500/50 bg-red-500/10 text-red-300'
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
                            className="hover:border-brand-500 hover:bg-brand-500 rounded-4xl border border-white/30 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-center text-xs text-gray-400">
                    We typically respond within 24-48 hours.
                </p>
            </div>
        </section>
    );
}
