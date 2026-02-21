import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? skills
        : skills.filter(s => s.category === activeCategory);

    return (
        <div className="flex-1 overflow-y-auto" style={{ background: '#1e1e1e' }}>
            <div className="min-h-full px-4 sm:px-6 py-6 sm:py-12 max-w-3xl mx-auto">

                {/* Section header as JSON comment */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                    <p className="text-sm tok-comment">// skills.json — Installed Extensions</p>
                    <p className="text-sm tok-keyword mt-1">
                        <span className="tok-punct">{'{'}</span>
                        <span className="tok-string ml-1">"extensions"</span>
                        <span className="tok-punct">: [</span>
                    </p>
                </motion.div>

                {/* Category filter tabs */}
                <motion.div
                    className="flex gap-2 mb-6 flex-wrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .1 }}
                >
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="px-3 py-1 rounded text-xs transition-all duration-150"
                            style={{
                                background: activeCategory === cat ? '#007acc' : '#252526',
                                color: activeCategory === cat ? '#fff' : '#858585',
                                border: `1px solid ${activeCategory === cat ? '#007acc' : '#3e3e42'}`,
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Extensions grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filtered.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            className="flex items-center gap-4 p-4 rounded-lg cursor-default group"
                            style={{
                                background: '#252526',
                                border: '1px solid #3e3e42',
                                fontFamily: 'var(--font-mono)',
                            }}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * .05, duration: .25 }}
                            whileHover={{
                                borderColor: skill.color,
                                boxShadow: `0 0 12px 2px ${skill.color}33`,
                                y: -2,
                            }}
                        >
                            {/* Icon */}
                            <span className="text-2xl w-8 text-center">{skill.icon}</span>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-medium" style={{ color: skill.color }}>{skill.name}</span>
                                    <span className="text-xs shrink-0" style={{ color: '#858585' }}>{skill.level}%</span>
                                </div>
                                <span className="text-xs" style={{ color: '#555' }}>{skill.category}</span>

                                {/* Progress bar */}
                                <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: '#3e3e42' }}>
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ background: skill.color }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ delay: i * .05 + .3, duration: .6, ease: 'easeOut' }}
                                    />
                                </div>
                            </div>

                            {/* Installed badge */}
                            <span
                                className="text-xs px-2 py-0.5 rounded shrink-0"
                                style={{ background: '#1e3a1e', color: '#4ec9b0', border: '1px solid #4ec9b0' }}
                            >
                                ✔ installed
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="text-sm tok-keyword mt-6"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}
                >
                    <span className="tok-punct">  ]</span>
                    <br />
                    <span className="tok-punct">{'}'}</span>
                </motion.p>
            </div>
        </div>
    );
}
