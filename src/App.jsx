import "./App.css";
import PixiApp from "./pixi";
import { Stage } from "@pixi/react";

function App() {
  return (
    <>
      <h1>Vite + React + PixiJS</h1>
      <Stage width={800} height={500}>
        <PixiApp />
      </Stage>
    </>
  );
}

export default App;
