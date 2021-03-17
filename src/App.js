import { useRef, useState, useEffect } from "react";
import "./style/main.css";
import { CustomCursor, changePositon } from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  const cursor = useRef();
  const [mouseposition, setPosition] = useState({ x: 0, y: 0 });
  const getMousePosition = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    changePositon(mouseposition, cursor);
  }, [mouseposition]);
  return (
    <div
      className="App"
      onMouseMove={(e) => {
        getMousePosition(e);
      }}
    >
      <CustomCursor cursor={cursor} />
      <Navbar cursor={cursor} />
      <Home />
    </div>
  );
}

export default App;
