import { useEffect, useRef, useState } from "react";
import Round from "./components/Round";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import "./style/main.css";
function App() {
  const load = useRef();
  useEffect(() => {
    load.current.style.transform = "translateY(-100vh)";
    const Home = document.getElementById("home");
    const About = document.getElementById("about");
    const Project = document.getElementById("project");
    About.style.transform = `translateY(${window.innerHeight}px)`;
    Project.style.transform = `translateY(${window.innerHeight * 2}px)`;
    const scrolling = (e) => {
      Home.style.transitionDuration = "600ms";
      About.style.transitionDuration = "600ms";
      Project.style.transitionDuration = "600ms";
      if (e.wheelDeltaY < 0) {
        //scroll kebawah
        Home.style.transform = `translateY(-${window.innerHeight}px)`;
        About.style.transform = `translateY(-${window.innerHeight}px)`;
        if (About.getBoundingClientRect().top === 0) {
          About.style.transform = `translateY(0px)`;
          Project.style.transform = `translateY(-${window.innerHeight * 2}px)`;
        }
      } else if (e.wheelDeltaY > 0) {
        //scroll keatas
        Home.style.transform = `translateY(0)`;
        About.style.transform = `translateY(0)`;
        Project.style.transform = `translateY(0)`;
      }
    };
    window.addEventListener("mousewheel", scrolling, false);
    document.addEventListener("DOMMouseScroll", scrolling, false);
    return () => {
      window.removeEventListener("mousewheel", scrolling, false);
      document.removeEventListener("DOMMouseScroll", scrolling, false);
    };
  }, []);
  return (
    <div className="bg-gray-900 h-screen overflow-y-hidden overflow-x-hidden w-full flex flex-col">
      <div
        ref={load}
        style={{ zIndex: "1000" }}
        className="bg-gray-800 absolute h-screen w-full transform duration-1000"
      ></div>
      <Round />
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
