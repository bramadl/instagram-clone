import React from "react";

function Tray(props) {
  const { children, hasUnseenTray } = props;

  return (
    <button
      className={`inline-flex rounded-full ${
        hasUnseenTray ? "border-gradient" : "border-2 border-[#DADADA]"
      }`}
    >
      {children}
    </button>
  );
}

export default Tray;
