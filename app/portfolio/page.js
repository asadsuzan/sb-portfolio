"use client";
import { useEffect, useState } from "react";
import Banner from "../ui/Banner.jsx";
import Sidebar from "../ui/sidebar";
import { FaPlay } from "react-icons/fa6";

import SectionTitle from "../ui/SectionTitle";

import ProjectCard from "../ui/ProjectCard.jsx";
import UiWrapper from "../ui/UiWrapper.jsx";
import Section from "../ui/Section.jsx";

export default function Portfolio() {
  const bannerContent = (
    <>
      Recent work
      <br />
      performed
    </>
  );
  const bannerProps = {
    title: "portfolio",
    content: bannerContent,
    bgpath: "./banner3.jpg",
    pageName: "portfolio",
  };
  return (
    <UiWrapper bannerProps={bannerProps}>
      <Section id="projects">
        <ProjectCard />
      </Section>
      {/* <section className="my-[20px]">
        
      </section> */}
    </UiWrapper>
  );
}
