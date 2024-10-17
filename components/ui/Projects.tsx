import React from "react";
import Image from "next/image";
import { Tabs } from "./Tabs";
import ecommerce from "@/assets/E-Commerce.png";
import chatapp from "@/assets/Anon-chat.png";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import FullStack from "./FullStack";
import Mobile from "./MobileProjects";
import Others from "./OtherProjects";

const Projects = () => {
  const tabs = [
    {
      title: "Front-End",
      value: "tab1",
      content: (
        <div className="flex bg-black-100">
          <FrontEnd />
        </div>
      ),
    },

    {
      title: "Back-End",
      value: "tab2",
      content: (
        <div className="flex bg-black-100">
          <BackEnd />
        </div>
      ),
    },

    {
      title: "Full-Stack",
      value: "tab3",
      content: (
        <div className="flex bg-black-100">
          <FullStack />
        </div>
      ),
    },
    {
      title: "Mobile-App",
      value: "tab4",
      content: (
        <div className="flex bg-black-100">
          <Mobile />
        </div>
      ),
    },
    {
      title: "Other Projects",
      value: "tab5",
      content: (
        <div className="flex bg-black-100">
          <Others />
        </div>
      ),
    },
  ];
  return (
    <div className="h-[20rem] md:h-[80rem] [perspective:500px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pt-10">
      <div>
        <h1 className="text-4xl font-semibold mb-10">My Projects</h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Projects;

// const Ecommerce = () => {
//   return (
//     <div>
//       <Image
//         src={ecommerce}
//         alt="image"
//         width="1000"
//         height="1000"
//         className=" h-[40%]   inset-x-0 w-[90%] rounded-xl mx-auto"
//       />
//     </div>
//   );
// };

// const Anon = () => {
//   return (
//     <div>
//       <Image
//         src={chatapp}
//         alt="image"
//         width="1000"
//         height="1000"
//         className=" h-[40%]   inset-x-0 w-[90%] rounded-xl mx-auto mt-5"
//       />
//     </div>
//   );
// };
