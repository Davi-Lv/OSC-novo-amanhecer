import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Actions from '../../components/Actions';
import Donate from '../../components/Donate';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-pink-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Actions />
        {/* We omitted Campanhas because the original said "Campanhas ainda não adicionadas".
            We can add a simple placeholder or just rely on the other robust sections for now. */}
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
