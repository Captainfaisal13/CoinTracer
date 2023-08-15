import React from "react";

const Footer = () => {
  return (
    <div className="pt-14 pb-20 text-center">
      <p className="text-lg font-bold">
        Made by{" "}
        <a
          href="https://www.captainfaisal.dev"
          target="_blank"
          className="text-[#4bc1be]"
        >
          Faisal
        </a>{" "}
        with Swag.
      </p>
      <p className="text-xs leading-3">© Shaikh Faisal.</p>
    </div>
  );
};

export default Footer;
