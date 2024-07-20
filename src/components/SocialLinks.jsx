import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faSquareBehance, faLinkedin, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/bhavyata_architects/?igsh=N2lpZGJmMTJpZDA5",
    icon: faSquareInstagram,
  },
  {
    name: "Behance",
    url: "https://www.behance.net/bhavyata_architects",
    icon: faSquareBehance,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhavyata-architects-69544b292/",
    icon: faLinkedin,
  },
  {
    name: "Whatsapp",
    url: "https://api.whatsapp.com/send?phone=91%2098798%2019190",
    icon: faSquareWhatsapp,
  },
];

function SocialLinks() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="flex gap-[2rem] font-manrope font-light text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {links.map((link, index) => (
        <a
          key={link.name}
          className={`${isSmallScreen ? "" : "hover:text-white"}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isSmallScreen ? (
            <div
              className={`h-[35px] w-[35px] rounded-full flex justify-center items-center ${
                index === 2 ? "border-[7.2px]" : "border-[6.4px]"
              } border-white`}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className={`${
                  index === 1
                    ? "text-[30px]"
                    : index === 2
                    ? "text-[25px] mb-[0.8px]"
                    : index === 3
                    ? "text-[28px] mb-[0.5px] ml-[0.5px]"
                    : "text-[28px]"
                } text-white`}
              />
            </div>
          ) : (
            link.name
          )}
        </a>
      ))}
    </motion.div>
  );
}

export default SocialLinks;
