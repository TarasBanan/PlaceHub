export type BookingRequest = {
  name: string;
  phone: string;
  email: string;
  venueId: string;
  date: string;
  startTime: string;
  hours: number;
  guests: number;
  services: string[];
  comment?: string;
};
