"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useAsuh } from "@/context/asuh-context";

export function Icon({ name, size = 20 }: { name: "heart" | "arrow" | "phone" | "mic" | "calendar" | "shield" | "spark" | "pill" | "chevron" | "check"; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths = {
    heart: <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
    mic: <><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8" /></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    spark: <path d="m12 3-1.5 6.5L4 11l6.5 1.5L12 19l1.5-6.5L20 11l-6.5-1.5L12 3Z" />,
    pill: <path d="m10.5 3.5 10 10a4.2 4.2 0 0 1-6 6l-10-10a4.2 4.2 0 1 1 6-6ZM8 6l10 10" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4.2 4.2L19 6.5" />
  };
  return <svg {...common}>{paths[name]}</svg>;
}

export function AppShell({ children }: { children: ReactNode }) {
  const { locale, setLocale, role, setRole, t } = useAsuh(); const router = useRouter();
  const switchRole = (nextRole: "older-adult" | "family" | "companion") => { setRole(nextRole); router.push(nextRole === "older-adult" ? "/check-in" : nextRole === "family" ? "/family" : "/companions"); };
  return <main className="app-shell"><a className="skip-to-content" href="#main-content">{t("skipToContent")}</a><header className="topbar"><Link href="/" className="brand brand-lockup" aria-label="ASUH home"><img src="/brand/Asuh-final-logo.png" alt="ASUH — Care, made closer" width={256} height={100} decoding="async" /></Link><div className="top-actions"><label className="role-switch"><span className="sr-only">{t("role")}</span><select aria-label={t("role")} value={role} onChange={(event) => switchRole(event.target.value as "older-adult" | "family" | "companion")}><option value="older-adult">{t("older")}</option><option value="family">{t("family")}</option><option value="companion">{t("companion")}</option></select></label><button className="language" onClick={() => setLocale(locale === "en" ? "id" : "en")}>{t("languageToggle")}</button><Link className="profile-dot" href="/settings" aria-label={t("settings")}>R</Link></div></header><div id="main-content" tabIndex={-1}>{children}</div><footer className="safety-note"><Icon name="shield" size={15} /><span>{t("safety")}</span></footer></main>;
}
