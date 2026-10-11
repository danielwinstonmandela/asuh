import type { Metadata } from "next";
import { AsuhProvider } from "@/context/asuh-context";
import "./globals.css";

export const metadata: Metadata = { title: "ASUH — Care, made closer", description: "A connected elderly care companion." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><AsuhProvider>{children}</AsuhProvider></body></html>; }
