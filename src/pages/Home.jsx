import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import ActivityBar from '../components/layout/ActivityBar';
import Sidebar from '../components/layout/Sidebar';
import TabBar from '../components/layout/TabBar';
import StatusBar from '../components/layout/StatusBar';
import Terminal from '../components/layout/Terminal';
import CommandPalette from '../components/ui/CommandPalette';

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import { navFiles } from '../data/portfolioData';

const SECTIONS = { hero: Hero, about: About, skills: Skills, projects: Projects, contact: Contact };

const MOBILE_ICONS = {
    'hero': { icon: '⚛', label: 'Hero' },
    'about': { icon: '📝', label: 'About' },
    'skills': { icon: '{}', label: 'Skills' },
    'projects': { icon: '📁', label: 'Projects' },
    'contact': { icon: '>_', label: 'Contact' },
};

export default function Home() {
    const [activeSection, setActiveSection] = useState('hero');
    const [activeView, setActiveView] = useState('explorer');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigate = useCallback((section) => {
        if (SECTIONS[section]) setActiveSection(section);
    }, []);

    const handleViewChange = (view) => {
        if (view === activeView && sidebarOpen) {
            setSidebarOpen(false);
        } else {
            setActiveView(view);
            setSidebarOpen(true);
        }
    };

    const ActiveSection = SECTIONS[activeSection];

    return (
        <div className="flex flex-col h-dvh w-dvw overflow-hidden" style={{ background: '#0d1117' }}>
            {/* Command palette overlay */}
            <CommandPalette onNavigate={navigate} />

            {/* Main layout */}
            <div className="flex flex-1 min-h-0">
                {/* Activity bar — desktop only */}
                <div className="hidden md:flex">
                    <ActivityBar activeView={sidebarOpen ? activeView : null} onViewChange={handleViewChange} />
                </div>

                {/* Sidebar — desktop only */}
                <div className="hidden md:flex">
                    <AnimatePresence>
                        {sidebarOpen && (
                            <Sidebar activeSection={activeSection} onNavigate={navigate} />
                        )}
                    </AnimatePresence>
                </div>

                {/* Editor area */}
                <div className="flex flex-col flex-1 min-w-0">
                    {/* Tab bar — desktop only */}
                    <div className="hidden md:block">
                        <TabBar activeSection={activeSection} onNavigate={navigate} />
                    </div>

                    {/* Mobile header bar */}
                    <div
                        className="flex md:hidden items-center px-4 shrink-0 text-xs"
                        style={{ height: 36, background: '#252526', borderBottom: '1px solid #3e3e42', color: '#858585', fontFamily: 'var(--font-mono)' }}
                    >
                        <span style={{ color: '#007acc' }}>duckhynh</span>
                        <span className="mx-1 opacity-50">/</span>
                        <span style={{ color: '#d4d4d4' }}>{navFiles.find(f => f.section === activeSection)?.name ?? ''}</span>
                    </div>

                    {/* Section content */}
                    <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                className="flex flex-col flex-1 min-h-0"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: .18, ease: 'easeOut' }}
                            >
                                <ActiveSection onNavigate={navigate} />
                            </motion.div>
                        </AnimatePresence>

                        {/* Fake terminal panel — desktop only */}
                        <div className="hidden md:block">
                            <Terminal height={165} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Status bar */}
            <StatusBar activeSection={activeSection} />

            {/* Mobile bottom nav */}
            <div
                className="flex md:hidden items-stretch shrink-0"
                style={{ background: '#252526', borderTop: '1px solid #3e3e42', height: 56 }}
            >
                {Object.entries(MOBILE_ICONS).map(([section, { icon, label }]) => {
                    const isActive = section === activeSection;
                    return (
                        <button
                            key={section}
                            onClick={() => navigate(section)}
                            className="flex-1 flex flex-col items-center justify-center gap-0.5 text-xs transition-colors relative"
                            style={{
                                color: isActive ? '#fff' : '#858585',
                                background: isActive ? '#094771' : 'transparent',
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            {isActive && (
                                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: '#007acc' }} />
                            )}
                            <span style={{ fontSize: 16 }}>{icon}</span>
                            <span style={{ fontSize: 10 }}>{label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
