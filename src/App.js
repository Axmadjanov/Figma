import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BodyPage1 from "./Components/Body/Body";
import BodyPage2 from "./Components/Body/Body2";
import BodyPage3 from "./Components/Body/Body3";
import BodyPage4 from "./Components/Body/Body4";
import BodyPage5 from "./Components/Body/Body5";

function App() {
  return (
    <div>
      <Navbar />
      <BodyPage1 />
      <BodyPage2 />
      <BodyPage3 />
      <BodyPage4 />
      <BodyPage5 />
    </div>
  );
}
export default App;
