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
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
            className="fixed inset-4 z-[201] m-auto max-h-[90vh] max-w-2xl overflow-y-auto rounded-xl border border-[var(--brand)] bg-[rgba(10,10,20,0.95)] shadow-[0_0_50px_-10px_var(--brand)] backdrop-blur-md md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
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
              className="font-pixel absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center text-lg font-bold text-white shadow-lg"
              style={{
                backgroundColor: "var(--brand)",
                clipPath: "polygon(12px 0, 100% 0, 100% 100%, 0 calc(100% - 12px))",
              }}
            >
              {event.chapterNumber}
            </div>

            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
              <img
                src={event.imageSrc}
                alt={event.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,20,0.95)] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Status */}
              <div className="mb-4">
                {event.isActive ? (
                  <span
                    className="inline-flex items-center gap-2 bg-[var(--cyber-magenta)] px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_0_15px_var(--cyber-magenta)]"
                    style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%)" }}
                  >
                    <span
                      className="h-2 w-2 animate-pulse bg-white"
                      style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                    />
                    Active Event
                  </span>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 bg-[var(--surface-3)] px-4 py-1.5 text-xs font-bold tracking-wider text-[var(--text-muted)] uppercase"
                    style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%)" }}
                  >
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
                    className="group relative inline-flex items-center gap-2 overflow-hidden bg-[var(--cyber-yellow)] px-6 py-3 font-bold text-black shadow-lg transition-all hover:bg-white hover:shadow-[0_0_20px_var(--cyber-yellow)]"
                    style={{
                      clipPath:
                        "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                    }}
                  >
                    <span className="font-pixel relative z-10 flex items-center gap-2 text-sm tracking-wider uppercase">
                      View Location
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
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
