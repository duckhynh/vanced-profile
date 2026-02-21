import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
    'Initializing workspace...',
    'Loading extensions...',
    'Restoring last session...',
    'Building syntax trees...',
    'Starting language server...',
    'Ready.',
];

export default function LoadingScreen({ onDone }) {
    const [stepIdx, setStepIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setStepIdx(i => {
                const next = i + 1;
                setProgress(Math.round((next / STEPS.length) * 100));
                if (next >= STEPS.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setVisible(false);
                        setTimeout(onDone, 500);
                    }, 600);
                }
                return Math.min(next, STEPS.length - 1);
            });
        }, 420);
        return () => clearInterval(interval);
    }, [onDone]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
                    style={{ background: '#0d1117' }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* VS Code logo–style icon */}
                    <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-2"
                    >
                        <svg width="52" height="52" viewBox="0 0 100 100" fill="none">
                            <path d="M74 7L26 50l48 43 16-8V15L74 7z" fill="#007ACC" />
                            <path d="M74 7l-27 24.5L27 14 10 22l30 28L10 78l17 8 20-17.5L74 93l16-8V15L74 7z" fill="#1F9CF0" />
                            <path d="M74 7L47 31.5V68.5L74 93l16-8V15L74 7z" fill="url(#vsg)" fillOpacity=".25" />
                            <defs>
                                <linearGradient id="vsg" x1="74" y1="7" x2="74" y2="93" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#fff" />
                                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="text-2xl font-bold tracking-widest" style={{ color: '#d4d4d4', fontFamily: 'var(--font-mono)' }}>
                            code
                        </span>
                    </motion.div>

                    {/* Step text */}
                    <motion.p
                        key={stepIdx}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm tracking-wider"
                        style={{ color: '#6a9955', fontFamily: 'var(--font-mono)' }}
                    >
                        {STEPS[stepIdx]}
                    </motion.p>

                    {/* Progress bar */}
                    <div className="w-64 h-[3px] rounded-full overflow-hidden" style={{ background: '#3e3e42' }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: '#007acc' }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.35 }}
                        />
                    </div>

                    <p className="text-xs" style={{ color: '#555', fontFamily: 'var(--font-mono)' }}>
                        duckhynh — v1.0.0
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
