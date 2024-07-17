import { useState } from "react";

interface IBurger {
  openState: boolean;
  setOpenState: (value: boolean) => void;
}

const Burger = ({openState, setOpenState}: IBurger) => {
  

  
  return (
    <div onClick={() => setOpenState(!openState)}  className={`relative w-[25px] h-[17px] bg-transparent after:content-[''] after:w-full after:h-[2px] after:bg-white after:absolute after:top-0  before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 cursor-pointer`}>
      <span className="absolute top-1/2 -translate-y-1/2 bg-white w-[80%] right-0 h-[2px]"></span>
    </div>
  );
};

export default Burger;
