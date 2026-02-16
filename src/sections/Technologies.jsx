import React, { useEffect, useRef, useState } from 'react';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaAws,
    FaDocker,
    FaDatabase,
    FaCloud,
    FaShieldAlt,
    FaChartLine,
    FaRocket,
    FaStar,
    FaCode,
    FaServer,
    FaMobileAlt,
    FaPaintBrush,
    FaCogs,
    FaNetworkWired,
    FaBrain,
    FaRobot,
    FaLayerGroup,
    FaCube,
    FaGlobe,
    FaMobile,
    FaDesktop,
    FaGamepad,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";
import {
    SiKubernetes,
    SiTerraform,
    SiVuedotjs,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiGraphql,
    SiPostgresql,
    SiRedis
} from "react-icons/si";

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
   Icon Map - Maps string names to actual icon components
───────────────────────────────────────────── */
const ICON_MAP = {
    FaReact,
    FaNodeJs,
    FaPython,
    FaAws,
    FaDocker,
    FaDatabase,
    FaCloud,
    FaShieldAlt,
    FaChartLine,
    FaRocket,
    FaStar,
    FaCode,
    FaServer,
    FaMobileAlt,
    FaPaintBrush,
    FaCogs,
    FaNetworkWired,
    FaBrain,
    FaRobot,
    FaLayerGroup,
    FaCube,
    FaGlobe,
    FaMobile,
    FaDesktop,
    FaGamepad,
    SiKubernetes,
    SiTerraform,
    SiVuedotjs,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiGraphql,
    SiPostgresql,
    SiRedis
};

/* ─────────────────────────────────────────────
   Sample Data
───────────────────────────────────────────── */
const TECH_CATEGORIES = [
    {
        category: 'Frontend',
        color: C.brandOrange,
        technologies: [
            { name: 'React', icon: 'FaReact', level: 95, description: 'UI Development' },
            { name: 'Next.js', icon: 'SiNextdotjs', level: 90, description: 'SSR Framework' },
            { name: 'TypeScript', icon: 'SiTypescript', level: 88, description: 'Type Safety' },
            { name: 'Tailwind', icon: 'SiTailwindcss', level: 92, description: 'CSS Framework' },
            { name: 'Vue.js', icon: 'SiVuedotjs', level: 85, description: 'Progressive Framework' },
            { name: 'WebGL', icon: 'FaCube', level: 80, description: '3D Graphics' },
        ]
    },
    {
        category: 'Backend',
        color: C.primaryLight,
        technologies: [
            { name: 'Node.js', icon: 'FaNodeJs', level: 93, description: 'Runtime Environment' },
            { name: 'Python', icon: 'FaPython', level: 90, description: 'Data & AI' },
            { name: 'GraphQL', icon: 'SiGraphql', level: 87, description: 'API Query Language' },
            { name: 'PostgreSQL', icon: 'SiPostgresql', level: 89, description: 'Database' },
            { name: 'Redis', icon: 'SiRedis', level: 85, description: 'In-Memory Cache' },
            { name: 'Docker', icon: 'FaDocker', level: 91, description: 'Containerization' },
        ]
    },
    {
        category: 'Cloud & DevOps',
        color: C.accentBlue,
        technologies: [
            { name: 'AWS', icon: 'FaAws', level: 92, description: 'Cloud Platform' },
            { name: 'Kubernetes', icon: 'SiKubernetes', level: 88, description: 'Orchestration' },
            { name: 'Terraform', icon: 'SiTerraform', level: 86, description: 'Infrastructure' },
            { name: 'CI/CD', icon: 'FaCogs', level: 90, description: 'Automation' },
            { name: 'Monitoring', icon: 'FaChartLine', level: 87, description: 'Observability' },
            { name: 'Security', icon: 'FaShieldAlt', level: 94, description: 'Protection' },
        ]
    },
];

const STATS = [
    { icon: 'FaRocket', value: '150+', label: 'Technologies' },
    { icon: 'FaCloud', value: '500+', label: 'Deployments' },
    { icon: 'FaStar', value: '99.9%', label: 'Uptime' },
   
];

