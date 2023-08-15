"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState<boolean>(true);
  const [lightModeOn, setLightModeOn] = useState(
    localStorage.getItem("theme") === null ? false : true
  );
  useEffect(() => {
    console.log("mode", lightModeOn);

    if (!lightModeOn) {
      document.documentElement.classList.add("dark");
      // document.querySelectorAll(".tr-box-shadow").forEach((ele) => {
      //   ele.classList.add("boxShadow");
      // });
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      // document.querySelectorAll(".tr-box-shadow").forEach((ele) => {
      //   ele.classList.remove("boxShadow");
      // });
      localStorage.removeItem("theme");
    }
    // console.log("theme", localStorage.getItem("theme"));
  }, [lightModeOn]);
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
          checked={!lightModeOn}
          onChange={() => setLightModeOn(!lightModeOn)}
          size={50}
        />
      </div>
    </div>
  );
};

export default Navbar;
