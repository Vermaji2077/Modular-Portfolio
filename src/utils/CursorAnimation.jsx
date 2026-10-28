import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [cursorSize, setCursorSize] = useState(32);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with a mouse/fine pointer
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    setIsFinePointer(true);

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOverText = () => {
      setCursorSize(80);
    };

    const handleMouseLeaveText = () => {
      setCursorSize(32);
    };

    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, button");

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOverText);
      el.addEventListener("mouseleave", handleMouseLeaveText);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOverText);
        el.removeEventListener("mouseleave", handleMouseLeaveText);
      });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="hidden lg:block fixed bg-white rounded-full pointer-events-none mix-blend-difference z-50"
      style={{ width: cursorSize, height: cursorSize }}
      animate={{ x: cursorPosition.x - cursorSize / 2, y: cursorPosition.y - cursorSize / 2 }}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    />
  );
}
