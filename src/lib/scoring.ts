import { CheckInAnswers, SignalLevel } from "@/lib/types";

export function scoreCheckIn(answers: CheckInAnswers): SignalLevel {
  if (answers.assistance === "Please contact family") return "red";
  const concerning = [answers.mood === "Feeling low", answers.sleep === "Poor", answers.energy === "Low", answers.hydration === "No", answers.connection === "No"].filter(Boolean).length;
  if (concerning >= 3) return "red";
  if (concerning >= 1 || answers.assistance === "Small help needed") return "amber";
  return "green";
}
