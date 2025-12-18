import { motion } from 'framer-motion';

export default function BlurOverlay() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none fixed bottom-0 left-0 right-0 z-[9999] h-[200px] w-full"
            style={{
                background: 'linear-gradient(to top, rgba(64, 45, 173, 0.6), transparent)',
                WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
                maskImage: 'linear-gradient(to top, black, transparent)',
                backdropFilter: 'blur(40px) saturate(1.2)',
                WebkitBackdropFilter: 'blur(40px) saturate(1.2)',
                willChange: 'transform',
                transform: 'translateZ(0)',
            }}
        />
    );
}
