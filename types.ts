import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface SocialLink {
  id: number;
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';