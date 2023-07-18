import { useState } from "react";

function HamburgerIcon({ classes, onClick, isOpen }) {

  const genericHamburgerLine = `h-[3px] w-6 my-[3px] bg-neutral-300 transition ease transform duration-300`;

  const clickHandler = () => {
    onClick();
  }

  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className={`flex flex-col h-10 w-10 rounded justify-center items-center group ${classes}`}
      onClick={clickHandler}
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2.5 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

export default HamburgerIcon;
