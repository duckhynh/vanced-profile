import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypingLoop } from '../../hooks/useTyping';

const ROLES = [
    'Fullstack Developer',
    'C# / .NET Developer',
    'ASP.NET Core Architect',
    'Java Developer',
    'Open Source Contributor',
];

const AVATAR = 'https://avatars.githubusercontent.com/u/78641845?v=4';

const CODE_LINES = [
    { n: 1, tokens: [{ t: 'keyword', v: 'const' }, { t: 'variable', v: ' developer' }, { t: 'operator', v: ' = {' }] },
    { n: 2, tokens: [{ t: 'property', v: '  name' }, { t: 'punct', v: ': ' }, { t: 'string', v: '"Pham Duc Hung"' }, { t: 'punct', v: ',' }] },
    { n: 3, tokens: [{ t: 'property', v: '  github' }, { t: 'punct', v: ': ' }, { t: 'string', v: '"@duckhynh"' }, { t: 'punct', v: ',' }] },
    { n: 4, tokens: [{ t: 'property', v: '  role' }, { t: 'punct', v: ': ' }, { t: 'string', v: '"__TYPING__"' }, { t: 'punct', v: ',' }] },
    { n: 5, tokens: [{ t: 'property', v: '  location' }, { t: 'punct', v: ': ' }, { t: 'string', v: '"Ho Chi Minh City 🇻🇳"' }, { t: 'punct', v: ',' }] },
    { n: 6, tokens: [{ t: 'property', v: '  skills' }, { t: 'punct', v: ': ' }, { t: 'punct', v: '[' }] },
    { n: 7, tokens: [{ t: 'string', v: '    "C#"' }, { t: 'punct', v: ',' }] },
    { n: 8, tokens: [{ t: 'string', v: '    "Java"' }, { t: 'punct', v: ',' }] },
    { n: 9, tokens: [{ t: 'string', v: '    "JavaScript"' }, { t: 'punct', v: ',' }] },
    { n: 10, tokens: [{ t: 'string', v: '    "ASP.NET Core"' }, { t: 'punct', v: ',' }] },
    { n: 11, tokens: [{ t: 'string', v: '    "Node JS"' }, { t: 'punct', v: ',' }] },
    { n: 12, tokens: [{ t: 'punct', v: '  ],' }] },
    { n: 13, tokens: [{ t: 'property', v: '  repos' }, { t: 'punct', v: ': ' }, { t: 'number', v: '12' }, { t: 'punct', v: ',' }] },
    { n: 14, tokens: [{ t: 'property', v: '  status' }, { t: 'punct', v: ': ' }, { t: 'string', v: '"Open to opportunities ✔"' }] },
    { n: 15, tokens: [{ t: 'punct', v: '};' }] },
    { n: 16, tokens: [] },
    { n: 17, tokens: [{ t: 'function', v: 'console' }, { t: 'punct', v: '.' }, { t: 'function', v: 'log' }, { t: 'punct', v: '(' }, { t: 'string', v: '"No time to die 🚀"' }, { t: 'punct', v: ');' }] },
];

const TOKEN_CLASS = {
    keyword: 'tok-keyword',
    variable: 'tok-variable',
    property: 'tok-property',
    string: 'tok-string',
    function: 'tok-function',
    punct: 'tok-punct',
    operator: 'tok-operator',
    comment: 'tok-comment',
};

export default function Hero({ onNavigate }) {
    const role = useTypingLoop(ROLES, 55, 2000, 30);
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= CODE_LINES.length) clearInterval(id);
        }, 90);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex-1 overflow-y-auto bg-grid relative" style={{ background: '#1e1e1e' }}>
            {/* Subtle scanline overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)' }} />

            <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
                {/* Profile badge */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-2xl p-4 rounded-lg"
                    style={{ background: '#252526', border: '1px solid #3e3e42' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: .05 }}
                >
                    <img
                        src={AVATAR}
                        alt="Pham Duc Hung"
                        className="w-24 h-24 rounded-full flex-shrink-0"
                        style={{ border: '3px solid #007acc', boxShadow: '0 0 20px rgba(0,122,204,.45)' }}
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-lg font-bold" style={{ color: '#d4d4d4', fontFamily: 'var(--font-mono)' }}>Pham Duc Hung</h1>
                        <p className="text-sm" style={{ color: '#4ec9b0', fontFamily: 'var(--font-mono)' }}>@duckhynh</p>
                        <p className="text-xs mt-1" style={{ color: '#858585', fontFamily: 'var(--font-mono)' }}>Ho Chi Minh City, Vietnam 🇻🇳 · "No time to die"</p>
                    </div>
                </motion.div>

                {/* Editor chrome */}
                <motion.div
                    className="w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl"
                    style={{ border: '1px solid #3e3e42' }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, ease: 'easeOut' }}
                >
                    {/* Fake window chrome */}
                    <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#323233', borderBottom: '1px solid #3e3e42' }}>
                        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                        <span className="ml-3 text-xs" style={{ color: '#858585' }}>developer.jsx — portfolio</span>
                    </div>

                    {/* Code area */}
                    <div className="px-0 py-4 text-sm leading-7" style={{ background: '#1e1e1e', fontFamily: 'var(--font-mono)' }}>
                        {CODE_LINES.map((line, idx) => (
                            idx < visibleLines ? (
                                <motion.div
                                    key={line.n}
                                    className="flex"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: .2 }}
                                >
                                    <span className="line-number">{line.n}</span>
                                    <span className="px-4 flex-1">
                                        {line.tokens.map((tok, ti) => {
                                            if (tok.v === '"__TYPING__"') {
                                                return (
                                                    <span key={ti} className="tok-string">
                                                        &quot;{role}<span className="cursor-blink" />&quot;
                                                    </span>
                                                );
                                            }
                                            return (
                                                <span key={ti} className={TOKEN_CLASS[tok.t] ?? ''}>
                                                    {tok.v}
                                                </span>
                                            );
                                        })}
                                    </span>
                                </motion.div>
                            ) : null
                        ))}
                        {/* Cursor on empty last line */}
                        {visibleLines >= CODE_LINES.length && (
                            <div className="flex">
                                <span className="line-number">{CODE_LINES.length + 1}</span>
                                <span className="px-4"><span className="cursor-blink" /></span>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    className="flex gap-4 mt-8 flex-wrap justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: .5 }}
                >
                    <button
                        onClick={() => onNavigate?.('projects')}
                        className="px-5 py-2.5 rounded text-sm font-medium transition-all duration-200 hover:glow-blue"
                        style={{ background: '#007acc', color: '#fff', fontFamily: 'var(--font-mono)' }}
                    >
                        // View Projects
                    </button>
                    <button
                        onClick={() => onNavigate?.('contact')}
                        className="px-5 py-2.5 rounded text-sm font-medium transition-all duration-200"
                        style={{ background: 'transparent', color: '#4ec9b0', border: '1px solid #4ec9b0', fontFamily: 'var(--font-mono)' }}
                    >
                        // Get in Touch
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
