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
        curveAmount={250}
        direction="right"
        interactive={true}
        className="curved-text-arch"
      />
    </motion.div>
  );
}
