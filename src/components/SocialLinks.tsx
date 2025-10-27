"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dupenodi",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sarath-donepudi",
      icon: faLinkedin,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="flex gap-6 justify-start items-center mt-6"
    >
      <div className="flex flex-row gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {/* Icon always on left */}
            <div className="w-14 h-14 bg-gradient-to-br from-[#17151c] to-[#111015] border border-white/10 rounded-2xl shadow-[0_2px_12px_0_rgba(20,18,30,0.9)] text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center">
              <div className="flex w-full h-full items-center justify-center">
                <FontAwesomeIcon
                  icon={link.icon}
                  className="text-white/80 text-[1.5rem]"
                  style={{ display: "block", margin: "auto" }}
                />
              </div>
            </div>
            {/* Tooltip/label appears above icon, stays above the icon itself */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {link.name}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
