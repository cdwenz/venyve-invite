import HeroSection from "@/components/HeroSection";
import ExperienceCard from "@/components/ExperienceCard";
import ConfirmSection from "@/components/ConfirmSection";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <HeroSection />
      <ExperienceCard />
      <ConfirmSection />
    </main>
  );
}
