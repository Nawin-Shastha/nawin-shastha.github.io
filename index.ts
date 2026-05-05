export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  size?: "normal" | "wide" | "tall";
}
export interface Skill { name: string; level: number; category: string; }
export interface NavItem { label: string; href: string; }
export interface SocialLink { platform: string; href: string; icon: string; }
