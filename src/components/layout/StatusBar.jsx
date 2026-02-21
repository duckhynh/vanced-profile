import { useState, useEffect } from 'react';

export default function StatusBar({ activeSection }) {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const id = setInterval(() =>
            setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })),
            30000);
        return () => clearInterval(id);
    }, []);

    const sectionLang = {
        hero: 'JSX',
        about: 'Markdown',
        skills: 'JSON',
        projects: 'TypeScript',
        contact: 'Shell Script',
    };

    return (
        <div
            className="flex items-center justify-between px-3 shrink-0 text-xs select-none z-10"
            style={{ height: 24, background: '#007acc', color: '#fff', fontFamily: 'var(--font-mono)' }}
        >
            {/* Left */}
            <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    main
                </span>
                <span className="hidden sm:inline">⓪ 0 ⚠ 0</span>
                <span className="hidden sm:inline opacity-70">Ln 1, Col 1</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                <span className="hidden sm:inline">{sectionLang[activeSection] ?? 'Plain Text'}</span>
                <span className="hidden sm:inline">UTF-8</span>
                <span className="hidden sm:inline">CRLF</span>
                <span className="hidden sm:inline">Spaces: 2</span>
                <span className="opacity-70">{time}</span>
                <span className="hidden sm:flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                    Prettier
                </span>
                <span className="flex items-center gap-1.5" style={{ opacity: .9 }}>
                    <img
                        src="https://avatars.githubusercontent.com/u/78641845?v=4"
                        alt="duckhynh"
                        className="w-5 h-5 rounded-full"
                        style={{ border: '1px solid rgba(255,255,255,.3)' }}
                    />
                    <span className="hidden sm:inline">duckhynh</span>
                </span>
            </div>
        </div>
    );
}
