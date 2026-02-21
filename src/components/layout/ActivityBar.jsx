import { motion } from 'framer-motion';

const ICONS = [
    { id: 'explorer', title: 'Explorer', svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h18M3 12h18M3 18h18" /></svg> },
];

export default function ActivityBar({ activeView, onViewChange }) {
    return (
        <div
            className="flex flex-col items-center py-2 gap-1 shrink-0 relative"
            style={{ width: 48, background: '#333333', borderRight: '1px solid #252526' }}
        >
            {ICONS.map((item) => (
                <motion.button
                    key={item.id}
                    title={item.title}
                    onClick={() => onViewChange(item.id)}
                    className="w-12 h-12 flex items-center justify-center relative group"
                    style={{
                        color: activeView === item.id ? '#fff' : '#858585',
                        borderLeft: activeView === item.id ? '2px solid #fff' : '2px solid transparent',
                    }}
                    whileHover={{ color: '#d4d4d4' }}
                    transition={{ duration: .1 }}
                >
                    {item.svg}
                    <span
                        className="absolute left-full ml-2 px-2 py-1 text-xs rounded pointer-events-none whitespace-nowrap z-50 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: '#252526', color: '#d4d4d4', border: '1px solid #3e3e42' }}
                    >
                        {item.title}
                    </span>
                </motion.button>
            ))}
        </div>
    );
}
