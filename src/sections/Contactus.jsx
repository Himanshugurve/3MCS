import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    FaLinkedin, FaTwitter, FaBehance, FaDribbble,
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle,
    FaPaperPlane, FaArrowRight, FaGithub, FaInstagram,
    FaDiscord, FaSlack, FaRocket, FaUsers, FaClock, FaGlobe
} from 'react-icons/fa';

/* ─────────────────────────────────────────────
   Color palette
───────────────────────────────────────────── */
const C = {
    primaryLight: '#3D4299',
    accentBlue: '#5D7A7F',
    brandOrange: '#F26A21',
    white: '#FFFFFF',
    black: '#000000',
    primaryDark: '#17194A',
};

/* ─────────────────────────────────────────────
   Icon Map
───────────────────────────────────────────── */
const ICON_MAP = {
    FaLinkedin, FaTwitter, FaBehance, FaDribbble,
    FaGithub, FaInstagram, FaDiscord, FaSlack,
    FaEnvelope, FaPhone, FaMapMarkerAlt,
};

/* ─────────────────────────────────────────────
   Company Information
───────────────────────────────────────────── */
const COMPANY_INFO = {
    name: '3MCS',
    tagline: 'Building Tomorrow, Today',
    description: 'We transform ideas into powerful digital experiences that drive growth and innovation.',
    address: '123 Innovation Drive, Silicon Valley, CA 94025',
    email: 'hello@3mcs.com',
    phone: '+1 (555) 123-4567',
    coordinates: { lat: 37.4419, lng: -122.1430 },
};

const SOCIAL_LINKS = [
    { icon: 'FaLinkedin', name: 'LinkedIn', url: '#', color: '#0A66C2' },
    { icon: 'FaTwitter', name: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: 'FaGithub', name: 'GitHub', url: '#', color: '#333333' },
    { icon: 'FaInstagram', name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: 'FaDribbble', name: 'Dribbble', url: '#', color: '#EA4C89' },
    { icon: 'FaBehance', name: 'Behance', url: '#', color: '#1769FF' },
];

/* ─────────────────────────────────────────────
   Validation helpers
───────────────────────────────────────────── */
const VALIDATORS = {
    name: v => !v.trim() ? 'Name is required' : '',
    email: v => !v.trim() ? 'Email is required' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Invalid email format' : '',
    subject: v => !v.trim() ? 'Subject is required' : '',
    message: v => !v.trim() ? 'Message is required' : v.trim().length < 10 ? 'Message too short (min 10 chars)' : '',
};

/* ─────────────────────────────────────────────
   InputField — MUST live OUTSIDE ContactForm
   so React never unmounts it on re-render.
   Receives everything it needs via props.
───────────────────────────────────────────── */
const InputField = React.forwardRef(function InputField(
    { name, type = 'text', placeholder, icon: Icon, value, onChange, onBlur, onFocus,
        onKeyDown, error, touched, focusedField },
    ref
) {
    const isFocused = focusedField === name;
    const hasError = error && touched;

    return (
        <div className="relative">
            <div className="relative">
                {/* Icon */}
                <div
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 z-10"
                    style={{
                        color: isFocused ? C.brandOrange : C.accentBlue,
                        opacity: isFocused ? 1 : 0.5,
                    }}
                >
                    <Icon size={16} />
                </div>

                <input
                    ref={ref}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    autoComplete="off"
                    spellCheck={false}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base"
                    style={{
                        border: `2px solid ${hasError ? '#EF4444' : isFocused ? C.brandOrange : `${C.accentBlue}20`}`,
                        outline: 'none',
                        background: isFocused ? `${C.brandOrange}05` : C.white,
                        boxShadow: isFocused ? `0 0 0 4px ${C.brandOrange}10` : 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                        color: C.black,
                    }}
                />
            </div>

            {/* Inline error */}
            {hasError && (
                <p className="text-[10px] sm:text-xs mt-1.5 ml-1 font-semibold flex items-center gap-1"
                    style={{ color: '#EF4444' }}>
                    <span>⚠</span> {error}
                </p>
            )}
        </div>
    );
});

