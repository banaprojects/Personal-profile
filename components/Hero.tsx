import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/FlipWords";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Projects from "./ui/Projects";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import About from "./ui/About";
import Languages from "./ui/Languages";

const Hero = () => {
  const personalDescription =
    "With more than a year of work experience, I create user-friendly, visually appealing user interfaces as well as the full applications that can be used as a service. I am always looking for new challenges and opportunities to grow as a developer.";
  return (
    <div className="pb-20">
      <div>
        <Spotlight className="-top-20 -left-30 h-screen" fill="white" />
        <Spotlight className="top-20 -left-30 h-screen" fill="purple" />
        <Spotlight className="top-50 left-30 h-screen" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="flex flex-col justify-center relative z-10">
          <div className="max-w-[89vw] flex flex-col items-center py-3 justify-center">
            <h1 className="text-6xl font-semibold md:text-6xl ">
              Hi, I am Terance, I am a<br />
              <span className="text-[#A020F0]">
                <FlipWords
                  words={["Front-End", "Back-End", "Mobile-App"]}
                  className="text-center"
                />
              </span>
              developer.
            </h1>
            <div className=" w-[70vw] mt-[10vh] px-10">
              <TextGenerateEffect
                className="text-center text-[10px] lg:text-8xl"
                words={personalDescription}
              />
            </div>
            <a href="#my-work">
              <MagicButton title="My work" />
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
      <div id="#skills">{/* <Languages /> */}</div>
    </div>
  );
};

export default Hero;
