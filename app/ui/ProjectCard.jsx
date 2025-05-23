// "use client";

// import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import Image from "next/image";
import ElementDivider from "./ElementDivider";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Autoplay,
  EffectCreative,
  Pagination,
  Scrollbar,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/effect-creative";
import Link from "next/link";

// import required modules
const ProjectCard = () => {
  const project = [
    {
      name: "Paul Freeman",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.",
      images: ["/portfolio.png", "/banner1.jpg", "/banner2.jpg"], // Replace with actual image URL
    },
    // Add more profiles as needed
    {
      name: "Paul Freeman",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.",
      images: ["/portfolio.png", "/banner1.jpg", "/banner2.jpg"], // Replace with actual image URL
    },
    {
      name: "Paul Freeman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.",
      images: ["/portfolio.png", "/banner1.jpg", "/banner2.jpg"], // Replace with actual image URL
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-[40px] gap-[30px]  project-card">
      {project.map((p, i) => (
        <div
          key={i}
          className="bg-dark-navy rounded-[10px] p-[20px]  flex flex-col justify-center items-center group element_overlay shadow-prt-shadow hover:shadow-2xl transition duration-300 "
        >
          <Swiper
            modules={[Autoplay, EffectCreative, Scrollbar]} // Add both modules
            scrollbar={{
              hide: true,
            }}
            autoplay
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            grabCursor
            loop={true} // Ensure the slider loops infinitely
            spaceBetween={0}
            slidesPerView={1}
            className="w-full relative"
          >
            {p.images.map((src, ind) => (
              <SwiperSlide key={ind}>
                <div className="w-full h-[200px]  bg-no-repeat bg-contain  md:w-[300px] md:h-[150px] relative mb-[20px]  border border-[#224454] bg-[#02162b]  rounded-[5px] overflow-hidden  transition-all  duration-1000 ease">
                  <Image
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    alt="profile picture"
                    objectPosition="top"
                    className="rounded-[5px] hover:scale-[1.05] transition-transform duration-500 ease"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <ElementDivider spaceY="10" /> */}

          {/* description  */}
          <div>
            <h6 className="capitalize text-[16px] tracking-[0] font-extrabold mb-[15px]">
              <Link
                href="/portfolio/details"
                className="flex justify-between items-center"
              >
                <span className="group-hover:text-[#6fb965]  transition-colors duration-500 ">
                  mern portfolio website
                </span>
                <span className="translate-x-[-10px] group-hover:translate-x-[0] shadow-2xl  h-[20px] w-[20px]  rounded-full bg-[#02162b] group-hover:bg-light-green flex justify-center items-center text-light-green  group-hover:text-[#fff]  transition-all duration-500 delay-200">
                  <RiArrowRightSLine size="15" className="font-extrabold " />
                </span>
              </Link>
            </h6>

            <p className="text-[11px] text-[#919ca1] font-bold leading-[2]">
              <span>
                NEXT.js CMS Portfolio Website, A fully customizable portfolio
                website
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
