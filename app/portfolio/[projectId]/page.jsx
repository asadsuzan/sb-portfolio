"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import UiWrapper from "@/app/ui/UiWrapper";
import Section from "@/app/ui/Section";
import ElementDivider from "@/app/ui/ElementDivider";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

// import ElementDivider from "./ElementDivider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Scrollbar } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/effect-creative";
import SectionTitle from "@/app/ui/SectionTitle";
const projectDetails = {
  project: {
    title: "TaskMaster Pro",
    shortDescription:
      "A full-featured task management app designed for remote teams to collaborate efficiently.",
    info: {
      status: "Completed", // Status of the project (e.g., 'Completed', 'In Progress', 'On Hold')
      category: "Web Application", // Category (e.g., 'Web Application', 'Mobile App', 'API')
      client: "Acme Inc.", // Client name if it's a client project, or 'Personal Project'/'Practice Project' for your own work
      liveDemoLink: "https://taskmaster-pro.com",
      repositoryLink: {
        github: "https://github.com/taskmasterpro/taskmasterpro",
        bitbucket: "https://bitbucket.org/taskmasterpro/taskmasterpro",
      },

      timeframe: {
        startDate: "2024-01-01", // Project start date
        endDate: "2024-02-15", // Project end date or expected completion date
      },
    },
    overview: {
      context:
        "With the rise of remote work, teams needed a centralized platform to manage tasks, set priorities, and communicate without getting lost in multiple communication channels. TaskMaster Pro was built to provide a simple, all-in-one solution for task tracking and team collaboration.",
      targetAudience:
        "Remote teams, freelancers, and small-to-medium-sized businesses looking for a project management tool to streamline workflow",
      objectives: [
        "Create a user-friendly task management system with real-time updates.",
        "Build collaborative features like task assignments, file sharing, and messaging.",
        "Ensure smooth performance across all devices.",
      ],
    },
    features: [
      "Real-Time Task Updates using WebSocket.",
      "Task assignments with deadlines and priority tags.",
      "Built-in messaging for team communication.",
      "File attachments for task-related documents.",
      "Visual progress tracking with progress bars.",
      "Fully responsive design.",
    ],
    technologyStack: {
      frontend: "React.js with Tailwind CSS for styling the user interface.",
      backend: "Node.js with Express.js for the API.",
      database: "MongoDB for task and user management.",
      realTime:
        "WebSocket (using Socket.io) for real-time task updates and team messaging.",
      deployment:
        "Deployed on AWS with Docker for containerization and scalability.",
      thirdPartyAPI:
        "Integrated the Google Drive API for file attachments and management.",
    },
    challengesAndSolutions: [
      {
        challenge: "Real-time task updates.",
        solution:
          "Implemented WebSocket communication using Socket.io for instant task and message syncing.",
      },
      {
        challenge: "Handling large file attachments.",
        solution:
          "Integrated Google Drive API to allow users to attach files without overloading server storage.",
      },
    ],
    media: {
      screenshots: [
        "https://example.com/screenshots/landing-page.png",
        "https://example.com/screenshots/task-view.png",
      ],
      demoVideo: "https://example.com/videos/taskmaster-demo.mp4",
    },
    developmentProcess: {
      planning: "Created wireframes and user stories to outline key features.",
      workflow:
        "Used Agile methodology with bi-weekly sprints and Git for version control.",
      tools: [
        "Trello for task management",
        "Figma for UI design",
        "GitHub for code collaboration",
      ],
    },
    rolesAndResponsibilities: {
      team: [
        {
          name: "John Doe",
          role: "Frontend Developer",
          responsibilities: [
            "Developed the main UI components",
            "Integrated real-time updates with WebSocket",
          ],
        },
        {
          name: "Jane Smith",
          role: "Backend Developer",
          responsibilities: [
            "Created API endpoints for task management",
            "Integrated Google Drive API",
          ],
        },
      ],
    },
    lessonsLearned: [
      "Improved real-time web app development skills using WebSocket.",
      "Gained experience with Google Drive API for file management.",
    ],
    nextSteps: [
      "Add calendar integration for task scheduling.",
      "Implement AI-powered task suggestions based on user activity.",
    ],

    testimonials: [
      {
        user: "Alice Brown",
        feedback:
          "TaskMaster Pro streamlined our project management process and boosted team collaboration.",
      },
    ],
  },
};

