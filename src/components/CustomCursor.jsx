import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setCursorVariant("text");
    const mouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    document.querySelectorAll("a, button, .interactive").forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.querySelectorAll("a, button, .interactive").forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(14, 165, 233, 0.2)",
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 20 }}
      />
      <motion.div
        className="cursor-dot-outline"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
