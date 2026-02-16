import React, { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────
   Palette
───────────────────────────────────── */
const C = {
    navy: '#2B2F81',
    teal: '#5D7A7F',
    orange: '#F26A21',
    brandOrange: '#F26A21',
    dark: '#17194A',
    bg: '#F8F7FF',        // very light lavender-white
    card: '#FFFFFF',
    border: '#E8E9F5',
    border2: '#C5C7E8',
    muted: '#6B7280',
    sub: '#9CA3AF',
    ink: '#17194A',
};

/* ─────────────────────────────────────
   Count-up hook
───────────────────────────────────── */
function useCountUp(target, duration = 1600, start = false) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!start) return;
        let t0 = null;
        const tick = (ts) => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / duration, 1);
            setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [start, target, duration]);
    return val;
}

/* ─────────────────────────────────────
   Service data
───────────────────────────────────── */
const SERVICES = [
    {
        num: '01',
        title: 'Software Development',
        tagline: 'Built to scale, designed to last.',
        description:
            'From MVP to enterprise-grade platforms, we architect tailor-made software that evolves with your business. Every line of code is optimised for performance, security, and maintainability.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        stats: [
            { label: 'Projects Shipped', value: 320, suffix: '+' },
            { label: 'Avg. Delivery', value: 6, suffix: 'wk' },
        ],
        tags: ['React', 'Node.js', 'Python', 'Go', 'PostgreSQL'],
        accentColor: C.navy,
        highlight: false,
    },
    {
        num: '02',
        title: 'Cloud Infrastructure',
        tagline: '99.99% uptime. Zero compromise.',
        description:
            'We design and manage battle-tested cloud architectures on AWS, Azure & GCP — from microservices and Kubernetes clusters to serverless pipelines and automated CI/CD workflows.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        stats: [
            { label: 'Uptime SLA', value: 99, suffix: '.9%' },
            { label: 'Cost Savings', value: 40, suffix: '%' },
        ],
        tags: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'Docker'],
        accentColor: C.teal,
        highlight: true,   // featured card — larger
    },
    {
        num: '03',
        title: 'Data Analytics & AI',
        tagline: 'Your data, finally working for you.',
        description:
            'Unlock actionable intelligence from raw data. We build custom ML models, real-time dashboards, and AI-driven automation that turn information overload into competitive advantage.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        stats: [
            { label: 'Models Deployed', value: 85, suffix: '+' },
            { label: 'Data Points/day', value: 2, suffix: 'B+' },
        ],
        tags: ['TensorFlow', 'PyTorch', 'Spark', 'Looker', 'dbt'],
        accentColor: C.orange,
        highlight: false,
    },
];

