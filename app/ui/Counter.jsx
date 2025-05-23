import React from "react";
import ElementDivider from "./ElementDivider";

const Counter = ({ number, label }) => {
  return (
    <div className="card h-44 w-full rounded-xl shadow-2xl bg-dark-navy text-center py-7 px-7 element_overlay">
      <div className="counter">
        <span className="number text-[24px] font-bold me-1">{number}</span>
        <span className="symbol relative top-[-8px] text-base font-bold text-[#70ba65] ms-1">
          +
        </span>
      </div>

      <ElementDivider spaceY="20" />
      <div className="label">
        <span className="uppercase font-bold tracking-[2px] text-[11px]">
          {label}
        </span>
      </div>
    </div>
  );
};

export default Counter;
