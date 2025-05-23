import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="bg-dark-navy element_overlay rounded-[10px] shadow-prt-shadow">
      {/* blog img  */}

      <Link href="/" className="h-[220px]  block relative">
        <Image
          src="/banner1.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="profile picture"
          className="rounded-t-[10px]"
        />
      </Link>

      {/* blog des  */}

      <div className="p-[40px]">
        {/* blog category */}
        <div className="mb-[20px] text-[11px] opacity-60 uppercase font-bold tracking-[2px]">
          <span>Design,</span>
          <span>Events,</span>
          <span>Technology</span>
        </div>

        {/* blog heading  */}
        <h5 className="mb-[20px] font-extrabold tracking-[0px] text-[20px]">
          <Link href="/">Follow your own design process.</Link>
        </h5>

        {/* divider  */}
        <div className="h-[1px] border-t-[2px] border-dotted border-[#224454] my-[20px]"></div>

        {/* blog label  */}
        <div className="uppercase font-bold opacity-60 tracking-[2px] text-[11px]">
          {/* date */}

          <span>September 24, 2020</span>

          {/* blog author  */}

          <span> admin</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
