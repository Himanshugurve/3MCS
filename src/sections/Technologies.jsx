import React, { useEffect, useRef, useState } from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
    FaShieldAlt, FaChartLine, FaCogs, FaNetworkWired, FaBrain, FaRobot,
    FaLayerGroup, FaCube, FaGlobe, FaMobile, FaDesktop,
    FaChevronLeft, FaChevronRight, FaArrowUp, FaArrowDown
} from "react-icons/fa";
import {
    SiKubernetes, SiTerraform, SiVuedotjs, SiTypescript, SiNextdotjs,
    SiTailwindcss, SiGraphql, SiPostgresql, SiRedis
} from "react-icons/si";

/* ─── Palette ─── */
const C = {
    primaryLight: '#3D4299',
    accentBlue:   '#5D7A7F',
    brandOrange:  '#F26A21',
    white:        '#FFFFFF',
    black:        '#000000',
    primaryDark:  '#17194A',
};

const ICON_MAP = {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
    FaShieldAlt, FaChartLine, FaCogs, FaNetworkWired, FaBrain, FaRobot,
    FaLayerGroup, FaCube, FaGlobe, FaMobile, FaDesktop,
    SiKubernetes, SiTerraform, SiVuedotjs, SiTypescript, SiNextdotjs,
    SiTailwindcss, SiGraphql, SiPostgresql, SiRedis
};

const TECH_CATEGORIES = [
    {
        category: 'Frontend', color: C.brandOrange,
        technologies: [
            { name: 'React',      icon: 'FaReact',       level: 95, description: 'UI Development'       },
            { name: 'Next.js',    icon: 'SiNextdotjs',   level: 90, description: 'SSR Framework'        },
            { name: 'TypeScript', icon: 'SiTypescript',  level: 88, description: 'Type Safety'           },
            { name: 'Tailwind',   icon: 'SiTailwindcss', level: 92, description: 'CSS Framework'         },
            { name: 'Vue.js',     icon: 'SiVuedotjs',    level: 85, description: 'Progressive Framework' },
            { name: 'WebGL',      icon: 'FaCube',        level: 80, description: '3D Graphics'            },
        ],
    },
    {
        category: 'Backend', color: C.brandOrange,
        technologies: [
            { name: 'Node.js',    icon: 'FaNodeJs',      level: 93, description: 'Runtime Environment'  },
            { name: 'Python',     icon: 'FaPython',      level: 90, description: 'Data & AI'             },
            { name: 'GraphQL',    icon: 'SiGraphql',     level: 87, description: 'API Query Language'    },
            { name: 'PostgreSQL', icon: 'SiPostgresql',  level: 89, description: 'Database'              },
            { name: 'Redis',      icon: 'SiRedis',       level: 85, description: 'In-Memory Cache'       },
            { name: 'Docker',     icon: 'FaDocker',      level: 91, description: 'Containerization'      },
        ],
    },
    {
        category: 'Cloud & DevOps', color: C.brandOrange,
        technologies: [
            { name: 'AWS',        icon: 'FaAws',         level: 92, description: 'Cloud Platform'    },
            { name: 'Kubernetes', icon: 'SiKubernetes',  level: 88, description: 'Orchestration'     },
            { name: 'Terraform',  icon: 'SiTerraform',   level: 86, description: 'Infrastructure'    },
            { name: 'CI/CD',      icon: 'FaCogs',        level: 90, description: 'Automation'        },
            { name: 'Monitoring', icon: 'FaChartLine',   level: 87, description: 'Observability'     },
            { name: 'Security',   icon: 'FaShieldAlt',   level: 94, description: 'Protection'        },
        ],
    },
];

