"use client";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavContent } from "./NavContent";

const variants = {
  hidden: { y: "100vh", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function NavBottom() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <RectangleGroupIcon className="w-7 h-7" />
      </button>
      {isOpen && (
        <button
          className="bg-black opacity-15 fixed top-0 left-0 w-full h-full"
          onClick={() => setIsOpen(false)}
        />
      )}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 w-full bg-gray-900 rounded-t-lg p-4 z-20"
      >
        <NavContent onNavigate={() => setIsOpen(false)} />
      </motion.div>
    </>
  );
}
