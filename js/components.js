// js/components.js
const { useState, useEffect, useRef } = React;
const { GlitchText, getStatusColorClass } = window; // utils.js에서 가져오기

window.Hero = ({ onNext }) => {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden z-10 pointer-events-none">
            <div className="absolute top-auto bottom-[-50vh] left-1/2 -translate-x-1/2 w-[130vh] h-[130vh] rounded-full shadow-[0_0_120px_rgba(50,100,255,0.15)] bg-black border border-white/5 z-0 overflow-hidden">
                <video src="vid/earth.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-full rotate-45 opacity-70 scale-110 object-[50%_70%]"></video>
            </div>
            <div className="relative z-10 text-center -mt-32 w-full px-4">
                <img src="pic/title.png" alt="Title" className="w-full max-w-4xl mx-auto h-auto object-contain drop-shadow-2xl mb-8" />
                <p className="font-ui-sci text-orange-500 text-xs md:text-sm tracking-[0.5em] uppercase border-y border-white/10 py-2 mt-4 inline-block">Humanity's Great Journey</p>
            </div>
            <div className="absolute bottom-12 z-20 flex flex-col items-center gap-3 animate-pulse cursor-pointer pointer-events-auto group" onClick={onNext}>
                <span className="text-[10px] font-terminal text-gray-500 group-hover:text-orange-400 transition-colors">INITIALIZE SCROLL</span>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent group-hover:via-orange-500 transition-all"></div>
            </div>
        </section>
    );
};

window.Intro = ({ isActive }) => {
    const videoRef = useRef(null);
    useEffect(() => { if (isActive && videoRef.current) videoRef.current.play().catch(() => {}); }, [isActive]);

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative p-8 z-10 pointer-events-none">
            <div className={`relative w-full max-w-4xl h-[45vh] bg-black border border-white/10 overflow-hidden mb-12 transition-all duration-1000 ease-out ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <video ref={videoRef} src="vid/vid1.mp4" muted autoPlay loop playsInline className="w-full h-full object-cover opacity-60 scale-105 grayscale contrast-125">
                    <div className="flex items-center justify-center w-full h-full text-gray-800 font-terminal text-xs">NO SIGNAL INPUT</div>
                </video>
                <div className="absolute top-4 left-4 flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-sm animate-pulse"></div>
                    <span className="text-[10px] font-terminal text-red-600 opacity-80">REC_MODE</span>
                </div>
                <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
            </div>

            <div className={`text-center space-y-8 max-w-2xl transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col items-center gap-2">
                    <span className="font-ui-sci text-orange-500 text-xs tracking-widest border border-orange-500/30 px-3 py-1 rounded-sm">SYSTEM BRIEFING</span>
                    <h2 className="text-3xl md:text-5xl font-header-sci text-white mt-2">DEEP SPACE<br/>ARCHIVE</h2>
                </div>
                <p className="text-base md:text-lg font-body-sci text-gray-400 font-light max-w-lg mx-auto">
                    지구나 다른 천체를 탐사하기 위해 우주로 쏘아 올린 무인 관측 도구.<br/>
                    <span className="text-gray-600 block mt-2 text-sm">인류가 직접 가기 어려운 극한의 우주 환경에서 임무를 수행합니다.</span>
                </p>
            </div>
        </section>
    );
};

