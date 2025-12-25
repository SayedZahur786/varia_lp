import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface UseCaseItem {
  title: string;
  description: string;
  audience: string;
}

export interface StepItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}
