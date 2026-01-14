import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import CTA from "./components/CTA"; // 1. Import it

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <CTA /> {/* 2. Add it here */}
    </main>
  );
}