import React from "react";

const ElementDivider = ({ spaceY }) => {
  const marginY = spaceY ? `${spaceY}px` : "40px";
  return (
    <div
      className="border-t-[2px] border-dotted border-[#224454] w-full"
      style={{
        margin: `${marginY} 0`,
      }}
    ></div>
  );
};

export default ElementDivider;
