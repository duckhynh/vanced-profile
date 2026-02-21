import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { developer } from '../../data/portfolioData';

const AVATAR = 'https://avatars.githubusercontent.com/u/78641845?v=4';

const INITIAL_LINES = [
    { type: 'info', text: '# contact.sh — Get in Touch' },
    { type: 'blank', text: '' },
    { type: 'comment', text: '# Let\'s build something great together.' },
    { type: 'blank', text: '' },
];

const QUICK_COMMANDS = [
    { cmd: 'open --github', label: 'GitHub', icon: '🐙', action: () => window.open('https://github.com/duckhynh', '_blank') },
    { cmd: 'open --facebook', label: 'Facebook', icon: '📘', action: () => window.open('https://www.facebook.com/duchungpham.dev', '_blank') },
    { cmd: 'open --twitter', label: 'Twitter/X', icon: '🐦', action: () => window.open('https://x.com/duchungpham_dev', '_blank') },
    { cmd: 'open --youtube', label: 'YouTube', icon: '▶', action: () => window.open('https://youtube.com/@duckhuynh4826', '_blank') },
    { cmd: 'open --tiktok', label: 'TikTok', icon: '🎵', action: () => window.open('https://tiktok.com/@nguyenhung.dev', '_blank') },
    { cmd: 'send --email', label: 'Email', icon: '📧', action: () => window.open(`mailto:${developer.email}`) },
];

const EASTER_EGGS = {
    'ls': ['hero.jsx', 'about.md', 'skills.json', 'projects.ts', 'contact.sh'],
    'pwd': ['/home/duckhynh/portfolio'],
    'whoami': ['duckhynh — fullstack developer @ FPT University'],
    'uname -a': ['Linux duckhynh 6.1.0 #1 SMP x86_64 GNU/Linux'],
    'clear': '__clear__',
    'help': ['Available commands:', '  ls, pwd, whoami, uname -a, clear, help', '  open --github | --facebook | --twitter | --youtube | --tiktok | --email'],
    'open --github': '__github__',
    'open --facebook': '__facebook__',
    'open --twitter': '__twitter__',
    'open --youtube': '__youtube__',
    'open --tiktok': '__tiktok__',
    'open --email': '__email__',
};

