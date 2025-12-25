// js/app.js
const { useState, useEffect, useRef } = React;
// 앞에서 정의한 컴포넌트와 데이터 가져오기
const { probesData, StarBackground, Hero, Intro, DetailContent, NavBar } = window;

const App = () => {
    const [viewPhase, setViewPhase] = useState(0); 
    const [activeProbeId, setActiveProbeId] = useState('pioneer');
    const [showMobileDetail, setShowMobileDetail] = useState(false); 
    const lastScrollTime = useRef(0);
    const scrollContainerRef = useRef(null);
    const touchStart = useRef(null);
    const [animState, setAnimState] = useState('slide-active');

    useEffect(() => {
        const handleWheel = (e) => {
            if (viewPhase < 2) {
                e.preventDefault(); 
                const now = Date.now();
                if (now - lastScrollTime.current < 1000) return;
                lastScrollTime.current = now;
                if (e.deltaY > 0) handlePhaseChange(viewPhase === 0 ? 1 : 2);
                else if (e.deltaY < 0 && viewPhase === 1) handlePhaseChange(0);
            }
        };
        const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientY; };
        const handleTouchMove = (e) => { if (viewPhase < 2 && e.cancelable) e.preventDefault(); };
        const handleTouchEnd = (e) => {
            if (!touchStart.current) return;
            const endY = e.changedTouches[0].clientY;
            const distance = touchStart.current - endY;
            const now = Date.now();
            if (now - lastScrollTime.current < 500) return;
            if (Math.abs(distance) > 50) { 
                lastScrollTime.current = now;
                if (viewPhase === 0) { if (distance > 0) handlePhaseChange(1); }
                else if (viewPhase === 1) { distance > 0 ? handlePhaseChange(2) : handlePhaseChange(0); }
            }
            touchStart.current = null;
        };
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [viewPhase]); 

    const switchProbe = (nextId, direction) => {
        const now = Date.now();
        if (now - lastScrollTime.current < 800) return;
        lastScrollTime.current = now;
        if (direction === 'next') setAnimState('slide-up-out');
        else setAnimState('slide-down-out');
        setTimeout(() => {
            setActiveProbeId(nextId);
            if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
            if (direction === 'next') setAnimState('slide-up-in');
            else setAnimState('slide-down-in');
            requestAnimationFrame(() => { requestAnimationFrame(() => { setAnimState('slide-active'); }); });
        }, 500); 
    };

    const handlePhaseChange = (newPhase) => { setViewPhase(newPhase); };

    const handleDetailScroll = (e) => {
        if (viewPhase !== 2) return;
        const container = scrollContainerRef.current;
        if (!container || animState !== 'slide-active') return;
        const currentIndex = probesData.findIndex(p => p.id === activeProbeId);
        if (container.scrollTop === 0 && e.deltaY < 0) {
            if (currentIndex === 0) handlePhaseChange(1); 
            else switchProbe(probesData[currentIndex - 1].id, 'prev');
        } else if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5 && e.deltaY > 0) {
            if (currentIndex < probesData.length - 1) switchProbe(probesData[currentIndex + 1].id, 'next');
        }
    };

    const handleDetailTouchEnd = (e) => {
        if (viewPhase !== 2 || !touchStart.current) return;
        const endY = e.changedTouches[0].clientY;
        const distance = touchStart.current - endY;
        const container = scrollContainerRef.current;
        if (!container) return;
        if (distance < -50 && container.scrollTop === 0) {
            const currentIndex = probesData.findIndex(p => p.id === activeProbeId);
            currentIndex === 0 ? handlePhaseChange(1) : switchProbe(probesData[currentIndex - 1].id, 'prev');
        } else if (distance > 50 && container.scrollTop + container.clientHeight >= container.scrollHeight - 50) {
            const currentIndex = probesData.findIndex(p => p.id === activeProbeId);
            if (currentIndex < probesData.length - 1) switchProbe(probesData[currentIndex + 1].id, 'next');
        }
    };

    const handleNavigate = (id) => {
        setActiveProbeId(id);
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
        setAnimState('slide-active'); 
        if (window.innerWidth < 768) setShowMobileDetail(true);
    };

    const activeProbe = probesData.find(p => p.id === activeProbeId);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#0B0C0E]">
            <StarBackground />
            {viewPhase === 2 && showMobileDetail && (
                <button onClick={() => setShowMobileDetail(false)} className="fixed top-6 right-6 z-[100] md:hidden px-4 py-2 bg-black/80 border border-orange-500 rounded-sm text-orange-500 font-terminal text-xl">↶</button>
            )}
            <div className="w-full h-full page-transition relative z-10" style={{ transform: `translateY(-${viewPhase * 100}vh)` }}>
                <div className="w-full h-screen relative"><Hero onNext={() => handlePhaseChange(1)} /></div>
                <div className="w-full h-screen relative"><Intro isActive={viewPhase === 1} /></div>
                <div className="w-full h-screen relative">
                    <div ref={scrollContainerRef} onWheel={handleDetailScroll} onTouchStart={(e) => { e.stopPropagation(); touchStart.current = e.touches[0].clientY; }} onTouchMove={(e) => e.stopPropagation()} onTouchEnd={(e) => { e.stopPropagation(); handleDetailTouchEnd(e); }} className={`w-full h-[100dvh] custom-scrollbar overflow-y-auto overflow-x-hidden allow-scroll ${(!showMobileDetail && 'hidden md:block')}`}>
                        <div className={`content-transition ${animState}`}><DetailContent probe={activeProbe} isActive={viewPhase === 2} /></div>
                    </div>
                </div>
            </div>
            <div className={`transition-opacity duration-500 relative z-40 ${viewPhase === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`${showMobileDetail ? 'hidden md:block' : 'block'}`}>
                    <NavBar activeId={activeProbeId} onNavigate={handleNavigate} isVisible={viewPhase === 2} onBack={() => handlePhaseChange(1)} />
                </div>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
