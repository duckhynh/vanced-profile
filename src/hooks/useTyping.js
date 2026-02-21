import { useState, useEffect, useRef } from 'react';

/**
 * Progressively types out a string, character by character.
 * @param {string}  text         Full text to type
 * @param {number}  speed        ms per character (default 45)
 * @param {number}  startDelay   ms to wait before starting (default 0)
 * @param {boolean} enabled      start typing only when true
 */
export function useTyping(text, speed = 45, startDelay = 0, enabled = true) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone]           = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed('');
    setDone(false);
    indexRef.current = 0;

    const start = setTimeout(() => {
      const tick = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          clearInterval(tick);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(tick);
    }, startDelay);

    return () => clearTimeout(start);
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}

/**
 * Sequences multiple strings, typing each one then deleting, looping.
 */
export function useTypingLoop(phrases, typeSpeed = 60, pauseMs = 1800, deleteSpeed = 30) {
  const [text, setText]         = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setPhraseIdx(i => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
