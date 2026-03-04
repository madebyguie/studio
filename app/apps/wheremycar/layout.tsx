import WheremycarNav from "./components/WheremycarNav";

// app/apps/wheremycar/layout.tsx
export const metadata = {
  title: "WhereMyCar",
  description: "Never lose your car again with WhereMyCar. Pin your parking spot, set timers, and navigate back with ease. Available on iOS and Android.",
};

export default function WheremycarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <WheremycarNav />
      {children}
    </div>
  );
}