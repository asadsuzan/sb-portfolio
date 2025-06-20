"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import TypingAnimation from "./TypingAnimation";
import SocialLinks from "./socialLinks";
import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import ElementDivider from "./ElementDivider";
import ActionBtn from "./ActionBtn";
import Section from "./Section";

// Memoized SidebarHeader, SideBarInfo, and SideBarFooter to prevent unnecessary re-renders
const SidebarHeader = React.memo(() => (
  <div className="h-[184px] whitespace-nowrap flex flex-col justify-center items-center">
    <div className="shadow-2xl h-[110px] w-[110px] relative rounded-[50%] p-2 mb-[20px]">
      <Image
        src="/developer-image.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="profile picture"
        className="rounded-[50%]"
        priority // Ensures optimal loading of important image
      />
      <div className="active-status absolute right-0 bottom-0 h-[20px] w-[20px] bg-light-green rounded-[50%]"></div>
    </div>
    <h5 className="text-[18px] capitalize mb-[15px] font-extrabold text-[#dedee0]">
      Asaduzzaman Suzan
    </h5>
    <div className="text-[11px] text-[#919ca1] uppercase font-bold tracking-[2px]">
      <TypingAnimation />
    </div>
  </div>
));

const SideBarInfo = React.memo(() => (
  <div className="w-full">
    <ul>
      <li className="flex justify-between mb-[10px] text-[11px] font-bold">
        <span className="text-[#dedee0] tracking-[2px] uppercase">
          Residence:
        </span>
        <span className="text-[#919ca1] uppercase tracking-[2px] ">
          Bangladesh
        </span>
      </li>
      <li className="flex justify-between mb-[10px] text-[11px] font-bold">
        <span className="text-[#dedee0] tracking-[2px] uppercase">City:</span>
        <span className="text-[#919ca1] uppercase tracking-[2px] ">Dhaka</span>
      </li>
      <li className="flex justify-between text-[11px] font-bold">
        <span className="text-[#dedee0] tracking-[2px] uppercase">Age:</span>
        <span className="text-[#919ca1] uppercase tracking-[2px] ">23</span>
      </li>
    </ul>
  </div>
));

const SideBarFooter = React.memo(() => (
  <div className="w-full flex justify-center">
    <ActionBtn text="contact me" Icon={MdOutgoingMail} href="http://localhost:3000/contact" />
  </div>
));

const Sidebar = () => {
  const [sidebarHeight, setSidebarHeight] = useState("calc(100vh - 150px)");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;
    if (windowWidth >= 992) {
      if (scrollY >= 70) {
        setSidebarHeight("calc(100vh - 85px)");
      } else {
        setSidebarHeight("calc(100vh - 150px)");
      }
    } else {
      setSidebarHeight("auto"); // For small devices
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`px-10 py-10 lg:py-5 w-full lg:max-w-[295px] xl:max-w-[355px] lg:rounded-t-[15px] bg-dark-navy lg:fixed z-[2] relative translate-y-[-50px] lg:translate-y-[0px] element_overlay`}
      style={{
        bottom: 10,
        height: sidebarHeight,
        transition: "height .5s ease-in-out ", // Optimized transition for performance
        boxShadow: "0 2px 4px -2px rgba(0, 0, 0, 1)",
      }}
    >
      <Section id="sidebar-content">
        <SidebarHeader />
        <ElementDivider />
        <SocialLinks />
        <ElementDivider />
        <SideBarInfo />
        <ElementDivider />
        <SideBarFooter />
      </Section>
    </div>
  );
};

export default Sidebar;
