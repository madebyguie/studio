import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Uplift",
  description: "Uplift's Terms of Use: personal, non-commercial use, on-device content ownership, and no warranty terms for the app.",
  openGraph: {
    type: "website",
    title: "Terms of Use — Uplift",
    description: "The terms for using Uplift, the private gratitude journal and meditation timer app.",
    images: ["/uplift/og-image.png"],
  },
};

export default function UpliftTerms() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <h1>Terms of Use</h1>
        <p className="effective-date">Effective date: August 20, 2026</p>

        <h2>Acceptance of terms</h2>
        <p>
          By downloading, installing, or using UPLIFT, you agree to these Terms of Use. If you do not agree, please
          do not use the app.
        </p>

        <h2>Use of the app</h2>
        <p>
          UPLIFT is provided for your personal, non-commercial use to record gratitude entries, reflections, and
          quotes that matter to you.
        </p>

        <h2>Your content</h2>
        <p>
          You retain full ownership of everything you write or save in UPLIFT. Because entries are stored only on
          your device, you are solely responsible for keeping your own backups, we cannot recover lost entries if
          your device is lost, damaged, or reset.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree not to reverse engineer, decompile, or attempt to extract the source code of UPLIFT, except where
          such restriction is prohibited by law, and not to use the app for any unlawful purpose.
        </p>

        <h2>No warranty</h2>
        <p>
          UPLIFT is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, whether
          express or implied. We do not guarantee the app will be error-free or uninterrupted.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential
          damages arising from your use of, or inability to use, UPLIFT, including loss of data stored on your
          device.
        </p>

        <h2>Changes to the app or these terms</h2>
        <p>
          We may update UPLIFT or these Terms of Use from time to time. Continuing to use the app after changes take
          effect means you accept the revised terms.
        </p>

        <h2>Termination</h2>
        <p>
          You may stop using UPLIFT at any time by deleting the app from your device, which also removes all locally
          stored data.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about these terms can be sent to <a href="mailto:madebyguie@gmail.com">madebyguie@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
