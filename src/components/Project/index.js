import { useEffect, useRef, useState } from "react";
import Picture from "./Picture";
import Kanban from "./Kanban";
import ECMS from "./ECMS";
import ERP from "./ERP";
import TechHaven from "./TechHaven";
function Project() {
  const title = useRef();
  const text = useRef();
  const container = useRef();
  const sectionTitle = useRef();
  const sectionNumber = useRef();
  const buttonContainer = useRef();
  const sectionTitleM = useRef();
  const sectionNumberM = useRef();
  const buttonContainerM = useRef();
  const pictureContainer = useRef();
  const pictureContainerM = useRef();
  const buttons = () => {
    return (
      <>
        <div
          className="w-10 md:w-14 bg-gray-300 text-gray-700 rounded-full transform duration-300 hover:scale-110 cursor-pointer"
          onClick={() => changeProject("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div
          className="w-10 md:w-14 bg-gray-300 text-gray-700 rounded-full transform duration-300 hover:scale-110 cursor-pointer"
          onClick={() => changeProject("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </>
    );
  };
  const projects = [
    {
      title: "My-Kanban",
      description:
        "My-Kanban is realtime digital management tool designed to help visualize work progress. Developed using Reactjs, Expressjs, socket.io, sequelize, postgres, jsonwebtoken, and brcyptjs.",
      image: <Kanban />,
    },
    {
      title: "Tech-Haven",
      description:
        "Tech-Haven is an e-commerce website. Developed with TDD development process using Vuejs, Expressjs, jest, sequelize, postgres, jsonwebtoken, and brcyptjs.",
      image: <TechHaven />,
    },
    {
      title: "E-Commerce CMS",
      description:
        "E-Commerce CMS is a content management system for Tech-Haven. Developed with TDD development process using Vuejs, Expressjs, jest, sequelize, postgres, jsonwebtoken, and brcyptjs.",
      image: <ECMS />,
    },
    {
      title: "ERP",
      description: "ERP is one-page profiling website developed using reactjs.",
      image: <ERP />,
    },
  ];
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState(projects[index]);
  const changeProject = (direction) => {
    if (direction === "right") {
      const idx = index + 1;
      setIndex(idx);
      if (index === 3) {
        setIndex(0);
      }
      container.current.style.opacity = "0";
      setTimeout(() => {
        container.current.style.opacity = "1";
      }, 200);
    } else if (direction === "left") {
      const idx = index - 1;
      setIndex(idx);
      if (index === 0) {
        setIndex(3);
      }
      container.current.style.opacity = "0";
      setTimeout(() => {
        container.current.style.opacity = "1";
      }, 200);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setProject(projects[index]);
    }, 150);
  }, [index]);
  useEffect(() => {
    const scrollingAnimation = () => {
      const Project = document.getElementById("project");
      //appear
      if (
        Project.getBoundingClientRect().top < window.innerHeight / 2 ||
        Project.getBoundingClientRect().bottom > 150
      ) {
        title.current.classList.remove("-translate-x-24", "opacity-0");
        text.current.classList.remove("-translate-x-24", "opacity-0");
        sectionTitle.current.classList.remove("translate-y-full", "opacity-0");
        sectionNumber.current.classList.remove("opacity-0");
        buttonContainer.current.classList.remove("opacity-0");
        sectionTitleM.current.classList.remove("translate-y-full", "opacity-0");
        sectionNumberM.current.classList.remove("opacity-0");
        buttonContainerM.current.classList.remove("opacity-0");
        pictureContainer.current.classList.add("delay-500");
        pictureContainerM.current.classList.add("delay-500");
        pictureContainer.current.classList.remove("opacity-0");
        pictureContainerM.current.classList.remove("opacity-0");
        text.current.classList.add("md:translate-x-10");
      }
      //reset
      if (
        Project.getBoundingClientRect().top > window.innerHeight - 100 ||
        Project.getBoundingClientRect().bottom < 50
      ) {
        text.current.classList.remove("md:translate-x-10");
        pictureContainer.current.classList.remove("delay-500");
        pictureContainerM.current.classList.remove("delay-500");
        text.current.classList.add("-translate-x-24", "opacity-0");
        title.current.classList.add("-translate-x-24", "opacity-0");
        sectionTitle.current.classList.add("translate-y-full", "opacity-0");
        sectionNumber.current.classList.add("opacity-0");
        buttonContainer.current.classList.add("opacity-0");
        sectionTitleM.current.classList.add("translate-y-full", "opacity-0");
        sectionNumberM.current.classList.add("opacity-0");
        buttonContainerM.current.classList.add("opacity-0");
        pictureContainer.current.classList.add("opacity-0");
        pictureContainerM.current.classList.add("opacity-0");
      }
    };
    window.addEventListener("transitionend", scrollingAnimation);
    return () => {
      window.removeEventListener("transitionend", scrollingAnimation);
    };
  }, []);
  return (
    <div
      id="project"
      style={{ minHeight: "625px", textShadow: "0 0 5px #11182777" }}
      className="text-gray-200 h-screen w-full z-0 flex flex-col md:flex-row md:items-center"
    >
      <div
        ref={pictureContainerM}
        className="md:hidden absolute w-full h-full transform duration-1000 opacity-0"
      >
        <Picture image={project.image} />
      </div>
      <div
        ref={container}
        className="flex flex-col w-full mt-auto h-1/4 md:h-1/3 transform duration-100 md:-translate-y-12 md:mt-0 md:ml-6"
      >
        <div
          ref={title}
          className="font-roboto-slab text-4xl pl-6 sm:text-7xl md:text-8xl mb-8 md:mb-0 transform duration-700 md:-translate-y-3/4 -translate-x-24 opacity-0"
        >
          {project.title}
        </div>
        <div
          ref={text}
          className="text-base font-roboto px-6 md:w-1/2 md:text-xl lg:text-2xl transform duration-1000 -translate-x-24 opacity-0"
        >
          <div>{project.description}</div>
          {/* <div className="px-4 py-1 font-roboto-slab inline-block text-gray-100 bg-red-600 hover:bg-red-500 duration-200 mt-6 md:mt-10 cursor-pointer">
            Details
          </div> */}
        </div>
      </div>
      <div
        ref={pictureContainer}
        style={{
          zIndex: "-10",
          transitionDuration: "1000ms",
        }}
        className="absolute hidden md:block opacity-0"
      >
        <Picture image={project.image} />
      </div>
      <div
        ref={buttonContainerM}
        className="w-full flex justify-center md:hidden transform duration-1000 my-10"
      >
        <div className="flex justify-between" style={{ width: "88vw" }}>
          {buttons()}
        </div>
      </div>
      <div
        ref={buttonContainer}
        className="hidden absolute md:w-1/3 md:flex justify-between z-10 transform duration-1000"
        style={{ marginLeft: "5vw", marginTop: "80vh" }}
      >
        {buttons()}
      </div>
      <div className="hidden absolute md:block w-full transform translate-y-56 -translate-x-20">
        <div className="flex font-roboto-slab justify-end items-baseline">
          <div
            ref={sectionTitle}
            className="md:text-5xl lg:text-6xl transform duration-1000 translate-y-full opacity-0"
          >
            PROJECT
          </div>
          <div
            ref={sectionNumber}
            className="md:text-8xl lg:text-9xl ml-3 transform -translate-y-4 duration-1000 opacity-0"
          >
            02
          </div>
        </div>
      </div>
      <div className="flex font-roboto-slab justify-end items-baseline p-4 transform -translate-y-6 md:hidden">
        <div
          ref={sectionTitleM}
          className="text-3xl transform duration-1000 translate-y-full opacity-0"
        >
          PROJECT
        </div>
        <div
          ref={sectionNumberM}
          className="text-5xl ml-2 transform -translate-y-2 duration-1000 opacity-0"
        >
          02
        </div>
      </div>
    </div>
  );
}
export default Project;
