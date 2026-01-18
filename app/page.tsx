import Hero from "./components/Hero";
import CareServices from "./components/CareServices";
import Equipment from "./components/Equipment"; // 1. Import it here
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <CareServices />
      <Equipment /> {/* 2. Place it here */}
      <CTA />
    </main>
  );
}