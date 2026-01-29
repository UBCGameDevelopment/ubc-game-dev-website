import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PurchaseData {
  itemName: string;
  price: number;
}

export default function MerchPurchaseModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<PurchaseData | null>(null);

  useEffect(() => {
    const handleOpen = (event: CustomEvent<PurchaseData>) => {
      setData(event.detail);
      setIsOpen(true);
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden border border-[var(--brand)] bg-[var(--bg-panel)] shadow-[0_0_50px_rgba(var(--brand-rgb),0.3)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-dim)] bg-[var(--brand)]/10 p-4">
              <h3 className="font-tech text-xl tracking-widest text-white uppercase">
                <span className="mr-2 text-[var(--brand)]">&gt;&gt;</span>
                TRANSACTION SEQUENCE
              </h3>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6 border-l-2 border-[var(--cyber-yellow)] bg-[var(--bg-deep)] p-4">
                <p className="text-xs font-bold tracking-widest text-[var(--text-muted)] uppercase">Target Item</p>
                <p className="text-xl font-bold text-white">{data.itemName}</p>
                <p className="font-mono text-[var(--cyber-yellow)]">${data.price.toFixed(2)} CAD</p>
              </div>

              <div className="space-y-4 text-sm text-[var(--text-muted)]">
                <p>To acquire this item, complete the credit transfer protocol:</p>

                <ol className="list-decimal space-y-3 pl-5 marker:text-[var(--brand)]">
                  <li>
                    Initiate an e-Transfer to:
                    <br />
                    <span className="mt-1 inline-block rounded border border-[var(--border-dim)] bg-[var(--bg-deep)] px-2 py-1 font-mono text-white select-all">
                      ubcgame.treasurer@gmail.com
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[var(--cyber-red)]">CRITICAL:</span> Include a message with:
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      <li>
                        Full Item Name: <span className="text-white">{data.itemName}</span>
                      </li>
                      <li>Size / Color (if applicable)</li>
                      <li>Your Student Number (if applicable)</li>
                      <li>Your Discord Handle (for contact)</li>
                    </ul>
                  </li>
                </ol>

                <div className="mt-6 rounded border border-[var(--border-dim)] bg-[var(--bg-deep)]/50 p-4 text-xs">
                  <p className="mb-1 font-bold text-[var(--brand)] uppercase">System Note:</p>
                  <p>
                    A Guild Officer will verify your transaction and coordinate equipment handover. Verification
                    typically takes 1-2 business cycles.
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

            {/* Scanlines */}
            <div className="pointer-events-none absolute inset-0 z-0 scanline-rgb opacity-10"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
