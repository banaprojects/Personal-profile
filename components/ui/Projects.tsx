import React from "react";
import Image from "next/image";
import { Tabs } from "./Tabs";
import ecommerce from "@/assets/E-Commerce.png";
import chatapp from "@/assets/Anon-chat.png";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";

const Projects = () => {
  const tabs = [
    {
      title: "SocioLite",
      value: "tab1",
      content: (
        <div className="flex">
          <div className="w-[58vw] overflow-hidden relative h-[57vh] rounded-2xl text-xl md:text-4xl font-bold text-white bg-black-100">
            <Anon />
          </div>
          <div className="pl-7 w-[40vw]  bg-black-100">
            <h1 className="text-3xl font-semibold text-[#A020F0]">SocioLite</h1>
            {/* <TextGenerateEffect
              words="This is a realtime Chat app mainly for group events.
              It has various features like media sharing support, read receipts, Direct Messages and Group chats.
              It uses modernized UI and is fully responsive to various devices.
              This website was built using ChatEngine API and Next.js"
            /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit
            dolor pariatur temporibus deserunt. Illo, deserunt omnis!
            <div className="flex justify-between mt-10">
              <a href="">
                <MagicButton title="Live Demo" />
              </a>
              <a
                href="https://github.com/banaprojects/SocioLite"
                target="_blank"
              >
                <MagicButton title="Source Code" />
              </a>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Calculator",
      value: "tab2",
      content: (
        <div className="flex">
          <div className="w-[60vw] overflow-hidden relative h-[57vh] rounded-2xl text-xl md:text-4xl font-bold text-white bg-black-100">
            {/* <ProjectX /> */}
          </div>
          <div className="pl-7 w-[40vw]  bg-black-100">
            <h1 className="text-3xl font-semibold text-[#A020F0]">XXX2</h1>
            {/* <TextGenerateEffect
              words="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            magni aliquam veniam dolores suscipit modi."
            /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit
            dolor pariatur temporibus deserunt. Illo, deserunt omnis!
            <div className="flex justify-between mt-10">
              <a href="">
                <MagicButton title="Live Demo" />
              </a>
              <a
                href="https://github.com/banaprojects/React-calculator"
                target="_blank"
              >
                <MagicButton title="Source Code" />
              </a>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "E-commerce",
      value: "tab3",
      content: (
        <div className="flex">
          <div className="w-[60vw] overflow-hidden relative h-[57vh] py-10 rounded-2xl text-xl md:text-4xl font-bold text-white bg-black-100">
            <Ecommerce />
          </div>
          <div className="pl-7 w-[40vw]  bg-black-100">
            <h1 className="text-3xl font-semibold text-[#A020F0]">Shoppe</h1>
            {/* <TextGenerateEffect
              words="Shoppe is a web app that simulate real life e-commerce websites including carts,
              product categories, user authentication. It was developed with the help of fakestore API with React Js and TailwindCSS."
            /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit
            dolor pariatur temporibus deserunt. Illo, deserunt omnis!
            <div className="flex justify-between mt-10">
              <a href="">
                <MagicButton title="Live Demo" />
              </a>
              <a href="https://github.com/banaprojects/anon-chat-app">
                <MagicButton title="Source Code" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Project 4",
      value: "tab4",
      content: (
        <div className="flex">
          <div className="w-[60vw] overflow-hidden relative h-[57vh] py-10 rounded-2xl text-xl md:text-4xl font-bold text-white bg-black-100"></div>
          <div className="pl-7 w-[40vw]  bg-black-100">
            <h1 className="text-3xl font-semibold text-[#A020F0]">XXX4</h1>
            {/* <TextGenerateEffect words="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit
            dolor pariatur temporibus deserunt. Illo, deserunt omnis!
            <div className="flex justify-between mt-10">
              <a href="">
                <MagicButton title="Live Demo" />
              </a>
              <a href="https://github.com/banaprojects/anon-chat-app">
                <MagicButton title="Source Code" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Project 5",
      value: "tab5",
      content: (
        <div className="flex">
          <div className="w-[60vw] overflow-hidden relative h-[57vh] py-10 rounded-2xl text-xl md:text-4xl font-bold text-white bg-black-100"></div>
          <div className="pl-7 w-[40vw]  bg-black-100">
            <h1 className="text-3xl font-semibold text-[#A020F0]">XXX5</h1>
            {/* <TextGenerateEffect words="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit
            dolor pariatur temporibus deserunt. Illo, deserunt omnis!
            <div className="flex justify-between mt-10">
              <a href="">
                <MagicButton title="Live Demo" />
              </a>
              <a
                href="https://github.com/banaprojects/anon-chat-app"
                target="_blank"
              >
                <MagicButton title="Source Code" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:500px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pt-10">
      <div>
        <h1 className="text-4xl font-semibold">My Projects</h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Projects;

const Ecommerce = () => {
  return (
    <div>
      <Image
        src={ecommerce}
        alt="image"
        width="1000"
        height="1000"
        className=" h-[40%]   inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </div>
  );
};

const Anon = () => {
  return (
    <div>
      <Image
        src={chatapp}
        alt="image"
        width="1000"
        height="1000"
        className=" h-[40%]   inset-x-0 w-[90%] rounded-xl mx-auto mt-5"
      />
    </div>
  );
};
