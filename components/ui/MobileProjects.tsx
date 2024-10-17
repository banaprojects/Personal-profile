import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";

const Mobile = () => {
  return (
    <div>
      <BentoGrid className="max-w-5xl mx-auto">
        {MobileProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Mobile;

const MobileProjects = [
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
