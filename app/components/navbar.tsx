import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="my-4">
      <Link
        href="/"
        className="block font-bold text-2xl md:text-4xl text-center"
      >
        Coin <span className="text-[#4bc1be]">Tracer</span>
      </Link>
    </div>
  );
};

export default Navbar;
