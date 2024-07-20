import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import Logo1 from "../assets/BhavyataLogo.png";

function Logo() {
  return (
    <div className="flex">
      <motion.img
        className="h-[6rem]"
        src={Logo1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="flex justify-center items-center flex-col ml-[0.5rem]  font-rajdhani font-medium">
        <AnimatedText text="BHAVYATA" className="text-[1.6rem] tracking-[0.55rem] leading-[2rem]" />
        <AnimatedText text="ARCHITECTS" className="text-[1.6rem] tracking-[0.3rem] leading-[2rem]" />
      </div>
    </div>
  );
}

export default Logo;
