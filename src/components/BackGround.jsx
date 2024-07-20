import React, { useState, useEffect } from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/02.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/7.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/8.jpg";
import Content from "./Content";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const images = [image1, image2, image3, image4, image5, image6, image7];

function BackGround() {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(-1);
  const [nextImage, setNextImage] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isWidthLess, setIsWidthLess] = useState(window.innerWidth < 1000);
  const [isWidthTooLess, setIsWidthTooLess] = useState(window.innerWidth < 500);

  useEffect(() => {
    const preloaderDuration = 4700;

    setTimeout(() => {
      setIsPreloaderVisible(false);
    }, preloaderDuration);

    const changeImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setNextImage((prevImage) => (prevImage + 1) % images.length);
      setIsInitialLoad(false);
    };

    const handleResize = () => {
      setIsWidthLess(window.innerWidth < 1000);
      setIsWidthTooLess(window.innerWidth < 500);
    };
    let imageInterval;

    if (!isPreloaderVisible) {
      imageInterval = setInterval(changeImage, 5000);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(imageInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPreloaderVisible]);

  const imageVariants = {
    initial: isInitialLoad
      ? { backgroundSize: isWidthLess ? "auto 110%" : "110% auto", opacity: 1 }
      : { backgroundSize: isWidthLess ? "auto 110%" : "110% auto", opacity: 0 },
    animate: { backgroundSize: isWidthLess ? "auto 100%" : "100% auto", opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {isPreloaderVisible && <div className="absolute inset-0 flex justify-center items-center -z-40 bg-black"></div>}
      {!isPreloaderVisible && (
        <>
          <Navbar />
          <AnimatePresence>
            <motion.div
              key={currentImage}
              className={`absolute top-0 w-screen h-screen bg-cover bg-no-repeat ${
                isWidthTooLess ? "bg-right" : "bg-center"
              }`}
              style={{
                backgroundImage: `url(${images[currentImage]})`,
                filter: "grayscale(100%)",
              }}
              initial={{ backgroundSize: isWidthLess ? "auto 110%" : "110%", opacity: 0 }}
              animate={{ backgroundSize: isWidthLess ? "auto 100%" : "100%", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 5, ease: "easeInOut" }}
            />
            <motion.div
              key={nextImage}
              className={`absolute top-0 w-screen h-screen bg-cover bg-no-repeat ${
                isWidthTooLess ? "bg-right" : "bg-center"
              }`}
              style={{
                backgroundImage: `url(${images[nextImage]})`,
                filter: "grayscale(100%)",
              }}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <Content />
        </>
      )}
    </>
  );
}

export default BackGround;
