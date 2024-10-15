import React from "react";
import { CardSpotlight } from "./card-spotligth";
import { div } from "framer-motion/client";

export default function Languages() {
  return (
    <div className="h-[10rem] md:h-[37rem] [perspective:500px] relative z-20 flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pt-10">
      <div>
        <h1 className="text-4xl font-semibold">SKILLS</h1>
      </div>
      <div className="flex justify-between  pt-10">
        <CardSpotlight className="h-[290px] w-[310px] bg-black-100 border-[1px] border-[#A020F0] mr-4">
          <div className="relative z-20">
            <span className="font-bold text-2xl">LANGUAGES</span>
          </div>
        </CardSpotlight>
        <CardSpotlight className="h-[290px] w-[310px] bg-black-100 border-[1px] border-[#A020F0] mx-8">
          <div className="relative z-20">
            <span className="font-bold text-2xl">FRAMEWORKS</span>
          </div>
        </CardSpotlight>
        <CardSpotlight className="h-[290px] w-[310px] bg-black-100 border-[1px] border-[#A020F0] ml-4">
          <div className="relative z-20">
            <span className="font-bold text-2xl">TOOLS</span>
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
}
