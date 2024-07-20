import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      className="absolute flex w-[100vw] h-full sm:h-[8rem] items-center bg-black bg-opacity-60 z-10 p-[2rem] sm:pl-[0.8rem] justify-between flex-col sm:flex-row py-[4rem] sm:py-[2rem]"
      initial={{ opacity: 0, y: "-2rem" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <div>
        <Logo />
      </div>
      <SocialLinks />
    </motion.div>
  );
}

export default Navbar;