const page = () => {
  const { projectId } = useParams();
  const bannerContent = (
    <>
      Sales Management
      <br />
      System - MERN!
    </>
  );
  // Sales Management System - MERN
  const bannerProps = {
    title: "portfolio",
    content: bannerContent,
    bgpath: "./banner3.jpg",
    pageName: "portfolio",
  };
  const style = {
    marginTop: "-50px",
  };

  return (
    <UiWrapper bannerProps={bannerProps} layoutStyles={style}>
      {/* project info  */}
      <ProjectInfo info={projectDetails.project.info} />

      {/* project overview  */}
      <ProjectOverview overview={projectDetails?.project?.overview} />
      {/* project screenshot */}
      <ProjectImgSlide />

      {/* project features */}
      <ProjectFeatures features={projectDetails.project.features} />

      {/* project technology stack */}
      <ProjectTechStack techStack={projectDetails.project.technologyStack} />

      {/* lesson learned  */}
      <LessonLearned lessonsLearned={projectDetails.project.lessonsLearned} />
    </UiWrapper>
  );
};

// project overview

function ProjectOverview({ overview }) {
  const { context, targetAudience, objectives } = overview;

  return (
    <Section id="project-overview">
      <SectionTitle title="project overview" number="01" />

      <div className="bg-dark-navy rounded-[10px] element_overlay p-[40px]">
        {/* context  */}
        <p className="mb-[20px]">
          <span className="text-base capitalize font-semibold">context - </span>
          <span className="text-sm font-bold text-[#919ca1] leading-[1.5]">
            {context}
          </span>
        </p>

        {/* target audience  */}
        <p className="mb-[20px]">
          <span className="text-base capitalize font-semibold">
            target audience -{" "}
          </span>
          <span className="text-sm font-bold text-[#919ca1] leading-[1.5]">
            {targetAudience}
          </span>
        </p>

        {/* objectives  */}
        <ul>
          <h6 className="text-base font-semibold mb-[5px]">Objectives - </h6>
          {objectives.map((objective, index) => (
            <li key={index} className="text-sm text-[#919ca1] mb-[5px]">
              <span className="font-bold text-[#919ca1]">
                {index + 1}. {objective}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

// project features

function ProjectFeatures({ features }) {
  return (
    <Section id="project-features">
      <SectionTitle title="project features" number="03" />
      <div className="bg-dark-navy rounded-[10px] element_overlay p-[40px]">
        <ul>
          <h6 className="text-base font-semibold mb-[5px]">Features - </h6>
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-[#919ca1] mb-[5px]">
              <span className="font-bold text-[#919ca1]">
                {index + 1}. {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

// project techStack

function ProjectTechStack({ techStack }) {
  const { frontend, backend, database, realTime, deployment, thirdPartyAPI } =
    techStack;

  return (
    <Section id="project-tech-stack">
      <SectionTitle title="Technology Stack" number="04" />
      <div className="bg-dark-navy rounded-[10px] element_overlay p-[40px]">
        <h6 className="text-base font-semibold mb-[5px]">
          Technologies used -{" "}
        </h6>
        <ul>
          {Object.entries(techStack).map(([key, value], idx) => (
            <li key={key} className="mb-[10px] ">
              <span className="text-sm capitalize font-semibold">
                {idx + 1}. {key} -{" "}
              </span>

              <span className="text-sm font-bold text-[#919ca1] leading-[1.5]">
                {value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

// project info
function ProjectInfo({ info }) {
  const { status, category, client, liveDemoLink, repositoryLink, timeframe } =
    info;
  const { github } = repositoryLink;
  const { startDate, endDate } = timeframe;

  return (
    <Section id="project-info">
      <div className="bg-dark-navy  shadow-prt-shadow w-full  element_overlay p-[20px] md:p-[40px] rounded-t-[10px]">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-y-5 gap-x-4">
          {/* {status && (
            <li className="text-xs flex flex-row gap-[5px]  whitespace-nowrap w-full flex-1">
              <h6 className="uppercase font-bold">status:</h6>
              <span className="uppercase font-normal  text-[#919ca1]">
                completed
              </span>
            </li>
          )} */}

          {category && (
            <li className="text-xs flex flex-row gap-[5px]  whitespace-nowrap w-full flex-1">
              <h6 className="uppercase font-bold flex items-center gap-1">
                <MdOutlineCategory size="15" className="text-light-green" />
                <span>category:</span>
              </h6>
              <span className="uppercase tracking-[0] font-semibold text-[#919ca1]">
                landing page
              </span>
            </li>
          )}

          {client && (
            <li className="text-xs flex flex-row gap-[5px]  whitespace-nowrap w-full flex-1">
              <h6 className="uppercase font-bold flex items-center gap-1">
                <MdPersonAddAlt1 size="15" className="text-light-green" />
                <span>client:</span>
              </h6>
              <span className="uppercase tracking-[0] font-semibold text-[#919ca1]">
                own
              </span>
            </li>
          )}

          {/* {liveDemoLink && (
            <li className="text-xs flex flex-row gap-[5px]  whitespace-nowrap w-full flex-1">
              <h6 className="uppercase font-bold">live demo:</h6>
              <span className="uppercase font-normal  text-[#919ca1]">
                <a href={liveDemoLink}>view</a>
              </span>
            </li>
          )}

          {github && (
            <li className="text-xs flex flex-row gap-[5px]  whitespace-nowrap w-full flex-1">
              <h6 className="uppercase font-bold">github:</h6>
              <span className="uppercase font-normal  text-[#919ca1]">
                <a href={github}>view</a>
              </span>
            </li>
          )} */}

          <li className="text-xs flex flex-row gap-[5px]  whitespace-nowrap w-full flex-1">
            <h6 className="uppercase font-bold flex items-center gap-1">
              <TbCalendarTime size="15" className="text-light-green" />
              <span>timeframe:</span>
            </h6>
            <span className="uppercase tracking-[0] font-semibold text-[#919ca1]">
              Oct 23 - Jan 23
            </span>
          </li>

          {status && (
            <div
              className="
            bg-gradient-to-r from-[#70ba65] to-[#5a9d51]
            h-[20px] px-[40px]  text-[10px] font-bold uppercase leading-[20px] tracking-[2px] absolute top-[23px] right-[-40px] text-[#fcfcfe] rotate-45 whitespace-nowrap italic"
            >
              <span> completed</span>
            </div>
          )}
        </ul>

        <ElementDivider spaceY="20" />

        {/* links  */}

        <div>
          <a
            href="#"
            className="inline-flex items-center gap-1 rounded-[10px]  ms-2 px-[5px]
            hover:text-light-green transition-colors duration-300 text-[#919ca1] group"
            style={{
              textShadow: "-2px -2px 1px rgba(112, 186, 101, 0.05",
            }}
          >
            <VscCode
              size="20"
              className="text-light-green group-hover:scale-110"
            />
            <span className="text-sm italic  font-bold">github</span>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-1 rounded-[10px]  ms-2 px-[5px] hover:text-light-green transition-colors duration-300 text-[#919ca1] group"
            style={{
              textShadow: "-2px -2px 1px rgba(112, 186, 101, 0.05",
            }}
          >
            <FiExternalLink
              size="20"
              c
              className="text-light-green group-hover:scale-110"
            />
            <span className="text-sm italic  font-bold">live demo</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

// project description

// project img slide

function ProjectImgSlide() {
  const [images, setImages] = useState([
    "/portfolio.png",
    "/banner1.jpg",
    "/banner2.jpg",
  ]);
  return (
    <Section id="img-slide">
      <SectionTitle title="project screenshot" number="02" />
      <Swiper
        modules={[Autoplay, EffectCreative, Scrollbar]} // Add both modules
        scrollbar={{
          hide: true,
        }}
        autoplay
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor
        loop={true} // Ensure the slider loops infinitely
        spaceBetween={0}
        slidesPerView={1}
        className="w-full relative"
      >
        {images.map((src, ind) => (
          <SwiperSlide key={ind}>
            <div className="w-full h-[200px] md:h-[300px]   bg-no-repeat bg-contain   relative mb-[20px]  border border-[#224454] bg-[#02162b]  rounded-[5px] overflow-hidden  transition-all  duration-1000 ease">
              <Image
                src={src}
                layout="fill"
                objectFit="cover"
                alt="profile picture"
                objectPosition="top"
                className="rounded-[5px] hover:scale-[1.05] transition-transform duration-500 ease"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

// lesson learned
function LessonLearned({ lessonsLearned }) {
  return (
    <Section id="lesson-learned">
      <SectionTitle title="lesson learned" number="05" />

      <div className="bg-dark-navy p-[40px] shadow-prt-shadow element_overlay rounded-[10px]">
        <ul>
          <h6 className="text-base font-semibold mb-[5px]">
            Lessons Learned -{" "}
          </h6>
          {lessonsLearned.map((lesson, index) => (
            <li key={index} className="text-sm text-[#919ca1] mb-[5px]">
              <span className="font-bold text-[#919ca1]">
                {index + 1}. {lesson}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
export default page;
