"use client";
import Image from "next/image";
import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { CiPause1 } from "react-icons/ci";

const VideoResume = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    console.log();
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="shadow-prt-shadow h-[300px] md:h-[350px] lg:h-[400px] rounded-[10px]">
        <div className="relative h-full w-full element_overlay ">
          {/* thumbnail  */}
          <Image
            src="/developer-image.webp" // Replace with the actual image path
            alt="video resume"
            layout="fill" // Takes full width and height of the parent
            objectFit="cover" // Ensures the image covers the area properly
            className="absolute inset-0 rounded-[10px]"
          />
          {/* overlay  */}
          <div className="absolute h-full w-full z-[1] bg-hero-overlay left-0 top-0"></div>

          {/* play button plus  */}
          <div className="h-[70px] z-[2] w-[70px] bg-[#fcfcfe]  absolute left-[50%] top-[50%]  rounded-[50%] animate-blinkIng"></div>

          {/* play button  */}
          <div
            className="h-[60px] w-[60px] rounded-[50%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#70ba65] z-[3] flex justify-center items-center cursor-pointer shadow-prt-shadow"
            onClick={handlePlay}
          >
            {isPlaying ? (
              <CiPause1 className="text-[20px] text-[#00283a] font-bold" />
            ) : (
              <BiPlay className="text-[25px] text-[#00283a] font-bold" />
            )}
          </div>
        </div>
      </div>
      {isPlaying && (
        <div
          className="h-full w-full bg-hero-overlay fixed left-0 top-0  items-center justify-center flex z-50"
          onClick={handleClose}
        >
          <iframe
            src="https://www.youtube.com/embed/wexzvClUcUk?autoplay=1&mute=1&si=16d_nn1yROmq5jqD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="max-w-[800px] w-[95%]  h-[300px] md:h-[400px] "
          ></iframe>
        </div>
      )}
    </>
  );
};

export default VideoResume;
