import { useEffect, useRef, useState } from 'react';
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { 
    FaBullseye, 
    FaRocket, 
    FaGem, 
    FaHandshake, 
    FaLightbulb, 
    FaStar, 
    FaUsers 
} from 'react-icons/fa';

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

const About = () => {
    const statsRef = useRef(null);
    const [activeTab, setActiveTab] = useState('mission');
    const [counters, setCounters] = useState({
        projects: 0,
        years: 0,
        success: 0,
        clients: 0
    });

    const animateCounters = () => {
        const targets = { projects: 500, years: 12, success: 98, clients: 200 };
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        Object.keys(targets).forEach(key => {
            let current = 0;
            const increment = targets[key] / steps;
            const timer = setInterval(() => {
                current += increment;
                if (current >= targets[key]) {
                    current = targets[key];
                    clearInterval(timer);
                }
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, stepDuration);
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                        animateCounters();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const tabs = {
        mission: {
            title: "Our Mission",
            icon: FaBullseye,
            content: (
                <div className="text-left space-y-4">
                    <p className="text-[#5D7A7F] text-sm sm:text-base md:text-lg leading-relaxed">
                        We're on a mission to <strong className="text-[#F26A21]">empower businesses like yours</strong> with technology that actually works.
                    </p>
                    <p className="text-[#5D7A7F] text-sm sm:text-base md:text-lg leading-relaxed">
                        No jargon. No complexity. Just <strong className="text-[#17194A]">smart solutions</strong> that help you grow, save time, and stay ahead of the competition.
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#F26A21]/20">
                        <p className="text-[#3D4299] text-sm sm:text-base italic">
                            "We believe great technology should feel invisible—it should just work, beautifully."
                        </p>
                    </div>
                </div>
            )
        },
        vision: {
            title: "Our Vision",
            icon: FaRocket,
            content: (
                <div className="text-left space-y-4">
                    <p className="text-[#5D7A7F] text-sm sm:text-base md:text-lg leading-relaxed">
                        We dream of a world where <strong className="text-[#F26A21]">every business</strong>—big or small—has access to <strong className="text-[#17194A]">world-class technology</strong>.
                    </p>
                    <div className="bg-white/50 rounded-lg p-4 my-4">
                        <p className="text-[#5D7A7F] text-sm sm:text-base leading-relaxed">
                            <strong className="text-[#17194A]">Our Promise:</strong> We're not just building software. We're building <strong className="text-[#F26A21]">partnerships</strong> that last, solutions that scale, and success stories worth sharing.
                        </p>
                    </div>
                    <p className="text-[#5D7A7F] text-sm sm:text-base md:text-lg leading-relaxed">
                        Together, we'll unlock your business's full potential—one smart solution at a time.
                    </p>
                </div>
            )
        },
        values: {
            title: "Our Values",
            icon: FaGem,
            content: (
                <div className="text-left space-y-4">
                    <p className="text-[#5D7A7F] text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        These aren't just words on a wall. They're the <strong className="text-[#17194A]">principles we live by</strong> every single day:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-[#F26A21]/10 to-transparent rounded-lg p-4 border border-[#F26A21]/20">
                            <div className="flex items-start gap-3">
                                <FaHandshake className="text-2xl text-[#F26A21] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#17194A] mb-1">Integrity First</h4>
                                    <p className="text-sm text-[#5D7A7F]">We do what's right, not what's easy. Your trust is everything.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#3D4299]/10 to-transparent rounded-lg p-4 border border-[#3D4299]/20">
                            <div className="flex items-start gap-3">
                                <FaLightbulb className="text-2xl text-[#3D4299] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#17194A] mb-1">Innovation Always</h4>
                                    <p className="text-sm text-[#5D7A7F]">We stay curious, learn constantly, and push boundaries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#F26A21]/10 to-transparent rounded-lg p-4 border border-[#F26A21]/20">
                            <div className="flex items-start gap-3">
                                <FaStar className="text-2xl text-[#F26A21] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#17194A] mb-1">Excellence Matters</h4>
                                    <p className="text-sm text-[#5D7A7F]">Good isn't good enough. We aim for exceptional, every time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#3D4299]/10 to-transparent rounded-lg p-4 border border-[#3D4299]/20">
                            <div className="flex items-start gap-3">
                                <FaUsers className="text-2xl text-[#3D4299] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#17194A] mb-1">Teamwork Wins</h4>
                                    <p className="text-sm text-[#5D7A7F]">Your success is our success. We're in this together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    };

    return (
        <section id="about" className="bg-gradient-to-b from-white via-gray-50/50 to-white py-10 sm:py-12 md:py-16 lg:py-[2rem]">
            <Container>
                {/* Header Section - More Engaging */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#F26A21]/10 to-[#3D4299]/10 border border-[#F26A21]/20 mb-4 sm:mb-6">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F26A21] animate-pulse" />
                        <span className="text-xs sm:text-sm font-bold text-[#F26A21] tracking-wide uppercase">
                            About Us
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 px-4">
                        <span className="text-[#17194A]">We Turn Your </span>
                        <span className="bg-gradient-to-r from-[#F26A21] to-[#F26A21] bg-clip-text text-transparent">
                            Big Ideas Into Reality
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#5D7A7F] max-w-3xl mx-auto px-4">
                        Real people. Real solutions. Real results. We're here to make technology work for you.
                    </p>
                </div>

                <div className="mb-10 sm:mb-12 md:mb-16">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start mb-8 sm:mb-10 md:mb-12">
                        {/* Enhanced Animated Illustration Section */}
                        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 overflow-hidden group">
                            {/* Animated Circles Background */}
                            <div className="absolute inset-0">
                                <div className="absolute top-10 left-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-purple-300/30 rounded-full blur-xl animate-blob"></div>
                                <div className="absolute top-20 right-20 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 bg-blue-300/30 rounded-full blur-xl animate-blob animation-delay-2000"></div>
                                <div className="absolute bottom-20 left-20 w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 bg-pink-300/30 rounded-full blur-xl animate-blob animation-delay-4000"></div>
                            </div>

                            {/* Team Collaboration Illustration */}
                            <div className="absolute inset-0 flex items-center justify-center pt-4 pb-20 sm:pb-24">
                                <div className="relative scale-75 sm:scale-90 md:scale-100">
                                    {/* Central Circle - Main Hub */}
                                    <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-gradient-to-br from-[#17194A] to-[#3D4299] rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow border-2 sm:border-4 border-white">
                                        <svg className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>

                                    {/* Orbiting Elements - Team Members */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="absolute w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-orbit-1 border-2 border-purple-200" style={{ top: '-70px', left: '-70px' }}>
                                            <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                        <div className="absolute w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-orbit-2 border-2 border-blue-200" style={{ top: '-70px', right: '-70px' }}>
                                            <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                        <div className="absolute w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-orbit-3 border-2 border-pink-200" style={{ bottom: '-70px', left: '-70px' }}>
                                            <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                        <div className="absolute w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-orbit-4 border-2 border-green-200" style={{ bottom: '-70px', right: '-70px' }}>
                                            <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Connecting Lines */}
                                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 animate-spin-very-slow" viewBox="0 0 200 200">
                                        <circle cx="100" cy="100" r="75" fill="none" stroke="#3D4299" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-float">
                                <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            </div>

                            <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-4 sm:left-6 md:left-8 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-float-delayed">
                                <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>

                            {/* Stats Cards */}
                            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6" ref={statsRef}>
                                <div className="flex sm:grid sm:grid-cols-4 gap-1.5 sm:gap-2 overflow-x-auto sm:overflow-x-visible scrollbar-hide pb-2 sm:pb-0">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 min-w-[70px] sm:min-w-0">
                                        <div className="text-base sm:text-lg md:text-xl font-black text-[#F26A21]">{counters.projects}+</div>
                                        <div className="text-[9px] sm:text-[10px] md:text-xs text-[#5D7A7F] font-semibold">Projects</div>
                                    </div>
                                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 min-w-[70px] sm:min-w-0">
                                        <div className="text-base sm:text-lg md:text-xl font-black text-[#3D4299]">{counters.years}+</div>
                                        <div className="text-[9px] sm:text-[10px] md:text-xs text-[#5D7A7F] font-semibold">Years</div>
                                    </div>
                                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 min-w-[70px] sm:min-w-0">
                                        <div className="text-base sm:text-lg md:text-xl font-black text-[#F26A21]">{counters.success}%</div>
                                        <div className="text-[9px] sm:text-[10px] md:text-xs text-[#5D7A7F] font-semibold">Success</div>
                                    </div>
                                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 min-w-[70px] sm:min-w-0">
                                        <div className="text-base sm:text-lg md:text-xl font-black text-[#3D4299]">{counters.clients}+</div>
                                        <div className="text-[9px] sm:text-[10px] md:text-xs text-[#5D7A7F] font-semibold">Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Content Section - More Human */}
                        <div className="px-4 sm:px-0">
                            <p className="text-xs sm:text-sm uppercase text-[#F26A21] tracking-[0.15em] sm:tracking-[0.2em] font-bold mb-2 sm:mb-3">
                                Who We Are
                            </p>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 leading-tight">
                                <span className="text-[#17194A]">Meet the team that's </span>
                                <span className="text-[#17194A]">obsessed </span>
                                <span className="text-[#17194A]">with your success</span>
                            </h3>

                            <div className="space-y-4 text-[#5D7A7F] text-sm sm:text-base md:text-lg leading-relaxed">
                                <p>
                                    Here's the truth: We're not your typical tech company.
                                    We're a team of passionate problem-solvers who genuinely care about making your life easier.
                                </p>

                                <p>
                                    For over 12 years, we've been helping businesses just like yours
                                    cut through the noise and build solutions that actually work.
                                </p>

                                <div className="bg-gradient-to-br from-[#F26A21]/5 to-[#3D4299]/5 rounded-xl p-4 sm:p-5 border border-[#F26A21]/20 my-4">
                                    <p className="text-sm sm:text-base">
                                        <span className="text-[#F26A21] font-bold">💡 What makes us different?</span><br />
                                        We don't just build software and disappear. We stick around. We become part of your team.
                                        <strong className="text-[#17194A]"> Your wins are our wins.</strong>
                                    </p>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    {/* Interactive Tabs - Enhanced with Icons */}
                    <div className="max-w-5xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
                        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6 border-b border-gray-200">
                            {Object.keys(tabs).map((key) => {
                                const IconComponent = tabs[key].icon;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-300 border-b-2 flex items-center justify-center gap-2 ${activeTab === key
                                                ? 'border-[#F26A21] text-[#F26A21] bg-[#F26A21]/5'
                                                : 'border-transparent text-[#5D7A7F] hover:text-[#3D4299] hover:bg-gray-50'
                                            }`}
                                    >
                                        <IconComponent className="text-lg" />
                                        {tabs[key].title}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="bg-gradient-to-br from-[#F26A21]/5 to-[#3D4299]/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#F26A21]/10 shadow-lg">
                            {tabs[activeTab].content}
                        </div>
                    </div>

                    {/* Inspiring Closing Statement */}
                </div>
            </Container>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -20px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(20px, 20px) scale(1.05); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes orbit-1 {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(10px, -10px); }
                    50% { transform: translate(-5px, -15px); }
                    75% { transform: translate(-10px, -5px); }
                }
                
                @keyframes orbit-2 {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(-10px, 10px); }
                    50% { transform: translate(5px, 15px); }
                    75% { transform: translate(10px, 5px); }
                }
                
                @keyframes orbit-3 {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(15px, 5px); }
                    50% { transform: translate(5px, -10px); }
                    75% { transform: translate(-10px, 10px); }
                }
                
                @keyframes orbit-4 {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(-15px, -5px); }
                    50% { transform: translate(-5px, 10px); }
                    75% { transform: translate(10px, -10px); }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                @keyframes spin-very-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-blob {
                    animation: blob 7s ease-in-out infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .animate-orbit-1 {
                    animation: orbit-1 5s ease-in-out infinite;
                }
                
                .animate-orbit-2 {
                    animation: orbit-2 6s ease-in-out infinite;
                }
                
                .animate-orbit-3 {
                    animation: orbit-3 5.5s ease-in-out infinite;
                }
                
                .animate-orbit-4 {
                    animation: orbit-4 6.5s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
                
                .animate-spin-very-slow {
                    animation: spin-very-slow 20s linear infinite;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default About;