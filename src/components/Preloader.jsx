import React, { useState, useEffect } from "react";
import Logo from "../assets/BhavyataLogo.png";
import { delay, motion } from "framer-motion";
import image1 from "../assets/1.jpg";
import AnimatedText from "./AnimatedText";

function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isWidthLess, setIsWidthLess] = useState(window.innerWidth < 1000);
  const [isWidthTooLess, setIsWidthTooLess] = useState(window.innerWidth < 500);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Total duration of the animations

    const handleResize = () => {
      setIsWidthLess(window.innerWidth < 1000);
      setIsWidthTooLess(window.innerWidth < 500);
    };

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      className={`absolute top-0 w-screen h-screen bg-cover bg-no-repeat ${isWidthTooLess ? "bg-right" : "bg-center"}`}
      style={{
        backgroundImage: `url(${image1})`,
        zIndex: "-20",
        filter: "grayscale(100%)",
        backgroundSize: isWidthLess ? "auto 110%" : "110%",
        backgroundOrigin: "border-box",
      }}
      initial={{ display: "block" }}
      animate={{ display: "none" }}
      transition={{ delay: 4.7 }}
    >
      <motion.div
        className="h-[50vh] w-[100%] absolute bg-black -z-10"
        initial={{ translateY: 0 }}
        animate={{ translateY: "-50vh" }}
        transition={{ delay: 3.7, duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="h-[50vh] w-[100%] absolute top-[50vh] bg-black -z-10"
        initial={{ translateY: 0 }}
        animate={{ translateY: "50vh" }}
        transition={{ delay: 3.7, duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="h-[100vh] flex justify-center items-center w-[100vw]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.img
          className="h-[7rem] sm:h-[8rem]"
          src={Logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 2 }}
        />
        <div className="flex justify-center items-center flex-col ml-[0.5rem] font-rajdhani">
          <AnimatedText text="BHAVYATA" className="text-[1.6rem] tracking-[0.55rem] sm:text-4xl sm:tracking-[0.8rem]" />
          <AnimatedText
            text="ARCHITECTS"
            className="text-[1.6rem] tracking-[0.3rem] sm:text-4xl sm:tracking-[0.5rem]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Preloader;
