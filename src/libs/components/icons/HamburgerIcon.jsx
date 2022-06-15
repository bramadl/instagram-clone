import React from "react";

function HamburgerIcon() {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="4"
          y1="5"
          x2="20"
          y2="5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="11"
          x2="20"
          y2="11"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="17"
          x2="20"
          y2="17"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default HamburgerIcon;
