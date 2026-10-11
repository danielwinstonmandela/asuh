import { Companion } from "@/lib/types";

export const companions: Companion[] = [
  { id: "naya", name: "Naya Pratama", initials: "NP", color: "coral", rating: 4.9, reviews: 48, rate: "Rp65k / hour", area: "South Jakarta", languages: ["Indonesian", "English"], skills: ["Social visits", "Clinic companion", "Light errands"], interests: ["Gardening", "Cooking"], availability: "Available today", verified: true, bio: "A calm, attentive companion who enjoys creating small, meaningful routines." },
  { id: "raka", name: "Raka Wirawan", initials: "RW", color: "blue", rating: 4.8, reviews: 31, rate: "Rp55k / hour", area: "Central Jakarta", languages: ["Indonesian"], skills: ["Walking companion", "Medication pickup", "Conversation"], interests: ["History", "Music"], availability: "Tomorrow morning", verified: true, bio: "Friendly and dependable, with experience supporting active older adults." },
  { id: "sari", name: "Sari Amelia", initials: "SA", color: "gold", rating: 5.0, reviews: 22, rate: "Rp70k / hour", area: "East Jakarta", languages: ["Indonesian", "English"], skills: ["Activity companion", "Meal support", "Light errands"], interests: ["Baking", "Yoga"], availability: "Available today", verified: true, bio: "Brings gentle energy to everyday activities, meals, and meaningful conversation." }
];

export const trend = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => ({ day, score: [78, 82, 75, 80, 68, 62, 72][index] }));