window.StoryGrid = ({ probeName, gallery }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [probeName]);
    useEffect(() => setIsVisible(false), [probeName]);

    if (!gallery) return null;
    return (
        <div 
            ref={sectionRef} 
            className={`
                mt-24 relative z-[60] border-t border-white/10 bg-[#0B0C0E]/50 backdrop-blur-sm transition-all duration-700
                w-full 
                ${isVisible ? 'popup-card-visible opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}
            `}
        >
            <div className="py-12 w-full max-w-[1600px] md:pr-12">
                <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                    <div>
                        <h3 className="text-2xl font-header-sci text-white">MISSION LOGS</h3>
                    </div>
                    <span className="text-xs font-terminal text-gray-600 tracking-widest hidden md:block">REF_ID: {probeName.toUpperCase()}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 auto-rows-[250px] md:auto-rows-[300px] border border-white/10 bg-white/5">
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-black cursor-pointer">
                        <img src={gallery[0]} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                        <div className="absolute top-4 left-4 z-20"><span className="bg-orange-600 text-black text-[10px] font-terminal px-2 py-0.5 font-bold">PRIMARY</span></div>
                    </div>
                    {gallery.slice(1, 4).map((img, i) => (
                        <div key={i} className="relative group overflow-hidden bg-black border-l border-b border-white/10 cursor-pointer">
                            <img src={img} className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

window.DetailContent = ({ probe, isActive }) => {
    const { StoryGrid } = window; // StoryGrid 사용을 위해 가져오기
    return (
        <div className="w-full min-h-screen relative z-10 pb-24">
            <div className="pl-4 pr-4 md:pl-64 md:pr-12 pt-20 max-w-[1800px] mx-auto flex flex-col justify-start">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[85vh] relative z-10">
                    
                    {/* Left Text Area */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1 min-w-0 flex flex-col justify-center">
                        <div className="py-2">
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] font-header-sci tracking-tight mb-2 uppercase break-words">
                                <GlitchText text={probe.name} isActive={isActive} speed={60} />
                            </h2>
                            <p className="text-sm md:text-base text-orange-500 font-ui-sci tracking-widest uppercase mt-4 flex items-center gap-3">
                                {probe.mission}
                            </p>
                        </div>
                        
                        <div className="font-body-sci text-gray-300 leading-relaxed text-base font-light md:pr-12">
                            <GlitchText text={probe.description} isActive={isActive} speed={20} />
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                            {probe.specs.map((spec, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-[10px] font-terminal text-gray-500 uppercase">{spec.label}</span>
                                    <span className={`text-sm md:text-lg font-terminal tracking-tighter ${spec.label === 'STATUS' ? getStatusColorClass(spec.value) : 'text-white'}`}>
                                        {spec.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Area */}
                    <div className="lg:col-span-7 relative h-[40vh] md:h-[60vh] lg:h-[80vh] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
                        <div key={probe.id + isActive} className={`relative inline-block w-full h-full flex items-center justify-center ${isActive ? 'scan-active' : ''}`}>
                            <div className="laser-beam"></div>
                            <img src={probe.image} alt={probe.name} className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)] scannable-image transition-transform duration-700 hover:scale-105" />
                            
                            <div className="absolute bottom-10 right-10 z-20 hidden md:block">
                                    <div className="font-terminal text-[10px] text-orange-500 text-right space-y-1">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
                    <StoryGrid probeName={probe.name} gallery={probe.gallery} />
            </div>
            
        </div>
    );
};

window.NavBar = ({ activeId, onNavigate, isVisible, onBack }) => {
    const { probesData } = window; // data.js에서 데이터 가져오기
    const navScrollRef = useRef(null);
    const navTouchStart = useRef(null);

    const handleNavTouchStart = (e) => {
        navTouchStart.current = e.touches[0].clientY;
    };

    const handleNavTouchEnd = (e) => {
        if (!navTouchStart.current) return;
        const endY = e.changedTouches[0].clientY;
        const distance = navTouchStart.current - endY;
        const el = navScrollRef.current;
        
        if (el && el.scrollTop <= 0 && distance < -50) {
            e.stopPropagation();
            onBack(); 
        }
        navTouchStart.current = null;
    };

    return (
        <div className="fixed left-0 top-0 bottom-0 w-full md:w-auto md:left-0 z-40 pointer-events-none flex flex-col h-full">
            <div className="relative flex-1 pointer-events-auto bg-black/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:pl-10 h-full overflow-hidden">
                
                <div className="absolute top-0 bottom-0 left-[38px] w-px bg-white/10 hidden md:block"></div>

                <div 
                    ref={navScrollRef}
                    onTouchStart={handleNavTouchStart}
                    onTouchEnd={handleNavTouchEnd}
                    className="h-full overflow-y-auto custom-scrollbar md:pr-4 allow-scroll"
                >
                    <div className="min-h-full flex flex-col justify-center gap-2 md:gap-5 p-8 md:p-0 py-20">
                        {probesData.map((probe, idx) => {
                            const isActive = activeId === probe.id;
                            return (
                                <button key={probe.id} onClick={() => onNavigate(probe.id)} className="group relative flex items-center gap-3 w-full md:w-auto text-left flex-shrink-0">
                                    <span className={`font-terminal text-[9px] w-4 text-right transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700 group-hover:text-gray-500'}`}>
                                        {probe.index}
                                    </span>
                                    <div className="relative w-3 h-3 flex items-center justify-center hidden md:flex flex-shrink-0">
                                        <div className={`w-1 h-1 rounded-sm bg-gray-800 transition-all duration-300 ${isActive ? 'bg-orange-500 scale-150' : 'group-hover:bg-white'}`}></div>
                                        {isActive && <div className="absolute inset-0 bg-orange-500/30 animate-ping rounded-sm"></div>}
                                    </div>
                                    <div className={`flex flex-col transition-all duration-300 ${isActive ? 'opacity-100 translate-x-1' : 'opacity-40 hover:opacity-100 hover:translate-x-0.5'}`}>
                                        <span className={`text-xl md:text-xs font-header-sci tracking-widest uppercase whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                            {probe.name}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                        <div className="md:hidden text-center mt-8 opacity-30">
                            <p className="font-terminal text-[10px] text-gray-500">PULL DOWN TO RETURN</p>
                            <div className="w-px h-8 bg-gray-700 mx-auto mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};