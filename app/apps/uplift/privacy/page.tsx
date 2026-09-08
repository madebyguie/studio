import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Uplift",
  description:
    "Uplift's Privacy Policy: the app collects no personal data, has no servers, and stores your entries only on your device.",
  openGraph: {
    type: "website",
    title: "Privacy Policy — Uplift",
    description: "Uplift collects no personal data and has no servers. Everything you write stays only on your device.",
    images: ["/uplift/og-image.png"],
  },
};

export default function UpliftPrivacy() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective date: August 20, 2026</p>

        <h2>Overview</h2>
        <p>
          Your privacy matters to us. UPLIFT is designed so that we never see your data in the first place: the app
          does not collect, transmit, or sell any personal information, and it has no servers of its own to send
          information to.
        </p>

        <h2>Information we do not collect</h2>
        <p>
          UPLIFT does not collect your name, email address, location, contacts, or device identifiers. The app does
          not include third-party analytics, advertising, or tracking software of any kind, and it does not use
          cookies.
        </p>

        <h2>Your entries</h2>
        <p>
          The gratitude entries and quotes you save are stored only on your own device, using secure on-device
          storage provided by your operating system (such as iOS or Android local storage) or your browser, when you
          use UPLIFT on the web. We do not have access to this content, and it is never transmitted anywhere.
        </p>

        <h2>Data deletion</h2>
        <p>
          Because everything stays on your device, you are always in control. You can remove individual entries from
          within the app, or delete all app data at once by uninstalling UPLIFT, this permanently erases everything
          it stored.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          UPLIFT does not knowingly collect information from anyone, including children under 13. Since the app
          collects no personal information from any user, there is no data collection concern for children&apos;s
          use.
        </p>

        <h2>Permissions</h2>
        <p>UPLIFT does not request access to your camera, microphone, contacts, or location.</p>

        <h2>Third-party services</h2>
        <p>UPLIFT does not integrate any third-party analytics, advertising, or data-sharing services.</p>

        <h2>Changes to this policy</h2>
        <p>
          If this policy ever changes, we will update the effective date above and make the new version available
          within the app.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about this policy can be sent to <a href="mailto:madebyguie@gmail.com">madebyguie@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
