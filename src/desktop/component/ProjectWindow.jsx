import { useState } from "react";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";

import "./projectWindow.scss";
const ProjectWindow = ({ title, state, setState }) => {
  const [small, setSmall] = useState(false);
  const [big, setBig] = useState(false);
  const hideParent = (e) => {
    e.target.closest("div.project").style.display = "none";
  };
  return (
    <div className="projectIcon" style={{ "--card-title": `"${title}"` }}>
      <AiOutlineClose onClick={(e) => hideParent(e)} />
      <BsSquare />
      <AiOutlineMinus />
    </div>
  );
};

export default ProjectWindow;
