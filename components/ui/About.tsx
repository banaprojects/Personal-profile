import React from "react";

const About = () => {
  return (
    <div className="h-[10rem] md:h-[37rem] [perspective:500px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pt-20">
      <div>
        <h1 className="text-4xl font-semibold">About Me</h1>
      </div>
      <div className="flex">
        <div className="flex-1 pt-10 pr-20">
          <h2 className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nihil
            nemo consequatur deleniti eius non iusto molestiae? Eos accusantium
            dignissimos veniam fugiat perferendis similique! Fugit asperiores
            est, possimus distinctio ratione consequatur repellendus inventore
            iusto neque architecto odio magni veniam aliquam officia
            necessitatibus explicabo assumenda reprehenderit laudantium
            voluptatem vero quae tempora beatae aliquid. Accusamus earum eaque
            odit asperiores veniam, distinctio repellat!
          </h2>
        </div>
        <div className="border bg-black-300 w-[30vw] h-[60vh] pl-10"></div>
      </div>
    </div>
  );
};

export default About;
