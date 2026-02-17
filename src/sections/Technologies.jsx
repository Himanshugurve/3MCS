import React, { useEffect, useRef, useState } from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaCloud,
    FaShieldAlt, FaChartLine, FaRocket, FaStar, FaCode, FaServer,
    FaMobileAlt, FaPaintBrush, FaCogs, FaNetworkWired, FaBrain, FaRobot,
    FaLayerGroup, FaCube, FaGlobe, FaMobile, FaDesktop, FaGamepad,
    FaChevronLeft, FaChevronRight
} from "react-icons/fa";
import {
    SiKubernetes, SiTerraform, SiVuedotjs, SiTypescript, SiNextdotjs,
    SiTailwindcss, SiGraphql, SiPostgresql, SiRedis
} from "react-icons/si";

const C = {
    primaryLight: '#3D4299',
    accentBlue: '#5D7A7F',
    brandOrange: '#F26A21',
    white: '#FFFFFF',
    black: '#000000',
    primaryDark: '#17194A',
};

const ICON_MAP = {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaCloud,
    FaShieldAlt, FaChartLine, FaRocket, FaStar, FaCode, FaServer, FaMobileAlt,
    FaPaintBrush, FaCogs, FaNetworkWired, FaBrain, FaRobot, FaLayerGroup,
    FaCube, FaGlobe, FaMobile, FaDesktop, FaGamepad,
    SiKubernetes, SiTerraform, SiVuedotjs, SiTypescript, SiNextdotjs,
    SiTailwindcss, SiGraphql, SiPostgresql, SiRedis
};

const TECH_CATEGORIES = [
    {
        category: 'Frontend', color: C.brandOrange,
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
        category: 'Backend', color: C.brandOrange,
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
        category: 'Cloud & DevOps', color: C.brandOrange,
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

/* ── Hexagon ── */
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
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill={`url(#hex-grad-${iconName})`} stroke={color} strokeWidth="2" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center" style={{ color }}>
                {IconComponent && <IconComponent size={size * 0.4} />}
            </div>
        </div>
    );
}

