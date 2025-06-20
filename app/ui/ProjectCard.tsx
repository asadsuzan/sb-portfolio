"use client";

import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/scrollbar";
import { TProjectSummary } from "../types";

interface ProjectCardProps {
project: TProjectSummary
}

const ProjectCard = ({ project}: ProjectCardProps) => {
  const { basicInfo, screenshots } = project;
  return (
    <div className="project-card">
      <div className="bg-dark-navy rounded-[10px] p-[20px] flex flex-col justify-center items-center group element_overlay shadow-prt-shadow hover:shadow-2xl transition duration-300">
        {/* Swiper Gallery */}
        <Swiper
          modules={[Autoplay, EffectCreative, Scrollbar]}
          scrollbar={{ hide: true }}
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
          loop
          spaceBetween={0}
          slidesPerView={1}
          className="w-full relative"
        >
          {screenshots?.map((src, ind) => (
            <SwiperSlide key={ind}>
              <div className="w-full h-[200px] bg-no-repeat bg-contain md:w-[300px] md:h-[150px] relative mb-[20px] border border-[#224454] bg-[#02162b] rounded-[5px] overflow-hidden transition-all duration-1000 ease">
                <Image
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  alt={basicInfo.title}
                  objectPosition="top"
                  className="rounded-[5px] hover:scale-[1.05] transition-transform duration-500 ease"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Project Info */}
        <div>
          <h6 className="capitalize text-[16px] tracking-[0] font-extrabold mb-[15px]">
            <Link
              href={`/portfolio/${basicInfo.slug}`}
              className="flex justify-between items-center"
            >
              <span className="group-hover:text-[#6fb965] transition-colors duration-500">
                {basicInfo.title}
              </span>
              <span className="translate-x-[-10px] group-hover:translate-x-[0] shadow-2xl h-[20px] w-[20px] rounded-full bg-[#02162b] group-hover:bg-light-green flex justify-center items-center text-light-green group-hover:text-[#fff] transition-all duration-500 delay-200">
                <RiArrowRightSLine size="15" className="font-extrabold" />
              </span>
            </Link>
          </h6>

          <p className="text-[11px] text-[#919ca1] font-bold leading-[2]">
            {basicInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
