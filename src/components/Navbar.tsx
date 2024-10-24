"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white lg:bg-transparent flex flex-col px-4 py-2 lg:py-4 absolute z-[45] w-full top-[52px]">
      <div className="flex h-[54px] justify-between items-center w-full lg:hidden">
        <div onClick={handleClickMenu} className="px-3 cursor-pointer">
          <Menu />
        </div>
        <h1 className="text-xl font-bold sm:text-3xl">CIANA</h1>
        <div className="px-3">
          <Menu color="transparent" />
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 h-screen">
          <a href="#courses">
            <div className="py-4 border-b font-bold hover:text-blue-400 cursor-pointer">
              Сургалтууд
            </div>
          </a>
          <a href="#about">
            <div className="py-4 border-b font-bold hover:text-blue-400 cursor-pointer">
              Тухай
            </div>
          </a>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center justify-between max-w-[1200px] m-auto w-full text-white">
          <h1 className="text-xl font-bold sm:text-3xl cursor-pointer">
            CIANA
          </h1>
          <div className="flex gap-5">
            <a href="#courses">
              <div className="font-bold hover:text-blue-400 cursor-pointer">
                Сургалтууд
              </div>
            </a>
            <a href="#about">
              <div className="font-bold hover:text-blue-400 cursor-pointer">
                Тухай
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
