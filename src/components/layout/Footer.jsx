import React, { useState } from 'react';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaDribbble,
    FaBehance,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaArrowRight,
    FaRocket,
    FaCode,
    FaShieldAlt,
    FaChartLine,
    FaUsers,
    FaBriefcase,
    FaBlog,
    FaQuestionCircle,
    FaHeart
} from 'react-icons/fa';

/* ─────────────────────────────────────────────
   Color palette - Matching ContactUs
───────────────────────────────────────────── */
const C = {
    primaryLight: '#3D4299',
    accentBlue: '#5D7A7F',
    brandOrange: '#F26A21',
    white: '#FFFFFF',
    black: '#000000',
    primaryDark: '#17194A',
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
    }
};

/* ─────────────────────────────────────────────
   Company Information - Matching ContactUs
───────────────────────────────────────────── */
const COMPANY_INFO = {
    name: '3MCS',
    tagline: 'Building Tomorrow, Today',
    description: 'Leading provider of enterprise-grade IT solutions and innovative digital experiences that transform businesses.',
    address: '123 Innovation Drive, Silicon Valley, CA 94025',
    email: 'hello@3mcs.com',
    phone: '+1 (555) 123-4567',
};

const SOCIAL_LINKS = [
    { icon: FaLinkedin, name: 'LinkedIn', url: '#', color: '#0A66C2' },
    { icon: FaTwitter, name: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: FaGithub, name: 'GitHub', url: '#', color: '#333333' },
    { icon: FaInstagram, name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: FaDribbble, name: 'Dribbble', url: '#', color: '#EA4C89' },
    { icon: FaBehance, name: 'Behance', url: '#', color: '#1769FF' },
];

const SERVICES = [
    { name: 'Cloud Solutions', icon: FaRocket, url: '#services' },
    { name: 'Cyber Security', icon: FaShieldAlt, url: '#services' },
    { name: 'AI & Data Science', icon: FaChartLine, url: '#services' },
    { name: 'Web Development', icon: FaCode, url: '#services' },
];

const COMPANY_LINKS = [
    { name: 'About Us', icon: FaUsers, url: '#about' },
    { name: 'Our Process', icon: FaBriefcase, url: '#process' },
    { name: 'Careers', icon: FaRocket, url: '#careers' },
    { name: 'Blog', icon: FaBlog, url: '#blog' },
];

const LEGAL_LINKS = [
    { name: 'Privacy Policy', url: '#privacy' },
    { name: 'Terms of Service', url: '#terms' },
    { name: 'Cookie Policy', url: '#cookies' },
];

