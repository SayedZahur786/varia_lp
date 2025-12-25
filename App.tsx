import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Comparison } from './components/Comparison';
import { Roadmap } from './components/Roadmap';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-500/30 selection:text-brand-100">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Features />
        <UseCases />
        <Comparison />
        <Roadmap />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
