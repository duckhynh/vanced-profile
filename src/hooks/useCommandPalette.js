import { useState, useEffect, useCallback } from 'react';

export function useCommandPalette(onNavigate) {
  const [open, setOpen]   = useState(false);
  const [query, setQuery] = useState('');

  const commands = [
    { id: 'hero',     label: 'Go to Hero',     icon: '⚛',  desc: 'hero.jsx'     },
    { id: 'about',    label: 'Go to About',    icon: '📝', desc: 'about.md'     },
    { id: 'skills',   label: 'Go to Skills',   icon: '{}', desc: 'skills.json'  },
    { id: 'projects', label: 'Go to Projects', icon: '📁', desc: 'projects.ts'  },
    { id: 'contact',  label: 'Go to Contact',  icon: '>_', desc: 'contact.sh'   },
    { id: '__theme',  label: 'Toggle dark/light (coming soon)', icon: '🎨', desc: '' },
    { id: '__github', label: 'Open GitHub profile', icon: '🐙', desc: 'github.com/duckhynh',
      action: () => window.open('https://github.com/duckhynh', '_blank') },
  ];

  const filtered = query.trim()
    ? commands.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.desc.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const execute = useCallback((cmd) => {
    if (cmd.action) {
      cmd.action();
    } else if (cmd.id && !cmd.id.startsWith('__') && onNavigate) {
      onNavigate(cmd.id);
    }
    setOpen(false);
    setQuery('');
  }, [onNavigate]);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setOpen(o => !o);
        setQuery('');
      }
      if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return { open, setOpen, query, setQuery, filtered, execute };
}
