import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type MerchItem, SIZE_CHART } from "../../data/merch";

interface MerchModalData extends MerchItem {}

export default function MerchPurchaseModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<MerchModalData | null>(null);
  // When 'size-chart' is active, it's an overlay on top of 'details'
  const [showSizeChartOverlay, setShowSizeChartOverlay] = useState(false);
  const [view, setView] = useState<"details" | "purchase">("details");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const itemImages = data?.images ?? [];
  const activeImageSrc = itemImages[activeImageIndex] ?? "";
  const hasMultipleImages = itemImages.length > 1;

  useEffect(() => {
    const handleOpen = (event: CustomEvent<MerchModalData>) => {
      setData(event.detail);
      setIsOpen(true);
      setShowSizeChartOverlay(false);
      setView("details");
      setActiveImageIndex(0);
    };

    window.addEventListener("open-merch-modal", handleOpen as EventListener);
    return () => {
      window.removeEventListener("open-merch-modal", handleOpen as EventListener);
    };
  }, []);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (activeImageIndex < itemImages.length) return;
    setActiveImageIndex(0);
  }, [activeImageIndex, itemImages.length]);

  useEffect(() => {
    if (!isOpen || itemImages.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % itemImages.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [isOpen, itemImages.length, data?.id]);

  const showPreviousImage = () => {
    if (itemImages.length < 2) return;
    setActiveImageIndex((current) => (current - 1 + itemImages.length) % itemImages.length);
  };

  const showNextImage = () => {
    if (itemImages.length < 2) return;
    setActiveImageIndex((current) => (current + 1) % itemImages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            key={view}
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full overflow-hidden ${
              view === "details"
                ? "max-w-[95vw] border-none bg-transparent shadow-none md:max-w-6xl"
                : "max-w-lg border border-[var(--brand)] bg-[var(--bg-panel)] shadow-[0_0_50px_rgba(var(--brand-rgb),0.3)]"
            }`}
          >
            {view === "details" ? (
              // === DETAILS VIEW (Card Style) ===
              <div className="merch-hud-card relative flex flex-col overflow-hidden bg-[#05080c] shadow-[0_0_40px_rgba(0,0,0,0.8)] md:h-[75vh] md:flex-row">
                <div className="scanline-soft pointer-events-none absolute inset-0 z-0 opacity-10"></div>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 z-50 text-[var(--text-muted)] transition-colors hover:text-white"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Left: Image / Visual */}
                <div className="relative h-[40vh] w-full bg-[radial-gradient(circle_at_40%_40%,rgba(0,240,255,0.1)_0%,rgba(0,0,0,0.8)_60%)] md:h-auto md:w-[65%]">
                  {activeImageSrc ? (
                    <>
                      <img
                        src={activeImageSrc}
                        alt={`${data.name} image ${activeImageIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      <span className="font-tech absolute bottom-2 left-2 z-10 rounded bg-black/50 px-1.5 py-0.5 text-[8px] tracking-wider text-white/40 backdrop-blur-sm">
                        AI Generated Image
                      </span>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-12">
                      <div className="font-pixel text-6xl tracking-widest text-[var(--cyber-blue)] opacity-50 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                        IMG
                      </div>
                    </div>
                  )}

                  {hasMultipleImages && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white transition-colors hover:border-white hover:bg-black/60"
                        aria-label="Previous image"
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 18l-6-6 6-6"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white transition-colors hover:border-white hover:bg-black/60"
                        aria-label="Next image"
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 6l6 6-6 6"
                          />
                        </svg>
                      </button>
                      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 backdrop-blur-sm">
                        {itemImages.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setActiveImageIndex(index)}
                            aria-label={`Show image ${index + 1}`}
                            className={`h-2 rounded-full transition-all ${
                              index === activeImageIndex ? "w-5 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right: Info */}
                <div className="relative z-10 flex flex-1 flex-col justify-between p-8 md:w-[35%] md:overflow-y-auto md:p-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--cyber-yellow)] uppercase">
                        {data.category}
                      </span>
                    </div>

                    <h3 className="font-pixel mt-4 text-4xl tracking-wide text-white uppercase">{data.name}</h3>

                    <div className="mt-6 space-y-4">
                      <p className="font-tech max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
                        {data.description}
                      </p>

                      <div className="mt-6 space-y-2">
                        {data.colors && (
                          <div className="font-tech flex items-center gap-3 text-xs tracking-widest text-[var(--text-muted)] uppercase">
                            <span className="font-bold text-[var(--cyber-blue)]">&gt;</span>
                            <span className="font-bold text-white">COLORS:</span>
                            <span>{data.colors.join(" / ")}</span>
                          </div>
                        )}

                        {data.sizes && (
                          <div className="font-tech flex items-center gap-3 text-xs tracking-widest text-[var(--text-muted)] uppercase">
                            <span className="font-bold text-[var(--cyber-blue)]">&gt;</span>
                            <span className="font-bold text-white">SIZES:</span>
                            <span>{data.sizes.join(" / ")}</span>
                          </div>
                        )}
                      </div>

                      {data.sizeChart && (
                        <div className="mt-6">
                          <button
                            onClick={() => setShowSizeChartOverlay(true)}
                            className="group font-tech border-b border-dashed border-[var(--cyber-yellow)] pb-0.5 text-xs font-bold tracking-[0.2em] text-[var(--cyber-yellow)] transition-colors hover:border-white hover:text-white"
                          >
                            SIZE GUIDE
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer / CTA */}
                  <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[var(--border-dim)] pt-8 md:flex-nowrap md:gap-8">
                    <span className="font-pixel shrink-0 text-4xl leading-none text-[var(--cyber-yellow)]">
                      ${data.price} CAD
                    </span>
                    <button
                      onClick={() => setView("purchase")}
                      className="clip-angled group relative ml-auto inline-flex w-full items-center justify-center gap-3 overflow-hidden bg-[var(--cyber-blue)] px-6 py-2.5 text-xs font-bold tracking-[0.2em] text-black uppercase transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] sm:w-auto"
                    >
                      <span className="relative z-10">BUY NOW</span>
                      <svg
                        className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // === PURCHASE VIEW (Instructions) ===
              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[var(--border-dim)] bg-[var(--brand)]/10 p-4">
                  <h3 className="font-tech text-xl tracking-widest text-white uppercase">
                    <span className="mr-2 text-[var(--brand)]">&gt;&gt;</span>
                    TRANSACTION SEQUENCE
                  </h3>
                  <button
                    onClick={() => setView("details")}
                    className="text-[var(--text-muted)] hover:text-white"
                  >
                    BACK
                  </button>
                </div>

                {/* Content */}
                <div className="max-h-[80vh] overflow-y-auto p-4 md:p-8">
                  <div className="mb-6 flex flex-col items-start gap-6 md:flex-row">
                    {/* Image Placeholder */}
                    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded border border-[var(--border-dim)] bg-[radial-gradient(circle_at_center,_var(--bg-panel)_0%,_var(--bg-deep)_100%)] md:w-1/3">
                      {activeImageSrc ? (
                        <img
                          src={activeImageSrc}
                          alt={`${data.name} image ${activeImageIndex + 1}`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl text-[var(--cyber-blue)] opacity-50">IMG</div>
                      )}

                      {hasMultipleImages && (
                        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-sm">
                          {itemImages.map((_, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setActiveImageIndex(index)}
                              aria-label={`Show image ${index + 1}`}
                              className={`h-1.5 rounded-full transition-all ${
                                index === activeImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-xs font-bold tracking-widest text-[var(--cyber-yellow)] uppercase">
                          {data.category}
                        </p>
                        <h3 className="text-2xl font-bold text-white uppercase">{data.name}</h3>
                        <p className="font-tech text-xl text-[var(--cyber-blue)]">${data.price} CAD</p>
                      </div>

                      {data.colors && (
                        <div className="text-xs">
                          <span className="font-bold text-[var(--text-muted)] uppercase">Colors:</span>
                          <span className="ml-2 text-white">{data.colors.join(" / ")}</span>
                        </div>
                      )}
                      {data.sizes && (
                        <div className="text-xs">
                          <span className="font-bold text-[var(--text-muted)] uppercase">Sizes:</span>
                          <span className="ml-2 text-white">{data.sizes.join(" / ")}</span>
                        </div>
                      )}

                      {data.sizeChart && (
                        <button
                          onClick={() => setShowSizeChartOverlay(true)}
                          className="mt-2 flex items-center gap-2 text-xs font-bold text-[var(--cyber-yellow)] underline underline-offset-4 hover:text-white"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                          SIZE GUIDE
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="mb-6 text-sm text-[var(--text-muted)]">{data.description}</p>

                  <div className="space-y-4 border-t border-[var(--border-dim)] pt-6 text-sm text-[var(--text-muted)]">
                    <p>To acquire this item, complete the credit transfer protocol:</p>

                    <ol className="list-decimal space-y-3 pl-5 marker:text-[var(--brand)]">
                      <li>
                        Initiate an e-Transfer of{" "}
                        <span className="font-bold text-[var(--cyber-yellow)]">${data.price}</span> (per item) to:
                        <br />
                        <span className="mt-1 inline-block rounded border border-[var(--border-dim)] bg-[var(--bg-deep)] px-2 py-1 font-mono text-white select-all">
                          ubcgamedevelopment.treasurer@gmail.com
                        </span>
                      </li>
                      <li>
                        <span className="font-bold text-[var(--cyber-red)]">CRITICAL:</span> Include a message with:
                        <ul className="mt-2 list-disc space-y-1 pl-4">
                          <li>
                            Full Item Name: <span className="text-white">{data.name}</span>
                          </li>
                          <li>Size / Color (if applicable)</li>
                          <li>Your Student Number (if applicable)</li>
                          <li>Your Discord Handle (for contact)</li>
                        </ul>
                      </li>
                    </ol>

                    <div className="mt-4 text-xs text-[var(--text-muted)]">
                      <p>
                        <span className="mr-2 font-bold text-[var(--cyber-blue)]">ACCOMMODATIONS:</span>
                        Need help? Contact{" "}
                        <span className="inline-block rounded border border-[var(--border-dim)] bg-[var(--bg-deep)] px-1.5 py-0.5 font-mono text-white">
                          @gigamat
                        </span>{" "}
                        on Discord.
                      </p>
                    </div>

                    <div className="mt-6 rounded border border-[var(--border-dim)] bg-[var(--bg-deep)]/50 p-4 text-xs">
                      <p className="mb-1 font-bold text-[var(--brand)] uppercase">System Note:</p>
                      <p>
                        A Guild Officer will verify your transaction. You will receive your gear{" "}
                        <span className="font-bold text-white">at the specified in-person pickup time</span> during the
                        term.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="clip-angled group relative overflow-hidden bg-[var(--brand)] px-6 py-2 font-bold text-white uppercase transition-all hover:bg-[var(--accent)]"
                    >
                      <span className="relative z-10">Acknowledge</span>
                    </button>
                  </div>
                </div>

                {/* Scanlines for Purchase View */}
                <div className="scanline-rgb pointer-events-none absolute inset-0 z-0 opacity-10"></div>
              </div>
            )}
          </motion.div>

          {/* Size Chart Overlay Popup - Moved outside modal content to fix stacking context */}
          <AnimatePresence>
            {showSizeChartOverlay && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-[110] flex justify-center overflow-y-auto bg-black/95 p-4 py-12 backdrop-blur-sm md:items-center"
              >
                <div className="relative w-full max-w-3xl">
                  <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-8 shadow-2xl">
                    <div className="mb-6 flex items-center justify-between border-b border-[var(--border-dim)] pb-4">
                      <h4 className="font-tech text-sm tracking-[0.2em] text-[var(--cyber-blue)] uppercase">
                        Garment Specs // INCHES (CM)
                      </h4>
                      <button
                        onClick={() => setShowSizeChartOverlay(false)}
                        className="flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--text-muted)] uppercase hover:text-white"
                      >
                        CLOSE <span className="text-[var(--cyber-red)]">X</span>
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-[var(--text-muted)] md:text-sm">
                        <thead>
                          <tr className="border-b border-[var(--border-dim)] text-white">
                            <th className="w-1/3 pb-4 pl-4 text-left font-bold tracking-wider uppercase">DIMENSION</th>
                            <th className="px-4 pb-4 text-center font-bold">S</th>
                            <th className="px-4 pb-4 text-center font-bold">M</th>
                            <th className="px-4 pb-4 text-center font-bold">L</th>
                            <th className="px-4 pb-4 text-center font-bold">XL</th>
                          </tr>
                        </thead>
                        <tbody className="font-mono">
                          {SIZE_CHART.map((row, i) => {
                            const formatValue = (val: string | number) => {
                              if (val === undefined || val === null) return "-";
                              let num = 0;
                              if (typeof val === "number") {
                                num = val;
                              } else {
                                const parts = val.split(" ");
                                if (parts.length === 2) {
                                  const [whole, fraction] = parts;
                                  const [numer, denom] = fraction.split("/").map(Number);
                                  num = parseFloat(whole) + numer / denom;
                                } else if (val.includes("/")) {
                                  const [numer, denom] = val.split("/").map(Number);
                                  num = numer / denom;
                                } else {
                                  num = parseFloat(val);
                                }
                              }
                              const cm = Math.round(num * 2.54);
                              return (
                                <div className="flex flex-col items-center justify-center gap-1">
                                  <span className="font-bold text-white">{val}"</span>
                                  <span className="text-[10px] text-[var(--text-muted)]">({cm}cm)</span>
                                </div>
                              );
                            };

                            return (
                              <tr
                                key={i}
                                className="border-b border-[var(--border-dim)]/20 transition-colors last:border-0 hover:bg-white/5"
                              >
                                <td className="py-6 pl-4 font-medium text-white">{row.label}</td>
                                <td className="px-4 py-6 text-center">{formatValue(row.s)}</td>
                                <td className="px-4 py-6 text-center">{formatValue(row.m)}</td>
                                <td className="px-4 py-6 text-center">{formatValue(row.l)}</td>
                                <td className="px-4 py-6 text-center">{formatValue(row.xl)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-6 text-xs text-[var(--text-muted)] italic opacity-60">
                      * Tolerance: +/- 1.0 inch (2.54cm). Specs are approximate.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
