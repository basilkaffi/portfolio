import { useState, useEffect, useRef } from "react";
import Round from "./components/Round";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import "./style/main.css";
function App() {
  const load = useRef();
  const content = useRef();
  const [element, setElement] = useState();
  const getElement = (el) => {
    setElement(el);
  };
  useEffect(() => {
    load.current.style.transform = "translateY(-100vh)";
    setTimeout(() => {
      content.current.classList.remove("hidden");
    }, 1200);
  }, []);
  return (
    <div className="bg-gray-900 m-h-screen overflow-y-hidden overflow-x-hidden w-full flex flex-col">
      <div
        ref={load}
        style={{ zIndex: "1000" }}
        className="bg-gray-800 absolute h-screen w-full transform duration-1000"
      ></div>
      <Round>{element}</Round>
      <Navbar />
      <Home />
      <div ref={content} className="hidden">
        <About setChild={getElement} />
        <Project />
      </div>
    </div>
  );
}

export default App;
