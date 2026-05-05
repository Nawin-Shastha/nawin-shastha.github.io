import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nawin Shastha — Salesforce Developer & Digital Creator",
  description: "Salesforce CRM specialist, web developer, and graphic designer based in Chennai. Founder of Core Syntara & Design With NS.",
  keywords: ["Salesforce Developer","Salesforce Admin","CRM Consultant","Web Developer","Graphic Designer","Chennai","Core Syntara","Design With NS","LWC","Apex"],
  authors: [{ name: "Nawin Shastha" }],
  openGraph: {
    title: "Nawin Shastha — Salesforce Developer & Digital Creator",
    description: "Salesforce CRM specialist, web developer, and graphic designer based in Chennai.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700,800,900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#020617] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
