"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Counter from "./ui/Counter";
import SectionTitle from "./ui/SectionTitle";
import { CgQuote } from "react-icons/cg";
import VideoResume from "./ui/VideoResume ";
import ServiceCard from "./ui/ServiceCard";
import PricingCard from "./ui/PricingCard";
import Testimonial from "./ui/Testimonial";
import BlogCard from "./ui/BlogCard";
import UiWrapper from "./ui/UiWrapper";
import Section from "./ui/Section";
import Skills from "./ui/Skills";
import ProjectCard from "./ui/ProjectCard";
import ProjectList from "./ui/ProjectList";




export default function Home() {
  // services item
  const services = [
    {
      name: "Full Stack Development",
      description: [
        "Frontend: React, Next.js",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
        "RESTful API integration",
      ],
    },
    {
      name: "Responsive Design",
      description: [
        "Mobile-first approach",
        "CSS frameworks: Tailwind, Bootstrap",
        "Cross-browser compatibility",
      ],
    },
    {
      name: "API Development",
      description: [
        "Custom REST APIs",
        "Authentication & Authorization",
        "Integration with MongoDB",
      ],
    },
    {
      name: "Performance Optimization",
      description: [
        "Code-splitting",
        "Lazy loading",
        "SEO & speed optimizations",
      ],
    },
  ];

  // pricing item
  const pricing = [
    {
      title: "Hourly",
      price: 30,
      tag: "popular",
      features: [
        "Flexible hours",
        "Ideal for short tasks",
        "Pay per hour",
        "Quick support",
      ],
    },
    {
      title: "Full Time",
      price: 2000,
      tag: "",
      features: [
        "40 hours/week",
        "Best for long-term projects",
        "Priority support",
        "Full project focus",
      ],
    },
  ];

  const bannerContent = (
    <>
      Discover my
      <br />
      art space
    </>
  );
  const bannerProps = {
    title: "hi my new friend",
    content: bannerContent,
    bgpath: "./banner1.jpg",
    pageName: "/",
  };
  const style = {
    marginTop: "-50px",
  };
  return (
    <UiWrapper bannerProps={bannerProps} layoutStyles={style}>
      {/* counter area start  */}
      <Section id="counter-section" className="mb-[40px]">
        <div className="flex w-full xl:gap-[30px] gap-5  flex-col lg:flex-row  ">
          <Counter
            number={74}
            label={
              <>
                completed <br /> projects{" "}
              </>
            }
          />
          <Counter
            number={50}
            label={
              <>
                happy <br /> customers{" "}
              </>
            }
          />
          <Counter
            number={0}
            label={
              <>
                Honors and <br /> Awards{" "}
              </>
            }
          />
        </div>
      </Section>
      {/* counter area end  */}
      {/* my story section start  */}
      <Section id="story-section" className="mb-[40px]">
        <SectionTitle title="My story" number="01" />
        <blockquote className="bg-dark-navy shadow-prt-shadow p-12 text-base font-semibold block rounded-xl  text-[#dedee0] element_overlay relative">
          <p>
            I believe in continuous learning, clean code, and simple but effective UI/UX. Whether it's a portfolio site, a SaaS dashboard, or a full-stack application — I love solving real-world problems with code.

            Now, I'm ready to bring value as a remote developer, collaborate globally, and keep growing every day.
          </p>

          <CgQuote className="text-[#70ba65] text-[54px] absolute bottom-[-10px] right-[2px]" />
        </blockquote>
      <div className="mt-5">
           <Skills />
      </div>
      </Section>

      {/* my story section end  */}
     <Section id="project-section" className="mb-[40px]">
        <SectionTitle title="My projects" number="02" />
        {/* <ProjectCard project={
          {
            basicInfo: {
              title: "Portfolio Website",
              slug: "portfolio-website",
              description: "A personal portfolio website showcasing my skills and projects.",
            },
            meta: {
              status: "completed",
              category: "web-development",
              client: "Self",
              timeframe: "Jan 2023 – Mar 2023",
            },
            _id: "1",
            screenshots: [
              "/screenshots/portfolio1.jpg",
              "/screenshots/portfolio2.jpg",
            ],
          }
        }/> */}
        <ProjectList/>

      </Section>
      {/* video resume start  */}
      <Section className="mb-[40px]" id="video-resume">
        <SectionTitle title="Video resume" number="03" />
        <VideoResume />
      </Section>
      {/* video resume end  */}
      {/* services section start  */}
      <Section id="services-section" className="mb-[40px]">
        <SectionTitle title="My services" number="04" />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[30px] lg:gap-y-[30px] lg:gap-x-[15px] xl:gap-[30px]">
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </Section>
      {/* services section end  */}
      {/* pricing section start  */}
      <Section id="pricing-section" className="mb-[40px]">
        <SectionTitle title="pricing plans" number="05" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
          {pricing.map((item) => (
            <PricingCard
              key={item.title}
              title={item.title}
              price={item.price}
              features={item.features}
              tag={item.tag}
            />
          ))}
        </div>
      </Section>
      {/* pricing section end  */}
      {/* testimonial section start here  */}
      <Section id="testimonial-section" className="mb-[40px] w-full">
        <SectionTitle title="Testimonials" number="06" />

        <Testimonial />
      </Section>
      {/* testimonial section start end  */}
      {/* latest blog section start start  */}
      <Section id="blog-section" className="mb-[40px]">
        <SectionTitle title="Latest Publications" number="07" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <BlogCard />
          <BlogCard />
        </div>
      </Section>
      {/* latest blog section start end  */}
    </UiWrapper>
  );
}
