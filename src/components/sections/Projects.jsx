import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';

const EXT_COLORS = {
    jsx: '#61dafb', tsx: '#3178c6', cs: '#9b4f96', sql: '#cc2927', ts: '#3178c6',
};

const EXT_COMMENT = {
    jsx: '//', tsx: '//', cs: '//', sql: '--', ts: '//',
};

export default function Projects() {
    const [active, setActive] = useState(null);

    return (
        <div className="flex-1 overflow-y-auto" style={{ background: '#1e1e1e' }}>
            <div className="min-h-full px-4 sm:px-6 py-6 sm:py-12 max-w-4xl mx-auto">

                {/* Header */}
                <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-sm tok-comment">// projects.ts — My Work</p>
                    <p className="text-sm mt-1">
                        <span className="tok-keyword">export const </span>
                        <span className="tok-variable">projects</span>
                        <span className="tok-punct">: </span>
                        <span className="tok-type">Project</span>
                        <span className="tok-punct">[] = [</span>
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((proj, i) => {
                        const ext = proj.extension;
                        const color = EXT_COLORS[ext] ?? '#9cdcfe';
                        const cmt = EXT_COMMENT[ext] ?? '//';
                        const isOpen = active === proj.id;

                        return (
                            <motion.div
                                key={proj.id}
                                className="rounded-lg overflow-hidden cursor-pointer"
                                style={{
                                    background: '#252526',
                                    border: `1px solid ${isOpen ? color : '#3e3e42'}`,
                                    boxShadow: isOpen ? `0 0 16px 2px ${color}33` : 'none',
                                    fontFamily: 'var(--font-mono)',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * .1, duration: .3 }}
                                whileHover={{ borderColor: color, y: -3 }}
                                onClick={() => setActive(isOpen ? null : proj.id)}
                            >
                                {/* File tab header */}
                                <div
                                    className="flex items-center gap-2 px-4 py-2.5"
                                    style={{ background: '#2d2d30', borderBottom: `1px solid ${isOpen ? color : '#3e3e42'}` }}
                                >
                                    <span className="text-sm" style={{ color }}>{'<>'}</span>
                                    <span className="text-sm" style={{ color }}>{proj.filename}</span>
                                    <span className="ml-auto text-xs" style={{ color: '#555' }}>
                                        {proj.lines.toLocaleString()} lines
                                    </span>
                                </div>

                                {/* Code-comment description */}
                                <div className="px-4 py-4 text-xs leading-6">
                                    <p className="tok-comment">{cmt} {proj.description}</p>
                                    <p className="mt-3">
                                        <span className="tok-keyword">const </span>
                                        <span className="tok-variable">{proj.title.toLowerCase()}</span>
                                        <span className="tok-punct"> = {'{'}</span>
                                    </p>
                                    <p>
                                        <span className="tok-property">  tech</span>
                                        <span className="tok-punct">: </span>
                                        <span className="tok-punct">[</span>
                                        {proj.tech.map((t, ti) => (
                                            <span key={t}>
                                                <span className="tok-string">"{t}"</span>
                                                {ti < proj.tech.length - 1 && <span className="tok-punct">, </span>}
                                            </span>
                                        ))}
                                        <span className="tok-punct">],</span>
                                    </p>
                                    <p>
                                        <span className="tok-property">  stars</span>
                                        <span className="tok-punct">: </span>
                                        <span className="tok-number">{proj.stars}</span>
                                        <span className="tok-punct">,</span>
                                    </p>
                                    <p><span className="tok-punct">{'};'}</span></p>

                                    {/* Expanded links */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                className="flex gap-3 mt-4"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: .2 }}
                                            >
                                                <a
                                                    href={proj.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={e => e.stopPropagation()}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors duration-150"
                                                    style={{ background: '#3e3e42', color: '#d4d4d4' }}
                                                >
                                                    <span>🐙</span> GitHub
                                                </a>
                                                {proj.demo && (
                                                    <a
                                                        href={proj.demo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={e => e.stopPropagation()}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors duration-150"
                                                        style={{ background: '#1e3a1e', color: '#4ec9b0', border: '1px solid #4ec9b0' }}
                                                    >
                                                        <span>🚀</span> Live Demo
                                                    </a>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Star badge */}
                                <div
                                    className="px-4 pb-3 flex items-center gap-2 text-xs"
                                    style={{ color: '#858585' }}
                                >
                                    <span>⭐ {proj.stars}</span>
                                    <span style={{ color: '#3e3e42' }}>|</span>
                                    <span style={{ color }}>{ext.toUpperCase()}</span>
                                    <span className="ml-auto" style={{ color: '#555' }}>
                                        {isOpen ? '▾ collapse' : '▸ expand'}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    className="text-sm mt-6 tok-punct"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}
                >
                    ];
                </motion.p>
            </div>
        </div>
    );
}
