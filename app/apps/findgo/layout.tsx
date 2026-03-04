import FindgoNav from "./components/FindgoNav";

// app/apps/findgo/layout.tsx
export const metadata = {
  title: "FindGo",
  description: "Never lose your car again with FindGo. Pin your parking spot, set timers, and navigate back with ease. Available on iOS and Android.",
};

export default function FindgoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <FindgoNav />
      {children}
    </div>
  );
}