export default function Contact() {
    const [lines, setLines] = useState(INITIAL_LINES);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [histIdx, setHistIdx] = useState(-1);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [lines]);

    const prompt = (extra = []) => {
        setLines(prev => [
            ...prev,
            ...extra.map(t => ({ type: 'out', text: t })),
        ]);
    };

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;

        setHistory(h => [trimmed, ...h]);
        setHistIdx(-1);

        const result = EASTER_EGGS[trimmed.toLowerCase()];

        if (result === '__clear__') {
            setLines(INITIAL_LINES);
            return;
        }

        const newLines = [{ type: 'cmd', text: trimmed }];

        if (result === '__github__') { window.open('https://github.com/duckhynh', '_blank'); newLines.push({ type: 'out', text: 'Opening github.com/duckhynh…' }); }
        else if (result === '__facebook__') { window.open('https://www.facebook.com/duchungpham.dev', '_blank'); newLines.push({ type: 'out', text: 'Opening facebook.com/duchungpham.dev…' }); }
        else if (result === '__twitter__') { window.open('https://x.com/duchungpham_dev', '_blank'); newLines.push({ type: 'out', text: 'Opening x.com/duchungpham_dev…' }); }
        else if (result === '__youtube__') { window.open('https://youtube.com/@duckhuynh4826', '_blank'); newLines.push({ type: 'out', text: 'Opening youtube.com/@duckhuynh4826…' }); }
        else if (result === '__tiktok__') { window.open('https://tiktok.com/@nguyenhung.dev', '_blank'); newLines.push({ type: 'out', text: 'Opening tiktok.com/@nguyenhung.dev…' }); }
        else if (result === '__email__') { window.open(`mailto:${developer.email}`); newLines.push({ type: 'out', text: `Composing email to ${developer.email}…` }); }
        else if (Array.isArray(result)) {
            result.forEach(t => newLines.push({ type: 'out', text: t }));
        } else {
            newLines.push({ type: 'err', text: `command not found: ${trimmed}` });
            newLines.push({ type: 'out', text: 'Type "help" to see available commands.' });
        }

        setLines(prev => [...prev, ...newLines]);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
        if (e.key === 'ArrowUp') {
            const next = Math.min(histIdx + 1, history.length - 1);
            setHistIdx(next);
            setInput(history[next] ?? '');
        }
        if (e.key === 'ArrowDown') {
            const next = Math.max(histIdx - 1, -1);
            setHistIdx(next);
            setInput(next === -1 ? '' : history[next] ?? '');
        }
        if (e.key === 'Tab') {
            e.preventDefault();
        }
    };

    return (
        <div className="flex-1 overflow-y-auto" style={{ background: '#1e1e1e' }}>
            <div className="min-h-full px-4 sm:px-6 py-6 sm:py-12 max-w-3xl mx-auto">

                {/* Profile header */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full p-4 rounded-lg"
                    style={{ background: '#252526', border: '1px solid #3e3e42' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .4 }}
                >
                    <img
                        src={AVATAR}
                        alt="Pham Duc Hung"
                        className="w-20 h-20 rounded-full flex-shrink-0"
                        style={{ border: '3px solid #007acc', boxShadow: '0 0 18px rgba(0,122,204,.4)' }}
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-base font-bold" style={{ color: '#d4d4d4', fontFamily: 'var(--font-mono)' }}>Pham Duc Hung</h2>
                        <p className="text-sm" style={{ color: '#4ec9b0', fontFamily: 'var(--font-mono)' }}>@duckhynh · {developer.email}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#858585', fontFamily: 'var(--font-mono)' }}>Ho Chi Minh City, Vietnam 🇻🇳</p>
                    </div>
                </motion.div>

                {/* Quick action buttons */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .1 }}
                >
                    {QUICK_COMMANDS.map((qc) => (
                        <motion.button
                            key={qc.cmd}
                            onClick={qc.action}
                            className="p-3 rounded-lg text-sm text-left transition-all duration-150"
                            style={{
                                background: '#252526',
                                border: '1px solid #3e3e42',
                                color: '#9cdcfe',
                                fontFamily: 'var(--font-mono)',
                            }}
                            whileHover={{ borderColor: '#4ec9b0', boxShadow: '0 0 12px 2px rgba(78,201,176,.25)', y: -2 }}
                        >
                            <p className="tok-comment text-xs">$ {qc.cmd}</p>
                            <p className="mt-1 flex items-center gap-1.5" style={{ color: '#4ec9b0' }}><span>{qc.icon}</span>{qc.label}</p>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Terminal window */}
                <motion.div
                    className="rounded-lg overflow-hidden shadow-2xl"
                    style={{ border: '1px solid #3e3e42', fontFamily: 'var(--font-mono)' }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2, duration: .4 }}
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Chrome */}
                    <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#323233', borderBottom: '1px solid #3e3e42' }}>
                        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                        <span className="ml-3 text-xs" style={{ color: '#858585' }}>contact.sh — zsh — 80×24</span>
                    </div>

                    {/* Output */}
                    <div className="p-4 text-sm leading-7 min-h-48 max-h-80 overflow-y-auto" style={{ background: '#0d1117' }}>
                        {lines.map((line, i) => (
                            <div key={i}>
                                {line.type === 'info' && <span style={{ color: '#569cd6' }}>{line.text}</span>}
                                {line.type === 'comment' && <span className="tok-comment">{line.text}</span>}
                                {line.type === 'blank' && <span>&nbsp;</span>}
                                {line.type === 'cmd' && (
                                    <span>
                                        <span style={{ color: '#4ec9b0' }}>duckhynh</span>
                                        <span style={{ color: '#858585' }}>@portfolio</span>
                                        <span style={{ color: '#6a9955' }}> ~/contact </span>
                                        <span style={{ color: '#569cd6' }}>% </span>
                                        <span style={{ color: '#d4d4d4' }}>{line.text}</span>
                                    </span>
                                )}
                                {line.type === 'out' && <span style={{ color: '#9cdcfe' }}>{line.text}</span>}
                                {line.type === 'err' && <span style={{ color: '#f14c4c' }}>{line.text}</span>}
                            </div>
                        ))}

                        {/* Input line */}
                        <div className="flex items-center">
                            <span style={{ color: '#4ec9b0' }}>duckhynh</span>
                            <span style={{ color: '#858585' }}>@portfolio</span>
                            <span style={{ color: '#6a9955' }}> ~/contact </span>
                            <span style={{ color: '#569cd6' }}>% </span>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKey}
                                className="flex-1 bg-transparent outline-none ml-1"
                                style={{ color: '#d4d4d4', caretColor: '#9cdcfe' }}
                                spellCheck={false}
                                autoComplete="off"
                            />
                            {document.activeElement !== inputRef.current && <span className="cursor-blink" />}
                        </div>
                        <div ref={bottomRef} />
                    </div>
                </motion.div>

                <motion.p
                    className="text-xs mt-4 text-center"
                    style={{ color: '#555' }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}
                >
                    Type <span className="tok-string">"help"</span> for available commands · press <kbd style={{ background: '#3e3e42', color: '#858585', padding: '1px 4px', borderRadius: 3 }}>↑</kbd> for history
                </motion.p>
            </div>
        </div>
    );
}
