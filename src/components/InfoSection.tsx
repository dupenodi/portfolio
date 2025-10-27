'use client';

import { motion } from 'framer-motion';
import TextType from './TextType';
import SocialLinks from './SocialLinks';

export default function InfoSection() {
  const roles = [
    "full stack developer",
    "tech nerd",
    "design engineer", 
    "product engineer",
    "nomad"
  ];

  const maxRoleLength = Math.max(...roles.map(role => role.length));
  const widthEm = maxRoleLength + 1; // +1 for cursor

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-left mt-8 mb-12 w-full max-w-5xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
        sharath
      </h2>
      
      <div className="text-lg sm:text-xl text-purple-200">
        <span className="whitespace-nowrap mr-2">22,</span>
        <span
          style={{
            display: 'inline-block',
            minWidth: `${widthEm}em`,
            textAlign: 'left',
            marginLeft: '0',
          }}
        >
          <TextType 
            text={roles}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            variableSpeed={false}
            onSentenceComplete={() => {}}
          />
        </span>
      </div>
      
      <SocialLinks />
    </motion.div>
  );
}
