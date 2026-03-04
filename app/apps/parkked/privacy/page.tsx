"use client";

export default function ParkkedPrivacy() {
  return (
    <>
      <main className="">
        <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
          <div>
            
            {/* Navigation for Store Links */}
            <nav className="flex gap-6 mb-12 border-b border-gray-100 pb-6 text-sm font-semibold text-blue-600">
              <a href="#privacy" className="hover:text-blue-800 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-blue-800 transition-colors">Terms of Service</a>
            </nav>

            {/* PRIVACY POLICY */}
            <section id="privacy" className="mb-20">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
              <p className="text-gray-500 italic mb-8">Effective Date: March 3, 2026</p>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Parkked is built with a <strong>privacy-first</strong> approach. This policy explains how we handle information within the Parkked mobile application.
                </p>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Data Collection & Usage</h2>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Location Data:</strong> Parkked requires access to your device’s <strong>Precise Location</strong> to pin your car’s position and show your current location relative to your vehicle.
                    </li>
                    <li>
                      <strong>No Server Storage:</strong> We do <strong>not</strong> collect, store, or transmit your location data to any external servers. All coordinates and parking pins are stored locally on your device.
                    </li>
                    <li>
                      <strong>No Accounts:</strong> You are not required to create an account or provide any personal information (name, email, or phone number) to use Parkked.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Third-Party Services</h2>
                  <p>
                    <strong>Navigation:</strong> When you request directions, Parkked passes your saved coordinates to your choice of third-party maps (e.g., Google Maps or Apple Maps). These services operate under their own independent privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Notifications</h2>
                  <p>
                    We use local notifications for the parking timer alerts. These notifications are processed entirely on your device and are not used for tracking or marketing purposes.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-100" />

            {/* TERMS OF SERVICE */}
            <section id="terms">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
              <p className="text-gray-500 italic mb-8">Effective Date: March 3, 2026</p>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
                  <p>By downloading or using Parkked, you agree to these terms. If you do not agree, please do not use the application.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. User Responsibilities & Disclaimer</h2>
                  <ul className="list-disc pl-5 space-y-3 font-medium text-gray-800">
                    <li><strong>Parking Fines:</strong> Parkked is a reminder tool only. We are NOT responsible for parking tickets, fines, towing fees, or legal penalties.</li>
                    <li><strong>GPS Accuracy:</strong> Location precision can be affected by environment (buildings, garages). We do not guarantee 100% precision.</li>
                    <li><strong>Device Reliability:</strong> You are responsible for ensuring your device is powered on and notifications are enabled.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, Parkked and its developers shall not be liable for any loss of property, vehicle damage, or incidental damages resulting from the use of this application.
                  </p>
                </div>
              </div>
            </section>

            <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Parkked App. All rights reserved.
            </footer>
          </div>
        </div>
      </main>
    </>
  )
}