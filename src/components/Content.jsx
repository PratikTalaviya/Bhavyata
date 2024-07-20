import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Content() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 574);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 574);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute w-[100vw] h-[100vh] z-1 font-manrope flex flex-col sm:justify-end justify-center p-[2rem] text-center sm:text-left">
      <motion.div
        className="z-20"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {isSmallScreen ? (
          <div className="text-2xl sm:text-4xl">
            {/* <p>Prepare to immerse </p>
            <p>yourself in our world of </p>
            <p>architectural wonders.</p> */}
            <p>Prepare to immerse yourself in our world of architectural wonders.</p>
            <p className="pt-[1rem]">Website launching soon.</p>
          </div>
        ) : (
          <div className="text-3xl sm:text-4xl">
            <p>Prepare to immerse yourself</p>
            <p>in our world of architectural wonders.</p>
            <p>Website launching soon.</p>
          </div>
        )}

        <div className="text-base sm:text-xl mt-[1rem] text-[#ffffffde] font-light pl-[0.1rem]">
          <a className="sm:hover:text-white" href="mailto:example@example.com?subject=Enquiry%20regarding%20project.">
            bhavyataarchitects@gmail.com
          </a>
          <br />
          <a className="sm:hover:text-white text-[0.90rem] sm:text-[1.15rem]" href="tel:+919859819190">
            +91 9879819190
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Content;
