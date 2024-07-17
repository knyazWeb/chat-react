import { useState } from "react";
import Burger from "./burger/Burger";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <nav
      className={`px-3 bg-accent w-full fixed top-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
        burgerOpen ? "h-screen" : "h-[70px]"
      }`}
    >
      <div className="h-[70px] w-full flex justify-end items-center">
        <Burger
          openState={burgerOpen}
          setOpenState={setBurgerOpen}
        />
      </div>
      <ul className={`flex items-center flex-col w-full transition-all duration-200 ease-in-out h-full ${burgerOpen ? "" : "opacity-0 overflow-hidden h-0"}`}>
        <li>
          <Link to=""></Link>1 menu
        </li>
        <li>
          <Link to=""></Link>2 menu
        </li>
        <li>
          <Link to=""></Link>3 menu
        </li>
        <li>
          <Link to=""></Link>4 menu
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
