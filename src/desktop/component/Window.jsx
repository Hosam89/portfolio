import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import "animate.css";
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
