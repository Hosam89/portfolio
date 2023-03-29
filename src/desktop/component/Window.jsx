import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import "animate.css";
// to be do later from the Hiwan
// import React from "react";

// function MyComponent() {
//   const styles = {
//     ":root": {
//       "--main-color": "#4285F4",
//     },
//     h1: {
//       color: "var(--main-color)",
//     },
//   };

//   return (
//     <div style={styles}>
//       <h1>This is a heading</h1>
//       {/* rest of your component */}
//     </div>
//   );
const Window = () => {
  return (
    <div className="icons">
      <Link to="/">
        <AiOutlineClose />
        <BsSquare />
        <AiOutlineMinus />
      </Link>
    </div>
  );
};

export default Window;
