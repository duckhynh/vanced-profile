import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { explorerTree } from '../../data/portfolioData';

const EXT_COLORS = {
    jsx: '#61dafb', tsx: '#3178c6', ts: '#3178c6', js: '#dcdcaa',
    cs: '#9b4f96', sql: '#cc2927', md: '#6a9955', json: '#ce9178',
    sh: '#4ec9b0',
};

function getExt(name) {
    return name.split('.').pop();
}

export default function Sidebar({ activeSection, onNavigate }) {
    const [folderStates, setFolderStates] = useState({ src: true, components: true, assets: false });

    const toggle = (name) => setFolderStates(s => ({ ...s, [name]: !s[name] }));

    const isExpanded = (name) => !!folderStates[name];

    // Build visible items considering open/closed folders
    const visible = [];
    let skipUntilDepth = null;

    for (const item of explorerTree) {
        if (skipUntilDepth !== null && item.depth > skipUntilDepth) continue;
        skipUntilDepth = null;

        visible.push(item);

        if (item.type === 'folder' && !isExpanded(item.name)) {
            skipUntilDepth = item.depth;
        }
    }

    return (
        <motion.div
            className="flex flex-col shrink-0 overflow-hidden select-none"
            style={{ width: 220, background: '#252526', borderRight: '1px solid #3e3e42' }}
            initial={{ x: -220 }}
            animate={{ x: 0 }}
            transition={{ duration: .35, ease: 'easeOut' }}
        >
            {/* Panel header */}
            <div className="px-4 py-2 text-xs font-bold tracking-widest uppercase" style={{ color: '#bbb' }}>
                Explorer
            </div>
            <div className="px-4 py-1 text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#858585' }}>
                DUCKHYNH — PORTFOLIO
            </div>

            {/* Tree */}
            <div className="flex-1 overflow-y-auto text-sm">
                <AnimatePresence initial={false}>
                    {visible.map((item, i) => {
                        const indent = item.depth * 12 + 8;
                        const ext = item.type === 'file' ? getExt(item.name) : null;
                        const color = ext ? (EXT_COLORS[ext] || '#9cdcfe') : '#d4d4d4';
                        const isActive = item.section && item.section === activeSection;

                        if (item.type === 'folder') {
                            return (
                                <motion.div
                                    key={item.name + i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * .03 }}
                                    className="flex items-center gap-1.5 py-0.5 px-2 cursor-pointer hover:bg-[#2a2d2e] rounded-sm"
                                    style={{ paddingLeft: indent }}
                                    onClick={() => toggle(item.name)}
                                >
                                    <span style={{ color: '#c5c5c5', fontSize: 10 }}>
                                        {isExpanded(item.name) ? '▾' : '▸'}
                                    </span>
                                    <span style={{ color: '#dcb67a' }}>📁</span>
                                    <span style={{ color: '#d4d4d4' }}>{item.name}</span>
                                </motion.div>
                            );
                        }

                        return (
                            <motion.div
                                key={item.name + i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * .03 }}
                                className="flex items-center gap-1.5 py-0.5 px-2 cursor-pointer rounded-sm transition-colors"
                                style={{
                                    paddingLeft: indent + 12,
                                    background: isActive ? '#094771' : 'transparent',
                                    color: isActive ? '#fff' : '#d4d4d4',
                                }}
                                onClick={() => item.section && onNavigate(item.section)}
                                whileHover={{ backgroundColor: isActive ? '#094771' : '#2a2d2e' }}
                            >
                                <span style={{ color, fontSize: 13 }}>{item.icon}</span>
                                <span style={{ fontSize: 13 }}>{item.name}</span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* User badge */}
            <div className="px-3 py-2.5 flex items-center gap-2.5" style={{ borderTop: '1px solid #3e3e42' }}>
                <img
                    src="https://avatars.githubusercontent.com/u/78641845?v=4"
                    alt="duckhynh"
                    className="w-10 h-10 rounded-full flex-shrink-0"
                    style={{ border: '2px solid #007acc', boxShadow: '0 0 8px rgba(0,122,204,.45)' }}
                />
                <div className="min-w-0">
                    <p className="text-xs font-semibold truncate" style={{ color: '#d4d4d4' }}>Pham Duc Hung</p>
                    <p className="text-xs truncate" style={{ color: '#858585' }}>@duckhynh</p>
                </div>
            </div>

            {/* Open editors hint */}
            <div className="px-4 py-2 text-xs" style={{ color: '#555', borderTop: '1px solid #3e3e42' }}>
                <kbd className="text-xs px-1 rounded mr-1" style={{ background: '#3e3e42', color: '#858585' }}>Ctrl+P</kbd>
                Command palette
            </div>
        </motion.div>
    );
}
