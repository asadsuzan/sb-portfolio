import React from "react";
import ElementDivider from "./ElementDivider";
import { TiArrowRight } from "react-icons/ti";
import ActionBtn from "./ActionBtn";

const PricingCard = ({ title, price, features, tag }) => {
  return (
    <div className="element_overlay overflow-hidden shadow-prt-shadow p-[40px] bg-dark-navy rounded-[10px] flex justify-center items-center">
      <div className="text-center w-full">
        {/* title  */}
        <h6 className="capitalize text-[16px] font-extrabold mb-[30px]">
          <span>{title}</span>
        </h6>

        {/* price  */}
        <div>
          <sup className="text-[15px] font-light text-[#919ca1] mx-[10px]">
            $
          </sup>
          <span className="text-[32px] font-black">{price}</span>
          <sup className="text-[15px] font-light text-[#919ca1] mx-[10px]">
            h
          </sup>
        </div>

        {/* divider  */}

        <ElementDivider />

        {/* features  */}
        <div className="mb-[40px]">
          <ul className="list-none  space-y-5">
            {features.map((feature) => (
              <li
                key={feature}
                className="text-[11px] text-[#919ca1] font-bold tracking-[1.7px] uppercase"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* order btn  */}
        <div className="w-full flex justify-center">
          <ActionBtn text="order now" Icon={TiArrowRight} href="contact" />
        </div>
      </div>
      {tag === "popular" && (
        <div className="h-[20px] px-[40px] bg-light-green text-[10px] font-bold uppercase leading-[20px] tracking-[2px] absolute top-[23px] right-[-40px] text-[#fcfcfe] rotate-45 whitespace-nowrap">
          {tag}
        </div>
      )}
    </div>
  );
};

export default PricingCard;