/* ─────────────────────────────────────
   Process steps with 3D-style SVG icons
───────────────────────────────────── */
const PROCESS = [
    {
        step: '01',
        label: 'Discovery',
        icon: (
            <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* 3D Compass/Navigation icon */}
                <defs>
                    <linearGradient id="grad-discovery" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="url(#grad-discovery)" opacity="0.2" />
                <circle cx="32" cy="32" r="22" fill="url(#grad-discovery)" opacity="0.3" />
                <circle cx="32" cy="32" r="16" fill="url(#grad-discovery)" />
                <path d="M32 16 L38 28 L32 32 L26 28 Z" fill="#fff" opacity="0.9" />
                <path d="M32 48 L26 36 L32 32 L38 36 Z" fill="#fff" opacity="0.6" />
                <circle cx="32" cy="32" r="3" fill="#fff" />
            </svg>
        )
    },
    {
        step: '02',
        label: 'Architecture',
        icon: (
            <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* 3D Building blocks */}
                <defs>
                    <linearGradient id="grad-arch" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d="M20 40 L32 32 L44 40 L44 52 L32 60 L20 52 Z" fill="url(#grad-arch)" opacity="0.3" />
                <path d="M20 28 L32 20 L44 28 L44 40 L32 48 L20 40 Z" fill="url(#grad-arch)" opacity="0.5" />
                <path d="M20 16 L32 8 L44 16 L44 28 L32 36 L20 28 Z" fill="url(#grad-arch)" />
                <path d="M32 8 L44 16 L44 28 L32 36 Z" fill="#1e40af" opacity="0.4" />
                <path d="M26 12 L30 14 L30 18 L26 16 Z" fill="#fff" opacity="0.8" />
                <path d="M34 12 L38 14 L38 18 L34 16 Z" fill="#fff" opacity="0.8" />
            </svg>
        )
    },
    {
        step: '03',
        label: 'Build',
        icon: (
            <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* 3D Hammer/Tools */}
                <defs>
                    <linearGradient id="grad-build" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <rect x="14" y="30" width="12" height="24" rx="2" fill="url(#grad-build)" opacity="0.3" />
                <rect x="14" y="24" width="12" height="20" rx="2" fill="url(#grad-build)" />
                <rect x="18" y="18" width="4" height="8" fill="#b45309" />
                <rect x="30" y="12" width="20" height="8" rx="2" fill="url(#grad-build)" />
                <rect x="30" y="8" width="20" height="8" rx="2" fill="url(#grad-build)" opacity="0.5" />
                <circle cx="45" cy="12" r="2" fill="#fff" opacity="0.6" />
            </svg>
        )
    },
    {
        step: '04',
        label: 'Test & QA',
        icon: (
            <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* 3D Lab Flask */}
                <defs>
                    <linearGradient id="grad-test" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d="M24 10 L24 28 L16 48 L48 48 L40 28 L40 10 Z" fill="url(#grad-test)" opacity="0.2" />
                <path d="M26 12 L26 30 L18 48 L46 48 L38 30 L38 12 Z" fill="url(#grad-test)" opacity="0.4" />
                <path d="M28 14 L28 32 L22 46 L42 46 L36 32 L36 14 Z" fill="url(#grad-test)" />
                <rect x="26" y="10" width="12" height="4" rx="1" fill="#047857" />
                <circle cx="28" cy="38" r="2" fill="#fff" opacity="0.6" />
                <circle cx="36" cy="40" r="1.5" fill="#fff" opacity="0.6" />
                <circle cx="32" cy="42" r="1" fill="#fff" opacity="0.8" />
            </svg>
        )
    },
    {
        step: '05',
        label: 'Deploy',
        icon: (
            <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* 3D Rocket */}
                <defs>
                    <linearGradient id="grad-deploy" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#db2777', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <ellipse cx="32" cy="50" rx="8" ry="3" fill="#9333ea" opacity="0.3" />
                <path d="M24 50 L20 56 L28 54 Z" fill="#f59e0b" opacity="0.7" />
                <path d="M40 50 L44 56 L36 54 Z" fill="#f59e0b" opacity="0.7" />
                <path d="M26 16 L32 6 L38 16 L38 48 L26 48 Z" fill="url(#grad-deploy)" />
                <ellipse cx="32" cy="16" rx="6" ry="4" fill="#9333ea" />
                <circle cx="32" cy="28" r="3" fill="#fff" opacity="0.4" />
                <rect x="28" y="36" width="8" height="8" rx="1" fill="#fff" opacity="0.3" />
            </svg>
        )
    },
    {
        step: '06',
        label: 'Support',
        icon: (
            <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* 3D Handshake/Support hands */}
                <defs>
                    <linearGradient id="grad-support" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="24" fill="url(#grad-support)" opacity="0.2" />
                <path d="M16 32 Q16 24, 24 24 L32 24 L32 32 L24 40 Q16 40, 16 32 Z" fill="url(#grad-support)" opacity="0.6" />
                <path d="M48 32 Q48 24, 40 24 L32 24 L32 32 L40 40 Q48 40, 48 32 Z" fill="url(#grad-support)" />
                <circle cx="22" cy="28" r="2" fill="#fff" opacity="0.8" />
                <circle cx="42" cy="28" r="2" fill="#fff" opacity="0.8" />
                <path d="M28 36 Q32 40, 36 36" stroke="#fff" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>
        )
    },
];

