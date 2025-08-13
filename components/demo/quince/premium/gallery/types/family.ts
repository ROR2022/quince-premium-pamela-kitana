/**
 * TypeScript interfaces para el componente EspecialGallery
 * Definiciones de tipos para la estructura de datos familiares
 */

export interface ImageConfig {
  objectPosition?: 'top' | 'center' | 'bottom' | 'left' | 'right' | string;
  aspectRatio?: '1/1' | '3/4' | '4/3' | '16/9' | string;
  mobileHeight?: string;
  desktopHeight?: string;
}

export interface FamilyMember {
  name: string;
  image: string;
  role?: string;
  order?: number;
  imageConfig?: ImageConfig;
}

export interface FamilySection {
  title: string;
  subtitle?: string;
  icon: string;
  members: FamilyMember[];
}

export interface FamilyData {
  padres: FamilySection;
  hermanos: FamilySection;
  abuelos: FamilySection;
  padrinos: FamilySection;
  chambelanes: FamilySection;
}

export interface FamilyMemberCardProps {
  member: FamilyMember;
  index: number;
}

export interface FamilySectionProps {
  section: FamilySection;
  sectionKey: string;
  index: number;
  isLast: boolean;
}
