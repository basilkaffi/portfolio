import { useState, useEffect, useRef } from "react";
import Round from "./components/Round";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Separator from "./components/Separator";
import "./style/main.css";
function App() {
  const load = useRef();
  const [section, setSection] = useState("home");
  useEffect(() => {
    load.current.style.transform = "translateY(-100vh)";
    const App = document.getElementById("app");
    const Home = document.getElementById("home");
    const About = document.getElementById("about");
    const Project = document.getElementById("project");
    const Contact = document.getElementById("contact");
    let start = 0;
    let end = 0;
    let direction = 0;
    const touchstart = (e) => {
      start = e.touches[0].clientY;
    };
    const touchmove = (e) => {
      end = e.touches[0].clientY;
      direction = start - end;
    };
    const scrolling = (e) => {
      if (e.deltaY > 0 || direction > 0) {
        if (About.getBoundingClientRect().top > 0) {
          App.style.transform = `translateY(-${About.offsetTop}px)`;
        } else if (Project.getBoundingClientRect().top > 0) {
          App.style.transform = `translateY(-${Project.offsetTop}px)`;
        } else if (Contact.getBoundingClientRect().top > 0) {
          App.style.transform = `translateY(-${Contact.offsetTop}px)`;
        }
      } else if (e.deltaY < 0 || direction < 0) {
        if (Project.getBoundingClientRect().top < 0) {
          App.style.transform = `translateY(-${Project.offsetTop}px)`;
        } else if (About.getBoundingClientRect().top < 0) {
          App.style.transform = `translateY(-${About.offsetTop}px)`;
        } else if (Home.getBoundingClientRect().top < 0) {
          App.style.transform = `translateY(-${Home.offsetTop}px)`;
        }
      }
    };
    const distributeSection = () => {
      if (Home.getBoundingClientRect().top <= window.innerHeight / 2) {
        setSection("home");
      }
      if (About.getBoundingClientRect().top <= window.innerHeight / 2) {
        setSection("about");
      }
    };
    window.addEventListener("wheel", scrolling);
    window.addEventListener("transitionstart", distributeSection);
    App.addEventListener("touchstart", touchstart, {
      passive: false,
      capture: true,
    });
    App.addEventListener("touchmove", touchmove, {
      passive: false,
      capture: true,
    });
    App.addEventListener("touchend", scrolling, {
      passive: false,
      capture: true,
    });
    return () => {
      window.removeEventListener("wheel", scrolling);
      window.removeEventListener("transitionend", distributeSection);
      App.removeEventListener("touchstart", touchstart, {
        passive: false,
        capture: true,
      });
      App.removeEventListener("touchmove", touchmove, {
        passive: false,
        capture: true,
      });
      App.removeEventListener("touchend", scrolling, {
        passive: false,
        capture: true,
      });
    };
  }, []);
  return (
    <div className="bg-gray-900 h-screen overflow-y-hidden overflow-x-hidden w-full flex flex-col">
      <div
        ref={load}
        style={{ zIndex: "1000" }}
        className="bg-gray-800 absolute h-screen w-full transform duration-1000"
      ></div>
      <Round section={section} />
      <Navbar />
      <div id="app" className="transform duration-700">
        <Home />
        <Separator />
        <About />
        <Separator />
        <Project />
        <Separator />
        <Contact />
      </div>
    </div>
  );
}

export default App;
