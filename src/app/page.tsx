'use client';

import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import SubHero from '../components/SubHero';
import TerminalBackground from '../components/TerminalBackground';

export default function Home() {
  return (
    <>
      
      {/* <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <TerminalBackground
          scale={1.2}
          gridMul={[3, 2]}
          digitSize={0.9}
          timeScale={0.4}
          pause={false}
          scanlineIntensity={0.3}
          glitchAmount={0.15}
          flickerAmount={0.2}
          noiseAmp={0.4}
          chromaticAberration={1}
          dither={0.5}
          curvature={0.05}
          tint="#39FF14"
          mouseReact={true}
          mouseStrength={0.3}
          pageLoadAnimation={true}
          brightness={0.3}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative z-10">
          <Hero />
          <InfoSection />
          <SubHero />
        </div>
      </div> */}
     

      {/* Gradient background */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <Hero />
          <InfoSection />
          <SubHero />
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </>
  );
}
