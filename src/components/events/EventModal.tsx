import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EventModalProps {
  events: Array<{
    title: string;
    date: string;
    description: string;
    location: string;
    mapLink?: string;
    imageSrc: string;
    isActive: boolean;
    chapterNumber: number;
  }>;
}

export default function EventModal({ events }: EventModalProps) {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  // Listen for custom events from LevelCard
  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ index: number }>) => {
      setActiveEvent(e.detail.index);
    };

    window.addEventListener("openEventModal" as any, handleOpen);
    return () => window.removeEventListener("openEventModal" as any, handleOpen);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveEvent(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeEvent !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeEvent]);

  const event = activeEvent !== null ? events[activeEvent] : null;

  return (
    <AnimatePresence>
      {event && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveEvent(null)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 z-[201] m-auto max-h-[90vh] max-w-2xl overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Chapter Badge */}
            <div
              className="absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-xl border-2 text-lg font-bold shadow-lg"
              style={{
                borderColor: "var(--brand)",
                backgroundColor: "var(--brand)",
                color: "white",
                boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
              }}
            >
              {event.chapterNumber}
            </div>

            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img
                src={event.imageSrc}
                alt={event.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Status */}
              <div className="mb-4">
                {event.isActive ? (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-3 py-1.5 text-xs font-bold text-white">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                    Active Event
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-[var(--surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">
                    Completed
                  </span>
                )}
              </div>

              {/* Title */}
              <h2
                className="text-2xl font-bold text-[var(--text)] md:text-3xl"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {event.title}
              </h2>

              {/* Date & Location */}
              <div
                className="mt-4 flex flex-wrap items-center gap-4 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span
                    style={{ color: "var(--text)" }}
                    className="font-medium"
                  >
                    {event.date}
                  </span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.mapLink ? (
                      <a
                        href={event.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline-offset-2 hover:underline"
                        style={{ color: "var(--text)" }}
                      >
                        {event.location}
                      </a>
                    ) : (
                      <span
                        style={{ color: "var(--text)" }}
                        className="font-medium"
                      >
                        {event.location}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Full Description */}
              <div
                className="prose prose-sm mt-6 max-w-none leading-relaxed"
                style={{ color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: event.description }}
              />

              {/* Action Buttons */}
              {event.isActive && event.mapLink && (
                <div className="mt-8 flex gap-3">
                  <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "var(--brand)",
                      boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
                    }}
                  >
                    View Location
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
