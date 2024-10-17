import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { title } from "process";
import { header } from "framer-motion/client";

const BackEnd = () => {
  return (
    <div>
      <BentoGrid className="max-w-5xl mx-auto">
        {BackEndProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
            className={i === 4 || i === 5 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default BackEnd;

const BackEndProjects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit dolor pariatur temporibus deserunt. Illo, deserunt omnis!",
    header: "Image goes Here",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, rem ratione tempora, cupiditate nulla, nihil explicabo odit dolor pariatur temporibus deserunt. Illo, deserunt omnis!",
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
