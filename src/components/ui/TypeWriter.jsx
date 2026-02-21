import { useTyping } from '../../hooks/useTyping';

/**
 * Animates a single string being typed character-by-character.
 * Shows a blinking cursor while typing (and after if `keepCursor`).
 */
export default function TypeWriter({
    text,
    speed = 45,
    startDelay = 0,
    enabled = true,
    keepCursor = true,
    className = '',
}) {
    const { displayed, done } = useTyping(text, speed, startDelay, enabled);
    const showCursor = keepCursor || !done;

    return (
        <span className={className}>
            {displayed}
            {showCursor && <span className="cursor-blink" />}
        </span>
    );
}
