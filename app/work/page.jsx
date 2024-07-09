"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Netflix UI",
    description:
      "Netflix UI clone front page made by using HTML & Tailwind CSS",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/work/Netflix.png",
    live: "",
    github: "https://github.com/prashant-sagar-shakya/NetFlix-UI-Clone",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Code-Alpha",
    description:
      "An Online Code Editor Which Supports Coding Environments of Python, C, Cpp, JAVA.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "BootStrap",
      },
      {
        name: "JavaScript",
      },
      {
        name: "CodeMirror",
      },
    ],
    image: "/assets/work/Code-Alpha.png",
    live: "",
    github: "https://github.com/prashant-sagar-shakya/Code-Editor",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Brainwave",
    description:
      "A sleek, customizable and easy-to-use AI Chatbot Interface made by using JS, Tailwind & React.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "React.js",
      },
    ],
    image: "/assets/work/brainwave.png",
    live: "https://brainwave-ai-chat.netlify.app/",
    github: "https://github.com/prashant-sagar-shakya/Brainwave",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "EcomEdge",
    description:
      "An e-commerce site aims to create a full-featured ecommerce platform for providing a seamless shopping experience.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Express.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/ecomedge.png",
    live: "",
    github: "https://github.com/prashant-sagar-shakya/EcomEdge",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Portfolio",
    description:
      "A sleek, customizable, dynamic and attractive portfolio with a delight flavour of Framer-Motion.",
    stack: [
      {
        name: "Tailwind CSS",
      },
      {
        name: "React.js",
      },
      {
        name: "Next.js",
      },
    ],
    image: "/assets/work/portfolio.png",
    live: "https://my-first-portfolio-mu.vercel.app/",
    github: "https://github.com/prashant-sagar-shakya/My-First-Portfolio",
  },
  {
    num: "06",
    category: "Full Stack",
    title: "Imaginify",
    description:
      "A SAAS based web application for image processing and manipulation.",
    stack: [
      {
        name: "Tailwind CSS",
      },
      {
        name: "React.js",
      },
      {
        name: "Next.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/Imaginify.png",
    live: "https://imaginify-chi-two.vercel.app/",
    github: "https://github.com/prashant-sagar-shakya/Imaginify",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[450px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="Project Image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
