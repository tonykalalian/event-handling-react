import React, { useState } from "react";

function App() {
  const [click, setClick] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);
  const handleClick = () => {
    setClick("Submitted");
  };
  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="container">
      <h1>{click}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
