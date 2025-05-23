import React from "react";
import SectionTitle from "./SectionTitle";

const Footer = () => {
  return (
    <>
      {/* footer start here  */}
      <SectionTitle />
      <footer className="p-[40px] bg-dark-navy shadow-prt-shadow element-overlay rounded-[10px] flex flex-col md:flex-row items-center justify-between tracking-[2px] font-bold text-[10px] gap-[30px] mb-[20px]">
        {/* left side  */}
        <div className="text-[#919ca1]">
          <span>© 2022 All Rights Reserved.</span>
        </div>
        {/* right side  */}
        <div>
          <span className="inline-block me-2 text-[#919ca1] uppercase">
            Email:
          </span>
          <a
            href="mailto:dev.asadsuzan@gmail.com"
            className="text-light-green uppercase"
          >
            dev.asadsuzan@gmail.com
          </a>
        </div>
      </footer>
      {/* footer end here  */}
    </>
  );
};

export default Footer;
