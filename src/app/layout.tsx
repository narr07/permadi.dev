import type { Metadata } from "next";
import {  Host_Grotesk, Sofia_Sans } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

const hostGrostesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinar Permadi Yusup",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${sofiaSans.variable} ${hostGrostesk.variable} antialiased`}
      > <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
 
      <div className="py-20">
        {children}
      </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
