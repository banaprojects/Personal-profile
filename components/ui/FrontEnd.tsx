import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { title } from "process";
import { header } from "framer-motion/client";

const FrontEnd = () => {
  return (
    <div>
      <BentoGrid className="max-w-5xl mx-auto">
        {FrontEndProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default FrontEnd;

const FrontEndProjects = [
  {
    title: "SocioLite",
    description: "An online chat app with group chat support.",
    header: "Image goes Here",
  },
  {
    title: "React Shoppe",
    description: "An online shop for buying products.",
    header: "Image goes Here",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit dolor pariatur temporibus deserunt. Illo, deserunt omnis!",
    header: "Image goes Here",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit dolor pariatur temporibus deserunt. Illo, deserunt omnis!",
    header: "Image goes Here",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit dolor pariatur temporibus deserunt. Illo, deserunt omnis!",
    header: "Image goes Here",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit dolor pariatur temporibus deserunt. Illo, deserunt omnis!",
    header: "Image goes Here",
  },
  {
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit dolor pariatur temporibus deserunt. Illo, deserunt omnis!",
    header: "Image goes Here",
  },
];
