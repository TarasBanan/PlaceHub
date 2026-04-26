export type Venue = {
  id: string;
  slug: string;
  title: string;
  category: string;
  city: string;
  district: string;
  address: string;
  pricePerHour: number;
  capacity: number;
  rating: number;
  images: string[];
  description: string;
  amenities: string[];
  rules: string[];
  tags: string[];
  isPopular: boolean;
};
