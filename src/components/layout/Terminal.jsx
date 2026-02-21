import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { terminalCommands } from '../../data/portfolioData';

function useFakeTerminal() {
    const [lines, setLines] = useState([{ type: 'welcome', text: 'bash — terminal  ×' }]);
    const [input, setInput] = useState('');
    const [busy, setBusy] = useState(false);
    const [cmdIdx, setCmdIdx] = useState(0);

    // Auto-play commands one by one
    useEffect(() => {
        if (cmdIdx >= terminalCommands.length) return;
        const { cmd, out } = terminalCommands[cmdIdx];
        let i = 0;
        setBusy(true);

        // Type the command
        const typeTimer = setInterval(() => {
            i++;
            setInput(cmd.slice(0, i));
            if (i >= cmd.length) {
                clearInterval(typeTimer);
                // Press Enter simulate
                setTimeout(() => {
                    setInput('');
                    setLines(prev => [
                        ...prev,
                        { type: 'cmd', text: cmd },
                        ...out.split('\n').map(t => ({ type: 'out', text: t })),
                    ]);
                    setBusy(false);
                    setCmdIdx(idx => idx + 1);
                }, 500);
            }
        }, 55);

        return () => clearInterval(typeTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cmdIdx]);

    return { lines, input, busy };
}

export default function Terminal({ height = 160 }) {
    const [open, setOpen] = useState(false);
    const { lines, input, busy } = useFakeTerminal();
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [lines]);

    return (
        <div style={{ height: open ? height : 28, transition: 'height .25s', borderTop: '1px solid #3e3e42', background: '#0d1117', flexShrink: 0 }}>
            {/* Terminal title bar */}
            <div
                className="flex items-center justify-between px-4"
                style={{ height: 28, background: '#252526', borderBottom: '1px solid #3e3e42', cursor: 'pointer' }}
                onClick={() => setOpen(o => !o)}
            >
                <div className="flex items-center gap-4 text-xs" style={{ color: '#858585' }}>
                    <span style={{ color: open ? '#fff' : '#858585' }}>TERMINAL</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ color: '#858585' }}
                        onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
                    >
                        {open ? '▾' : '▴'}
                    </button>
                </div>
            </div>

            {/* Terminal body */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="overflow-y-auto px-4 py-2 text-xs"
                        style={{ height: height - 28, fontFamily: 'var(--font-mono)', color: '#d4d4d4' }}
                    >
                        {lines.map((line, i) => (
                            <div key={i} className="leading-relaxed">
                                {line.type === 'welcome' && (
                                    <span style={{ color: '#858585' }}>{line.text}</span>
                                )}
                                {line.type === 'cmd' && (
                                    <span>
                                        <span style={{ color: '#4ec9b0' }}>hung</span>
                                        <span style={{ color: '#858585' }}>@portfolio</span>
                                        <span style={{ color: '#6a9955' }}> ~/dev </span>
                                        <span style={{ color: '#569cd6' }}>$ </span>
                                        <span style={{ color: '#d4d4d4' }}>{line.text}</span>
                                    </span>
                                )}
                                {line.type === 'out' && (
                                    <span style={{ color: '#9cdcfe' }}>{line.text}</span>
                                )}
                            </div>
                        ))}
                        {/* Live typing line */}
                        <div className="leading-relaxed">
                            <span style={{ color: '#4ec9b0' }}>hung</span>
                            <span style={{ color: '#858585' }}>@portfolio</span>
                            <span style={{ color: '#6a9955' }}> ~/dev </span>
                            <span style={{ color: '#569cd6' }}>$ </span>
                            <span style={{ color: '#d4d4d4' }}>{input}</span>
                            {!busy && <span className="cursor-blink" />}
                        </div>
                        <div ref={bottomRef} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
