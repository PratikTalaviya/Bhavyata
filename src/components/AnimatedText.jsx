import { motion } from "framer-motion";
import React from "react";

const AnimatedText = ({ text, className }) => {
  return (
    <div className={`flex ${className}`}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
export default AnimatedText;
