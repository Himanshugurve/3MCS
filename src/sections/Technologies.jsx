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
   Icon Map
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

/* ─────────────────────────────────────────────
   Hexagon Component
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
   Technology Card Component
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
            <div
                className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-500"
                style={{
                    background: hovered ? `linear-gradient(135deg, ${color}08 0%, ${C.white} 100%)` : C.white,
                    border: `2px solid ${hovered ? color : `${C.accentBlue}15`}`,
                    boxShadow: hovered ? `0 20px 60px ${color}30, 0 0 0 1px ${color}20` : '0 4px 20px rgba(0,0,0,0.05)',
                    transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                }}
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, ${color}10 0%, transparent 60%)`,
                    }}
                />

                <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 relative z-10">
                    <div
                        className="transition-all duration-500"
                        style={{
                            transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                        }}
                    >
                        <HexagonIcon iconName={tech.icon} color={hovered ? color : C.accentBlue} size={60} />
                    </div>

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

                <div
                    className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 100% 0%, ${color}20 0%, transparent 70%)`,
                    }}
                />

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
   Category Tab Component
───────────────────────────────────────────── */
function CategoryTab({ category, isActive, onClick, color }) {
    return (
        <button
            className="relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300"
            style={{
                background: isActive ? color : C.white,
                color: isActive ? C.white : C.black,
                border: `2px solid ${isActive ? color : `${C.accentBlue}15`}`,
                boxShadow: isActive ? `0 4px 16px ${color}40` : '0 2px 8px rgba(0,0,0,0.04)',
                transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onClick={onClick}
        >
            {category}
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
   IMPROVED Performance Graph Component
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
            data: [97.0, 98.0, 98.0, 99.0, 99.0, 99.5, 99.7, 99.8, 99.9, 99.9, 99.9, 99.9],
            color: C.accentBlue,
            icon: 'FaServer',
            value: '99.9%'
        },
    ];

    const currentMetric = metricsData[activeMetric];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
    const minValue = Math.min(...currentMetric.data);

    const generateLinePath = () => {
        if (graphData.length === 0) return '';

        // Add padding to prevent points from going out of bounds
        const padding = 2;
        const points = graphData.map((value, i) => {
            const x = padding + ((i / (graphData.length - 1)) * (100 - 2 * padding));
            const y = padding + ((1 - (value - minValue) / (maxValue - minValue)) * (100 - 2 * padding));
            return `${x},${y}`;
        });

        // Use smooth curve with Catmull-Rom spline for better connection between points
        if (points.length < 3) {
            return points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point}`).join(' ');
        }

        let path = `M ${points[0]}`;

        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[Math.max(0, i - 1)];
            const p1 = points[i];
            const p2 = points[i + 1];
            const p3 = points[Math.min(points.length - 1, i + 2)];

            const [x0, y0] = p0.split(',').map(Number);
            const [x1, y1] = p1.split(',').map(Number);
            const [x2, y2] = p2.split(',').map(Number);
            const [x3, y3] = p3.split(',').map(Number);

            const cp1x = x1 + (x2 - x0) / 6;
            const cp1y = y1 + (y2 - y0) / 6;
            const cp2x = x2 - (x3 - x1) / 6;
            const cp2y = y2 - (y3 - y1) / 6;

            path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`;
        }

        return path;
    };

    const generateAreaPath = () => {
        if (graphData.length === 0) return '';

        const linePath = generateLinePath();
        // Add padding to area path
        return `${linePath} L 98,98 L 2,98 Z`;
    };

    return (
        <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${C.primaryDark} 0%, ${C.primaryLight} 100%)`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease 1s',
                boxShadow: '0 20px 60px rgba(23, 25, 74, 0.3)',
            }}
        >
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={C.white} strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-white">
                            Performance Analytics
                        </h3>
                        <p className="text-sm sm:text-base text-white/80">
                            Real-time monitoring across 12 months
                        </p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {metricsData.map((metric, i) => (
                            <button
                                key={metric.label}
                                className="px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300"
                                style={{
                                    background: activeMetric === i ? metric.color : 'rgba(255,255,255,0.1)',
                                    color: C.white,
                                    border: `2px solid ${activeMetric === i ? metric.color : 'rgba(255,255,255,0.2)'}`,
                                    boxShadow: activeMetric === i ? `0 4px 12px ${metric.color}50` : 'none',
                                }}
                                onClick={() => setActiveMetric(i)}
                            >
                                {metric.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div
                            className="rounded-2xl p-6 relative"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '2px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <div className="relative" style={{ height: '400px' }}>
                                <svg
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    className="w-full h-full"
                                >
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.3" />
                                            <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.05" />
                                        </linearGradient>
                                        <linearGradient id={`lineGradient-${activeMetric}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.1" />
                                            <stop offset="50%" stopColor={currentMetric.color} stopOpacity="0.5" />
                                            <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.1" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {[0, 25, 50, 75, 100].map((y) => (
                                        <line
                                            key={y}
                                            x1="0"
                                            y1={y}
                                            x2="100"
                                            y2={y}
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="0.5"
                                            strokeDasharray="2,2"
                                        />
                                    ))}

                                    <path
                                        d={generateAreaPath()}
                                        fill="url(#areaGradient)"
                                        style={{
                                            transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        }}
                                    />

                                    <path
                                        d={generateLinePath()}
                                        stroke={C.brandOrange}
                                        strokeWidth="0.8"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            filter: `drop-shadow(0 0 4px ${C.brandOrange})`,
                                            transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        }}
                                    />

                                    {/* Animated gradient trail effect */}
                                    <path
                                        d={generateLinePath()}
                                        stroke={`url(#lineGradient-${activeMetric})`}
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeOpacity="0.3"
                                        style={{
                                            transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        }}
                                    />

                                    {graphData.map((value, i) => {
                                        const padding = 2;
                                        const x = padding + ((i / (graphData.length - 1)) * (100 - 2 * padding));
                                        const y = padding + ((1 - (value - minValue) / (maxValue - minValue)) * (100 - 2 * padding));
                                        return (
                                            <g key={i}>
                                                {/* Outer animated ring */}
                                                <circle
                                                    cx={x}
                                                    cy={y}
                                                    r="4"
                                                    fill="none"
                                                    stroke={C.brandOrange}
                                                    strokeWidth="0.5"
                                                    strokeOpacity="0.3"
                                                    style={{
                                                        opacity: visible ? 1 : 0,
                                                        transition: `all 0.8s ease ${1.2 + i * 0.1}s`,
                                                        animation: visible ? `pulse ${2 + i * 0.1}s ease-in-out infinite` : 'none',
                                                    }}
                                                />
                                                {/* Main point */}
                                                <circle
                                                    cx={x}
                                                    cy={y}
                                                    r="1.2"
                                                    fill={C.brandOrange}
                                                    stroke={C.white}
                                                    strokeWidth="0.8"
                                                    style={{
                                                        opacity: visible ? 1 : 0,
                                                        transition: `all 0.8s ease ${1.2 + i * 0.1}s`,
                                                        filter: `drop-shadow(0 0 2px ${C.brandOrange})`,
                                                    }}
                                                />
                                                {/* Inner glow */}
                                                <circle
                                                    cx={x}
                                                    cy={y}
                                                    r="2.5"
                                                    fill={C.brandOrange}
                                                    fillOpacity="0.1"
                                                    style={{
                                                        opacity: visible ? 1 : 0,
                                                        transition: `all 0.8s ease ${1.2 + i * 0.1}s`,
                                                    }}
                                                />
                                            </g>
                                        );
                                    })}
                                </svg>

                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between -ml-14 py-2">
                                    {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, minValue].map((val, i) => {
                                        const yPosition = 100 - (i / 4) * 100;
                                        return (
                                            <span
                                                key={i}
                                                className="text-xs text-white/60 font-semibold absolute"
                                                style={{
                                                    top: `${yPosition}%`,
                                                    transform: 'translateY(-50%)'
                                                }}
                                            >
                                                {Math.round(val)}
                                            </span>
                                        );
                                    })}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 flex justify-between -mb-10 px-2">
                                    {months.map((month, i) => {
                                        const xPosition = (i / (months.length - 1)) * 100;
                                        return (
                                            <span
                                                key={month}
                                                className="text-xs text-white/60 font-semibold absolute whitespace-nowrap"
                                                style={{
                                                    left: `${xPosition}%`,
                                                    transform: 'translateX(-50%)',
                                                    opacity: visible ? 1 : 0,
                                                    transition: `opacity 0.5s ease ${1.5 + i * 0.05}s`
                                                }}
                                            >
                                                {month}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div
                            className="rounded-2xl p-6 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${currentMetric.color}30 0%, ${currentMetric.color}10 100%)`,
                                border: `2px solid ${currentMetric.color}40`,
                            }}
                        >
                            <div className="text-sm font-bold uppercase tracking-wider text-white/70 mb-2">
                                Current Value
                            </div>
                            <div className="text-5xl font-black text-white mb-2">
                                {currentMetric.value}
                            </div>
                            <div className="text-sm text-white/80">
                                {currentMetric.label}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className="rounded-xl p-4"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <div className="text-2xl font-black text-white">
                                    {Math.max(...graphData)}
                                </div>
                                <div className="text-xs text-white/60 font-semibold">Peak</div>
                            </div>
                            <div
                                className="rounded-xl p-4"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <div className="text-2xl font-black text-white">
                                    {Math.round(graphData.reduce((a, b) => a + b, 0) / graphData.length)}
                                </div>
                                <div className="text-xs text-white/60 font-semibold">Average</div>
                            </div>
                        </div>

                        <div
                            className="rounded-xl p-4"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '2px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div className="text-xs uppercase tracking-wider font-bold mb-3 text-white/70">
                                12-Month Trend
                            </div>
                            <div className="flex items-end justify-between gap-1 h-20">
                                {graphData.map((value, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t transition-all duration-500"
                                        style={{
                                            height: `${((value - minValue) / (maxValue - minValue)) * 100}%`,
                                            background: currentMetric.color,
                                            opacity: 0.7,
                                            transitionDelay: `${i * 0.05}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Main Technologies Component
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

                <div
                    className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                >
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

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-3 sm:mb-4">
                        <span style={{ color: C.primaryDark }}>Our</span>
                        <span className="relative inline-block" style={{ color: C.brandOrange }}>
                            {' '}Technical{' '}
                            <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="12" viewBox="0 0 400 16">
                                <path d="M0 8 Q100 2, 200 8 T400 8" stroke={C.brandOrange} strokeWidth="3" fill="none" opacity="0.4" />
                            </svg>
                        </span>
                        <span style={{ color: C.primaryDark }}>Arsenal</span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4" style={{ color: C.accentBlue }}>
                        Cutting-edge technologies and frameworks powering enterprise-grade solutions.
                        Built for scale, optimized for performance.
                    </p>

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

                <div className="relative mb-10 sm:mb-12">
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

                <PerformanceGraph visible={visible} />

            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
            `}</style>
        </section>
    );
}