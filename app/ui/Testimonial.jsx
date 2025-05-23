"use client";

// components/ProfileSwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const profiles = [
  {
    name: "ASAd",
    title: "Interior designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.",
    image: "/developer-image.webp", // Replace with actual image URL
  },
  // Add more profiles as needed
  {
    name: "Suzan",
    title: "Interior designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.",
image: "/developer-image.webp", // Replace with actual image URL
  },
  {
    name: "Paul Freeman",
    title: "Interior designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.",
    image: "/developer-image.webp", // Replace with actual image URL
  },
];

const Testimonial = () => {
  return (
    <div className="p-[40px] bg-dark-navy shadow-prt-shadow rounded-[10px] relative group">
      <Swiper
        modules={[Autoplay, Navigation]} // Add both modules
        autoplay
        navigation
        spaceBetween={0}
        slidesPerView={1}
      >
        {profiles.map((profile, index) => (
          <SwiperSlide key={index} className="bg-dark-navy">
            <div className="flex flex-col items-center justify-center ">
              <div className="bg-black rounded-full  mb-[20px] text-center flex justify-center items-center w-[70px] h-[70px] relative">
                <Image
                  src={profile.image}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  alt="profile picture"
                  className="rounded-[50%]"
                />
              </div>

              <h6 className="text-[16px] text-center mb-[15px] font-extrabold capitalize">
                <span> {profile.name}</span>
              </h6>
              <h6 className="text-xs text-center italic text-light-green mb-[20px]">
                <span>{profile.title}</span>
              </h6>
              <p className="text-center text-[14px] leading-[1.7] text-[#919ca1]">
                {profile.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