/* ── Tech Card ── */
function TechCard({ tech, color, visible, index }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="group relative overflow-hidden flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s`,
            }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)} onTouchEnd={() => setTimeout(() => setHovered(false), 300)}>
            <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-500"
                style={{
                    background: hovered ? `linear-gradient(135deg, ${color}08 0%, ${C.white} 100%)` : C.white,
                    border: `2px solid ${hovered ? color : `${C.accentBlue}15`}`,
                    boxShadow: hovered ? `0 20px 60px ${color}30, 0 0 0 1px ${color}20` : '0 4px 20px rgba(0,0,0,0.05)',
                    transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 70% 30%, ${color}10 0%, transparent 60%)` }} />
                <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 relative z-10">
                    <div style={{ transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)', transition: 'all 0.5s' }}>
                        <HexagonIcon iconName={tech.icon} color={hovered ? color : C.accentBlue} size={60} />
                    </div>
                    <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300"
                        style={{
                            background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                            border: `1px solid ${color}30`, color,
                            transform: hovered ? 'scale(1.1)' : 'scale(1)',
                        }}>Expert</div>
                </div>
                <div className="relative z-10 mb-4 sm:mb-5 md:mb-6">
                    <h3 className="text-xl sm:text-2xl font-black mb-1 sm:mb-2 transition-colors duration-300"
                        style={{ color: hovered ? color : C.black }}>{tech.name}</h3>
                    <p className="text-xs sm:text-sm font-medium" style={{ color: C.accentBlue }}>{tech.description}</p>
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                            style={{ color: hovered ? color : `${C.accentBlue}80` }}>Proficiency</span>
                        <span className="text-sm font-black" style={{ color: hovered ? color : C.accentBlue }}>{tech.level}%</span>
                    </div>
                    <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
                        {[...Array(10)].map((_, i) => {
                            const isActive = tech.level >= (i + 1) * 10;
                            return (
                                <div key={i} className="aspect-square rounded-sm transition-all duration-500"
                                    style={{
                                        background: isActive ? (hovered ? `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)` : `${C.accentBlue}40`) : `${C.accentBlue}10`,
                                        boxShadow: isActive && hovered ? `0 0 8px ${color}60` : 'none',
                                        transform: isActive && hovered ? 'scale(1.2)' : 'scale(1)',
                                        transitionDelay: `${i * 50}ms`,
                                    }} />
                            );
                        })}
                    </div>
                </div>
                <div className="flex gap-2 mt-4 sm:mt-5 md:mt-6 relative z-10">
                    <div className="px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold"
                        style={{ background: `${color}08`, color, border: `1px solid ${color}20` }}>Production</div>
                    <div className="px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold"
                        style={{ background: `${C.accentBlue}08`, color: C.accentBlue, border: `1px solid ${C.accentBlue}20` }}>
                        {tech.level > 90 ? 'Advanced' : tech.level > 80 ? 'Proficient' : 'Intermediate'}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Category Tab ── */
function CategoryTab({ category, isActive, onClick, color }) {
    return (
        <button className="relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300"
            style={{
                background: isActive ? color : C.white, color: isActive ? C.white : C.black,
                border: `2px solid ${isActive ? color : `${C.accentBlue}15`}`,
                boxShadow: isActive ? `0 4px 16px ${color}40` : '0 2px 8px rgba(0,0,0,0.04)',
                transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onClick={onClick}>
            {category}
            {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: C.white }} />}
        </button>
    );
}

/* ════════════════════════════════════════════
   Arc Gauge — animated 240° sweep arc
════════════════════════════════════════════ */
function arcPoint(cx, cy, r, angleDeg) {
    const a = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function ArcGauge({ value, maxValue, label, color, visible, animDelay = 0 }) {
    const [animVal, setAnimVal] = useState(0);

    useEffect(() => {
        if (!visible) { setAnimVal(0); return; }
        const t = setTimeout(() => setAnimVal(value), animDelay + 500);
        return () => clearTimeout(t);
    }, [visible, value, animDelay]);

    const R = 36, cx = 50, cy = 52;
    const startAngle = -210, sweep = 240;
    const pct = maxValue > 0 ? Math.min(animVal / maxValue, 1) : 0;
    const filledSweep = pct * sweep;

    const tS = arcPoint(cx, cy, R, startAngle);
    const tE = arcPoint(cx, cy, R, startAngle + sweep);
    const fE = arcPoint(cx, cy, R, startAngle + filledSweep);
    const tipPos = arcPoint(cx, cy, R, startAngle + filledSweep);

    const trackPath = `M ${tS.x} ${tS.y} A ${R} ${R} 0 ${sweep > 180 ? 1 : 0} 1 ${tE.x} ${tE.y}`;
    const fillPath = filledSweep > 0.5
        ? `M ${tS.x} ${tS.y} A ${R} ${R} 0 ${filledSweep > 180 ? 1 : 0} 1 ${fE.x} ${fE.y}`
        : '';

    const displayVal = value >= 100 ? `${value}` : value % 1 !== 0 ? value.toFixed(1) : `${value}`;
    const isActive = color !== 'rgba(255,255,255,0.25)';

    return (
        <div className="flex flex-col items-center">
            <div style={{ width: 100, height: 92 }}>
                <svg viewBox="0 0 100 100" width="100" height="92">
                    <defs>
                        <linearGradient id={`arc-grad-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                            <stop offset="100%" stopColor={color} stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Tick marks */}
                    {[...Array(13)].map((_, i) => {
                        const ta = startAngle + (i / 12) * sweep;
                        const inner = arcPoint(cx, cy, R - 4.5, ta);
                        const outer = arcPoint(cx, cy, R - 0.5, ta);
                        return (
                            <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y}
                                stroke="rgba(255,255,255,0.15)" strokeWidth={i % 3 === 0 ? 1.2 : 0.5} />
                        );
                    })}

                    {/* Track */}
                    <path d={trackPath} fill="none" stroke="rgba(255,255,255,0.07)"
                        strokeWidth="5.5" strokeLinecap="round" />

                    {/* Ambient glow track */}
                    {isActive && (
                        <path d={trackPath} fill="none" stroke={color}
                            strokeWidth="5.5" strokeLinecap="round" strokeOpacity="0.05" />
                    )}

                    {/* Filled arc */}
                    {fillPath && (
                        <path d={fillPath} fill="none"
                            stroke={isActive ? `url(#arc-grad-${label})` : 'rgba(255,255,255,0.2)'}
                            strokeWidth="5.5" strokeLinecap="round"
                            style={{
                                filter: isActive ? `drop-shadow(0 0 5px ${color})` : 'none',
                                transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            }} />
                    )}

                    {/* Glowing tip */}
                    {pct > 0.01 && isActive && (
                        <>
                            <circle cx={tipPos.x} cy={tipPos.y} r="5.5" fill={color} fillOpacity="0.15" />
                            <circle cx={tipPos.x} cy={tipPos.y} r="3"
                                fill={color}
                                style={{ filter: `drop-shadow(0 0 6px ${color})`, transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
                        </>
                    )}

                    {/* Center readout */}
                    <text x={cx} y={cy - 5} textAnchor="middle" dominantBaseline="middle"
                        fill={isActive ? 'white' : 'rgba(255,255,255,0.35)'}
                        fontSize="12" fontWeight="900" fontFamily="monospace">
                        {displayVal}
                    </text>
                    <text x={cx} y={cy + 7} textAnchor="middle" dominantBaseline="middle"
                        fill={isActive ? color : 'rgba(255,255,255,0.2)'}
                        fontSize="4.8" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.06em">
                        {label.toUpperCase()}
                    </text>
                </svg>
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   Heartbeat Pulse Strip — smooth line reveal
════════════════════════════════════════════ */
function PulseStrip({ data, color, visible, label }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!visible) { setProgress(0); return; }
        let raf, start = null;
        const duration = 1800;
        const run = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            setProgress(p);
            if (p < 1) raf = requestAnimationFrame(run);
        };
        const t = setTimeout(() => { raf = requestAnimationFrame(run); }, 700);
        return () => { clearTimeout(t); cancelAnimationFrame(raf); };
    }, [visible, data]);

    if (!data || data.length < 2) return null;

    const W = 200, H = 56;
    const min = Math.min(...data), max = Math.max(...data);
    const pts = data.map((v, i) => ({
        x: (i / (data.length - 1)) * W,
        y: H - 8 - ((v - min) / (max - min || 1)) * (H - 16),
    }));

    let path = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const cpx = (pts[i + 1].x - pts[i].x) * 0.42;
        path += ` C ${pts[i].x + cpx},${pts[i].y} ${pts[i + 1].x - cpx},${pts[i + 1].y} ${pts[i + 1].x},${pts[i + 1].y}`;
    }
    const area = `${path} L ${W} ${H} L 0 ${H} Z`;
    const clipW = progress * W;

    // Leading dot position (interpolated)
    const dotIdx = Math.min(Math.floor(progress * (pts.length - 1)), pts.length - 2);
    const frac = (progress * (pts.length - 1)) - dotIdx;
    const dotX = pts[dotIdx].x + (pts[dotIdx + 1]?.x - pts[dotIdx].x) * frac;
    const dotY = pts[dotIdx].y + (pts[dotIdx + 1]?.y - pts[dotIdx].y) * frac;

    const yoy = Math.round(((data[data.length - 1] - data[0]) / (data[0] || 1)) * 100);

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-black uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.13em' }}>{label}</span>
                <span className="text-[9px] font-mono font-bold" style={{ color }}>
                    ▲ {yoy}% YoY
                </span>
            </div>
            <div className="relative rounded-lg overflow-hidden"
                style={{ height: H, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" width="100%" height="100%">
                    <defs>
                        <linearGradient id={`ps-area-${label}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                            <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                        <clipPath id={`ps-clip-${label}`}>
                            <rect x="0" y="0" width={clipW} height={H} />
                        </clipPath>
                    </defs>
                    <path d={area} fill={`url(#ps-area-${label})`} clipPath={`url(#ps-clip-${label})`} />
                    <path d={path} fill="none" stroke={color} strokeWidth="1.6"
                        strokeLinecap="round" clipPath={`url(#ps-clip-${label})`}
                        style={{ filter: `drop-shadow(0 0 3px ${color}AA)` }} />
                    {progress > 0.02 && (
                        <>
                            <circle cx={dotX} cy={dotY} r="8" fill={color} fillOpacity="0.12" />
                            <circle cx={dotX} cy={dotY} r="3.5" fill={color}
                                style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
                        </>
                    )}
                </svg>
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   Insight Block
════════════════════════════════════════════ */
const METRIC_INSIGHTS = [
    {
        headline: 'Peak throughput achieved',
        detail: 'Highest recorded load handled with zero latency spikes across all CDN nodes globally.',
        tags: ['Latency: <12ms', 'CDN: Global', 'SLA: Met'],
        status: 'Optimal',
    },
    {
        headline: '150+ production deploys',
        detail: 'Zero-downtime rolling deployments via blue-green strategy. All pipelines passing.',
        tags: ['Blue-Green', 'Zero Downtime', 'CI Passing'],
        status: 'Healthy',
    },
    {
        headline: 'Five-nines reliability',
        detail: 'Sustained 99.9% uptime across multi-region infra with automated failover.',
        tags: ['Multi-Region', 'Auto-Failover', 'Monitored'],
        status: 'Live',
    },
];

function InsightBlock({ insight, color, visible }) {
    return (
        <div className="relative overflow-hidden rounded-xl p-4"
            style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(14px)',
                transition: 'all 0.7s ease 1.5s',
            }}>
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                style={{ background: `radial-gradient(circle at 100% 0%, ${color}1A 0%, transparent 70%)` }} />

            {/* Status */}
            <div className="flex items-center gap-2 mb-2.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                        style={{ background: color }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: color }} />
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest" style={{ color, letterSpacing: '0.14em' }}>
                    {insight.status}
                </span>
            </div>

            <p className="text-xs font-bold text-white mb-1.5 leading-snug">{insight.headline}</p>
            <p className="text-[10px] leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {insight.detail}
            </p>

            <div className="flex flex-wrap gap-1.5">
                {insight.tags.map(tag => (
                    <span key={tag}
                        className="text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{
                            background: `${color}12`,
                            color: `${color}CC`,
                            border: `1px solid ${color}22`,
                        }}>{tag}</span>
                ))}
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   Performance Graph
════════════════════════════════════════════ */
function PerformanceGraph({ visible }) {
    const [graphData, setGraphData] = useState(Array(12).fill(0));
    const [activeMetric, setActiveMetric] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const metricsData = [
        { label: 'Performance', data: [65, 78, 82, 88, 92, 89, 94, 97, 95, 98, 96, 99], color: C.brandOrange, value: 99, max: 100 },
        { label: 'Deployments', data: [20, 35, 45, 62, 75, 88, 95, 110, 125, 138, 145, 150], color: C.brandOrange, value: 150, max: 150 },
        { label: 'Uptime', data: [97.0, 98.0, 98.0, 99.0, 99.0, 99.5, 99.7, 99.8, 99.9, 99.9, 99.9, 99.9], color: C.brandOrange, value: 99.9, max: 100 },
    ];

    const currentMetric = metricsData[activeMetric];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        if (!visible) { setGraphData(Array(12).fill(0)); return; }
        const t = setTimeout(() => setGraphData(currentMetric.data), 300);
        return () => clearTimeout(t);
    }, [visible, activeMetric]);

    const maxValue = Math.max(...currentMetric.data);
    const minValue = Math.min(...currentMetric.data);
    const pad = 2;

    const buildLine = () => {
        if (!graphData.some(v => v > 0)) return '';
        const pts = graphData.map((v, i) => ({
            x: pad + (i / (graphData.length - 1)) * (100 - 2 * pad),
            y: pad + (1 - (v - minValue) / (maxValue - minValue || 1)) * (100 - 2 * pad),
        }));
        let p = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 0; i < pts.length - 1; i++) {
            const g = (k) => pts[Math.max(0, Math.min(pts.length - 1, k))];
            const p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
            p += ` C ${p1.x + (p2.x - p0.x) / 6},${p1.y + (p2.y - p0.y) / 6} ${p2.x - (p3.x - p1.x) / 6},${p2.y - (p3.y - p1.y) / 6} ${p2.x},${p2.y}`;
        }
        return p;
    };

    const linePath = buildLine();
    const areaPath = linePath ? `${linePath} L ${100 - pad},${100 - pad} L ${pad},${100 - pad} Z` : '';
    const yLabels = [maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, minValue];

    return (
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${C.primaryDark} 0%, ${C.primaryLight} 100%)`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease 1s',
                boxShadow: '0 20px 60px rgba(23, 25, 74, 0.3)',
            }}>
            {/* BG grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <defs><pattern id="pg" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={C.white} strokeWidth="1" />
                    </pattern></defs>
                    <rect width="100%" height="100%" fill="url(#pg)" />
                </svg>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6 md:mb-8 gap-3">
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-1 text-white">
                            Performance Analytics
                        </h3>
                        <p className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                            Real-time monitoring across 12 months
                        </p>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                        {metricsData.map((m, i) => (
                            <button key={m.label}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300"
                                style={{
                                    background: activeMetric === i ? m.color : 'rgba(255,255,255,0.07)',
                                    color: C.white,
                                    border: `2px solid ${activeMetric === i ? m.color : 'rgba(255,255,255,0.14)'}`,
                                    boxShadow: activeMetric === i ? `0 4px 12px ${m.color}50` : 'none',
                                }}
                                onClick={() => setActiveMetric(i)}>{m.label}</button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">

                    {/* Chart */}
                    <div className="lg:flex-1">
                        <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '2px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}>
                            <div className="relative" style={{ paddingLeft: '2.5rem', paddingBottom: '2rem' }}>
                                {yLabels.map((val, i) => (
                                    <span key={i} className="absolute text-[10px] sm:text-xs font-semibold"
                                        style={{ left: 0, color: 'rgba(255,255,255,0.38)', top: `${(i / 4) * 100}%`, transform: 'translateY(-50%)', lineHeight: 1 }}>
                                        {Math.round(val)}
                                    </span>
                                ))}

                                <div className="relative w-full" style={{ height: isMobile ? '200px' : '300px' }}>
                                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="ag" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.28" />
                                                <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.01" />
                                            </linearGradient>
                                            <linearGradient id={`lg-${activeMetric}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.1" />
                                                <stop offset="50%" stopColor={currentMetric.color} stopOpacity="0.6" />
                                                <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.1" />
                                            </linearGradient>
                                        </defs>
                                        {[0, 25, 50, 75, 100].map(y => (
                                            <line key={y} x1="0" y1={y} x2="100" y2={y}
                                                stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="2,2" />
                                        ))}
                                        {areaPath && <path d={areaPath} fill="url(#ag)" style={{ transition: 'all 1.5s cubic-bezier(0.34,1.56,0.64,1)' }} />}
                                        {linePath && <>
                                            <path d={linePath} stroke={currentMetric.color} strokeWidth="0.8" fill="none" strokeLinecap="round"
                                                style={{ filter: `drop-shadow(0 0 4px ${currentMetric.color})`, transition: 'all 1.5s cubic-bezier(0.34,1.56,0.64,1)' }} />
                                            <path d={linePath} stroke={`url(#lg-${activeMetric})`} strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeOpacity="0.3"
                                                style={{ transition: 'all 1.5s cubic-bezier(0.34,1.56,0.64,1)' }} />
                                        </>}
                                        {graphData.map((value, i) => {
                                            if (isMobile && i % 2 !== 0) return null;
                                            const x = pad + (i / (graphData.length - 1)) * (100 - 2 * pad);
                                            const y = pad + (1 - (value - minValue) / (maxValue - minValue || 1)) * (100 - 2 * pad);
                                            return (
                                                <g key={i}>
                                                    <circle cx={x} cy={y} r="4" fill="none"
                                                        stroke={currentMetric.color} strokeWidth="0.5" strokeOpacity="0.22"
                                                        style={{ opacity: visible ? 1 : 0, transition: `all 0.8s ease ${1.2 + i * 0.1}s` }} />
                                                    <circle cx={x} cy={y} r={isMobile ? '1' : '1.2'} fill={currentMetric.color}
                                                        stroke={C.white} strokeWidth="0.8"
                                                        style={{ opacity: visible ? 1 : 0, filter: `drop-shadow(0 0 2px ${currentMetric.color})`, transition: `all 0.8s ease ${1.2 + i * 0.1}s` }} />
                                                </g>
                                            );
                                        })}
                                    </svg>
                                </div>

                                {/* Month labels */}
                                <div className="absolute bottom-0 left-10 right-0 flex justify-between">
                                    {months.map((m, i) => {
                                        if (isMobile && i % 2 !== 0) return <span key={m} className="flex-1" />;
                                        return (
                                            <span key={m}
                                                className="text-[9px] sm:text-[10px] font-semibold text-center flex-1"
                                                style={{ color: 'rgba(255,255,255,0.38)', opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${1.5 + i * 0.05}s` }}>
                                                {m}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT PANEL — redesigned ── */}
                    <div className="flex flex-col gap-3 lg:w-[240px] xl:w-[260px] flex-shrink-0">

                        {/* KPI Gauges */}
                        <div className="rounded-xl p-3 pb-1"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <p className="text-[8px] font-black uppercase mb-2"
                                style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.16em' }}>KPI Overview</p>
                            <div className="flex justify-around">
                                {metricsData.map((m, i) => (
                                    <ArcGauge key={m.label}
                                        value={m.value} maxValue={m.max} label={m.label}
                                        color={activeMetric === i ? m.color : 'rgba(255,255,255,0.22)'}
                                        visible={visible} animDelay={i * 130} />
                                ))}
                            </div>
                        </div>

                        {/* Pulse Strip */}
                        <div className="rounded-xl p-3.5"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <PulseStrip
                                data={currentMetric.data}
                                color={currentMetric.color}
                                visible={visible}
                                label={`${currentMetric.label} — 12-month trend`}
                            />
                        </div>

                        {/* Insight */}
                        <InsightBlock insight={METRIC_INSIGHTS[activeMetric]} color={currentMetric.color} visible={visible} />

                    </div>
                </div>
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   Main Technologies Section
════════════════════════════════════════════ */
export default function Technologies() {
    const [visible, setVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const scroll = (dir) => scrollContainerRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });

    return (
        <section id="technologies" ref={sectionRef}
            className="relative py-10 sm:py-12 md:py-16 overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${C.white} 0%, #F5F7FF 50%, ${C.white} 100%)` }}>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-full max-w-2xl aspect-square rounded-full blur-3xl opacity-10 sm:opacity-15"
                    style={{ background: `radial-gradient(circle, ${C.primaryLight} 0%, transparent 70%)` }} />
                <div className="absolute bottom-20 -left-40 w-full max-w-xl aspect-square rounded-full blur-3xl opacity-5 sm:opacity-10"
                    style={{ background: `radial-gradient(circle, ${C.brandOrange} 0%, transparent 70%)` }} />
                <svg className="absolute inset-0 w-full h-full opacity-20 sm:opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <defs><pattern id="tg" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="30" cy="30" r="1" fill={C.accentBlue} opacity="0.3" />
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke={C.accentBlue} strokeWidth="0.5" opacity="0.15" />
                    </pattern></defs>
                    <rect width="100%" height="100%" fill="url(#tg)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4"
                        style={{ background: `linear-gradient(135deg, ${C.brandOrange}15 0%, ${C.brandOrange}05 100%)`, border: `1px solid ${C.brandOrange}30` }}>
                        <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: C.brandOrange }} />
                            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3" style={{ background: C.brandOrange }} />
                        </span>
                        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase" style={{ color: C.brandOrange }}>Tech Excellence</span>
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
                            <div key={tag} className="flex items-center gap-1.5 sm:gap-2"
                                style={{ color: C.accentBlue, opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${1 + i * 0.2}s` }}>
                                <span style={{ color: C.brandOrange }}>▸</span>{tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease 0.3s' }}>
                    {TECH_CATEGORIES.map((cat, i) => (
                        <CategoryTab key={cat.category} category={cat.category}
                            isActive={activeCategory === i} onClick={() => setActiveCategory(i)} color={cat.color} />
                    ))}
                </div>

                {/* Tech cards */}
                <div className="relative mb-10 sm:mb-12">
                    <button onClick={() => scroll('left')}
                        className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ background: `${C.white}90`, border: `2px solid ${TECH_CATEGORIES[activeCategory].color}40`, color: TECH_CATEGORIES[activeCategory].color, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <FaChevronLeft size={16} />
                    </button>
                    <button onClick={() => scroll('right')}
                        className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ background: `${C.white}90`, border: `2px solid ${TECH_CATEGORIES[activeCategory].color}40`, color: TECH_CATEGORIES[activeCategory].color, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <FaChevronRight size={16} />
                    </button>

                    <div ref={scrollContainerRef} className="md:hidden flex gap-4 overflow-x-auto pb-4 px-12 scrollbar-hide snap-x snap-mandatory">
                        {TECH_CATEGORIES[activeCategory].technologies.map((tech, i) => (
                            <div key={tech.name} className="snap-center">
                                <TechCard tech={tech} color={TECH_CATEGORIES[activeCategory].color} visible={visible} index={i} />
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TECH_CATEGORIES[activeCategory].technologies.map((tech, i) => (
                            <TechCard key={tech.name} tech={tech} color={TECH_CATEGORIES[activeCategory].color} visible={visible} index={i} />
                        ))}
                    </div>
                </div>

                <PerformanceGraph visible={visible} />
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
            `}</style>
        </section>
    );
}