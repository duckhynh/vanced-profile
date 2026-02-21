import { motion } from 'framer-motion';
import { navFiles } from '../../data/portfolioData';

const EXT_COLORS = {
    jsx: '#61dafb', tsx: '#3178c6', ts: '#3178c6', js: '#dcdcaa',
    cs: '#9b4f96', sql: '#cc2927', md: '#6a9955', json: '#ce9178',
    sh: '#4ec9b0',
};

function TabIcon({ filename }) {
    const ext = filename.split('.').pop();
    const color = EXT_COLORS[ext] || '#9cdcfe';
    return <span style={{ color, fontSize: 12 }}>{navFiles.find(f => f.name === filename)?.icon ?? '○'}</span>;
}

export default function TabBar({ activeSection, onNavigate }) {
    return (
        <div
            className="flex items-stretch shrink-0 overflow-x-auto overflow-y-hidden"
            style={{ background: '#2d2d30', borderBottom: '1px solid #252526', height: 36 }}
        >
            {navFiles.map((file) => {
                const isActive = file.section === activeSection;
                return (
                    <motion.button
                        key={file.section}
                        onClick={() => onNavigate(file.section)}
                        className="flex items-center gap-1.5 px-4 h-full text-xs whitespace-nowrap relative shrink-0"
                        style={{
                            background: isActive ? '#1e1e1e' : 'transparent',
                            color: isActive ? '#fff' : '#858585',
                            borderRight: '1px solid #252526',
                            fontFamily: 'var(--font-mono)',
                        }}
                        whileHover={{ color: '#ccc', backgroundColor: isActive ? '#1e1e1e' : '#2a2d2e' }}
                        transition={{ duration: .1 }}
                    >
                        {/* Active indicator line */}
                        {isActive && (
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-[2px]"
                                style={{ background: '#007acc' }}
                                layoutId="tab-indicator"
                                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                            />
                        )}
                        <TabIcon filename={file.name} />
                        <span>{file.name}</span>
                        {/* Dot = unsaved indicator (decorative) */}
                        {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full ml-1" style={{ background: '#fff', opacity: .5 }} />
                        )}
                    </motion.button>
                );
            })}

            {/* Breadcrumb spacer */}
            <div className="flex-1 flex items-center px-4" style={{ borderLeft: '1px solid #3e3e42' }}>
                <span className="text-xs" style={{ color: '#555' }}>
                    portfolio &gt; {navFiles.find(f => f.section === activeSection)?.name ?? ''}
                </span>
            </div>
        </div>
    );
}
