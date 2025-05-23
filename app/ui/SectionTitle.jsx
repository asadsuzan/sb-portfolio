import React from "react";

const SectionTitle = ({ title, number }) => {
  return (
    <h5 className="tracking-[0xp] flex items-center gap-5 mb-[40px] capitalize">
      <span className="text-[20px] font-extrabold whitespace-nowrap">
        {title}
      </span>
      <span className="h-[1px] w-full border-b-[2px] border-dotted border-muted-navy "></span>
      <span className="opacity-70 text-[#919ca1] w-[15px] h-[15px] text-[11px] font-bold italic">
        {number}
      </span>
    </h5>
  );
};

export default SectionTitle;
