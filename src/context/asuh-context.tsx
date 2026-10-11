"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Locale, Role } from "@/lib/types";
import { TranslationKey, tr } from "@/lib/i18n";

type State = {
  locale: Locale; role: Role; onboarded: boolean; checkInDone: boolean; medicationTaken: boolean;
  booked: boolean; visitStage: "none" | "requested" | "active" | "complete"; registered: boolean;
  saved: boolean; sos: boolean; notification: string | null;
  setLocale: (value: Locale) => void; setRole: (value: Role) => void; completeOnboarding: () => void;
  completeCheckIn: () => void; toggleMedication: () => void; requestVisit: () => void; advanceVisit: () => void;
  register: () => void; save: () => void; sendSos: () => void; notify: (value: string) => void;
  clear: () => void; t: (key: TranslationKey) => string;
};

const Context = createContext<State | null>(null);

export function AsuhProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [role, setRoleState] = useState<Role>("older-adult");
  const [onboarded, setOnboarded] = useState(false);
  const [checkInDone, setCheckInDone] = useState(false);
  const [medicationTaken, setMedicationTaken] = useState(false);
  const [booked, setBooked] = useState(false);
  const [visitStage, setVisitStage] = useState<State["visitStage"]>("none");
  const [registered, setRegistered] = useState(false);
  const [saved, setSaved] = useState(false);
  const [sos, setSos] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem("asuh-locale") as Locale | null;
    const storedRole = localStorage.getItem("asuh-role") as Role | null;
    if (storedLocale === "en" || storedLocale === "id") setLocaleState(storedLocale);
    if (storedRole === "older-adult" || storedRole === "family" || storedRole === "companion") setRoleState(storedRole);
    if (localStorage.getItem("asuh-onboarded") === "true") setOnboarded(true);
  }, []);

  useEffect(() => { document.documentElement.lang = locale; localStorage.setItem("asuh-locale", locale); }, [locale]);
  useEffect(() => { localStorage.setItem("asuh-role", role); }, [role]);
  useEffect(() => { localStorage.setItem("asuh-onboarded", String(onboarded)); }, [onboarded]);

  const state = useMemo(() => ({
    locale, role, onboarded, checkInDone, medicationTaken, booked, visitStage, registered, saved, sos, notification,
    setLocale: setLocaleState,
    setRole: setRoleState,
    completeOnboarding: () => setOnboarded(true),
    completeCheckIn: () => { setCheckInDone(true); setNotification("done"); },
    // Confirmation actions stay confirmed; an older adult cannot accidentally undo them with a second tap.
    toggleMedication: () => { setMedicationTaken(true); setNotification("taken"); },
    requestVisit: () => { setBooked(true); setVisitStage("requested"); setNotification("requestSent"); },
    advanceVisit: () => setVisitStage(current => {
      const next = current === "requested" ? "active" : "complete";
      setNotification(next === "active" ? "visitActive" : "reportSubmitted");
      return next;
    }),
    register: () => { setRegistered(true); setNotification("registered"); },
    save: () => { setSaved(true); setNotification("saved"); },
    sendSos: () => { setSos(true); setNotification("sosSent"); },
    notify: setNotification,
    clear: () => setNotification(null),
    t: (key: TranslationKey) => tr(locale, key)
  }), [locale, role, onboarded, checkInDone, medicationTaken, booked, visitStage, registered, saved, sos, notification]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export function useAsuh() {
  const value = useContext(Context);
  if (!value) throw new Error("ASUH provider missing");
  return value;
}