/* ─────────────────────────────────────────────
   Hexagon Component - Responsive sizing
───────────────────────────────────────────── */
function HexagonIcon({ iconName, color, size = 80 }) {
    const IconComponent = ICON_MAP[iconName];

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg viewBox="0 0 100 100" className="absolute inset-0">
                <defs>
                    <linearGradient id={`hex-grad-${iconName}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                <polygon
                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill={`url(#hex-grad-${iconName})`}
                    stroke={color}
                    strokeWidth="2"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center" style={{ color: color }}>
                {IconComponent && <IconComponent size={size * 0.4} />}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Technology Card Component - Fully Responsive
───────────────────────────────────────────── */
function TechCard({ tech, color, visible, index }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative overflow-hidden flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setTimeout(() => setHovered(false), 300)}
        >
            {/* Card Background */}
            <div
                className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-500"
                style={{
                    background: hovered
                        ? `linear-gradient(135deg, ${color}08 0%, ${C.white} 100%)`
                        : C.white,
                    border: `2px solid ${hovered ? color : `${C.accentBlue}15`}`,
                    boxShadow: hovered
                        ? `0 20px 60px ${color}30, 0 0 0 1px ${color}20`
                        : '0 4px 20px rgba(0,0,0,0.05)',
                    transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                }}
            >
                {/* Animated gradient overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, ${color}10 0%, transparent 60%)`,
                    }}
                />

                {/* Top section with icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 relative z-10">
                    <div
                        className="transition-all duration-500"
                        style={{
                            transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                        }}
                    >
                        <HexagonIcon iconName={tech.icon} color={hovered ? color : C.accentBlue} size={60} />
                    </div>

                    {/* Expertise Badge */}
                    <div
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300"
                        style={{
                            background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                            border: `1px solid ${color}30`,
                            color: color,
                            transform: hovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                    >
                        Expert
                    </div>
                </div>

                {/* Tech name and description */}
                <div className="relative z-10 mb-4 sm:mb-5 md:mb-6">
                    <h3
                        className="text-xl sm:text-2xl font-black mb-1 sm:mb-2 transition-colors duration-300"
                        style={{
                            color: hovered ? color : C.black,
                        }}
                    >
                        {tech.name}
                    </h3>
                    <p
                        className="text-xs sm:text-sm font-medium transition-colors duration-300"
                        style={{ color: C.accentBlue }}
                    >
                        {tech.description}
                    </p>
                </div>

                {/* Skill Level Indicators - Dot Pattern */}
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span
                            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                            style={{
                                color: hovered ? color : `${C.accentBlue}80`
                            }}
                        >
                            Proficiency
                        </span>
                        <span
                            className="text-sm font-black transition-colors duration-300"
                            style={{
                                color: hovered ? color : C.accentBlue
                            }}
                        >
                            {tech.level}%
                        </span>
                    </div>

                    {/* Dot matrix visualization */}
                    <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
                        {[...Array(10)].map((_, i) => {
                            const threshold = (i + 1) * 10;
                            const isActive = tech.level >= threshold;
                            return (
                                <div
                                    key={i}
                                    className="aspect-square rounded-sm transition-all duration-500"
                                    style={{
                                        background: isActive
                                            ? hovered
                                                ? `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`
                                                : `${C.accentBlue}40`
                                            : `${C.accentBlue}10`,
                                        boxShadow: isActive && hovered ? `0 0 8px ${color}60` : 'none',
                                        transform: isActive && hovered ? 'scale(1.2)' : 'scale(1)',
                                        transitionDelay: `${i * 50}ms`,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Bottom tags */}
                <div className="flex gap-2 mt-4 sm:mt-5 md:mt-6 relative z-10">
                    <div
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold"
                        style={{
                            background: `${color}08`,
                            color: color,
                            border: `1px solid ${color}20`,
                        }}
                    >
                        Production
                    </div>
                    <div
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold"
                        style={{
                            background: `${C.accentBlue}08`,
                            color: C.accentBlue,
                            border: `1px solid ${C.accentBlue}20`,
                        }}
                    >
                        {tech.level > 90 ? 'Advanced' : tech.level > 80 ? 'Proficient' : 'Intermediate'}
                    </div>
                </div>

                {/* Corner accent */}
                <div
                    className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 100% 0%, ${color}20 0%, transparent 70%)`,
                    }}
                />

                {/* Code bracket indicator */}
                <div
                    className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[10px] sm:text-xs"
                    style={{
                        color: `${color}40`,
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                    }}
                >
                    &lt;/&gt;
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Category Tab Component - Simplified and Responsive
───────────────────────────────────────────── */
function CategoryTab({ category, isActive, onClick, color }) {
    return (
        <button
            className="relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300"
            style={{
                background: isActive
                    ? color
                    : C.white,
                color: isActive ? C.white : C.black,
                border: `2px solid ${isActive ? color : `${C.accentBlue}15`}`,
                boxShadow: isActive
                    ? `0 4px 16px ${color}40`
                    : '0 2px 8px rgba(0,0,0,0.04)',
                transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onClick={onClick}
        >
            {category}

            {/* Active indicator line */}
            {isActive && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1"
                    style={{
                        background: C.white,
                    }}
                />
            )}
        </button>
    );
}

/* ─────────────────────────────────────────────
   Performance Graph Component - Responsive
───────────────────────────────────────────── */
function PerformanceGraph({ visible }) {
    const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [activeMetric, setActiveMetric] = useState(0);

    const metricsData = [
        {
            label: 'Performance',
            data: [65, 78, 82, 88, 92, 89, 94, 97, 95, 98, 96, 99],
            color: C.brandOrange,
            icon: 'FaChartLine',
            value: '99%'
        },
        {
            label: 'Deployments',
            data: [20, 35, 45, 62, 75, 88, 95, 110, 125, 138, 145, 150],
            color: C.primaryLight,
            icon: 'FaRocket',
            value: '150+'
        },
        {
            label: 'Uptime',
            data: [97, 98, 98, 99, 99, 99.5, 99.7, 99.8, 99.9, 99.9, 99.9, 99.9],
            color: C.accentBlue,
            icon: 'FaServer',
            value: '99.9%'
        },
    ];

    const currentMetric = metricsData[activeMetric];
    const graphColor = C.brandOrange;

    useEffect(() => {
        if (!visible) {
            setGraphData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            return;
        }

        const timer = setTimeout(() => {
            setGraphData(currentMetric.data);
        }, 300);

        return () => clearTimeout(timer);
    }, [visible, activeMetric]);

    const maxValue = Math.max(...currentMetric.data);

    return (
        <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${C.primaryLight} 0%, ${C.primaryDark} 100%)`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease 1s',
                boxShadow: '0 20px 60px rgba(23, 25, 74, 0.3)',
            }}
        >
            {/* Technical grid overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="perf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={C.white} strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#perf-grid)" />
                </svg>
            </div>
            
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at top right, ${C.brandOrange}40 0%, transparent 60%)`
                }}
            />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 gap-4">
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2" style={{ color: C.white }}>
                            Performance Analytics
                        </h3>
                        <p className="text-sm sm:text-base" style={{ color: `${C.white}90` }}>
                            Real-time monitoring across 12 months
                        </p>
                    </div>

                    {/* Metric Selector Pills - Responsive */}
                    <div className="flex gap-2 flex-wrap">
                        {metricsData.map((metric, i) => {
                            const MetricIcon = ICON_MAP[metric.icon];
                            return (
                                <button
                                    key={metric.label}
                                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 sm:gap-2"
                                    style={{
                                        background: activeMetric === i
                                            ? metric.color
                                            : `${C.white}15`,
                                        color: activeMetric === i ? C.white : `${C.white}90`,
                                        border: `2px solid ${activeMetric === i ? metric.color : `${C.white}25`}`,
                                        boxShadow: activeMetric === i ? `0 4px 12px ${metric.color}50` : 'none',
                                    }}
                                    onClick={() => setActiveMetric(i)}
                                >
                                    {MetricIcon && <MetricIcon size={14} />}
                                    <span className="hidden sm:inline">{metric.label}</span>
                                    <span className="sm:hidden">{metric.label.slice(0, 4)}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Graph Area - Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] xl:grid-cols-[3.5fr_1fr] gap-6 sm:gap-8">
                    {/* Main Graph */}
                    <div>
                        <div
                            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)`,
                                border: `2px solid rgba(255, 255, 255, 0.2)`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: 'inset 0 2px 20px rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            {/* Graph SVG - Proper axis implementation */}
                            <div className="relative" style={{ height: '400px', paddingLeft: '40px', paddingBottom: '50px', paddingTop: '20px', paddingRight: '20px' }}>
                                <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible" style={{ display: 'block' }}>
                                    <defs>
                                        {/* Gradient for area fill */}
                                        <linearGradient id="graph-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor={graphColor} stopOpacity="0.5" />
                                            <stop offset="100%" stopColor={graphColor} stopOpacity="0.05" />
                                        </linearGradient>
                                    </defs>

                                    {/* Y-axis labels and grid lines */}
                                    {[0, 25, 50, 75, 100].map((percent, idx) => {
                                        const yPos = `${percent}%`;
                                        return (
                                            <g key={percent}>
                                                {/* Horizontal grid line */}
                                                <line
                                                    x1="0"
                                                    y1={yPos}
                                                    x2="100%"
                                                    y2={yPos}
                                                    stroke="rgba(255, 255, 255, 0.2)"
                                                    strokeWidth="1"
                                                    strokeDasharray="4 4"
                                                />
                                                {/* Y-axis label */}
                                                <text
                                                    x="-10"
                                                    y={yPos}
                                                    fill="rgba(255, 255, 255, 0.7)"
                                                    fontSize="12"
                                                    textAnchor="end"
                                                    dominantBaseline="middle"
                                                    fontWeight="600"
                                                >
                                                    {Math.round((100 - percent) * maxValue / 100)}
                                                </text>
                                            </g>
                                        );
                                    })}

                                    {/* Area fill under the line */}
                                    <path
                                        d={`
                                            M 0,100
                                            ${graphData.map((value, i) => {
                                            const xPercent = (i / (graphData.length - 1)) * 100;
                                            const yPercent = 100 - (value / maxValue) * 100;
                                            return `L ${xPercent},${yPercent}`;
                                        }).join(' ')}
                                            L 100,100 Z
                                        `}
                                        fill="url(#graph-gradient)"
                                        style={{
                                            transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        }}
                                    />

                                    {/* Line graph */}
                                    <path
                                        d={graphData.map((value, i) => {
                                            const xPercent = (i / (graphData.length - 1)) * 100;
                                            const yPercent = 100 - (value / maxValue) * 100;
                                            return `${i === 0 ? 'M' : 'L'} ${xPercent},${yPercent}`;
                                        }).join(' ')}
                                        stroke={graphColor}
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            filter: `drop-shadow(0 0 8px ${graphColor})`,
                                            transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        }}
                                    />

                                    {/* Data points - Perfect circles */}
                                    {graphData.map((value, i) => {
                                        const xPercent = (i / (graphData.length - 1)) * 100;
                                        const yPercent = 100 - (value / maxValue) * 100;
                                        return (
                                            <g key={i}>
                                                {/* Outer glow circle */}
                                                <circle
                                                    cx={`${xPercent}%`}
                                                    cy={`${yPercent}%`}
                                                    r="10"
                                                    fill={graphColor}
                                                    opacity="0.3"
                                                    style={{
                                                        opacity: visible ? 0.3 : 0,
                                                        transition: `all 0.8s ease ${1.2 + i * 0.1}s`,
                                                    }}
                                                >
                                                    <animate
                                                        attributeName="r"
                                                        values="10;14;10"
                                                        dur="2s"
                                                        begin={`${i * 0.2}s`}
                                                        repeatCount="indefinite"
                                                    />
                                                </circle>
                                                {/* Main circle */}
                                                <circle
                                                    cx={`${xPercent}%`}
                                                    cy={`${yPercent}%`}
                                                    r="6"
                                                    fill={graphColor}
                                                    stroke={C.white}
                                                    strokeWidth="2"
                                                    style={{
                                                        opacity: visible ? 1 : 0,
                                                        transition: `all 0.8s ease ${1.2 + i * 0.1}s`,
                                                        filter: `drop-shadow(0 0 4px ${graphColor})`,
                                                    }}
                                                >
                                                    <animate
                                                        attributeName="r"
                                                        values="6;8;6"
                                                        dur="2s"
                                                        begin={`${i * 0.2}s`}
                                                        repeatCount="indefinite"
                                                    />
                                                </circle>
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* X-axis (Month) labels */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                                        <span
                                            key={month}
                                            className="text-xs font-semibold"
                                            style={{
                                                color: `rgba(255, 255, 255, 0.8)`,
                                                opacity: visible ? 1 : 0,
                                                transition: `opacity 0.5s ease ${1.5 + i * 0.05}s`
                                            }}
                                        >
                                            {month}
                                        </span>
                                    ))}
                                </div>

                                {/* Y-axis label */}
                                <div 
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold tracking-wider uppercase"
                                    style={{ 
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        transformOrigin: 'center',
                                        left: '-15px'
                                    }}
                                >
                                    Value
                                </div>

                                {/* X-axis label */}
                                <div 
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-bold tracking-wider uppercase"
                                    style={{ 
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        bottom: '-30px'
                                    }}
                                >
                                    Months
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Metric Insights Panel */}
                    <div className="space-y-4">
                        {/* Current Metric Overview Card */}
                        <div
                            className="rounded-xl sm:rounded-2xl p-5 sm:p-6 relative overflow-hidden transition-all duration-500"
                            style={{
                                background: `linear-gradient(135deg, ${currentMetric.color}25 0%, ${currentMetric.color}10 100%)`,
                                border: `2px solid ${currentMetric.color}40`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: `0 8px 32px ${currentMetric.color}20, inset 0 2px 10px rgba(255, 255, 255, 0.1)`,
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'scale(1)' : 'scale(0.95)',
                                transition: 'all 0.6s ease 1s',
                            }}
                        >
                            {/* Animated background gradient */}
                            <div 
                                className="absolute inset-0 opacity-30"
                                style={{
                                    background: `radial-gradient(circle at 30% 50%, ${currentMetric.color}20 0%, transparent 70%)`,
                                }}
                            />
                            
                            <div className="relative z-10">
                                {/* Header with icon */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${currentMetric.color} 0%, ${currentMetric.color}cc 100%)`,
                                            boxShadow: `0 4px 12px ${currentMetric.color}40`,
                                        }}
                                    >
                                        {ICON_MAP[currentMetric.icon] && React.createElement(ICON_MAP[currentMetric.icon], { 
                                            size: 24, 
                                            color: C.white 
                                        })}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: C.white }}>
                                            Current Metric
                                        </div>
                                        <div className="text-lg font-black" style={{ color: C.white }}>
                                            {currentMetric.label}
                                        </div>
                                    </div>
                                </div>

                                {/* Live Value Display */}
                                <div className="mb-4">
                                    <div className="text-4xl sm:text-5xl font-black mb-1" style={{ color: C.white }}>
                                        {currentMetric.value}
                                    </div>
                                    <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: `${C.white}90` }}>
                                        Latest Performance
                                    </div>
                                </div>

                                {/* Progress Ring */}
                                <div className="flex items-center gap-4">
                                    <svg width="80" height="80" className="transform -rotate-90">
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="34"
                                            stroke={`${C.white}20`}
                                            strokeWidth="6"
                                            fill="none"
                                        />
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="34"
                                            stroke={C.white}
                                            strokeWidth="6"
                                            fill="none"
                                            strokeDasharray={`${(graphData[graphData.length - 1] / maxValue) * 213.6} 213.6`}
                                            strokeLinecap="round"
                                            style={{
                                                transition: 'all 1s ease',
                                                filter: `drop-shadow(0 0 8px ${C.white}80)`
                                            }}
                                        />
                                    </svg>
                                    <div className="flex-1">
                                        <div className="text-2xl font-black mb-1" style={{ color: C.white }}>
                                            {Math.round((graphData[graphData.length - 1] / maxValue) * 100)}%
                                        </div>
                                        <div className="text-xs font-semibold opacity-80" style={{ color: C.white }}>
                                            Completion Rate
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mini Statistics Cards */}
                        {/* {[
                            { 
                                label: 'Peak Value', 
                                value: Math.max(...graphData),
                                icon: 'FaChartLine',
                                color: '#4CAF50'
                            },
                            { 
                                label: 'Average', 
                                value: Math.round(graphData.reduce((a, b) => a + b, 0) / graphData.length),
                                icon: 'FaServer',
                                color: '#2196F3'
                            },
                            { 
                                label: 'Trend', 
                                value: graphData[graphData.length - 1] > graphData[0] ? '+' + Math.round(((graphData[graphData.length - 1] - graphData[0]) / graphData[0]) * 100) + '%' : Math.round(((graphData[graphData.length - 1] - graphData[0]) / graphData[0]) * 100) + '%',
                                icon: 'FaRocket',
                                color: '#FF9800'
                            },
                        ].map((stat, i) => {
                            const StatIcon = ICON_MAP[stat.icon]; */}
                           

                        {/* Interactive Data Timeline */}
                        <div
                            className="rounded-xl p-4 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)`,
                                border: `2px solid rgba(255, 255, 255, 0.2)`,
                                backdropFilter: 'blur(10px)',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s ease 2s',
                            }}
                        >
                            <div className="text-xs uppercase tracking-wider font-bold mb-3" style={{ color: `${C.white}70` }}>
                                12-Month Overview
                            </div>
                            
                            {/* Mini bar chart */}
                            <div className="flex items-end justify-between gap-1 h-16">
                                {graphData.map((value, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t transition-all duration-500 hover:opacity-100 group cursor-pointer"
                                        style={{
                                            height: `${(value / maxValue) * 100}%`,
                                            background: `linear-gradient(to top, ${currentMetric.color} 0%, ${currentMetric.color}80 100%)`,
                                            opacity: 0.6,
                                            transitionDelay: `${i * 0.05}s`,
                                        }}
                                        title={`Month ${i + 1}: ${value}`}
                                    >
                                        <div className="w-full h-full group-hover:scale-110 transition-transform" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100">
                    <path d="M0 0 L100 0 L100 50 L50 100 L0 100 Z" fill={C.brandOrange} />
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 opacity-10 pointer-events-none rotate-180">
                <svg viewBox="0 0 100 100">
                    <path d="M0 0 L100 0 L100 50 L50 100 L0 100 Z" fill={C.brandOrange} />
                </svg>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Main Technologies Page - Fully Responsive
───────────────────────────────────────────── */
export default function Technologies() {
    const [visible, setVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="technologies"
            ref={sectionRef}
            className="relative py-10 sm:py-12 md:py-16 overflow-hidden"
            style={{
                background: `linear-gradient(180deg, ${C.white} 0%, #F5F7FF 50%, ${C.white} 100%)`,
            }}
        >
            {/* Background Effects - Responsive */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-full max-w-2xl aspect-square rounded-full blur-3xl opacity-10 sm:opacity-15"
                    style={{ background: `radial-gradient(circle, ${C.primaryLight} 0%, transparent 70%)` }}
                />
                <div
                    className="absolute bottom-20 -left-40 w-full max-w-xl aspect-square rounded-full blur-3xl opacity-5 sm:opacity-10"
                    style={{ background: `radial-gradient(circle, ${C.brandOrange} 0%, transparent 70%)` }}
                />

                <svg className="absolute inset-0 w-full h-full opacity-20 sm:opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="tech-grid-advanced" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill={C.accentBlue} opacity="0.3" />
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={C.accentBlue} strokeWidth="0.5" opacity="0.15" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#tech-grid-advanced)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section - Responsive */}
                <div
                    className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4"
                        style={{
                            background: `linear-gradient(135deg, ${C.brandOrange}15 0%, ${C.brandOrange}05 100%)`,
                            border: `1px solid ${C.brandOrange}30`,
                        }}>
                        <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                style={{ background: C.brandOrange }} />
                            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3"
                                style={{ background: C.brandOrange }} />
                        </span>
                        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase" style={{ color: C.brandOrange }}>
                            Tech Excellence
                        </span>
                    </div>

                    {/* Main heading - Responsive */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-3 sm:mb-4">
                        <span style={{ color: C.primaryDark }}>
                            Our
                        </span>
                        <span
                            className="relative inline-block"
                            style={{ color: C.brandOrange }}
                        >
                            {' '}Technical{' '}
                            <svg
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                                height="12"
                                viewBox="0 0 400 16"
                            >
                                <path
                                    d="M0 8 Q100 2, 200 8 T400 8"
                                    stroke={C.brandOrange}
                                    strokeWidth="3"
                                    fill="none"
                                    opacity="0.4"
                                />
                            </svg>
                        </span>
                       
                        <span style={{ color: C.primaryDark }}>Arsenal</span>
                    </h2>

                    {/* Subheading - Responsive */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4" style={{ color: C.accentBlue }}>
                        Cutting-edge technologies and frameworks powering enterprise-grade solutions.
                        Built for scale, optimized for performance.
                    </p>

                    {/* Tech indicators - Responsive */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm font-mono">
                        {['AI-Powered', 'Cloud-Native', 'Scalable'].map((tag, i) => (
                            <div
                                key={tag}
                                className="flex items-center gap-1.5 sm:gap-2"
                                style={{
                                    color: C.accentBlue,
                                    opacity: visible ? 1 : 0,
                                    transition: `opacity 0.5s ease ${1 + i * 0.2}s`,
                                }}
                            >
                                <span style={{ color: C.brandOrange }}>▸</span>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Tabs - Responsive */}
                <div
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease 0.3s',
                    }}
                >
                    {TECH_CATEGORIES.map((cat, i) => (
                        <CategoryTab
                            key={cat.category}
                            category={cat.category}
                            isActive={activeCategory === i}
                            onClick={() => setActiveCategory(i)}
                            color={cat.color}
                        />
                    ))}
                </div>

                {/* Technologies Cards with Scroll Navigation */}
                <div className="relative mb-10 sm:mb-12">
                    {/* Left Arrow - Hidden on md and up */}
                    <button
                        onClick={() => scroll('left')}
                        className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                            background: `${C.white}90`,
                            border: `2px solid ${TECH_CATEGORIES[activeCategory].color}40`,
                            color: TECH_CATEGORIES[activeCategory].color,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                    >
                        <FaChevronLeft size={16} />
                    </button>

                    {/* Right Arrow - Hidden on md and up */}
                    <button
                        onClick={() => scroll('right')}
                        className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                            background: `${C.white}90`,
                            border: `2px solid ${TECH_CATEGORIES[activeCategory].color}40`,
                            color: TECH_CATEGORIES[activeCategory].color,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                    >
                        <FaChevronRight size={16} />
                    </button>

                    {/* Mobile: Horizontal scroll */}
                    <div
                        ref={scrollContainerRef}
                        className="md:hidden flex gap-4 overflow-x-auto pb-4 px-12 scrollbar-hide snap-x snap-mandatory"
                    >
                        {TECH_CATEGORIES[activeCategory].technologies.map((tech, i) => (
                            <div key={tech.name} className="snap-center">
                                <TechCard
                                    tech={tech}
                                    color={TECH_CATEGORIES[activeCategory].color}
                                    visible={visible}
                                    index={i}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Grid */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TECH_CATEGORIES[activeCategory].technologies.map((tech, i) => (
                            <TechCard
                                key={tech.name}
                                tech={tech}
                                color={TECH_CATEGORIES[activeCategory].color}
                                visible={visible}
                                index={i}
                            />
                        ))}
                    </div>
                </div>

                {/* Performance Analytics Graph Section */}
                <PerformanceGraph visible={visible} />

            </div>

            {/* Scrollbar hide styles */}
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
}