/* ─────────────────────────────────────
   Service Card
───────────────────────────────────── */
function ServiceCard({ service, visible, index, onExploreClick }) {
    const [hovered, setHovered] = useState(false);
    const s0 = useCountUp(service.stats[0].value, 1400, visible);
    const s1 = useCountUp(service.stats[1].value, 1600, visible);
    const counts = [s0, s1];

    const isHighlight = service.highlight;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative rounded-2xl flex flex-col transition-all duration-500 overflow-hidden flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto"
            style={{
                background: isHighlight ? C.dark : C.card,
                border: `1.5px solid ${hovered ? service.accentColor : (isHighlight ? '#2E3270' : C.border)}`,
                boxShadow: hovered ? `0 16px 48px ${service.accentColor}28` : '0 2px 16px rgba(23,25,74,0.06)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                padding: isHighlight ? '1.5rem' : '1.25rem',
                opacity: visible ? 1 : 0,
                translate: visible ? '0 0' : '0 24px',
                transition: `opacity 0.5s ease ${index * 0.15}s, translate 0.5s ease ${index * 0.15}s,
                       transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease`,
            }}
        >
            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 h-[3px] rounded-t-2xl transition-all duration-500"
                style={{
                    background: service.accentColor,
                    width: hovered ? '100%' : isHighlight ? '60%' : '40%',
                }}
            />

            {/* Number + icon row */}
            <div className="flex items-start justify-between mb-4">
                <span
                    className="text-3xl sm:text-4xl font-black leading-none"
                    style={{ color: isHighlight ? `${service.accentColor}30` : `${service.accentColor}18` }}
                >
                    {service.num}
                </span>
                <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                        background: isHighlight ? `${service.accentColor}22` : `${service.accentColor}12`,
                        color: service.accentColor,
                        border: `1px solid ${service.accentColor}30`,
                    }}
                >
                    {service.icon}
                </div>
            </div>

            {/* Title + tagline */}
            <h3
                className="text-lg sm:text-xl font-extrabold mb-1 leading-tight"
                style={{ color: isHighlight ? '#FFFFFF' : C.ink }}
            >
                {service.title}
            </h3>
            <p
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: service.accentColor }}
            >
                {service.tagline}
            </p>

            {/* Description */}
            <p
                className="text-xs sm:text-sm leading-relaxed mb-4 flex-1"
                style={{ color: isHighlight ? '#9CA3AF' : C.muted }}
            >
                {service.description}
            </p>

            {/* Stats row */}
            <div
                className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 rounded-xl p-2.5 sm:p-3"
                style={{
                    background: isHighlight ? '#FFFFFF0A' : `${service.accentColor}08`,
                    border: `1px solid ${isHighlight ? '#FFFFFF12' : `${service.accentColor}18`}`,
                }}
            >
                {service.stats.map((stat, i) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-lg sm:text-xl font-black leading-none mb-0.5" style={{ color: service.accentColor }}>
                            {counts[i]}{stat.suffix}
                        </p>
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-wider"
                            style={{ color: isHighlight ? '#6B7280' : C.sub }}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold transition-colors duration-300"
                        style={{
                            background: hovered ? `${service.accentColor}18` : (isHighlight ? '#FFFFFF0A' : `${C.navy}0A`),
                            color: hovered ? service.accentColor : (isHighlight ? '#9CA3AF' : C.muted),
                            border: `1px solid ${hovered ? `${service.accentColor}40` : (isHighlight ? '#FFFFFF12' : C.border)}`,
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA */}
            <button
                onClick={onExploreClick}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-300 mt-auto"
                style={{ color: service.accentColor }}
            >
                Explore Service
                <span
                    className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-300"
                    style={{
                        background: hovered ? service.accentColor : `${service.accentColor}18`,
                        color: hovered ? '#fff' : service.accentColor,
                        transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                    }}
                >
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </button>
        </div>
    );
}

/* ─────────────────────────────────────
   Main Section
───────────────────────────────────── */
const Services = () => {
    const [visible, setVisible] = useState(false);
    const [activeProcess, setActive] = useState(null);
    const sectionRef = useRef(null);
    const processRef = useRef(null);
    const [arrowProgress, setArrowProgress] = useState(0);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    // Animated arrow progress
    useEffect(() => {
        if (!visible) return;
        const interval = setInterval(() => {
            setArrowProgress(prev => {
                if (prev >= 100) return 0;
                return prev + 0.5;
            });
        }, 30);
        return () => clearInterval(interval);
    }, [visible]);

    const handleExploreService = (e) => {
        e.preventDefault();
        const technologiesSection = document.getElementById('technologies');
        if (technologiesSection) {
            technologiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleBookCall = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleKnowMore = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative py-12 sm:py-16 md:py-8 lg:py-24 overflow-hidden"
            style={{ background: C.bg }}
        >
            {/* Background geometry */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-full max-w-xl aspect-square rounded-full blur-3xl"
                    style={{ background: C.navy, opacity: 0.05 }} />
                <div className="absolute bottom-20 -left-24 w-96 h-96 rounded-full blur-3xl"
                    style={{ background: C.teal, opacity: 0.07 }} />
                {/* Diagonal grid lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M 48 0 L 0 0 0 48" fill="none" stroke={C.navy} strokeWidth="0.4" strokeOpacity="0.07" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ════ HEADER ════ */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease',
                        }}
                    >
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <div className="h-px w-6 sm:w-8" style={{ background: C.orange }} />
                            <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase" style={{ color: C.teal }}>
                                OUR SERVICES
                            </p>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]"
                            style={{ color: C.ink }}>
                            Expertise that powers
                            <br />
                            your{' '}
                            <span
                                className="relative inline-block"
                                style={{ color: C.brandOrange }}
                            >
                                digital transformation

                                <svg
                                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                                    height="8"
                                    viewBox="0 0 400 12"
                                    preserveAspectRatio="none"
                                    style={{
                                        opacity: visible ? 0.6 : 0,
                                        transition: "opacity 0.6s ease 0.4s"
                                    }}
                                >
                                    <path
                                        d="M0 6 Q100 0, 200 6 T400 6"
                                        stroke={C.brandOrange}
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    {/* Right side — trust badge strip */}
                    <div
                        className="flex flex-row lg:flex-col gap-2 sm:gap-3 flex-shrink-0 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(20px)',
                            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                        }}
                    >
                        {[
                            { icon: '🏆', label: 'Top Rated Agency 2024' },
                            { icon: '🔒', label: 'ISO 27001 Certified' },
                            { icon: '⚡', label: 'Sub-48hr Kickoff' },
                        ].map(({ icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl whitespace-nowrap flex-shrink-0"
                                style={{
                                    background: C.card,
                                    border: `1px solid ${C.border}`,
                                    boxShadow: '0 2px 8px rgba(23,25,74,0.05)',
                                }}
                            >
                                <span className="text-sm sm:text-base">{icon}</span>
                                <span className="text-xs sm:text-sm font-semibold" style={{ color: C.ink }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ════ CARDS - Horizontal scroll on mobile, grid on desktop ════ */}
                <div className="mb-10 sm:mb-12 lg:mb-16">
                    {/* Mobile: Horizontal scroll */}
                    <div className="md:hidden flex gap-4 overflow-x-auto pb-4 px-1 -mx-1 scrollbar-hide">
                        {SERVICES.map((service, i) => (
                            <ServiceCard
                                key={service.num}
                                service={service}
                                visible={visible}
                                index={i}
                                onExploreClick={handleExploreService}
                            />
                        ))}
                    </div>

                    {/* Desktop: Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-6">
                        {SERVICES.map((service, i) => (
                            <ServiceCard
                                key={service.num}
                                service={service}
                                visible={visible}
                                index={i}
                                onExploreClick={handleExploreService}
                            />
                        ))}
                    </div>
                </div>

                {/* ════ PROCESS STRIP ════ */}
                <div
                    ref={processRef}
                    className="rounded-2xl p-4 sm:p-6 md:p-8 relative"
                    style={{
                        background: C.card,
                        border: `1.5px solid ${C.border}`,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
                    }}
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
                        {/* Label */}
                        <div className="flex-shrink-0">
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1"
                                style={{ color: C.teal }}>Our Process</p>
                            <p className="text-base sm:text-lg font-semibold" style={{ color: C.ink }}>
                                How we deliver
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px self-stretch"
                            style={{ background: C.border }} />

                        {/* Steps with animated arrow */}
                        <div className="flex-1 relative">
                            {/* Animated Arrow Path - Hidden on mobile */}
                            <svg
                                className="hidden md:block absolute top-[-0.5rem] left-0 w-full h-20 pointer-events-none"
                                style={{ zIndex: 0 }}
                                preserveAspectRatio="none"
                                viewBox="0 0 100 2"
                            >
                                <defs>
                                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: C.navy, stopOpacity: 0.3 }} />
                                        <stop offset="50%" style={{ stopColor: C.teal, stopOpacity: 0.5 }} />
                                        <stop offset="100%" style={{ stopColor: C.orange, stopOpacity: 0.7 }} />
                                    </linearGradient>
                                </defs>

                                {/* Background path */}
                                <line
                                    x1="8" y1="1" x2="92" y2="1"
                                    stroke={C.border}
                                    strokeWidth="0.15"
                                    strokeDasharray="1 1"
                                />

                                {/* Animated progress line */}
                                <line
                                    x1="8" y1="1"
                                    x2={8 + (84 * arrowProgress / 100)}
                                    y2="1"
                                    stroke="url(#arrowGradient)"
                                    strokeWidth="0.25"
                                    strokeLinecap="round"
                                />

                                {/* Animated arrowhead */}
                                <g transform={`translate(${8 + (84 * arrowProgress / 100)}, 1)`}>
                                    <polygon
                                        points="-0.3,-0.2 0.3,0 -0.3,0.2"
                                        fill={C.orange}
                                        opacity="0.8"
                                    />
                                    <circle
                                        cx="0"
                                        cy="0"
                                        r="0.15"
                                        fill={C.orange}
                                        opacity="0.6"
                                    >
                                        <animate
                                            attributeName="r"
                                            values="0.15;0.25;0.15"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0.6;0.2;0.6"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </g>
                            </svg>

                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 relative" style={{ zIndex: 1 }}>
                                {PROCESS.map((p, i) => (
                                    <div
                                        key={p.step}
                                        className="flex flex-col items-center text-center cursor-pointer group"
                                        onMouseEnter={() => setActive(i)}
                                        onMouseLeave={() => setActive(null)}
                                    >
                                        {/* 3D Icon Circle */}
                                        <div
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1.5 sm:mb-2 transition-all duration-300 relative overflow-hidden"
                                            style={{
                                                background: activeProcess === i
                                                    ? `linear-gradient(145deg, ${C.navy}, ${C.teal})`
                                                    : `linear-gradient(145deg, #ffffff, ${C.bg})`,
                                                border: `2px solid ${activeProcess === i ? C.navy : C.border}`,
                                                transform: activeProcess === i ? 'translateY(-4px) scale(1.15)' : 'translateY(0) scale(1)',
                                                boxShadow: activeProcess === i
                                                    ? `0 8px 20px rgba(23,25,74,0.3), inset 0 -2px 8px rgba(0,0,0,0.1)`
                                                    : '0 4px 12px rgba(23,25,74,0.12), inset 0 -2px 4px rgba(0,0,0,0.05)',
                                            }}
                                        >
                                            <div className="w-7 h-7 sm:w-9 sm:h-9 transition-transform duration-300"
                                                style={{
                                                    transform: activeProcess === i ? 'scale(1.1) rotateY(15deg)' : 'scale(1)',
                                                    filter: activeProcess === i ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none',
                                                }}>
                                                {p.icon}
                                            </div>
                                        </div>

                                        {/* Step number */}
                                        <span
                                            className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest mb-0.5"
                                            style={{ color: activeProcess === i ? C.orange : C.sub }}
                                        >
                                            {p.step}
                                        </span>
                                        {/* Label */}
                                        <span
                                            className="text-[10px] sm:text-[11px] font-semibold leading-tight"
                                            style={{ color: activeProcess === i ? C.ink : C.muted }}
                                        >
                                            {p.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ════ BOTTOM CTA ROW ════ */}
                <div
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                    style={{
                        background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s',
                    }}
                >
                    <div className="flex-1">
                        <p className="text-white font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                            Not sure which service fits your needs?
                        </p>
                        <p className="text-xs sm:text-sm mt-1" style={{ color: '#9CA3AF' }}>
                            Book a free 30-minute strategy session with our experts.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto flex-shrink-0">
                        <button
                            onClick={handleBookCall}
                            className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold text-white transition-all w-full sm:w-auto"
                            style={{ background: C.orange, boxShadow: `0 4px 20px ${C.orange}44` }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                            Book a Free Call
                        </button>
                        <button
                            onClick={handleKnowMore}
                            className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all w-full sm:w-auto"
                            style={{
                                background: 'transparent',
                                color: '#E5E7EB',
                                border: `1.5px solid #FFFFFF25`,
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF12'; e.currentTarget.style.borderColor = '#FFFFFF40'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#FFFFFF25'; }}
                        >
                            know more
                        </button>
                    </div>
                </div>

            </div>

            {/* Custom scrollbar hide for webkit browsers */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Services;