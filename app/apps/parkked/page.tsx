"use client";

import { MapPin, Clock, Navigation } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: MapPin,
    title: "Pin Your Spot",
    description: "Save your parking location with a single tap so you never forget where you parked.",
  },
  {
    icon: Navigation,
    title: "Navigate Back",
    description: "Get turn-by-turn directions back to your car or motorbike instantly.",
  },
  {
    icon: Clock,
    title: "Parking Timer",
    description: "Set reminders for pay-and-display spots and avoid overstaying fines.",
  },
];

export default function Parkked() {
  return (
    <>
      {/* Hero */}
      <section className="container pb-20 pt-12 text-center md:pt-20">
        <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          Never lose your car again
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Pin where you parked, set parking timers, and navigate back — all in one tap.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3" id="download">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={130} height={70}
              className="h-11" />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              width={130} height={70}
              className="h-11" />
          </a>
        </div>
        <div className="mt-12 flex justify-center">
          <Image
            src="/assets/mockup-hero.png"
            alt="Parkked app screenshot"
            width={700} height={1000}
            className="drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="container pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <f.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex flex-col items-center gap-4 py-8 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Parkked. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/apps/parkked/privacy" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="/apps/parkked/privacy#terms" className="hover:text-foreground transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};
