'use client';

import { motion } from 'framer-motion';
import TextPressure from './TextPressure';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center w-full max-w-5xl mx-auto"
    >
      <div style={{ position: 'relative', height: '200px', width: '100%' }} className="sm:h-[250px] flex items-center justify-center">
        <TextPressure
          text="dupenodi"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={48}
        />
      </div>
    </motion.div>
  );
}
