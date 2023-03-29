import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./projectWindow.scss";
const ProjectWindow = ({ title }) => {
  return (
    <div className="projectIcon" style={{ "--card-title": `"${title}"` }}>
      <Link to="/">
        <AiOutlineClose />
        <BsSquare />
        <AiOutlineMinus />
      </Link>
    </div>
  );
};

export default ProjectWindow;
