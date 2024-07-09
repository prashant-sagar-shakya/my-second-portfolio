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
    description: "A sleek, customizable and easy-to-use AI Chatbot Interface.",
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
        name: "Tailwind CSS",
      },
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
      {
        name: "Framer-Motion",
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
  return <div>work page</div>;
};

export default Work;
