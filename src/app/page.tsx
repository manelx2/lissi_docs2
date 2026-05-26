import Sidebar from "@/components/Sidebar";
import BrowserHeader from "@/components/BrowserHeader";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex h-full w-full bg-background overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <BrowserHeader activeTab="Home" />
        <HeroSection />
      </main>
    </div>
  );
}
