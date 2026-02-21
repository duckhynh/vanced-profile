import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useCommandPalette } from '../../hooks/useCommandPalette';

export default function CommandPalette({ onNavigate }) {
    const { open, setOpen, query, setQuery, filtered, execute } = useCommandPalette(onNavigate);
    const [active, setActive] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            setActive(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [open]);

    useEffect(() => { setActive(0); }, [query]);

    const handleKey = (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(i + 1, filtered.length - 1)); }
        if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
        if (e.key === 'Enter' && filtered[active]) execute(filtered[active]);
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-[90]"
                        style={{ background: 'rgba(0,0,0,.55)' }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />

                    {/* Palette panel */}
                    <motion.div
                        className="fixed z-[91] left-1/2 top-[15%] w-full max-w-xl rounded-md overflow-hidden shadow-2xl"
                        style={{ transform: 'translateX(-50%)', background: '#252526', border: '1px solid #3e3e42' }}
                        initial={{ opacity: 0, y: -24, scale: .97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -24, scale: .97 }}
                        transition={{ duration: .18 }}
                        onKeyDown={handleKey}
                    >
                        {/* Input */}
                        <div className="flex items-center px-4 py-3 gap-3" style={{ borderBottom: '1px solid #3e3e42' }}>
                            <span style={{ color: '#858585' }}>{'>'}</span>
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Type a command or file name…"
                                className="flex-1 bg-transparent outline-none text-sm"
                                style={{ color: '#d4d4d4', fontFamily: 'var(--font-mono)', caretColor: '#9cdcfe' }}
                            />
                            <kbd className="text-xs px-1.5 py-0.5 rounded" style={{ background: '#3e3e42', color: '#858585' }}>ESC</kbd>
                        </div>

                        {/* Results */}
                        <ul className="max-h-72 overflow-y-auto py-1">
                            {filtered.length === 0 && (
                                <li className="px-4 py-3 text-sm" style={{ color: '#858585' }}>No results found</li>
                            )}
                            {filtered.map((cmd, i) => (
                                <motion.li
                                    key={cmd.id}
                                    className="flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm"
                                    style={{
                                        background: i === active ? '#04395e' : 'transparent',
                                        color: i === active ? '#fff' : '#d4d4d4',
                                    }}
                                    onClick={() => execute(cmd)}
                                    onMouseEnter={() => setActive(i)}
                                    whileHover={{ paddingLeft: '1.25rem' }}
                                    transition={{ duration: .1 }}
                                >
                                    <span className="text-base w-5 text-center">{cmd.icon}</span>
                                    <span className="flex-1">{cmd.label}</span>
                                    {cmd.desc && <span className="text-xs" style={{ color: '#6a9955' }}>{cmd.desc}</span>}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Footer hint */}
                        <div className="px-4 py-1.5 flex gap-4 text-xs" style={{ borderTop: '1px solid #3e3e42', color: '#555' }}>
                            <span><kbd>↑↓</kbd> navigate</span>
                            <span><kbd>↵</kbd> select</span>
                            <span><kbd>Ctrl+P</kbd> toggle</span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
