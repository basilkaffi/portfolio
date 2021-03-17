import DynamicText from "./DynamicText";
import Canvas from "./Canvas";
function Home() {
  return (
    <div className="bg-gray-900 w-full h-screen flex">
      <Canvas />
      <DynamicText />
    </div>
  );
}

export default Home;