/* ─────────────────────────────────────────────
   Newsletter Subscription Component
───────────────────────────────────────────── */
function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <div>
            <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">
                Stay Updated
            </h3>
            <p className="text-[11px] sm:text-xs lg:text-sm mb-3 sm:mb-4" style={{ color: C.gray[400] }}>
                Subscribe to our newsletter for the latest updates.
            </p>

            {submitted ? (
                <div
                    className="p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3"
                    style={{
                        background: `${C.brandOrange}15`,
                        border: `1px solid ${C.brandOrange}30`,
                    }}
                >
                    <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                        style={{ background: C.brandOrange }}
                    >
                        <FaArrowRight size={12} color={C.white} />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: C.brandOrange }}>
                        Thanks for subscribing!
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholder="your@email.com"
                        required
                        className="w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm transition-all duration-300"
                        style={{
                            background: C.gray[800],
                            border: `2px solid ${focused ? C.brandOrange : C.gray[700]}`,
                            color: C.white,
                            outline: 'none',
                        }}
                    />
                    <button
                        type="submit"
                        className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                            background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.primaryLight} 100%)`,
                            color: C.white,
                        }}
                    >
                        <FaArrowRight size={12} className="sm:hidden" />
                        <FaArrowRight size={14} className="hidden sm:block" />
                    </button>
                </form>
            )}
        </div>
    );
}

/* ─────────────────────────────────────────────
   Social Link Component
───────────────────────────────────────────── */
function SocialLink({ icon: Icon, name, url, color }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            style={{
                background: hovered ? C.white : `${C.white}10`,
                border: `2px solid ${hovered ? C.white : `${C.white}15`}`,
                color: hovered ? color : C.white,
                boxShadow: hovered ? `0 8px 20px ${color}40` : 'none',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title={name}
        >
            <Icon size={14} className="sm:hidden" />
            <Icon size={18} className="hidden sm:block lg:hidden" />
            <Icon size={20} className="hidden lg:block" />
        </a>
    );
}

/* ─────────────────────────────────────────────
   Contact Info Item Component
───────────────────────────────────────────── */
function ContactInfoItem({ icon: Icon, text, href, type }) {
    const [hovered, setHovered] = useState(false);

    const getColor = () => {
        switch (type) {
            case 'email': return C.brandOrange;
            case 'phone': return C.primaryLight;
            case 'location': return C.accentBlue;
            default: return C.brandOrange;
        }
    };

    const color = getColor();

    return (
        <a
            href={href}
            target={type === 'location' ? '_blank' : undefined}
            rel={type === 'location' ? 'noopener noreferrer' : undefined}
            className="flex items-start gap-2 sm:gap-3 group transition-all duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                    background: hovered ? color : `${color}20`,
                    color: hovered ? C.white : color,
                }}
            >
                <Icon size={14} className="sm:hidden" />
                <Icon size={16} className="hidden sm:block lg:hidden" />
                <Icon size={18} className="hidden lg:block" />
            </div>
            <span
                className="text-[11px] sm:text-xs lg:text-sm leading-relaxed transition-colors duration-300"
                style={{
                    color: hovered ? C.white : C.gray[300],
                }}
            >
                {text}
            </span>
        </a>
    );
}

/* ─────────────────────────────────────────────
   Link Item Component
───────────────────────────────────────────── */
function LinkItem({ icon: Icon, name, url }) {
    const [hovered, setHovered] = useState(false);

    return (
        <li>
            <a
                href={url}
                className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs lg:text-sm transition-all duration-300 group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    color: hovered ? C.brandOrange : C.gray[300],
                }}
            >
                {Icon && (
                    <Icon
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:block hidden"
                        style={{ color: C.brandOrange }}
                    />
                )}
                <span>{name}</span>
            </a>
        </li>
    );
}

/* ─────────────────────────────────────────────
   Main Footer Component
───────────────────────────────────────────── */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative overflow-hidden"
            style={{
                background: `linear-gradient(180deg, ${C.primaryDark} 0%, ${C.gray[900]} 100%)`,
            }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill={C.white} />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-grid)" />
                </svg>
            </div>

            {/* Gradient Orbs */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                style={{ background: `radial-gradient(circle, ${C.brandOrange} 0%, transparent 70%)` }}
            />
            <div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                style={{ background: `radial-gradient(circle, ${C.primaryLight} 0%, transparent 70%)` }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">

                {/* Main Footer Content */}
                <div className="mb-8 sm:mb-10 lg:mb-14">

                    {/* Top Row - Logo and Description */}
                    <div className="mb-6 sm:mb-8 lg:mb-10">
                        {/* Logo */}
                        <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
                            {/* <div
                                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.primaryLight} 100%)`,
                                    boxShadow: `0 6px 20px ${C.brandOrange}30`,
                                }}
                            >
                                <span className="text-white font-black text-base sm:text-lg lg:text-xl">3</span>
                            </div> */}
                            <div>
                                <span className="text-white font-black text-lg sm:text-xl lg:text-2xl block leading-none">
                                    {COMPANY_INFO.name}
                                </span>
                                <span className="text-[10px] sm:text-xs lg:text-sm font-semibold" style={{ color: C.gray[400] }}>
                                    {COMPANY_INFO.tagline}
                                </span>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm leading-relaxed lg:max-w-2xl" style={{ color: C.gray[400] }}>
                            {COMPANY_INFO.description}
                        </p>
                    </div>

                    {/* Main Content Grid - Compact on mobile */}
                    <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">

                        {/* Services Section */}
                        <div className="lg:col-span-3">
                            <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4">Services</h3>
                            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                                {SERVICES.map((service) => (
                                    <LinkItem
                                        key={service.name}
                                        icon={service.icon}
                                        name={service.name}
                                        url={service.url}
                                    />
                                ))}
                            </ul>
                        </div>

                        {/* Company Section */}
                        <div className="lg:col-span-3">
                            <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4">Company</h3>
                            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                                {COMPANY_LINKS.map((link) => (
                                    <LinkItem
                                        key={link.name}
                                        icon={link.icon}
                                        name={link.name}
                                        url={link.url}
                                    />
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-span-2 lg:col-span-3">
                            <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4">Contact Us</h3>
                            <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                                <ContactInfoItem
                                    icon={FaEnvelope}
                                    text={COMPANY_INFO.email}
                                    href={`mailto:${COMPANY_INFO.email}`}
                                    type="email"
                                />
                                <ContactInfoItem
                                    icon={FaPhone}
                                    text={COMPANY_INFO.phone}
                                    href={`tel:${COMPANY_INFO.phone}`}
                                    type="phone"
                                />
                                <ContactInfoItem
                                    icon={FaMapMarkerAlt}
                                    text={COMPANY_INFO.address}
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                                    type="location"
                                />
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="col-span-2 lg:col-span-3">
                            <NewsletterForm />
                        </div>
                    </div>

                    {/* Social Links - Compact horizontal row */}
                    <div>
                        <p className="text-[10px] sm:text-xs font-bold mb-2 sm:mb-3" style={{ color: C.gray[500] }}>
                            FOLLOW US
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <SocialLink
                                    key={social.name}
                                    icon={social.icon}
                                    name={social.name}
                                    url={social.url}
                                    color={social.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="h-px w-full mb-6 sm:mb-8"
                    style={{
                        background: `linear-gradient(90deg, transparent 0%, ${C.gray[700]} 50%, transparent 100%)`,
                    }}
                />

                {/* Bottom Bar - More compact on mobile */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                    {/* Copyright - Simplified on mobile */}
                    <div className="text-center sm:text-left order-2 sm:order-1">
                        <p className="text-[10px] sm:text-xs lg:text-sm" style={{ color: C.gray[400] }}>
                            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
                        </p>
                        <p className="flex items-center justify-center sm:justify-start gap-1.5 text-[10px] sm:text-xs lg:text-sm mt-1" style={{ color: C.gray[400] }}>
                            Made with <FaHeart size={10} style={{ color: C.brandOrange }} /> by {COMPANY_INFO.name}
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-[10px] sm:text-xs lg:text-sm order-1 sm:order-2">
                        {LEGAL_LINKS.map((link, index) => (
                            <React.Fragment key={link.name}>
                                <a
                                    href={link.url}
                                    className="transition-colors duration-300 hover:text-white whitespace-nowrap"
                                    style={{ color: C.gray[400] }}
                                >
                                    {link.name}
                                </a>
                                {index < LEGAL_LINKS.length - 1 && (
                                    <span className="hidden sm:inline" style={{ color: C.gray[600] }}>•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Back to Top Button - More compact on mobile */}
                <div className="flex justify-center mt-6 sm:mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105 flex items-center gap-1.5 sm:gap-2"
                        style={{
                            background: `linear-gradient(135deg, ${C.brandOrange} 0%, ${C.primaryLight} 100%)`,
                            color: C.white,
                            boxShadow: `0 4px 16px ${C.brandOrange}30`,
                        }}
                    >
                        Back to Top
                        <FaArrowRight
                            className="transform -rotate-90 group-hover:-translate-y-1 transition-transform duration-300"
                            size={12}
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;