// TechnologiesData.js

/* ─────────────────────────────────────────────
   Color palette from Hero
───────────────────────────────────────────── */
export const C = {
    primary: '#2B2F81',
    primaryDark: '#17194A',
    accentBlue: '#5D7A7F',
    brandOrange: '#F26A21',
    brandOrangeDark: '#E4571E',
    brandGold: '#F4B63E',
    white: '#FFFFFF',
    black: '#000000',
    lightBg: '#F8F7FF',
};

/* ─────────────────────────────────────────────
   Technologies Data
───────────────────────────────────────────── */
export const TECH_CATEGORIES = [
    {
        category: 'Frontend',
        color: C.brandOrange,
        technologies: [
            { name: 'React', icon: '⚛️', level: 95 },
            { name: 'Next.js', icon: '▲', level: 92 },
            { name: 'Vue.js', icon: '🟢', level: 88 },
            { name: 'TypeScript', icon: '🔷', level: 90 },
            { name: 'Tailwind CSS', icon: '🎨', level: 94 },
            { name: 'Redux', icon: '🔄', level: 85 },
        ]
    },
    {
        category: 'Backend',
        color: C.primary,
        technologies: [
            { name: 'Node.js', icon: '🟩', level: 93 },
            { name: 'Python', icon: '🐍', level: 89 },
            { name: 'Java', icon: '☕', level: 86 },
            { name: 'Go', icon: '🔵', level: 82 },
            { name: 'Ruby', icon: '💎', level: 80 },
            { name: 'PHP', icon: '🐘', level: 84 },
        ]
    },
    {
        category: 'Database',
        color: C.accentBlue,
        technologies: [
            { name: 'PostgreSQL', icon: '🐘', level: 91 },
            { name: 'MongoDB', icon: '🍃', level: 88 },
            { name: 'MySQL', icon: '🐬', level: 87 },
            { name: 'Redis', icon: '🔴', level: 85 },
            { name: 'Elasticsearch', icon: '🔍', level: 83 },
            { name: 'DynamoDB', icon: '⚡', level: 80 },
        ]
    },
    {
        category: 'Cloud & DevOps',
        color: C.brandGold,
        technologies: [
            { name: 'AWS', icon: '☁️', level: 94 },
            { name: 'Docker', icon: '🐳', level: 92 },
            { name: 'Kubernetes', icon: '⎈', level: 89 },
            { name: 'Azure', icon: '🔷', level: 86 },
            { name: 'GCP', icon: '🌐', level: 85 },
            { name: 'Terraform', icon: '🏗️', level: 88 },
        ]
    },
    {
        category: 'Mobile',
        color: C.brandOrangeDark,
        technologies: [
            { name: 'React Native', icon: '📱', level: 90 },
            { name: 'Flutter', icon: '🦋', level: 87 },
            { name: 'Swift', icon: '🍎', level: 85 },
            { name: 'Kotlin', icon: '🤖', level: 84 },
            { name: 'Ionic', icon: '⚛️', level: 82 },
            { name: 'Xamarin', icon: '🔷', level: 78 },
        ]
    },
    {
        category: 'AI & Data Science',
        color: C.primary,
        technologies: [
            { name: 'TensorFlow', icon: '🧠', level: 88 },
            { name: 'PyTorch', icon: '🔥', level: 86 },
            { name: 'Scikit-learn', icon: '📊', level: 90 },
            { name: 'Pandas', icon: '🐼', level: 92 },
            { name: 'Apache Spark', icon: '⚡', level: 84 },
            { name: 'Jupyter', icon: '📓', level: 89 },
        ]
    },
];

/* ─────────────────────────────────────────────
   Stats Data
───────────────────────────────────────────── */
export const STATS = [
    { value: '50+', label: 'Technologies', icon: '⚙️' },
    { value: '1000+', label: 'Projects Delivered', icon: '🚀' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '24/7', label: 'Expert Support', icon: '🤝' },
];