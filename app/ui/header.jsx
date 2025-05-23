"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
  Cog8ToothIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { TiArrowDown } from "react-icons/ti";
import { usePathname } from "next/navigation";
import ActionBtn from "./ActionBtn";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="h-[80px] w-full lg:w-[98%]  bg-dark-navy fixed lg:left-[50%] lg:translate-x-[-50%] top-0 z-[10] md:rounded-b-[1rem]"
      style={{
        boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, .6)",
      }}
    >
      <div className="container h-[80px]">
        {/* wrapper  */}
        <div className="h-[80px] w-full flex items-center justify-between md:relative">
          {/* left side  */}
          <HeaderLeft />
          {/* right side  */}
          <HeaderRight isOpen={isOpen} />
          {/*menu button */}
          <HeaderMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

// left side content
function HeaderLeft() {
  return (
    <div className="h-full w-1/4 flex items-center">
      <h1 className="text-[22px] font-black tracking-[0px]">
        <span>Su</span>
        <span className="text-light-green">zan</span>
      </h1>
    </div>
  );
}

// right side content
function HeaderRight({ isOpen }) {
  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 visible top-[100%]"
          : "opacity-0 invisible top-[120%]"
      } xl:h-full w-full  xl:w-3/4 xl:bg-transparent xl:flex-row xl:p-0 xl:items-center xl:justify-end p-10 xl:static  xl:opacity-100 xl:visible  bg-dark-navy flex flex-col absolute left-0  right-0  transform transition-all duration-500 justify-center items-center`}
    >
      {/* nav bar  */}
      <HeaderMenu />
      {/*mood  theme switch  */}
      <HeaderThemeBtn />
      {/* action button */}
      <HeaderActionBtn />
    </div>
  );
}

// nav bar
function HeaderMenu() {
  const pathName = usePathname();

  // Menu items array
  const menuItems = [
    { name: "home", path: "/" },
    { name: "portfolio", path: "/portfolio" },
    { name: "resume", path: "/resume" },
    { name: "contact", path: "/contact" },
    { name: "blog", path: "/blog" },
  ];
  return (
    <nav className="w-full xl:ml-[-20px]">
      <ul className="flex flex-col xl:flex-row justify-center items-center h-full">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`${
              item.path === pathName
                ? "xl:after:visible after:opacity-100  after:scale-x-100"
                : ""
            }
          relative xl:h-full h-[50px] after:content-[''] after:h-[3px] after:w-full after:absolute after:left-0 after:top-[100%] after:bottom-0 after:bg-[#70b965] after:invisible after:transition-all after:opacity-0 after:scale-x-0 after:duration-500 after:origin-bottom-left
          `}
          >
            <Link
              href={item.path}
              className={`
       ${
         pathName === item.path
           ? "text-[#6fb965] xl:text-[#dedee0]"
           : "text-[#dedee0]"
       }
       font-bold text-[11px] tracking-[2px] xl:leading-[80px] px-[20px] 
       h-full w-full uppercase relative   hover:text-[#6fb965] transition-colors duration-500
      `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// action button
function HeaderActionBtn() {
  return (
    <div className="xl:ml-[30px] xl:mt-0 mt-5 ">
      <ActionBtn widthClasses="w-[190px] xl:w-[203px]" />
    </div>
  );
}

// menu button
function HeaderMenuBtn({ isOpen, setIsOpen }) {
  return (
    <div
      className="w-6 h-full inline-flex justify-end items-center xl:hidden"
      onClick={() => setIsOpen((open) => !open)}
    >
      {isOpen ? (
        <XMarkIcon className="size-7 cursor-pointer" />
      ) : (
        <Bars3Icon className="size-7 cursor-pointer" />
      )}
    </div>
  );
}

// change theme
function HeaderThemeBtn() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="w-full h-full flex justify-center items-center xl:ml-[50px]">
      <Cog8ToothIcon color="#859299" className="size-4 mx-[7px]" />
      <div
        className="w-[45px] h-[23px] bg-[#02162b] rounded-[2rem] p-[2px]  cursor-pointer"
        onClick={() => setIsDark((mood) => !mood)}
      >
        <div
          className={`${
            isDark ? "translate-x-5" : "translate-x-0"
          } h-[20px] w-[20px] rounded-[50%]  border-[3px]      
          transition-transform duration-500 border-[#70ba65]`}
        ></div>
      </div>
      <MoonIcon color="#859299" className="size-4 mx-[7px]" />
    </div>
  );
}

export default Header;
