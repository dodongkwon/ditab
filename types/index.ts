export interface IServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IContactForm {
  name: string;
  phone: string;
  message: string;
}

export interface INavItem {
  label: string;
  href: string;
  isButton?: boolean;
  isModal?: boolean;
}

export interface IAiFeature {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  videoUrl?: string;
  alt: string;
}

export interface IFooterLink {
  label: string;
  href: string;
}

export interface ISocialLink {
  platform: string;
  href: string;
  icon: string;
} 