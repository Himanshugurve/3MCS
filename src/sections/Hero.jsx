import React, { useEffect, useRef, useState } from 'react';
import {
    HiRocketLaunch,
    HiShieldCheck,
    HiCpuChip,
    HiSparkles,
    HiBolt,
    HiCube
} from "react-icons/hi2";

/* ─────────────────────────────────────────────
Color palette
───────────────────────────────────────────── */
const C = {
    heroBackground: '#FFFFFF',
    heroBackgroundDark: '#F8F9FF',
    primaryDark: '#1a1d4a',
    primaryLight: '#3D4299',
    accentBlue: '#5D7A7F',
    brandOrange: '#F26A21',
    brandOrangeDark: '#E4571E',
    white: '#FFFFFF',
    purpleDark: '#2B2F6E',
    glassWhite: 'rgba(255, 255, 255, 0.9)',
    boxBorder: 'rgba(43, 47, 110, 0.1)',
};

/* ─────────────────────────────────────────────
Animated 3D Shape Component
───────────────────────────────────────────── */
function AnimatedShape({ type, delay = 0, duration = 20, className = '', style = {} }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const shapes = {
        circle: (
            <div
                className={`rounded-full ${className}`}
                style={{
                    ...style,
                    background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                    boxShadow: `0 20px 60px ${C.brandOrange}30, 0 4px 20px ${C.brandOrange}20`,
                }}
            />
        ),
        roundedRect: (
            <div
                className={`rounded-3xl ${className}`}
                style={{
                    ...style,
                    background: C.white,
                    border: `2px solid ${C.boxBorder}`,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                }}
            />
        ),
        diamond: (
            <div
                className={className}
                style={{
                    ...style,
                    background: C.white,
                    border: `2px solid ${C.boxBorder}`,
                    transform: `${style.transform || ''} rotate(45deg)`,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                }}
            />
        ),
        pill: (
            <div
                className={`${className}`}
                style={{
                    ...style,
                    borderRadius: '9999px',
                    background: C.white,
                    border: `2px solid ${C.boxBorder}`,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                }}
            />
        ),
    };

    return (
        <div
            style={{
                transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                transition: 'transform 0.3s ease-out',
                animation: `float ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
            }}
        >
            {shapes[type]}
        </div>
    );
}

/* ─────────────────────────────────────────────
Floating Feature Card
───────────────────────────────────────────── */
function FloatingFeatureCard({ icon: Icon, title, value, delay = 0, className = '' }) {
    return (
        <div
            className={`absolute ${className}`}
            style={{
                animation: `floatSlow 6s ease-in-out infinite`,
                animationDelay: `${delay}s`,
            }}
        >
            <div
                className="rounded-2xl p-4 backdrop-blur-md"
                style={{
                    background: `linear-gradient(135deg, ${C.glassWhite} 0%, rgba(255,255,255,0.05) 100%)`,
                    border: `1px solid rgba(255,255,255,0.2)`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
            >
                <div className="flex items-center gap-3">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                            boxShadow: `0 8px 20px ${C.brandOrange}40`,
                        }}
                    >
                        <Icon size={24} color={C.white} />
                    </div>
                    <div>
                        <div className="text-xs font-semibold opacity-80" style={{ color: C.white }}>
                            {title}
                        </div>
                        <div className="text-xl font-black" style={{ color: C.white }}>
                            {value}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
Hero Component
───────────────────────────────────────────── */
export default function Hero() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setVisible(true);
    }, []);

    const handleGetStarted = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: `linear-gradient(180deg, ${C.heroBackground} 0%, ${C.heroBackgroundDark} 100%)`,
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
        >
            {/* Box pattern overlay */}
            <div className="absolute inset-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="boxes" width="60" height="60" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="60" height="60" fill="none" stroke={C.primaryLight} strokeWidth="1" opacity="0.3" />
                        </pattern>
                        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                            <stop offset="85%" style={{ stopColor: 'white', stopOpacity: 0.8 }} />
                            <stop offset="70%" style={{ stopColor: 'white', stopOpacity: 0.5 }} />
                            <stop offset="45%" style={{ stopColor: 'white', stopOpacity: 0.2 }} />
                            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                        </linearGradient>
                        <mask id="fadeMask">
                            <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#boxes)" mask="url(#fadeMask)" opacity="0.4" />
                </svg>
            </div>


            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10"
                    style={{ background: `radial-gradient(circle, ${C.brandOrange} 0%, transparent 70%)` }}
                />
                <div
                    className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-10"
                    style={{ background: `radial-gradient(circle, ${C.primaryLight} 0%, transparent 70%)` }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ═══════ LEFT CONTENT ═══════ */}
                    <div
                        className="space-y-8 pt-20 lg:pt-0"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 200ms'
                        }}
                    >
                        {/* Live Badge */}
                       

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1]">
                            <span style={{ color: C.primaryDark }}>
                                Building the
                            </span>
                            <br />
                            <span
                                className="relative inline-block bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                                }}
                            >
                                Future
                            </span>
                            <span style={{ color: C.primaryDark }}> of Digital</span>
                            <br />
                            <span
                                className="relative inline-block bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                                }}
                            >
                                Infrastructure
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl leading-relaxed max-w-xl" style={{ color: C.accentBlue }}>
                            Scale your startup with next-generation cloud solutions.
                            Secure, fast, and engineered for the 2026 web ecosystem.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleGetStarted}
                                className="group px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center gap-2"
                                style={{
                                    background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                                    boxShadow: `0 10px 40px ${C.brandOrange}50`
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 15px 50px ${C.brandOrange}70`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 10px 40px ${C.brandOrange}50`;
                                }}
                            >
                                Get Started
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>

                           
                        </div>

                        {/* Trusted By Section */}
                        <div className="pt-12 relative">
                            {/* Background Glow */}
                            <div className="absolute -top-10 left-0 w-40 h-40 bg-[#5D7A7F]/20 blur-3xl rounded-full"></div>
                            <div className="absolute top-10 right-10 w-32 h-32 bg-[#F26A21]/20 blur-3xl rounded-full"></div>

                            {/* Heading */}
                            <div className="text-xs uppercase tracking-[0.25em] font-semibold mb-6 text-center md:text-left text-[#5D7A7F]">
                                Trusted by Hyper-Growth Teams
                            </div>

                            {/* Brand Cards */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-5">
                                {['DEVOPS', 'STRATUS', 'CORE'].map((name, i) => (
                                    <div
                                        key={i}
                                        className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl 
                   bg-white/5 backdrop-blur-md border border-white/10
                   hover:border-[#F26A21]/40
                   transition-all duration-300 cursor-pointer
                   hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        {/* Icon Box */}
                                        <div className="w-8 h-8 rounded-xl flex items-center justify-center
                        bg-[#F26A21] group-hover:scale-110 
                        transition-transform duration-300">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>

                                        {/* Brand Name */}
                                        <span className="font-semibold text-sm tracking-wide text-[#17194A] group-hover:text-[#F26A21] transition-colors duration-300">
                                            {name}
                                        </span>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                        from-[#5D7A7F]/0 via-[#F26A21]/10 to-[#5D7A7F]/0 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ═══════ RIGHT - INNOVATIVE 3D CARD STACK ═══════ */}
                    <div className="relative h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center">
                        <div className="relative w-full h-full max-w-[600px]">

                            {/* Floating Orbit Ring */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 opacity-10"
                                style={{
                                    borderColor: C.primaryLight,
                                    animation: 'rotate 40s linear infinite',
                                }}
                            />

                            {/* Center Interactive Dashboard Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div
                                    className="w-[320px] rounded-3xl p-6 transition-all duration-500 hover:scale-105"
                                    style={{
                                        background: C.white,
                                        border: `2px solid ${C.boxBorder}`,
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                                        animation: 'float 6s ease-in-out infinite',
                                    }}
                                >
                                    {/* Dashboard Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
                                            <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
                                            <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
                                        </div>
                                        <div className="text-xs font-mono" style={{ color: C.accentBlue }}>
                                            Live Dashboard
                                        </div>
                                    </div>

                                    {/* Main Metric */}
                                    <div className="mb-6">
                                        <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: C.accentBlue }}>
                                            System Performance
                                        </div>
                                        <div className="flex items-end gap-2">
                                            <span className="text-5xl font-black" style={{ color: C.brandOrange }}>99.9</span>
                                            <span className="text-2xl font-bold mb-1" style={{ color: C.primaryDark }}>%</span>
                                        </div>
                                    </div>

                                    {/* Mini Stats Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {[
                                            { icon: HiRocketLaunch, label: 'Speed', value: 'Fast' },
                                            { icon: HiShieldCheck, label: 'Security', value: 'A+' },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="p-3 rounded-xl"
                                                style={{
                                                    background: `linear-gradient(135deg, ${C.heroBackgroundDark} 0%, ${C.white} 100%)`,
                                                    border: `1px solid ${C.boxBorder}`,
                                                }}
                                            >
                                                <item.icon size={20} color={C.brandOrange} className="mb-2" />
                                                <div className="text-xs font-semibold" style={{ color: C.accentBlue }}>
                                                    {item.label}
                                                </div>
                                                <div className="text-lg font-black" style={{ color: C.primaryDark }}>
                                                    {item.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Activity Bar */}
                                    <div className="flex items-center gap-1 h-12">
                                        {[65, 78, 82, 88, 92, 89, 94, 97, 95, 98, 96, 99].map((height, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 rounded-t transition-all duration-300 hover:opacity-100"
                                                style={{
                                                    height: `${(height / 100) * 48}px`,
                                                    background: `linear-gradient(to top, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                                                    opacity: 0.7,
                                                    animation: `slideUp 0.5s ease-out ${i * 0.05}s backwards`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Metric Cards Around Center */}

                            {/* Top Right - CPU Usage */}
                            <div
                                className="absolute top-[5%] right-[8%] z-15"
                                style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}
                            >
                                <div
                                    className="w-[140px] p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-110"
                                    style={{
                                        background: C.white,
                                        border: `2px solid ${C.boxBorder}`,
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <HiCpuChip size={24} color={C.brandOrange} />
                                        <div className="text-xs font-mono" style={{ color: C.accentBlue }}>CPU</div>
                                    </div>
                                    <div className="text-3xl font-black" style={{ color: C.primaryDark }}>45%</div>
                                    <div className="h-1.5 w-full rounded-full mt-2" style={{ background: `${C.boxBorder}` }}>
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                width: '45%',
                                                background: `linear-gradient(90deg, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Left Middle - Nodes Active */}
                            <div
                                className="absolute top-[30%] left-[0%] z-15"
                                style={{ animation: 'float 5s ease-in-out infinite 1s' }}
                            >
                                <div
                                    className="w-[160px] p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.brandOrangeDark} 100%)`,
                                        boxShadow: `0 10px 30px ${C.brandOrange}40`,
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.white }} />
                                        <div className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                            Active Now
                                        </div>
                                    </div>
                                    <div className="text-4xl font-black mb-1" style={{ color: C.white }}>250+</div>
                                    <div className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                        Global Nodes
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Right - Uptime Badge */}
                            <div
                                className="absolute bottom-[12%] right-[5%] z-15"
                                style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}
                            >
                                <div
                                    className="w-[130px] h-[130px] rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                                    style={{
                                        background: C.white,
                                        border: `3px solid ${C.brandOrange}`,
                                        boxShadow: `0 10px 30px ${C.brandOrange}30`,
                                    }}
                                >
                                    <HiShieldCheck size={32} color={C.brandOrange} className="mb-2" />
                                    <div className="text-2xl font-black" style={{ color: C.primaryDark }}>99.9%</div>
                                    <div className="text-xs font-semibold" style={{ color: C.accentBlue }}>Uptime</div>
                                </div>
                            </div>

                            {/* Bottom Left - AI Chip */}
                            <div
                                className="absolute bottom-[18%] left-[12%] z-15"
                                style={{ animation: 'float 5s ease-in-out infinite 0.8s' }}
                            >
                                <div
                                    className="w-[120px] h-[120px] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:rotate-12"
                                    style={{
                                        background: `linear-gradient(135deg, ${C.primaryLight} 0%, ${C.primaryDark} 100%)`,
                                        boxShadow: '0 10px 30px rgba(61, 66, 153, 0.3)',
                                        transform: 'rotate(-8deg)',
                                    }}
                                >
                                    <HiSparkles size={36} color={C.white} className="mb-2" />
                                    <div className="text-sm font-bold text-center" style={{ color: C.white }}>
                                        AI Powered
                                    </div>
                                </div>
                            </div>

                            {/* Floating Data Particles */}
                            {[
                                { top: '15%', left: '45%', size: 6, delay: 0 },
                                { top: '45%', right: '15%', size: 8, delay: 1 },
                                { top: '65%', left: '35%', size: 5, delay: 0.5 },
                                { top: '25%', right: '30%', size: 7, delay: 1.5 },
                                { bottom: '30%', right: '35%', size: 6, delay: 0.8 },
                            ].map((particle, i) => (
                                <div
                                    key={i}
                                    className="absolute rounded-full"
                                    style={{
                                        top: particle.top,
                                        left: particle.left,
                                        right: particle.right,
                                        bottom: particle.bottom,
                                        width: particle.size,
                                        height: particle.size,
                                        background: C.brandOrange,
                                        opacity: 0.5,
                                        animation: `pulse 3s ease-in-out infinite ${particle.delay}s`,
                                        boxShadow: `0 0 10px ${C.brandOrange}`,
                                    }}
                                />
                            ))}

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
                                <line x1="50%" y1="50%" x2="85%" y2="20%" stroke={C.primaryLight} strokeWidth="2" strokeDasharray="5,5" />
                                <line x1="50%" y1="50%" x2="10%" y2="40%" stroke={C.primaryLight} strokeWidth="2" strokeDasharray="5,5" />
                                <line x1="50%" y1="50%" x2="85%" y2="80%" stroke={C.primaryLight} strokeWidth="2" strokeDasharray="5,5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Stats Bar at Bottom */}
                <div
                    className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 1s ease-out 800ms',
                    }}
                >
                    
                </div>
            </div>

            {/* Animated Keyframes */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes floatSlow {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.3);
                    }
                }

                @keyframes rotate {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }

                @keyframes slideUp {
                    from {
                        height: 0;
                        opacity: 0;
                    }
                    to {
                        opacity: 0.7;
                    }
                }
            `}</style>
        </section>
    );
}