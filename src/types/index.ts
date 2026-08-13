export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ColorToken {
  name: string;
  hex: string;
  variableName: string;
  usage: string;
}
