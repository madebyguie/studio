import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import UpliftHeader from "./components/UpliftHeader";
import UpliftFooter from "./components/UpliftFooter";
import "./uplift.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Uplift — A Private Gratitude Journal & Meditation Timer",
  description:
    "Uplift is a minimal gratitude journal with a built-in meditation timer for iOS. No accounts, no ads, no data collection — your reflections stay on your device.",
  openGraph: {
    type: "website",
    title: "Uplift — A Private Gratitude Journal & Meditation Timer",
    description:
      "No accounts, no ads, no data collection. Write, reflect, and meditate — completely private, fully offline.",
    images: ["/uplift/og-image.png"],
  },
};

export default function UpliftLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`uplift-site ${manrope.variable}`}>
      <UpliftHeader />
      <main>{children}</main>
      <UpliftFooter />
    </div>
  );
}
