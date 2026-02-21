import { motion } from 'framer-motion';
import { aboutLines } from '../../data/portfolioData';

const AVATAR = 'https://avatars.githubusercontent.com/u/78641845?v=4';

export default function About() {
    return (
        <div className="flex-1 overflow-y-auto" style={{ background: '#1e1e1e' }}>
            <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-12">

                {/* Avatar profile card */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-5 mb-6 w-full max-w-2xl p-5 rounded-lg"
                    style={{ background: '#252526', border: '1px solid #3e3e42' }}
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .45 }}
                >
                    <img
                        src={AVATAR}
                        alt="Pham Duc Hung"
                        className="w-28 h-28 rounded-full flex-shrink-0"
                        style={{ border: '3px solid #007acc', boxShadow: '0 0 24px rgba(0,122,204,.4)' }}
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-xl font-bold" style={{ color: '#d4d4d4', fontFamily: 'var(--font-mono)' }}>Pham Duc Hung</h2>
                        <p className="text-sm" style={{ color: '#4ec9b0', fontFamily: 'var(--font-mono)' }}>@duckhynh</p>
                        <p className="text-xs mt-1" style={{ color: '#ce9178', fontFamily: 'var(--font-mono)' }}>"No time to die"</p>
                        <p className="text-xs mt-0.5" style={{ color: '#858585', fontFamily: 'var(--font-mono)' }}>Fullstack Developer · Ho Chi Minh City, Vietnam 🇻🇳</p>
                    </div>
                </motion.div>

                {/* File header */}
                <motion.p
                    className="text-xs mb-4 self-start max-w-2xl w-full"
                    style={{ color: '#555', fontFamily: 'var(--font-mono)' }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }}
                >
          // about.md  •  UTF-8  •  Markdown
                </motion.p>

                <motion.div
                    className="w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl"
                    style={{ border: '1px solid #3e3e42', background: '#1e1e1e', fontFamily: 'var(--font-mono)', fontSize: 14 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, ease: 'easeOut' }}
                >
                    {/* Window chrome */}
                    <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#323233', borderBottom: '1px solid #3e3e42' }}>
                        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                        <span className="ml-3 text-xs" style={{ color: '#858585' }}>about.md — portfolio</span>
                    </div>

                    {/* Code lines */}
                    <div className="py-4 leading-7">
                        {aboutLines.map((line, i) => (
                            <motion.div
                                key={i}
                                className="flex"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * .04, duration: .2 }}
                            >
                                <span className="line-number">{i + 1}</span>
                                <span className="px-4 flex-1">
                                    {line.type === 'comment' && <span className="tok-comment">{line.text}</span>}
                                    {line.type === 'blank' && <span>&nbsp;</span>}
                                    {line.type === 'code' && <span className="tok-keyword">{line.text}</span>}
                                    {line.type === 'prop' && (
                                        <>
                                            <span className="tok-property">  {line.key}</span>
                                            <span className="tok-punct">: </span>
                                            <span className="tok-string">{line.value}</span>
                                            <span className="tok-punct">,</span>
                                        </>
                                    )}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative stats row */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .8, duration: .4 }}
                >
                    {[
                        { label: 'public.repos', value: '12', color: '#569cd6' },
                        { label: 'github.since', value: '2021', color: '#4ec9b0' },
                        { label: 'followers', value: '3', color: '#dcdcaa' },
                        { label: 'coffee.cups', value: '∞', color: '#ce9178' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-lg p-4 text-center transition-all duration-200 hover:scale-105"
                            style={{ background: '#252526', border: '1px solid #3e3e42', cursor: 'default' }}
                        >
                            <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                            <p className="text-xs mt-1" style={{ color: '#858585' }}>{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
