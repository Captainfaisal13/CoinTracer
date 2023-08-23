"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedMode === "true" || !localStorage.getItem("darkMode")); // Default to true on first visit
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString()); // Update localStorage here
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="py-4">
      <Link
        href="/"
        className="block font-bold text-2xl md:text-4xl text-center"
      >
        Coin <span className="text-[#4bc1be]">Tracer</span>
      </Link>
      <div className="">
        <DarkModeSwitch
          style={{
            position: "fixed",
            bottom: "5%",
            right: "7%",
            marginRight: "1rem",
          }}
          checked={isDarkMode}
          onChange={() => toggleDarkMode()}
          size={50}
        />
      </div>
    </div>
  );
};

export default Navbar;
