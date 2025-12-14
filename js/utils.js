// js/utils.js
const { useState, useEffect, useMemo } = React;

// --- Helper Functions ---
window.generateStars = (n) => {
    let value = `${Math.random() * 5000}px ${Math.random() * 5000}px #FFF`;
    for (let i = 2; i <= n; i++) value += `, ${Math.random() * 5000}px ${Math.random() * 5000}px #FFF`;
    return value;
};

window.getStatusColorClass = (val) => {
    const v = val.toUpperCase();
    if (v.includes('LOST') || v.includes('RETIRED') || v.includes('DISCONNECTED') || v.includes('DEORBITED')) {
        return 'text-red-500 animate-pulse font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]';
    }
    if (v.includes('OPERATIONAL') || v.includes('STABLE') || v.includes('EN ROUTE')) {
        return 'text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]';
    }
    if (v.includes('HIBERNATION')) {
        return 'text-yellow-400 font-bold';
    }
    return 'text-white';
};

// --- Small Components ---
window.StarBackground = () => {
    const stars = useMemo(() => [window.generateStars(700), window.generateStars(200), window.generateStars(100)], []);
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
            <div style={{ width: '1px', height: '1px', boxShadow: stars[0], animation: 'animStar 150s linear infinite' }}></div>
            <div style={{ width: '2px', height: '2px', boxShadow: stars[1], animation: 'animStar 300s linear infinite' }}></div>
            <div style={{ width: '3px', height: '3px', boxShadow: stars[2], animation: 'animStar 450s linear infinite' }}></div>
        </div>
    );
};

window.GlitchText = ({ text, isActive, speed = 40, className="" }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isGlitching, setIsGlitching] = useState(false);
    useEffect(() => {
        if (!isActive) { setDisplayedText(''); return; }
        setDisplayedText(''); setIsGlitching(true);
        let idx = 0;
        const interval = setInterval(() => {
            if (idx <= text.length) { setDisplayedText(text.slice(0, idx)); idx++; } 
            else { clearInterval(interval); setIsGlitching(false); }
        }, speed);
        return () => clearInterval(interval);
    }, [text, isActive]);
    return (
        <span className={`relative inline-block ${className} ${isGlitching ? 'text-orange-200' : ''}`}>
            {displayedText}
            {isGlitching && <span className="inline-block w-2 h-[1em] bg-orange-500 animate-pulse ml-1 align-middle"></span>}
        </span>
    );
};