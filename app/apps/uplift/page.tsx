import Image from "next/image";
import UpliftCarousel from "./components/UpliftCarousel";

const moodGallery = [
  { src: "/uplift/mood/mood-meditation-deck.jpg", alt: "A woman kneeling quietly on a sunlit wooden deck" },
  { src: "/uplift/mood/mood-water-ripple.jpg", alt: "A single ripple spreading across still water" },
  { src: "/uplift/mood/mood-mountain-clouds.jpg", alt: "Someone sitting above the clouds at sunset" },
  { src: "/uplift/mood/mood-riverside.jpg", alt: "A woman sitting quietly by a riverbank" },
  { src: "/uplift/mood/mood-hands-sea.jpg", alt: "A person raising their hands to the sky by the sea" },
  { src: "/uplift/mood/mood-forest-light.jpg", alt: "Sunlight streaming through a forest onto someone standing still" },
  { src: "/uplift/mood/mood-beach-meditation.jpg", alt: "A person meditating on a pebble beach facing the ocean" },
  { src: "/uplift/mood/mood-flower.jpg", alt: "A single lotus flower lit by warm light" },
  { src: "/uplift/mood/mood-coffee-flatlay.jpg", alt: "A quiet morning coffee and breakfast bowl" },
];

const features = [
  {
    title: "Reflect",
    description: "Revisit a random saved entry, swipe for another.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    title: "Write",
    description: "Jot down gratitude or an inspiring quote in seconds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    title: "Anchors",
    description: "Save the entries that matter most.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12v18l-6-4-6 4Z" />
      </svg>
    ),
  },
  {
    title: "Meditation timer",
    description: "1 to 60 minutes, with four ambient sounds: Bell, Rain, Soul, and Waves.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Archive & History",
    description: "Browse past entries by month.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </svg>
    ),
  },
  {
    title: "Export & Import",
    description: "Back up or move your entries as a simple file, any time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12M8 11l4 4 4-4" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </svg>
    ),
  },
  {
    title: "Four languages",
    description: "English, Spanish, French, and Italian, detected automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
      </svg>
    ),
  },
];

function DownloadButton() {
  return (
    <>
      <a href="#APP_STORE_URL" className="btn btn-store" aria-label="Download Uplift on the App Store">
        <svg className="btn-store-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V6" />
          <path d="M6 12l6-6 6 6" />
          <path d="M5 21h14" />
        </svg>
        <span className="btn-store-text">
          <small>Download on the</small>
          <span>App Store</span>
        </span>
      </a>
      <p className="btn-note">App Store link coming soon.</p>
    </>
  );
}

export default function UpliftHome() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <h1>Notice what&apos;s good. Keep it private.</h1>
            <p>
              Uplift is a minimal gratitude journal with a built-in meditation timer — no accounts, no ads, no data
              collection. Just your reflections, kept only on your device.
            </p>
            <div className="hero-actions">
              <DownloadButton />
            </div>
          </div>
        </div>

        <div className="mood-gallery">
          <div className="mood-gallery-track">
            {moodGallery.map((item) => (
              <div className="mood-gallery-item" key={item.src}>
                <Image src={item.src} alt={item.alt} width={150} height={230} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screens showcase */}
      <section className="screens">
        <div className="wrap screens-intro">
          <div className="mockup-visual">
            <div className="mockup-stage">
              <div className="phone">
                <div className="phone-frame">
                  <Image
                    src="/uplift/screenshot-reflect.jpg"
                    alt="Uplift's Reflect screen showing a saved gratitude quote and a Take a moment meditation timer trigger"
                    width={240}
                    height={520}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="screens-copy">
            <h2>Small moments, noticed on purpose</h2>
            <p>
              Writing down one good thing takes seconds, but it changes where your attention goes. It keeps you
              grounded in what&apos;s real, and gives you a place to return to on the days you need a lift.
            </p>
            <p className="stack-caption">
              A new one greets you each day — something you&apos;re grateful for, or something that inspires you.
            </p>
            <div className="quote-stack">
              <div className="quote-card quote-card-a">Pause. Breathe. Be here now.</div>
              <div className="quote-card quote-card-b">There is beauty in slowing down</div>
              <div className="quote-card quote-card-c">Grateful for the people who feel like home</div>
            </div>
          </div>
        </div>

        <div className="wrap carousel-intro">
          <span className="eyebrow">Take a look inside</span>
          <h3>Four small tools, one quiet habit</h3>
        </div>

        <UpliftCarousel />
      </section>

      {/* Features */}
      <section id="features">
        <div className="wrap">
          <span className="eyebrow">What&apos;s inside</span>
          <h2>Everything a quiet practice needs</h2>

          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy / trust */}
      <section>
        <div className="trust-section">
          <div className="wrap">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
                <rect x="10" y="8" width="4" height="4" rx="0.6" />
              </svg>
            </div>
            <span className="eyebrow">Privacy</span>
            <h2>Nothing leaves your device. Ever.</h2>
            <p>
              No analytics. No ads. No third-party services. No account to create or lose access to. Uplift
              doesn&apos;t have a server to send your data to — because we made sure it never needed one.
            </p>

            <ul className="trust-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                No accounts
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                No analytics
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                No ads
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                No servers
              </li>
            </ul>

            <p>
              <a href="/apps/uplift/privacy" className="link-underline">
                Read the full Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Small habit closing */}
      <section className="closing">
        <div className="wrap">
          <h2>A small habit, over time</h2>
          <p>
            Taking a moment each day to notice what&apos;s good gently shifts your focus toward what matters. It
            takes seconds, and it adds up. Everything you write stays private, stored only on your device.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="final-cta">
        <div className="wrap">
          <h2>Start noticing what&apos;s good.</h2>
          <p>Free to download. Nothing to sign up for.</p>
          <DownloadButton />
        </div>
      </section>
    </>
  );
}
