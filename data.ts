import type { Service, Skill, NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://linkedin.com/in/nawinshastha", icon: "linkedin" },
  { platform: "GitHub",   href: "https://github.com/nawinshastha",     icon: "github" },
  { platform: "Fiverr",   href: "https://fiverr.com/nawinshastha",     icon: "fiverr" },
];

export const SERVICES: Service[] = [
  {
    id: "salesforce",
    icon: "☁",
    title: "Salesforce CRM",
    description: "End-to-end Salesforce implementation, org configuration, automation flows, and dashboards tailored to your business processes.",
    tags: ["Org Setup", "Flows", "Apex", "LWC", "Dashboards"],
    accent: "#3b82f6",
    size: "wide",
  },
  {
    id: "salesforce-dev",
    icon: "⚡",
    title: "Salesforce Development",
    description: "Custom Apex triggers, LWC components, REST API integrations, and test class coverage. Platform Developer I roadmap expertise.",
    tags: ["Apex", "LWC", "SOQL", "REST API", "PDI"],
    accent: "#06b6d4",
  },
  {
    id: "web-dev",
    icon: "🌐",
    title: "Web Development",
    description: "Professional, mobile-responsive business websites. Landing pages, WordPress development, and ongoing maintenance.",
    tags: ["HTML/CSS", "Next.js", "WordPress", "SEO"],
    accent: "#8b5cf6",
  },
  {
    id: "design",
    icon: "✦",
    title: "Graphic Design — Design With NS",
    description: "Brand kits, social media visuals, YouTube thumbnails, LinkedIn banners, wedding invitations, business cards, brochures — all via Design With NS.",
    tags: ["Brand Kit", "Social Media", "Canva", "Brochures", "Invitations"],
    accent: "#ec4899",
    size: "wide",
  },
  {
    id: "resume",
    icon: "📄",
    title: "Resume Building",
    description: "ATS-friendly, visually polished resumes with cover letter and LinkedIn optimization. PDF + Word delivery.",
    tags: ["ATS-Friendly", "PDF", "Cover Letter", "LinkedIn"],
    accent: "#f59e0b",
  },
];

export const SKILLS: Skill[] = [
  { name: "Salesforce Admin",   level: 90, category: "Salesforce" },
  { name: "Flows & Automation", level: 85, category: "Salesforce" },
  { name: "Apex Development",   level: 72, category: "Salesforce" },
  { name: "LWC",                level: 68, category: "Salesforce" },
  { name: "SOQL / SOSL",        level: 80, category: "Salesforce" },
  { name: "HTML / CSS / JS",    level: 85, category: "Web" },
  { name: "Next.js",            level: 70, category: "Web" },
  { name: "WordPress",          level: 82, category: "Web" },
  { name: "Graphic Design",     level: 85, category: "Design" },
  { name: "Canva",              level: 90, category: "Design" },
  { name: "Python",             level: 70, category: "Tools" },
  { name: "Git",                level: 75, category: "Tools" },
];

export const STATS = [
  { value: "3+",   label: "Years Experience" },
  { value: "5",    label: "Core Services" },
  { value: "2",    label: "Active Ventures" },
  { value: "100%", label: "Client Focused" },
];
