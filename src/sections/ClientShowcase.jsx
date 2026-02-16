import { useEffect, useRef, useState } from 'react';

const C = {
    primary: '#2B2F81',
    primaryDark: '#17194A',
    primaryLight: '#3D4299',
    accentBlue: '#5D7A7F',
    brandOrange: '#F26A21',
    brandOrangeDark: '#E4571E',
    brandGold: '#F4B63E',
    white: '#FFFFFF',
    black: '#000000',
};

// Enhanced client data with more realistic companies
const clients = [
    { name: "Microsoft", logo: "MS", industry: "Technology" },
    { name: "Amazon", logo: "AMZ", industry: "E-commerce" },
    { name: "Google", logo: "GO", industry: "Technology" },
    { name: "Meta", logo: "META", industry: "Social Media" },
    { name: "Apple", logo: "APL", industry: "Technology" },
    { name: "Netflix", logo: "NFX", industry: "Entertainment" },
    { name: "Tesla", logo: "TSL", industry: "Automotive" },
    { name: "Adobe", logo: "ADB", industry: "Software" },
    { name: "Salesforce", logo: "SFC", industry: "CRM" },
    { name: "Oracle", logo: "ORC", industry: "Database" },
    { name: "IBM", logo: "IBM", industry: "Technology" },
    { name: "Cisco", logo: "CSC", industry: "Networking" },
    { name: "Intel", logo: "INT", industry: "Hardware" },
    { name: "SAP", logo: "SAP", industry: "Enterprise" },
    { name: "Zoom", logo: "ZOM", industry: "Communication" },
];

const ClientShowcase = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    // Duplicate clients for seamless loop
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section
            ref={ref}
            className="relative py-4 md:pt-8 md:pb-4 md:pt-8 md:pb-4 overflow-hidden"
            style={{
                background: `linear-gradient(180deg, #F8F9FF 0%, ${C.white} 100%)`,
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
        >
            {/* Ambient background elements matching Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top right glow */}
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
                    style={{ background: `radial-gradient(circle, ${C.primaryLight} 0%, transparent 70%)` }}
                />
                {/* Bottom left glow */}
                <div
                    className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-15 animate-float-delayed"
                    style={{ background: `radial-gradient(circle, ${C.accentBlue} 0%, transparent 70%)` }}
                />
                {/* Center subtle glow */}
                <div
                    className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"
                    style={{
                        background: `radial-gradient(circle, ${C.brandOrange} 0%, transparent 70%)`,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative">
                    {/* Header Section */}
                    <div
                        className="text-center mb-12 md:mb-16 lg:mb-20"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 1s ease-out'
                        }}
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                            style={{
                                background: `${C.brandOrange}15`,
                                border: `1px solid ${C.brandOrange}30`
                            }}
                        >
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.brandOrange }} />
                            <span className="text-sm font-medium" style={{ color: C.brandOrange }}>
                                Trusted Worldwide
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-4 md:mb-6 px-4">
                            <span style={{ color: C.primaryDark }}>
                                Powering innovation for
                            </span>
                            <br />
                            <span className="relative inline-block mt-2">
                                <span style={{ color: C.brandOrange }}>
                                    200+ industry leaders
                                </span>
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    height="12"
                                    viewBox="0 0 400 12"
                                    style={{ opacity: 0.4 }}
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

                        {/* Subheading */}
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4" style={{ color: C.accentBlue }}>
                            Join the companies that trust us to scale their technical infrastructure
                        </p>
                    </div>

                    {/* Stats Counter - Responsive Grid */}
                   
                    {/* Infinite Scroll Client Logos - Row 1 (Left to Right) */}
                    <div
                        className="relative mb-6 md:mb-8"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 1s ease-out 400ms'
                        }}
                    >
                        {/* Gradient fade edges */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10"
                            style={{ background: `linear-gradient(to right, #F8F9FF, transparent)` }}
                        />
                        <div
                            className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10"
                            style={{ background: `linear-gradient(to left, #F8F9FF, transparent)` }}
                        />

                        <div className="overflow-hidden py-4">
                            <div className="flex animate-scroll-left">
                                {duplicatedClients.map((client, index) => (
                                    <div
                                        key={`row1-${index}`}
                                        className="flex-shrink-0 mx-2 md:mx-4 w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 flex items-center justify-center rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-2 group"
                                        style={{
                                            background: `linear-gradient(135deg, ${C.white} 0%, #F8F9FF 100%)`,
                                            border: `1px solid ${C.accentBlue}10`,
                                            boxShadow: `0 4px 16px ${C.primaryLight}10`
                                        }}
                                    >
                                        <div className="text-center px-2">
                                            <div
                                                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform"
                                                style={{
                                                    background: `linear-gradient(135deg, ${C.primaryDark} 0%, ${C.brandOrange} 100%)`,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                }}
                                            >
                                                {client.logo}
                                            </div>
                                            <div className="text-xs font-semibold tracking-wider" style={{ color: C.accentBlue }}>
                                                {client.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Infinite Scroll Client Logos - Row 2 (Right to Left) */}
                    <div
                        className="relative mb-12 md:mb-16"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 1s ease-out 600ms'
                        }}
                    >
                        {/* Gradient fade edges */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10"
                            style={{ background: `linear-gradient(to right, #F8F9FF, transparent)` }}
                        />
                        <div
                            className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10"
                            style={{ background: `linear-gradient(to left, #F8F9FF, transparent)` }}
                        />

                        <div className="overflow-hidden py-4">
                            <div className="flex animate-scroll-right">
                                {duplicatedClients.map((client, index) => (
                                    <div
                                        key={`row2-${index}`}
                                        className="flex-shrink-0 mx-2 md:mx-4 w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 flex items-center justify-center rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-rotate-2 group"
                                        style={{
                                            background: `linear-gradient(135deg, ${C.white} 0%, #F8F9FF 100%)`,
                                            border: `1px solid ${C.accentBlue}10`,
                                            boxShadow: `0 4px 16px ${C.primaryLight}10`
                                        }}
                                    >
                                        <div className="text-center px-2">
                                            <div
                                                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform"
                                                style={{
                                                    background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.primaryLight} 100%)`,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                }}
                                            >
                                                {client.logo}
                                            </div>
                                            <div className="text-xs font-semibold tracking-wider" style={{ color: C.accentBlue }}>
                                                {client.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div
                        className="text-center"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 1s ease-out 800ms'
                        }}
                    >
                        
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(-20px) scale(1.05);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(20px) scale(1.05);
                    }
                }

                @keyframes star-pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.2);
                        opacity: 0.8;
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 50s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 50s linear infinite;
                }

                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 10s ease-in-out infinite;
                }

                /* Pause animation on hover */
                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }

                /* Mobile optimization */
                @media (max-width: 640px) {
                    .animate-scroll-left {
                        animation-duration: 30s;
                    }
                    
                    .animate-scroll-right {
                        animation-duration: 30s;
                    }
                }

                /* Tablet optimization */
                @media (min-width: 641px) and (max-width: 1024px) {
                    .animate-scroll-left {
                        animation-duration: 40s;
                    }
                    
                    .animate-scroll-right {
                        animation-duration: 40s;
                    }
                }
            `}</style>
        </section>
    );
};

export default ClientShowcase;