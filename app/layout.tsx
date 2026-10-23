import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import PageEnd from "@/components/PageEnd";
import PageStart from "@/components/PageStart";
import Transit from "@/components/Transit";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Febin C S | Embedded Systems Engineer",
    template: "%s | Febin C S",
  },
  description:
    "Febin C S is an embedded systems engineer working across firmware development and PCB design on STM32, ESP32, Arduino and Raspberry Pi.",
  verification: {
    google: "35yqPGNUuwUoLgIY-wu1Wisyway1JsdNmr7v2MdqXHU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <Transit>
          <Effects />
          <Nav />
          <PageStart />
          <main>{children}</main>
          <PageEnd />
        </Transit>
      </body>
    </html>
  );
}
