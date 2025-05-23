import React from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TiArrowRight } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";

const ServiceCard = ({ name, description }) => {
  return (
    <div className="mb-[40px] shadow-prt-shadow bg-dark-navy element_overlay rounded-[10px] flex flex-col justify-center items-start px-[40px] lg:px-[20px] xl:px-[40px]">
      <div className="">
        {/* service icon  */}
        <LiaLaptopCodeSolid size="50" className="opacity-70 mb-[20px]" />

        {/* service name */}
        <h6 className="mb-[20px] font-extrabold tracking-[0px] text-[1rem]">
          {name}
        </h6>

        {/* service des  */}

        <ul className="list-none   space-y-2 mb-[20px] ms-[-7px]">
          {description.map((des) => (
            <li
              key={des}
              className="text-[12px] text-[#919ca1] font-bold flex items-center"
            >
              <IoMdArrowDropright
                size="20"
                className="text-light-green opacity-50"
              />
              {des}
            </li>
          ))}
        </ul>

        {/* order button  */}
        <div className="flex w-32  items-center text-light-green cursor-pointer group">
          <span className="uppercase text-[11px] font-bold tracking-[2px]">
            order now
          </span>
          <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            <TiArrowRight size="25" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