const METRICS = [
    {
        label: 'Performance', unit: '%', color: C.brandOrange,
        description: 'System-wide performance score across all production endpoints.',
        points: [
            { month: 'Jan', value: 65,  note: 'Initial baseline. Infrastructure provisioning complete.'        },
            { month: 'Feb', value: 78,  note: 'CDN layer optimised. Cache hit ratio improved by 34%.'          },
            { month: 'Mar', value: 82,  note: 'Query optimisation shipped. DB read latency down 41%.'          },
            { month: 'Apr', value: 88,  note: 'Edge computing rollout. P99 latency below 80ms globally.'       },
            { month: 'May', value: 92,  note: 'Auto-scaling policies refined. Zero cold-start failures.'       },
            { month: 'Jun', value: 89,  note: 'Minor regression from v3.1 deploy. Hotfix applied.'             },
            { month: 'Jul', value: 94,  note: 'Load balancer tuning complete. Throughput up 18%.'              },
            { month: 'Aug', value: 97,  note: 'Serverless migration live. Overhead reduced significantly.'     },
            { month: 'Sep', value: 95,  note: 'Stable post-migration. Minor variance from peak traffic.'       },
            { month: 'Oct', value: 98,  note: 'Performance record. Peak Black Friday load absorbed.'           },
            { month: 'Nov', value: 96,  note: 'Sustained high performance. New monitoring baseline set.'       },
            { month: 'Dec', value: 99,  note: 'All-time peak. Year-end infrastructure audit passed.'           },
        ],
    },
    {
        label: 'Deployments', unit: '', color: '#5EEAD4',
        description: 'Total production deployments shipped per month using zero-downtime blue-green strategy.',
        points: [
            { month: 'Jan', value: 20,  note: 'CI/CD pipelines established. Manual gates still in place.'      },
            { month: 'Feb', value: 35,  note: 'Automated testing integrated. Deployment confidence up.'        },
            { month: 'Mar', value: 45,  note: 'Feature flag system live. Safer incremental releases.'          },
            { month: 'Apr', value: 62,  note: 'Blue-green deploys fully automated. Rollback time < 30s.'       },
            { month: 'May', value: 75,  note: 'Canary releases introduced. Risk exposure minimised.'           },
            { month: 'Jun', value: 88,  note: 'Multi-region deploys now simultaneous. Coverage expanded.'      },
            { month: 'Jul', value: 95,  note: 'Self-healing pipelines active. Zero manual interventions.'      },
            { month: 'Aug', value: 110, note: 'Sprint velocity increase. 3 teams shipping concurrently.'       },
            { month: 'Sep', value: 125, note: 'Microservices fully decoupled. Independent deploy cadence.'     },
            { month: 'Oct', value: 138, note: 'Highest ever throughput. Platform reliability maintained.'      },
            { month: 'Nov', value: 145, note: 'Continuous delivery maturity level 4 achieved.'                 },
            { month: 'Dec', value: 150, note: '150 deploys. Zero production incidents for 60 days.'            },
        ],
    },
    {
        label: 'Uptime', unit: '%', color: '#A78BFA',
        description: 'Measured availability across all services. Five-nines target maintained.',
        points: [
            { month: 'Jan', value: 97.0, note: 'Baseline uptime. Single-region, manual failover.'              },
            { month: 'Feb', value: 98.0, note: 'Health check automation added. Faster incident detection.'     },
            { month: 'Mar', value: 98.0, note: 'DB replica promoted automatically on primary failure.'         },
            { month: 'Apr', value: 99.0, note: 'Multi-AZ deployment live. Hardware failure tolerance added.'   },
            { month: 'May', value: 99.0, note: 'Circuit breakers implemented. Cascade failures eliminated.'    },
            { month: 'Jun', value: 99.5, note: 'Geo-redundancy active. Regional outage resilience proven.'     },
            { month: 'Jul', value: 99.7, note: 'DNS failover < 10s. SLA renegotiated upwards.'                 },
            { month: 'Aug', value: 99.8, note: 'Global anycast routing live. Zero single points of failure.'   },
            { month: 'Sep', value: 99.9, note: 'Five-nines achieved for first time. Architecture validated.'   },
            { month: 'Oct', value: 99.9, note: 'Sustained five-nines. 43 days without incident.'               },
            { month: 'Nov', value: 99.9, note: 'Chaos engineering tests passed. Resilience confirmed.'         },
            { month: 'Dec', value: 99.9, note: 'Year-end review: best uptime in company history.'              },
        ],
    },
];

