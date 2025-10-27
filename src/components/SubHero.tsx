'use client';

import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';

export default function SubHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="w-screen -mx-4 sm:-mx-6 lg:-mx-8"
    >
      <CurvedLoop 
        marqueeText="Full Stack Developer ✦ Creative Technologist ✦ React Expert ✦ Next.js Specialist ✦ TypeScript Enthusiast ✦"
        speed={1.5}
        direction="right"
        interactive={true}
        textTransform="lowercase"
        waveMode="sine"
        waveCount={1}
        waveAmplitude={90}
        waveOffset={100}
        wavePhase={0}
        className="curved-text-arch"
      />
    </motion.div>
  );
}
