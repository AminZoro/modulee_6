import { useState } from "react";
import "./App.css";

// import Components
import Greeting from "./components/greeting";
import BigCats from "./components/bigCats";
import ChangeEmoji from "./components/changeEmoji";
import Calculator from "./components/calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="componentBox">Exercises</div>

      <Greeting name="Ali"></Greeting>

      <BigCats />

      <ChangeEmoji />

      <BigCats question="4-5" />

      <Calculator />
    </>
  );
}

export default App;