/* ════ helpers ════ */
function polar(cx, cy, r, angleDeg) {
    const a = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function describeArc(cx, cy, r, startDeg, endDeg) {
    const s = polar(cx, cy, r, startDeg);
    const e = polar(cx, cy, r, endDeg);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

/* ════════════════════════════════════════════
   Orbital Radial Chart
   12 concentric rings, one per month.
   Ring thickness and fill represent value.
════════════════════════════════════════════ */
function OrbitalChart({ metric, activeIndex, onHover, onLeave, onClick, visible }) {
    const [animPct, setAnimPct] = useState(Array(12).fill(0));

    useEffect(() => {
        if (!visible) { setAnimPct(Array(12).fill(0)); return; }
        const timers = metric.points.map((pt, i) => {
            const allVals = metric.points.map(p => p.value);
            const mn = Math.min(...allVals), mx = Math.max(...allVals);
            const pct = mx === mn ? 1 : (pt.value - mn) / (mx - mn);
            return setTimeout(() => {
                setAnimPct(prev => {
                    const next = [...prev]; next[i] = pct; return next;
                });
            }, 300 + i * 80);
        });
        return () => timers.forEach(clearTimeout);
    }, [visible, metric]);

    const SIZE   = 280;
    const cx     = SIZE / 2;
    const cy     = SIZE / 2;
    const N      = 12;
    const outerR = 126;
    const innerR = 18;
    const gap    = 2;
    const ringW  = (outerR - innerR - (N - 1) * gap) / N;

    // Color palette: subtle ring gradients from dim → accent
    const col = metric.color;

    return (
        <div className="relative flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
            {/* Outer decorative ring */}
            <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}
                style={{ position: 'absolute', top: 0, left: 0 }}>
                <defs>
                    {metric.points.map((_, i) => (
                        <linearGradient key={i} id={`rg-${i}`} gradientUnits="userSpaceOnUse"
                            x1={cx} y1={cy - outerR} x2={cx} y2={cy + outerR}>
                            <stop offset="0%" stopColor={col} stopOpacity={0.3 + (i / N) * 0.5} />
                            <stop offset="100%" stopColor={col} stopOpacity={0.9} />
                        </linearGradient>
                    ))}
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="glow-sm">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {/* Faint full-circle track for each ring */}
                {metric.points.map((_, i) => {
                    const r = innerR + i * (ringW + gap) + ringW / 2;
                    return (
                        <circle key={i} cx={cx} cy={cy} r={r}
                            fill="none"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth={ringW}
                        />
                    );
                })}

                {/* Filled arcs */}
                {metric.points.map((pt, i) => {
                    const r   = innerR + i * (ringW + gap) + ringW / 2;
                    const pct = animPct[i];
                    const deg = pct * 355; // 0→355° so it never fully closes
                    if (deg < 0.5) return null;
                    const isActive = i === activeIndex;
                    return (
                        <g key={i}>
                            {/* glow halo when active */}
                            {isActive && (
                                <path d={describeArc(cx, cy, r, 0, deg)}
                                    fill="none"
                                    stroke={col}
                                    strokeWidth={ringW + 4}
                                    strokeLinecap="round"
                                    strokeOpacity={0.15}
                                />
                            )}
                            <path
                                d={describeArc(cx, cy, r, 0, deg)}
                                fill="none"
                                stroke={`url(#rg-${i})`}
                                strokeWidth={isActive ? ringW + 1 : ringW - 0.5}
                                strokeLinecap="round"
                                style={{
                                    transition: 'stroke-width 0.2s ease',
                                    filter: isActive ? `drop-shadow(0 0 6px ${col})` : 'none',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={() => onHover(i)}
                                onMouseLeave={onLeave}
                                onClick={() => onClick(i)}
                            />
                            {/* Tip dot */}
                            {(() => {
                                const tip = polar(cx, cy, r, deg);
                                return (
                                    <circle cx={tip.x} cy={tip.y} r={isActive ? 3.5 : 2}
                                        fill={col}
                                        style={{
                                            filter: isActive ? `drop-shadow(0 0 5px ${col})` : 'none',
                                            transition: 'r 0.2s ease',
                                            cursor: 'pointer',
                                            pointerEvents: 'none',
                                        }}
                                    />
                                );
                            })()}
                        </g>
                    );
                })}

                {/* Month labels at tip of each ring */}
                {metric.points.map((pt, i) => {
                    const r   = innerR + i * (ringW + gap) + ringW / 2;
                    const pct = animPct[i];
                    const deg = pct * 355;
                    const labelR = r;
                    // Place label slightly past the arc tip, rotated outward
                    const labelDeg = Math.min(deg + 12, 355);
                    const lp = polar(cx, cy, labelR + ringW / 2 + 5, labelDeg);
                    const isActive = i === activeIndex;
                    if (pct < 0.05) return null;
                    return (
                        <text key={i}
                            x={lp.x} y={lp.y}
                            textAnchor="middle" dominantBaseline="middle"
                            fontSize={isActive ? 7 : 6}
                            fontWeight={isActive ? 800 : 600}
                            fill={isActive ? col : 'rgba(255,255,255,0.4)'}
                            style={{ pointerEvents: 'none', transition: 'all 0.2s', userSelect: 'none' }}>
                            {pt.month}
                        </text>
                    );
                })}

                {/* Centre glow disc */}
                <circle cx={cx} cy={cy} r={innerR - 2}
                    fill="rgba(255,255,255,0.03)"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth={0.5}
                />
            </svg>

            {/* Centre readout */}
            <div className="absolute flex flex-col items-center justify-center pointer-events-none"
                style={{ inset: 0 }}>
                <span style={{
                    fontSize: '1.4rem', fontWeight: 900, color: C.white,
                    fontFamily: 'monospace', lineHeight: 1,
                    textShadow: `0 0 20px ${col}88`,
                    transition: 'all 0.3s ease',
                }}>
                    {metric.points[activeIndex]?.value}
                </span>
                <span style={{ fontSize: '0.55rem', fontWeight: 700, color: col,
                    letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>
                    {metric.label}
                </span>
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   InfoPanel
════════════════════════════════════════════ */
function InfoPanel({ metric, pointIndex, visible }) {
    const point = metric.points[pointIndex];
    const prev  = metric.points[pointIndex - 1];
    const delta = prev ? +(point.value - prev.value).toFixed(2) : null;
    const isUp  = delta === null || delta >= 0;
    const allVals = metric.points.map(p => p.value);
    const maxVal  = Math.max(...allVals);
    const minVal  = Math.min(...allVals);
    const avg     = (allVals.reduce((a, b) => a + b, 0) / allVals.length).toFixed(1);
    const yoy     = Math.round(((metric.points[11].value - metric.points[0].value) / metric.points[0].value) * 100);
    const col     = metric.color;

    return (
        <div className="flex flex-col gap-3 h-full"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}>

            {/* Live badge + month */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                            style={{ background: col }} />
                        <span className="relative inline-flex rounded-full h-2 w-2"
                            style={{ background: col }} />
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest"
                        style={{ color: col, letterSpacing: '0.16em' }}>Live Data</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
                    style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {point.month} 2024
                </span>
            </div>

            {/* Value */}
            <div>
                <p className="text-[9px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: 'rgba(255,255,255,0.38)', letterSpacing: '0.14em' }}>
                    {metric.label}
                </p>
                <div className="flex items-end gap-1.5">
                    <span style={{
                        fontSize: 'clamp(2.4rem,5vw,3.6rem)', fontWeight: 900,
                        color: C.white, fontFamily: 'monospace', lineHeight: 1,
                        textShadow: `0 0 30px ${col}55`, transition: 'all 0.3s ease',
                    }}>
                        {point.value}
                    </span>
                    {metric.unit && (
                        <span className="font-black text-lg mb-0.5" style={{ color: col }}>
                            {metric.unit}
                        </span>
                    )}
                </div>

                {/* Delta */}
                {delta !== null && (
                    <div className="flex items-center gap-1.5 mt-2">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                            style={{
                                background: isUp ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)',
                                border: `1px solid ${isUp ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
                            }}>
                            {isUp
                                ? <FaArrowUp size={7} color="#22c55e" />
                                : <FaArrowDown size={7} color="#ef4444" />}
                            <span className="text-[9px] font-black"
                                style={{ color: isUp ? '#22c55e' : '#ef4444' }}>
                                {isUp ? '+' : ''}{delta}{metric.unit}
                            </span>
                        </div>
                        <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                            vs {prev.month}
                        </span>
                    </div>
                )}
            </div>

            {/* Percentile bar */}
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-[8px] font-bold uppercase tracking-wider"
                        style={{ color: 'rgba(255,255,255,0.3)' }}>Position</span>
                    <span className="text-[8px] font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        {maxVal === minVal ? '100' : Math.round(((point.value - minVal) / (maxVal - minVal)) * 100)}%ile
                    </span>
                </div>
                <div className="rounded-full overflow-hidden"
                    style={{ height: 3, background: 'rgba(255,255,255,0.07)' }}>
                    <div className="h-full rounded-full"
                        style={{
                            width: maxVal === minVal ? '100%' : `${((point.value - minVal) / (maxVal - minVal)) * 100}%`,
                            background: `linear-gradient(90deg,${col}66,${col})`,
                            boxShadow: `0 0 8px ${col}88`,
                            transition: 'width 0.6s cubic-bezier(0.34,1.56,0.64,1)',
                        }} />
                </div>
            </div>

            {/* Insight card */}
            <div className="rounded-xl p-3 relative overflow-hidden flex-1"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 100% 0%,${col}1A 0%,transparent 70%)` }} />
                <p className="text-[8px] font-black uppercase tracking-widest mb-1.5"
                    style={{ color: col, letterSpacing: '0.14em' }}>Insight</p>
                <p className="text-[10px] leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.6)', transition: 'all 0.3s' }}>
                    {point.note}
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1.5">
                {[
                    { label: 'Peak', value: `${maxVal}${metric.unit}` },
                    { label: 'Avg',  value: `${avg}${metric.unit}`    },
                    { label: 'YoY',  value: `+${yoy}%`                },
                ].map(({ label, value }) => (
                    <div key={label} className="rounded-lg p-2 text-center"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p className="text-[7px] font-black uppercase tracking-widest mb-0.5"
                            style={{ color: 'rgba(255,255,255,0.28)' }}>{label}</p>
                        <p className="text-[10px] font-black font-mono"
                            style={{ color: 'rgba(255,255,255,0.85)' }}>{value}</p>
                    </div>
                ))}
            </div>

            {/* Ring timeline */}
            <div>
                <p className="text-[7px] font-black uppercase tracking-widest mb-1.5"
                    style={{ color: 'rgba(255,255,255,0.22)' }}>Ring Index</p>
                <div className="flex items-center gap-0.5">
                    {metric.points.map((_, i) => (
                        <div key={i} className="flex-1 rounded-full"
                            style={{
                                height: 2.5,
                                background: i === pointIndex ? col
                                    : i < pointIndex ? `${col}44`
                                    : 'rgba(255,255,255,0.08)',
                                boxShadow: i === pointIndex ? `0 0 5px ${col}` : 'none',
                                transition: 'all 0.3s ease',
                            }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   PerformanceGraph — Orbital wrapper
════════════════════════════════════════════ */
function PerformanceGraph({ visible }) {
    const [activeMetric, setActiveMetric] = useState(0);
    const [activeIndex, setActiveIndex]   = useState(11);
    const [hoverIndex, setHoverIndex]     = useState(null);

    const metric       = METRICS[activeMetric];
    const displayIndex = hoverIndex !== null ? hoverIndex : activeIndex;

    const handleMetricChange = (i) => {
        setActiveMetric(i);
        setActiveIndex(11);
        setHoverIndex(null);
    };

    return (
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg,${C.primaryDark} 0%,${C.primaryLight} 100%)`,
                opacity:    visible ? 1 : 0,
                transform:  visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease 1s',
                boxShadow:  '0 20px 60px rgba(23,25,74,0.35)',
            }}>

            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10">

                {/* ── Header ── */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-3">
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-1 text-white">
                            Performance Analytics
                        </h3>
                        <p className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                            Hover or click any orbit ring to explore monthly data
                        </p>
                    </div>
                    <div className="flex gap-2 flex-wrap flex-shrink-0">
                        {METRICS.map((m, i) => (
                            <button key={m.label}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300"
                                style={{
                                    background: activeMetric === i ? m.color : 'rgba(255,255,255,0.07)',
                                    color: C.white,
                                    border: `2px solid ${activeMetric === i ? m.color : 'rgba(255,255,255,0.14)'}`,
                                    boxShadow: activeMetric === i ? `0 4px 14px ${m.color}55` : 'none',
                                    transform: activeMetric === i ? 'translateY(-1px)' : 'none',
                                }}
                                onClick={() => handleMetricChange(i)}>
                                {m.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Body: Info panel LEFT + Orbital chart RIGHT ── */}
                <div className="flex flex-col lg:flex-row gap-5 items-start">

                    {/* Left info panel */}
                    <div className="w-full lg:w-[230px] xl:w-[250px] flex-shrink-0 rounded-xl p-4"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <InfoPanel
                            key={`${activeMetric}-${displayIndex}`}
                            metric={metric}
                            pointIndex={displayIndex}
                            visible={visible}
                        />
                    </div>

                    {/* Right: orbital chart + legend */}
                    <div className="flex-1 min-w-0 flex flex-col gap-4">

                        {/* Chart area */}
                        <div className="rounded-xl relative overflow-hidden"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>

                            {/* Ambient glow behind chart */}
                            <div className="absolute inset-0 pointer-events-none"
                                style={{ background: `radial-gradient(ellipse at 55% 50%,${metric.color}12 0%,transparent 65%)` }} />

                            <div className="flex flex-col sm:flex-row items-center gap-6 p-5 sm:p-6 relative z-10">

                                {/* The orbital SVG */}
                                <div className="flex-shrink-0">
                                    <OrbitalChart
                                        metric={metric}
                                        activeIndex={displayIndex}
                                        onHover={setHoverIndex}
                                        onLeave={() => setHoverIndex(null)}
                                        onClick={setActiveIndex}
                                        visible={visible}
                                    />
                                </div>

                                {/* Right of chart: month-by-month bar list */}
                                <div className="flex-1 min-w-0 w-full">
                                    <p className="text-[8px] font-black uppercase tracking-widest mb-3"
                                        style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.16em' }}>
                                        Monthly Breakdown
                                    </p>
                                    <div className="flex flex-col gap-1.5">
                                        {metric.points.map((pt, i) => {
                                            const allVals = metric.points.map(p => p.value);
                                            const mn = Math.min(...allVals), mx = Math.max(...allVals);
                                            const pct = mx === mn ? 1 : (pt.value - mn) / (mx - mn);
                                            const isActive = i === displayIndex;
                                            return (
                                                <div key={i}
                                                    className="flex items-center gap-2 cursor-pointer group/row"
                                                    onMouseEnter={() => setHoverIndex(i)}
                                                    onMouseLeave={() => setHoverIndex(null)}
                                                    onClick={() => setActiveIndex(i)}>
                                                    {/* Month label */}
                                                    <span className="text-[9px] font-bold w-6 flex-shrink-0 transition-colors duration-200"
                                                        style={{ color: isActive ? metric.color : 'rgba(255,255,255,0.35)' }}>
                                                        {pt.month}
                                                    </span>
                                                    {/* Bar */}
                                                    <div className="flex-1 rounded-full overflow-hidden"
                                                        style={{ height: 4, background: 'rgba(255,255,255,0.05)' }}>
                                                        <div className="h-full rounded-full transition-all duration-500"
                                                            style={{
                                                                width: `${pct * 100}%`,
                                                                background: isActive
                                                                    ? `linear-gradient(90deg,${metric.color}88,${metric.color})`
                                                                    : `rgba(255,255,255,${0.1 + pct * 0.15})`,
                                                                boxShadow: isActive ? `0 0 8px ${metric.color}88` : 'none',
                                                            }} />
                                                    </div>
                                                    {/* Value */}
                                                    <span className="text-[9px] font-black font-mono w-10 text-right flex-shrink-0 transition-colors duration-200"
                                                        style={{ color: isActive ? metric.color : 'rgba(255,255,255,0.4)' }}>
                                                        {pt.value}{metric.unit}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom description */}
                        <div className="rounded-xl px-4 py-3"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <p className="text-[10px] leading-relaxed"
                                style={{ color: 'rgba(255,255,255,0.35)' }}>
                                {metric.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   HexagonIcon
════════════════════════════════════════════ */
function HexagonIcon({ iconName, color, size = 80 }) {
    const IconComponent = ICON_MAP[iconName];
    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg viewBox="0 0 100 100" className="absolute inset-0">
                <defs>
                    <linearGradient id={`hg-${iconName}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill={`url(#hg-${iconName})`} stroke={color} strokeWidth="2" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center" style={{ color }}>
                {IconComponent && <IconComponent size={size * 0.4} />}
            </div>
        </div>
    );
}

/* ════════════════════════════════════════════
   TechCard
════════════════════════════════════════════ */
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
                    background: hovered ? `linear-gradient(135deg,${color}08 0%,${C.white} 100%)` : C.white,
                    border: `2px solid ${hovered ? color : `${C.accentBlue}15`}`,
                    boxShadow: hovered ? `0 20px 60px ${color}30,0 0 0 1px ${color}20` : '0 4px 20px rgba(0,0,0,0.05)',
                    transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 70% 30%,${color}10 0%,transparent 60%)` }} />
                <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 relative z-10">
                    <div style={{ transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1)', transition: 'all 0.5s' }}>
                        <HexagonIcon iconName={tech.icon} color={hovered ? color : C.accentBlue} size={60} />
                    </div>
                    <div className="px-3 sm:px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm"
                        style={{
                            background: `linear-gradient(135deg,${color}20,${color}10)`,
                            border: `1px solid ${color}30`, color,
                            transform: hovered ? 'scale(1.1)' : 'scale(1)', transition: 'all 0.3s',
                        }}>Expert</div>
                </div>
                <div className="relative z-10 mb-4 sm:mb-5 md:mb-6">
                    <h3 className="text-xl sm:text-2xl font-black mb-1 transition-colors duration-300"
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
                            const on = tech.level >= (i + 1) * 10;
                            return (
                                <div key={i} className="aspect-square rounded-sm transition-all duration-500"
                                    style={{
                                        background: on ? (hovered ? `linear-gradient(135deg,${color},${color}CC)` : `${C.accentBlue}40`) : `${C.accentBlue}10`,
                                        boxShadow: on && hovered ? `0 0 8px ${color}60` : 'none',
                                        transform: on && hovered ? 'scale(1.2)' : 'scale(1)',
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

/* ════════════════════════════════════════════
   CategoryTab
════════════════════════════════════════════ */
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
            onClick={onClick}>
            {category}
            {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: C.white }} />}
        </button>
    );
}

/* ════════════════════════════════════════════
   Main Technologies Section
════════════════════════════════════════════ */
export default function Technologies() {
    const [visible, setVisible]             = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    const scrollRef  = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const scroll = (dir) =>
        scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });

    return (
        <section id="technologies" ref={sectionRef}
            className="relative py-10 sm:py-12 md:py-16 overflow-hidden"
            style={{ background: `linear-gradient(180deg,${C.white} 0%,#F5F7FF 50%,${C.white} 100%)` }}>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-full max-w-2xl aspect-square rounded-full blur-3xl opacity-10 sm:opacity-15"
                    style={{ background: `radial-gradient(circle,${C.primaryLight} 0%,transparent 70%)` }} />
                <div className="absolute bottom-20 -left-40 w-full max-w-xl aspect-square rounded-full blur-3xl opacity-5 sm:opacity-10"
                    style={{ background: `radial-gradient(circle,${C.brandOrange} 0%,transparent 70%)` }} />
                <svg className="absolute inset-0 w-full h-full opacity-20 sm:opacity-30">
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
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)' }}>
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4"
                        style={{ background: `linear-gradient(135deg,${C.brandOrange}15,${C.brandOrange}05)`, border: `1px solid ${C.brandOrange}30` }}>
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
                                <path d="M0 8 Q100 2,200 8 T400 8" stroke={C.brandOrange} strokeWidth="3" fill="none" opacity="0.4" />
                            </svg>
                        </span>
                        <span style={{ color: C.primaryDark }}>Arsenal</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4" style={{ color: C.accentBlue }}>
                        Cutting-edge technologies and frameworks powering enterprise-grade solutions.
                        Built for scale, optimized for performance.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm font-mono">
                        {['AI-Powered','Cloud-Native','Scalable'].map((tag, i) => (
                            <div key={tag} className="flex items-center gap-1.5 sm:gap-2"
                                style={{ color: C.accentBlue, opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${1+i*0.2}s` }}>
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
                    <div ref={scrollRef} className="md:hidden flex gap-4 overflow-x-auto pb-4 px-12 scrollbar-hide snap-x snap-mandatory">
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
            `}</style>
        </section>
    );
}