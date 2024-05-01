import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimateCharacter = ({ text, delay = 0, duration = 0.2, stagger = 0.05 }) => {
   
   
      const initialStyle = {
        display: 'inline-block',
        transform: 'translateY(-100%)', // Start characters off-screen (100% below)
        opacity: 0,
      };
  return (
    <motion.div className="text-animation flex space-x-1 ">
    {text.map((char, index) => (
      <motion.span
        key={index}
        initial={initialStyle}
        animate={{ transform: 'translateY(0)', opacity: 1 }} // Animate to their position
          transition={{ delay: index * stagger + delay, duration }}
          className="text-5xl "
       
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
  )
}

export default AnimateCharacter