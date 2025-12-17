// src/services/EmailService.ts

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

interface ValidationResult {
    isValid: boolean;
    error?: string;
    sanitizedData?: ContactFormData;
}

interface RateLimitEntry {
    count: number;
    firstAttempt: number;
}

interface RateLimitCheckResult {
    allowed: boolean;
    error?: string;
    retryAfter?: number;
}

// Configuration constants
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqwwqey';
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_WINDOW = 3;
const MAX_NAME_LENGTH = 50;
const MAX_EMAIL_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 200;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

export class EmailService {
    private static rateLimitStore: Map<string, RateLimitEntry> = new Map();

    // ============================================
    // Rate Limiting
    // ============================================

    /**
     * Generates a unique rate limit key for tracking submissions
     */
    private static getRateLimitKey(email: string): string {
        return `email_${email.toLowerCase()}`;
    }

    /**
     * Cleans up expired rate limit entries
     */
    private static cleanupExpiredEntries(now: number): void {
        for (const [key, entry] of this.rateLimitStore.entries()) {
            if (now - entry.firstAttempt > RATE_LIMIT_WINDOW_MS) {
                this.rateLimitStore.delete(key);
            }
        }
    }

    /**
     * Creates or updates rate limit entry for a submission
     */
    private static updateRateLimitEntry(key: string, now: number): void {
        const entry = this.rateLimitStore.get(key);

        if (!entry) {
            this.rateLimitStore.set(key, {
                count: 1,
                firstAttempt: now,
            });
        } else {
            entry.count += 1;
            this.rateLimitStore.set(key, entry);
        }
    }

    /**
     * Calculates time remaining until rate limit resets
     */
    private static calculateRetryAfter(entry: RateLimitEntry, now: number): number {
        const timeUntilReset = RATE_LIMIT_WINDOW_MS - (now - entry.firstAttempt);
        return Math.ceil(timeUntilReset / 1000); // Convert to seconds
    }

    /**
     * Checks if user has exceeded rate limits
     */
    private static checkRateLimit(email: string): RateLimitCheckResult {
        const key = this.getRateLimitKey(email);
        const now = Date.now();

        this.cleanupExpiredEntries(now);

        const entry = this.rateLimitStore.get(key);

        // No previous attempts - allow and track
        if (!entry) {
            this.updateRateLimitEntry(key, now);
            return { allowed: true };
        }

        // Check if limit exceeded
        if (entry.count >= MAX_SUBMISSIONS_PER_WINDOW) {
            const retryAfter = this.calculateRetryAfter(entry, now);
            const minutesUntilReset = Math.ceil(retryAfter / 60);

            return {
                allowed: false,
                error: `You've reached the maximum of ${MAX_SUBMISSIONS_PER_WINDOW} messages per hour. Please try again in ${minutesUntilReset} minute(s)`,
                retryAfter,
            };
        }

        // Allow and increment counter
        this.updateRateLimitEntry(key, now);
        return { allowed: true };
    }

    // ============================================
    // Input Sanitization
    // ============================================

    /**
     * Sanitizes general text input by removing dangerous characters
     */
    private static sanitizeInput(input: string): string {
        return input
            .trim()
            .replace(/<[^>]*>/g, '')           // Remove HTML tags
            .replace(/\0/g, '')                // Remove null bytes
            .replace(/\r/g, '')                // Remove carriage returns
            .replace(/\s+/g, ' ')              // Normalize whitespace
            .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, ''); // Remove control chars
    }

    /**
     * Sanitizes email input with email-specific rules
     */
    private static sanitizeEmail(email: string): string {
        return email
            .trim()
            .toLowerCase()
            .replace(/[^\w\s@.\-+]/gi, '');    // Keep only valid email characters
    }

    // ============================================
    // Validation
    // ============================================

    /**
     * Validates name fields
     */
    private static validateName(firstName: string, lastName: string): string | null {
        if (!firstName || !lastName) {
            return 'Please enter your full name';
        }
        if (firstName.length > MAX_NAME_LENGTH || lastName.length > MAX_NAME_LENGTH) {
            return 'Name is too long';
        }
        return null;
    }

    /**
     * Validates email field
     */
    private static validateEmail(email: string): string | null {
        if (!email) {
            return 'Please enter your email address';
        }
        if (email.length > MAX_EMAIL_LENGTH) {
            return 'Email address is too long';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return null;
    }

    /**
     * Validates subject field
     */
    private static validateSubject(subject: string): string | null {
        if (!subject) {
            return 'Please enter a subject';
        }
        if (subject.length > MAX_SUBJECT_LENGTH) {
            return `Subject is too long (max ${MAX_SUBJECT_LENGTH} characters)`;
        }
        return null;
    }

    /**
     * Validates message field
     */
    private static validateMessage(message: string): string | null {
        if (!message) {
            return 'Please enter your message';
        }
        if (message.length < MIN_MESSAGE_LENGTH) {
            return 'Your message is too short. Please provide more details';
        }
        if (message.length > MAX_MESSAGE_LENGTH) {
            return `Message is too long (max ${MAX_MESSAGE_LENGTH} characters)`;
        }
        return null;
    }

    /**
     * Validates and sanitizes contact form data
     */
    static validateFormData(data: ContactFormData): ValidationResult {
        // Sanitize all inputs
        const firstName = this.sanitizeInput(data.firstName);
        const lastName = this.sanitizeInput(data.lastName);
        const email = this.sanitizeEmail(data.email);
        const subject = this.sanitizeInput(data.subject);
        const message = this.sanitizeInput(data.message);

        // Validate each field
        const nameError = this.validateName(firstName, lastName);
        if (nameError) return { isValid: false, error: nameError };

        const emailError = this.validateEmail(email);
        if (emailError) return { isValid: false, error: emailError };

        const subjectError = this.validateSubject(subject);
        if (subjectError) return { isValid: false, error: subjectError };

        const messageError = this.validateMessage(message);
        if (messageError) return { isValid: false, error: messageError };

        return {
            isValid: true,
            sanitizedData: { firstName, lastName, email, subject, message }
        };
    }

    // ============================================
    // Email Sending
    // ============================================

    /**
     * Sends contact form data to Formspree
     */
    static async sendContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
        // Rate limit check
        const rateLimitCheck = this.checkRateLimit(data.email);
        if (!rateLimitCheck.allowed) {
            return {
                success: false,
                error: rateLimitCheck.error,
            };
        }

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    _replyto: data.email,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: 'Something went wrong. Please try again or email us at ubcgamedev@gmail.com',
            };
        }
    }
}

