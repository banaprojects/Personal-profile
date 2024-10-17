"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // Add hover state

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setVisible(true);
      setIsScrolling(true);
    }
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (isScrolling && !isHovering) {
      // Only hide if not hovering
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
        setVisible(false);
      }, 3000);
    }
    return () => {
      // Add this line
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [isScrolling, isHovering]); // Add isHovering to dependency array

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "blur-effect flex max-w-[500px] h-[50px]  fixed top-10 inset-x-0 mx-auto border border-transparent bg-gradient-to-r from-transparent via-black-100 to-transparent rounded-[20px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2  items-center justify-center space-x-10",
            className
          )}
          onMouseEnter={() => setIsHovering(true)} // Add hover events
          onMouseLeave={() => setIsHovering(false)}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 transform duration-500 dark:hover:text-neutral-300 hover:text-neutral-500 hover:underline"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