/* ─────────────────────────────────────────────
   TextareaField — same pattern, outside form
───────────────────────────────────────────── */
const TextareaField = React.forwardRef(function TextareaField(
    { name, placeholder, value, onChange, onBlur, onFocus,
        onKeyDown, error, touched, focusedField },
    ref
) {
    const isFocused = focusedField === name;
    const hasError = error && touched;

    return (
        <div className="relative">
            <div className="relative">
                <div
                    className="absolute left-3 sm:left-4 top-3 sm:top-4 pointer-events-none transition-all duration-300 z-10"
                    style={{
                        color: isFocused ? C.brandOrange : C.accentBlue,
                        opacity: isFocused ? 1 : 0.5,
                    }}
                >
                    <FaPaperPlane size={16} />
                </div>

                <textarea
                    ref={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    rows={4}
                    placeholder={placeholder}
                    autoComplete="off"
                    spellCheck={false}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl resize-none text-sm sm:text-base"
                    style={{
                        border: `2px solid ${hasError ? '#EF4444' : isFocused ? C.brandOrange : `${C.accentBlue}20`}`,
                        outline: 'none',
                        background: isFocused ? `${C.brandOrange}05` : C.white,
                        boxShadow: isFocused ? `0 0 0 4px ${C.brandOrange}10` : 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                        color: C.black,
                    }}
                />
            </div>

            {hasError && (
                <p className="text-[10px] sm:text-xs mt-1.5 ml-1 font-semibold flex items-center gap-1"
                    style={{ color: '#EF4444' }}>
                    <span>⚠</span> {error}
                </p>
            )}
        </div>
    );
});

/* ─────────────────────────────────────────────
   Success Popup
───────────────────────────────────────────── */
function SuccessPopup({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;
        const t = setTimeout(onClose, 4000);
        return () => clearTimeout(t);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(23,25,74,0.6)', backdropFilter: 'blur(12px)', animation: 'fadeIn 0.3s ease' }}
            onClick={onClose}
        >
            <div
                className="relative max-w-sm sm:max-w-md w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden"
                style={{
                    background: C.white,
                    border: `2px solid ${C.brandOrange}20`,
                    boxShadow: `0 30px 80px rgba(242,106,33,0.3), 0 0 0 1px ${C.brandOrange}10`,
                    animation: 'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onClick={e => e.stopPropagation()}
            >
                <div className="absolute inset-0 opacity-5"
                    style={{ background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.primaryLight} 100%)` }} />

                <div className="flex justify-center mb-4 sm:mb-6 relative">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.primaryLight} 100%)`,
                            boxShadow: `0 8px 24px ${C.brandOrange}40`,
                        }}>
                        <FaCheckCircle size={36} color={C.white} />
                        <div className="absolute inset-0 rounded-full animate-ping"
                            style={{ background: `${C.brandOrange}40` }} />
                    </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-center mb-2 sm:mb-3" style={{ color: C.primaryDark }}>
                    Message Sent!
                </h3>
                <p className="text-sm sm:text-base text-center mb-4 sm:mb-6 leading-relaxed" style={{ color: C.accentBlue }}>
                    Thanks for reaching out! Our team will get back to you within 24 hours.
                </p>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: `${C.accentBlue}20` }}>
                    <div className="h-full"
                        style={{
                            background: `linear-gradient(90deg, ${C.brandOrange} 0%, ${C.primaryLight} 100%)`,
                            animation: 'progress 4s linear forwards',
                        }} />
                </div>
            </div>

            <style>{`
                @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
                @keyframes popIn   { 0% { transform:scale(0.8) translateY(20px); opacity:0 } 50% { transform:scale(1.05) translateY(0) } 100% { transform:scale(1) translateY(0); opacity:1 } }
                @keyframes progress{ from { width:0% } to { width:100% } }
            `}</style>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Floating Particle
───────────────────────────────────────────── */
function FloatingParticle({ delay = 0, duration = 3, x = 0, y = 0, size = 8 }) {
    return (
        <div
            className="absolute rounded-full opacity-20 pointer-events-none"
            style={{
                left: `${x}%`, top: `${y}%`,
                width: size, height: size,
                background: C.brandOrange,
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            }}
        >
            <style>{`
                @keyframes float {
                    0%,100% { transform:translateY(0px) translateX(0px) }
                    25%     { transform:translateY(-15px) translateX(10px) }
                    50%     { transform:translateY(-8px) translateX(-10px) }
                    75%     { transform:translateY(-15px) translateX(5px) }
                }
            `}</style>
        </div>
    );
}

/* ─────────────────────────────────────────────
   ContactForm
   Key fix: InputField / TextareaField are
   defined OUTSIDE this component so React
   never re-creates their element type on
   re-render — focus is never lost.
   Refs allow Enter → next field navigation.
───────────────────────────────────────────── */
function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setSubmit] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const [focusedField, setFocused] = useState(null);

    /* Ordered refs so Enter can jump to the next field */
    const fieldRefs = {
        name: useRef(null),
        email: useRef(null),
        subject: useRef(null),
        message: useRef(null),
    };
    const fieldOrder = ['name', 'email', 'subject', 'message'];

    /* ── handlers ── */
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error live once user starts correcting
        setErrors(prev => ({ ...prev, [name]: VALIDATORS[name](value) }));
    }, []);

    const handleBlur = useCallback((e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: VALIDATORS[name](value) }));
        setFocused(null);
    }, []);

    const handleFocus = useCallback((e) => {
        setFocused(e.target.name);
    }, []);

    /*
     * Enter key:
     *   - On any text input → focus next field
     *   - On textarea → allow normal newline (Shift+Enter)
     *   - On last field (message) → submit
     */
    const handleKeyDown = useCallback((e) => {
        if (e.key !== 'Enter') return;
        const { name } = e.target;
        const idx = fieldOrder.indexOf(name);

        if (name === 'message') {
            // Let Shift+Enter insert a newline; plain Enter submits
            if (!e.shiftKey) {
                e.preventDefault();
                e.target.form.requestSubmit();
            }
            return;
        }

        // For all other fields: Enter moves forward
        e.preventDefault();
        const next = fieldOrder[idx + 1];
        if (next && fieldRefs[next].current) {
            fieldRefs[next].current.focus();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        fieldOrder.forEach(f => {
            const err = VALIDATORS[f](formData[f]);
            if (err) newErrors[f] = err;
        });
        setErrors(newErrors);
        setTouched({ name: true, email: true, subject: true, message: true });

        if (Object.keys(newErrors).length === 0) {
            setSubmit(true);
            await new Promise(r => setTimeout(r, 1800));
            setSubmit(false);
            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTouched({});
            setErrors({});
        }
    };

    /* Shared props factory — keeps JSX DRY */
    const fieldProps = (name) => ({
        name,
        value: formData[name],
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        error: errors[name],
        touched: touched[name],
        focusedField,
        ref: fieldRefs[name],
    });

    return (
        <>
            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <InputField
                        {...fieldProps('name')}
                        placeholder="Your name *"
                        icon={FaUsers}
                    />
                    <InputField
                        {...fieldProps('email')}
                        type="email"
                        placeholder="your@email.com *"
                        icon={FaEnvelope}
                    />
                </div>

                {/* Row 2: Subject */}
                <InputField
                    {...fieldProps('subject')}
                    placeholder="Subject *"
                    icon={FaGlobe}
                />

                {/* Row 3: Message */}
                <TextareaField
                    {...fieldProps('message')}
                    placeholder="Tell us about your project… *  (Enter to send, Shift+Enter for new line)"
                />

                {/* Keyboard hint */}
                <p className="text-[10px] sm:text-xs text-center" style={{ color: `${C.accentBlue}80` }}>
                    Press <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono"
                        style={{ background: `${C.accentBlue}15`, border: `1px solid ${C.accentBlue}30` }}>Enter</kbd> to jump between fields
                </p>

                {/* Submit */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full sm:w-auto px-8 sm:px-12 md:px-16 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            background: C.brandOrange,
                            color: C.white,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            boxShadow: `0 4px 20px ${C.brandOrange}40`,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 28px ${C.brandOrange}50`; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 20px ${C.brandOrange}40`; }}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                                </>
                            )}
                        </span>
                        {/* Hover gradient overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: `linear-gradient(135deg, ${C.primaryLight} 0%, ${C.brandOrange} 100%)` }}
                        />
                    </button>
                </div>
            </form>

            <SuccessPopup isOpen={showSuccess} onClose={() => setSuccess(false)} />
        </>
    );
}

/* ─────────────────────────────────────────────
   Contact Info Card
───────────────────────────────────────────── */
function ContactInfoCard({ icon: Icon, label, value, href, type }) {
    const [hovered, setHovered] = useState(false);
    const color = type === 'email' ? C.brandOrange : type === 'phone' ? C.primaryLight : C.accentBlue;

    return (
        <a
            href={href}
            target={type === 'location' ? '_blank' : undefined}
            rel={type === 'location' ? 'noopener noreferrer' : undefined}
            className="group block p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-500"
            style={{
                background: hovered ? `linear-gradient(135deg, ${color}10 0%, ${color}05 100%)` : `${C.accentBlue}05`,
                border: `2px solid ${hovered ? `${color}40` : `${C.accentBlue}10`}`,
                transform: hovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hovered ? `0 12px 30px ${color}20` : '0 4px 12px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setTimeout(() => setHovered(false), 300)}
        >
            <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                    style={{
                        background: hovered ? `linear-gradient(135deg, ${color} 0%, ${color}DD 100%)` : `${color}15`,
                        color: hovered ? C.white : color,
                        transform: hovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                        boxShadow: hovered ? `0 6px 12px ${color}30` : 'none',
                    }}>
                    <Icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-1.5"
                        style={{ color: C.accentBlue }}>{label}</p>
                    <p className="font-bold text-sm sm:text-base break-words transition-colors duration-300"
                        style={{ color: hovered ? color : C.black }}>{value}</p>
                </div>
                <FaArrowRight size={14} className="flex-shrink-0 transition-all duration-300"
                    style={{ color, opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(-8px)' }} />
            </div>
        </a>
    );
}

/* ─────────────────────────────────────────────
   Main Contact Section
───────────────────────────────────────────── */
export default function ContactUs() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    /* Safe particle count — avoids window reference during SSR */
    const particleCount = (typeof window !== 'undefined' && window.innerWidth < 640) ? 6 : 12;

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${C.white} 0%, #F8F9FF 50%, ${C.white} 100%)` }}
        >
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-full max-w-xl sm:max-w-2xl aspect-square rounded-full blur-3xl opacity-15 sm:opacity-20"
                    style={{ background: `radial-gradient(circle, ${C.primaryLight} 0%, transparent 70%)` }} />
                <div className="absolute -bottom-40 -left-40 w-full max-w-xl sm:max-w-2xl aspect-square rounded-full blur-3xl opacity-10 sm:opacity-15"
                    style={{ background: `radial-gradient(circle, ${C.brandOrange} 0%, transparent 70%)` }} />

                {[...Array(particleCount)].map((_, i) => (
                    <FloatingParticle key={i}
                        delay={i * 0.3} duration={3 + (i % 3)}
                        x={10 + (i * 7.5) % 80} y={10 + (i * 11) % 80}
                        size={3 + (i % 4) * 2} />
                ))}

                <svg className="absolute inset-0 w-full h-full opacity-15 sm:opacity-20">
                    <defs>
                        <pattern id="contact-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <circle cx="25" cy="25" r="1" fill={C.accentBlue} opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                >
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
                        style={{
                            background: `linear-gradient(135deg, ${C.brandOrange}15 0%, ${C.brandOrange}05 100%)`,
                            border: `1px solid ${C.brandOrange}30`,
                        }}>
                        <div className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                style={{ background: C.brandOrange }} />
                            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3"
                                style={{ background: C.brandOrange }} />
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase" style={{ color: C.brandOrange }}>
                            Let's Connect
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
                        <span style={{ color: C.primaryDark }}>Get in</span>{' '}
                        <span className="relative inline-block" style={{ color: C.brandOrange }}>
                            Touch
                            <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="8" viewBox="0 0 300 12">
                                <path d="M0 6 Q75 2, 150 6 T300 6"
                                    stroke={C.brandOrange} strokeWidth="3" fill="none" opacity="0.4" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
                        style={{ color: C.accentBlue }}>{COMPANY_INFO.description}</p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">

                    {/* Left: Company info */}
                    <div
                        className="lg:col-span-2 space-y-4 sm:space-y-6"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
                            transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.2s',
                        }}
                    >
                        {/* Brand card */}
                        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                            style={{
                                background: `linear-gradient(135deg, ${C.primaryDark} 0%, ${C.primaryLight} 100%)`,
                                boxShadow: `0 12px 40px ${C.primaryDark}20`,
                            }}>
                            <div className="mb-5 sm:mb-6">
                                <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: C.white }}>
                                    {COMPANY_INFO.name}
                                </h3>
                                <p className="text-base sm:text-lg font-semibold" style={{ color: `${C.white}80` }}>
                                    {COMPANY_INFO.tagline}
                                </p>
                            </div>

                            <div className="mb-5 sm:mb-6">
                                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4"
                                    style={{ color: `${C.white}70` }}>Follow Us</p>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {SOCIAL_LINKS.map((social) => {
                                        const SocialIcon = ICON_MAP[social.icon];
                                        return (
                                            <a key={social.name} href={social.url}
                                                target="_blank" rel="noopener noreferrer"
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                                style={{ background: `${C.white}15`, border: `2px solid ${C.white}20`, color: C.white }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.background = C.white;
                                                    e.currentTarget.style.color = social.color;
                                                    e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}40`;
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.background = `${C.white}15`;
                                                    e.currentTarget.style.color = C.white;
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                                title={social.name}>
                                                {SocialIcon && <SocialIcon size={19} />}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="h-px w-full mb-5 sm:mb-6" style={{ background: `${C.white}20` }} />

                            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: `${C.white}80` }}>
                                We're always excited to discuss new projects and opportunities.
                                Drop us a message and let's create something amazing together!
                            </p>
                        </div>

                        {/* Contact detail cards */}
                        <div className="space-y-3 sm:space-y-4">
                            <ContactInfoCard icon={FaEnvelope} label="Email"
                                value={COMPANY_INFO.email} href={`mailto:${COMPANY_INFO.email}`} type="email" />
                            <ContactInfoCard icon={FaPhone} label="Phone"
                                value={COMPANY_INFO.phone} href={`tel:${COMPANY_INFO.phone}`} type="phone" />
                            <ContactInfoCard icon={FaMapMarkerAlt} label="Location"
                                value={COMPANY_INFO.address}
                                href={`https://www.google.com/maps/dir/?api=1&destination=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}`}
                                type="location" />
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div
                        className="lg:col-span-3"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(40px)',
                            transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s',
                        }}
                    >
                        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 h-full"
                            style={{
                                background: C.white,
                                border: `2px solid ${C.accentBlue}10`,
                                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                            }}>
                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-2xl sm:text-3xl font-black mb-2 sm:mb-3" style={{ color: C.primaryDark }}>
                                    Send us a message
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed" style={{ color: C.accentBlue }}>
                                    Fill out the form and we'll get back to you within 24 hours
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div
                    className="rounded-2xl sm:rounded-3xl overflow-hidden"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'all 0.8s ease 0.6s',
                        border: `2px solid ${C.accentBlue}10`,
                        boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                    }}
                >
                    <div className="relative" style={{ height: 300 }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395894899586!2d-122.14525668469204!3d37.44189897982301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb28416493a7%3A0x3a6f3e9f4bb9e4d5!2sStanford%20University!5e0!3m2!1sen!2sus!4v1625253235456!5m2!1sen!2sus"
                            width="100%" height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                            allowFullScreen loading="lazy" title="Company Location"
                        />

                        <div
                            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-xl"
                            style={{
                                background: 'rgba(255,255,255,0.98)',
                                border: `2px solid ${C.brandOrange}20`,
                                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                            }}
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                                <div>
                                    <p className="font-black text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1"
                                        style={{ color: C.primaryDark }}>{COMPANY_INFO.name}</p>
                                    <p className="text-xs sm:text-sm font-semibold" style={{ color: C.accentBlue }}>
                                        Silicon Valley, California
                                    </p>
                                </div>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="group px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center hover:scale-105 transition-all duration-300"
                                    style={{ background: C.brandOrange, color: C.white, boxShadow: `0 4px 16px ${C.brandOrange}40` }}
                                >
                                    Get Directions
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}