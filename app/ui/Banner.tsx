"use client";
import Link from "next/link";
import styles from "../styles/banner.module.css";
import { BiPlay } from "react-icons/bi";

import { scrollToElement } from "../utils";
import { useState, useEffect, useRef } from "react";
import Section from "./Section";
const Banner = ({ title, content, children, bgpath, pageName }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);
  const [overlayStyle, setOverlayStyle] = useState({
    opacity: 0,
    transform: "translateY(100%)", // Start from bottom
  });
  // Handle scroll effect
  const handleScroll = () => {
    const heroEle = heroRef.current;
    if (!heroEle) return; // Element not found
    const scrollY = window.scrollY;

    const heroHeight = heroEle.offsetHeight;

    // Set scroll position percentage
    const scrollPercent = Math.min(scrollY / heroHeight, 1); // Maximum value is 1

    // Update overlay style
    setOverlayStyle({
      opacity: scrollPercent + 0.3, // Increase opacity as you scroll down
      transform: "translateY(0%)", // or adjust as needed for your animation
    });

    setScrollPosition(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(pageName)
  return (
    <div
      className="h-[60vh] max-h-[400px]  bg-center  lg:max-h-[500px]  w-full  bg-cover bg z-[1] relative mt-[80px] lg:mt-[68px]  rounded-b-[20px] after:content-[''] after:h-full after:w-full after:absolute after:left-0 after:top-0 after:bg-[#000] after:opacity-0 bg-no-repeat after:z-[-1] transition-all bg-fixed duration-500 "
      ref={heroRef}
      style={{
        backgroundImage: `url(${bgpath})`,
        // boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, .6)",
      }}
    >
      {/* Black Overlay */}
      <div
        className="absolute inset-0 bg-[#01162b] transition-all duration-200  bottom-0 rounded-b-[20px]"
        style={{ ...overlayStyle }}
      ></div>
      <div className="container h-full w-full">
        <Section id="banner">
          <div className="w-full flex gap-[32px] items-center h-full">
            {/* left side  */}
            <div className=" lg:w-[33%] hidden lg:block"></div>
            {/* right side  */}
            <div className=" lg:w-[67%] w-full flex h-full justify-center lg:justify-between items-center">
              {/* content  */}
              <div className="flex flex-col items-center lg:items-start">
                <BannerContent
                  title={title}
                  content={content}
                  children={children}
                  pageName={pageName}
                />
              </div>
              {/* scroll hint  */}
              <div className="hidden lg:block  h-full ">
                <ScrollIndicator />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

function BannerContent({ title, content, children, pageName }) {
  interface BannerContentProps {
    title: string;
    content: string;
    children?: React.ReactNode;
    pageName: string;
  }

  const handleScroll = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("video resume");
    scrollToElement("video-resume", 200); // Scroll to _prt-content_ over 1 second (1000ms)
  };
  return (
    <>
      <span
        className="text-xs  font-bold uppercase tracking-[2px] mb-5 text-[#fcfcfe]"
        style={{ textShadow: "0 1px 10px rgba(0, 0, 0, 0.3)" }}
      >
        {title}
      </span>

      <h1 className="text-5xl lg:text-[64px] font-black text-[#fcfcfe] text-center lg:text-start leading-[1.20] mb-[30px] ">
        {content}
      </h1>
      {/* banner btn  */}
      <div
        className={`border-2 rounded-[30px]   h-[45px] text-[11px] uppercase font-bold gap-[7px] text-[#fcfcfe] tracking-[2px]`}
      >
        {pageName === "/" ? (
          <div
            onClick={handleScroll}
            className="flex w-full h-full px-[35px]  items-center cursor-pointer "
          >
            <span className="">video resume</span>
            <BiPlay size="23" />
          </div>
        ) : (
          <div className="flex px-[35px] h-full w-full gap-[5px] items-center">
            <Link
              href="/"
              className="hover:text-[#6fb965] transition-colors duration-500"
            >
              home
            </Link>
            <span className="cursor-not-allowed"> / </span>
            <span className="cursor-not-allowed opacity-80">{pageName}</span>
          </div>
        )}
      </div>
    </>
  );
}
function ScrollIndicator() {
  const handleScroll = () => {
    scrollToElement("_prt-content_", 400); // Scroll to _prt-content_ over 1 second (1000ms)
  };

  return (
    <div
      className="pt-[230px] flex flex-col justify-center items-center cursor-pointer"
      onClick={handleScroll}
    >
      <div className="h-[40px] w-[25px] border-[2px] rounded-[13px] flex justify-center ">
        <div className={styles.animated_circle}></div>
      </div>
      <span className={styles.scroll_label}>scroll down</span>
    </div>
  );
}

export default Banner;
