// components/MoveToTop.js

import { useState, useEffect } from "react";

const MoveToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 bg-black text-white h-8 w-8 hover:w-20 hover:h-20 rounded-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity ease-in-out duration-300 focus:outline-none`}
      onClick={scrollToTop}
    >
      &uarr;
    </button>
  );
};

export default MoveToTop;
