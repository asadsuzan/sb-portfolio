import React from "react";
import Banner from "./Banner";
import Sidebar from "./sidebar";
import Footer from "./Footer";

const UiWrapper = ({ children, bannerProps, layoutStyles }) => {
  return (
    <main className="min-h-screen w-full">
      <Banner {...bannerProps}></Banner>
      <div className="container">
        <div className="flex flex-col lg:gap-[32px] lg:flex-row">
          {/* sidebar  */}
          <div className="w-full lg:w-[33%]  relative">
            <Sidebar />
          </div>

          {/* right side content start  */}
          <div
            id="_prt-content_"
            className="lg:w-[67%]  h-full  w-full  z-[2] shadow-2xl relative overflow-hidden"
            style={{ ...layoutStyles }}
          >
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UiWrapper;
