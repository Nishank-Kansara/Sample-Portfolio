// =============================
//  PORTFOLIO DATA
// =============================

export const navLinks = [
  { id: 'about',    label: 'About'    },
  { id: 'skills',   label: 'Skills'   },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey'  },
  { id: 'contact',  label: 'Contact'  },
];

export const heroData = {
  greeting: "Hello, I'm",
  name: "Nisha",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "3D Web Designer", "UI/UX Enthusiast", "Creative Coder"],
  tagline: "Crafting immersive digital experiences at the intersection of code & creativity.",
  cta: { label: "View My Work", href: "#projects" },
  cta2: { label: "Download CV", href: "#" },
};

export const aboutData = {
  title: "About Me",
  tag: "Who Am I",
  description: `I'm a passionate Full-Stack Developer and creative technologist who loves building beautiful, 
    high-performance web experiences. With a deep curiosity for 3D graphics, interactive design, 
    and cutting-edge technology, I transform ideas into stunning digital realities.`,
  description2: `When I'm not coding, you'll find me exploring the latest in WebGL, experimenting with 
    generative art, or contributing to open-source projects. I believe great software should be both 
    functional and beautiful.`,
  stats: [
    { value: "3+",   label: "Years Experience" },
    { value: "50+",  label: "Projects Completed" },
    { value: "20+",  label: "Happy Clients" },
    { value: "10+",  label: "Technologies" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    icon: "⚡",
    color: "#915eff",
    items: [
      { name: "React.js",      level: 95 },
      { name: "Three.js",      level: 88 },
      { name: "TypeScript",    level: 85 },
      { name: "Next.js",       level: 82 },
      { name: "CSS / GSAP",    level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "🚀",
    color: "#00d4ff",
    items: [
      { name: "Node.js",       level: 88 },
      { name: "Python",        level: 82 },
      { name: "Express.js",    level: 85 },
      { name: "FastAPI",       level: 75 },
      { name: "GraphQL",       level: 70 },
    ],
  },
  {
    category: "Tools & Cloud",
    icon: "🛠️",
    color: "#f5c518",
    items: [
      { name: "MongoDB",       level: 85 },
      { name: "PostgreSQL",    level: 78 },
      { name: "Docker",        level: 75 },
      { name: "AWS / Azure",   level: 72 },
      { name: "Git / CI-CD",   level: 90 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Chatbot",
    description: "A fully-featured student tutoring chatbot with real-time AI responses, multi-provider API support (OpenAI, Gemini, Azure), image uploads, and a stunning mobile-first UI.",
    tags: ["React", "Node.js", "MongoDB", "OpenAI", "Three.js"],
    color: "#915eff",
    gradient: "linear-gradient(135deg, #915eff22, #6a35d422)",
    emoji: "🤖",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Carbon Credit Platform",
    description: "A blockchain-inspired carbon credit trading platform with real-time market data, advanced analytics dashboards, and enterprise-grade security.",
    tags: ["Next.js", "PostgreSQL", "Docker", "Python", "AWS"],
    color: "#00d4ff",
    gradient: "linear-gradient(135deg, #00d4ff22, #0099bb22)",
    emoji: "🌱",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "3D Interactive Portfolio",
    description: "This very portfolio! Built with React Three Fiber, featuring particle systems, 3D animations, glassmorphism UI, and smooth scroll experiences.",
    tags: ["React", "Three.js", "GSAP", "Vite", "WebGL"],
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b22, #ff3a3a22)",
    emoji: "✨",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    description: "A comprehensive e-commerce admin dashboard with real-time sales analytics, inventory management, order tracking, and automated reporting.",
    tags: ["React", "TypeScript", "Redux", "Express", "MongoDB"],
    color: "#f5c518",
    gradient: "linear-gradient(135deg, #f5c51822, #d4a51522)",
    emoji: "🛒",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description: "WebSocket-powered messaging app with group channels, file sharing, emoji reactions, user presence indicators, and end-to-end encryption.",
    tags: ["Socket.io", "React", "Node.js", "Redis", "PostgreSQL"],
    color: "#ff8c42",
    gradient: "linear-gradient(135deg, #ff8c4222, #ff6a0022)",
    emoji: "💬",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "ML Model Dashboard",
    description: "An interactive ML model training and visualization platform with live metrics, confusion matrices, ROC curves, and model comparison tools.",
    tags: ["Python", "FastAPI", "React", "TensorFlow", "Chart.js"],
    color: "#00f5a0",
    gradient: "linear-gradient(135deg, #00f5a022, #00b87022)",
    emoji: "🧠",
    github: "#",
    live: "#",
    featured: false,
  },
];

export const timelineData = [
  {
    year: "2026",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of AI-powered web applications serving 100K+ users, with a focus on performance optimization and 3D web experiences.",
    color: "#915eff",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    company: "Digital Creative Studio",
    description: "Developed 20+ client projects ranging from e-commerce platforms to real-time dashboards. Introduced Three.js animations into the company's tech stack.",
    color: "#00d4ff",
    icon: "💻",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "StartUp Ventures",
    description: "Built and shipped 3 major product features that increased user engagement by 45%. Championed mobile-first design and component-driven architecture.",
    color: "#f5c518",
    icon: "⚡",
  },
  {
    year: "2022",
    title: "B.Tech in Computer Science",
    company: "University of Technology",
    description: "Graduated with First Class Honours. Final year project: an AI-powered resource allocation system using machine learning and real-time data processing.",
    color: "#ff6b6b",
    icon: "🎓",
  },
];

export const contactData = {
  title: "Get In Touch",
  tag: "Contact Me",
  description: "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!",
  email: "nisha@example.com",
  socials: [
    { name: "GitHub",   icon: "GH",  href: "#", color: "#915eff" },
    { name: "LinkedIn", icon: "LI",  href: "#", color: "#00d4ff" },
    { name: "Twitter",  icon: "TW",  href: "#", color: "#1da1f2" },
  ],
};
