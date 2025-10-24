'use client';

import Hero from '../components/Hero';
import SubHero from '../components/SubHero';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <Hero />
          <SubHero />
        </div>
        
        {/* Floating background elements for modern look */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </>
  );
}
