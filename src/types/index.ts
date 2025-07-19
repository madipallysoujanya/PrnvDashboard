export interface Service {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  amount: number;
  date: string;
  status: 'active' | 'inactive' | 'pending';
  createdBy: string;
  image?: string;
}

export interface Booking {
  id: number;
  name: string;
  date: string;
  services: string;
  status: 'Pending' | 'Cancelled' | 'Completed';
  avatar?: string;
}

export interface StatCard {
  icon: any;
  label: string;
  value: string;
  color: string;
  change?: string;
}

export interface FormData {
  serviceTitle: string;
  serviceShortName: string;
  serviceAmount: string;
  country: string;
  state: string;
  city: string;
  category: string;
  subCategory: string;
}

export interface GalleryData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface OfferData {
  serviceOffered: string;
  description: string;
}