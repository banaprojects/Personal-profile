import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/Nav";
import { FaHome } from "react-icons/fa";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },

    {
      name: "About",
      link: "#about",
      icon: <FaHome />,
    },

    {
      name: "Projects",
      link: "#my-work",
      icon: <FaHome />,
    },

    {
      name: "Skills",
      link: "#my-skills",
      icon: <FaHome />,
    },

    {
      name: "Contact",
      link: "#contact",
      icon: <FaHome />,
    },
  ];

  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
