export type Locale = "en" | "id";
export type SignalLevel = "green" | "amber" | "red";
export type Role = "older-adult" | "family" | "companion";
export type BookingStatus = "available" | "requested" | "confirmed" | "completed";

export type CheckInAnswers = {
  mood: string;
  sleep: string;
  energy: string;
  hydration: string;
  connection: string;
  assistance: string;
};

export type Companion = {
  id: string;
  name: string;
  initials: string;
  color: string;
  rating: number;
  reviews: number;
  rate: string;
  area: string;
  languages: string[];
  skills: string[];
  interests: string[];
  availability: string;
  verified: boolean;
  bio: string;
};
