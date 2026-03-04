import ParkkedNav from "./components/ParkkedNav";

// app/apps/parkked/layout.tsx
export const metadata = {
  title: "Parkked",
  description: "Never lose your car again with Parkked. Pin your parking spot, set timers, and navigate back with ease. Available on iOS and Android.",
};

export default function ParkkedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <ParkkedNav />
      {children}
    </div>
  );
}