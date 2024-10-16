import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/FlipWords";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Projects from "./ui/Projects";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import About from "./ui/About";
import Languages from "./ui/Languages";
// import codes from "../assets/codes.jpg";

const Hero = () => {
  const personalDescription =
    "With more than a year of work experience, I create user-friendly, visually appealing user interfaces as well as the full applications that can be used as a service.";
  return (
    <div className="pb-20 w-full relative overflow-hidden">
      <div className="zoom-effect h-screen w-full bg-cover bg-[url('../assets/index.jpg')] relative top-0 left-0 flex items-center transition-transform duration-300 transform">
        <div className="pointer-events-none inset-0 flex" />

        <div className="w-full h-screen pt-[6rem] bg-gradient-to-r from-black-100 via-black-100 to-transparent flex flex-col relative z-10">
          <div className="flex flex-col py-3 h-[10rem] md:h-[37rem] [perspective:500px] relative z-20 max-w-5xl mx-auto w-full  items-start justify-start pt-10">
            <h1 className="text-6xl font-semibold md:text-6xl ">
              Hi, <br /> I am Terance, I am a<br />
              <span className="text-[#A020F0] mr-3">
                {/* <FlipWords words={["Front-End", "Back-End", "Mobile-App"]} /> */}
                Full-Stack
              </span>
              developer.
            </h1>
            <div className=" w-[50vw] mt-[10vh]">
              <TextGenerateEffect
                className="lg:text-8xl"
                words={personalDescription}
              />
            </div>
            <a
              href="https://docs.google.com/document/d/1lsO1zs63_VArDMVY0Q0UV4Si2efZFS2lClSzP6-S-dU/edit?tab=t.0"
              target="_blank"
            >
              <MagicButton title="Get my RESUME" />
            </a>
          </div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="my-work">
        <Projects />
      </div>
      <div id="my-skills">
        <Languages />
      </div>
      <footer>
        <div className="left">
          <p>Email: cyzterance06@gmail.com</p>
          <p>Phone: +250 798 974 795</p>
        </div>
        <div className="right"></div>
      </footer>
    </div>
  );
};

export default Hero;
