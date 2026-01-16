import Hero from "./components/Hero";
import CareServices from "./components/CareServices"; // Import new one
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <CareServices /> {/* Add new one here */}
      <CTA />
    </main>
  );
}