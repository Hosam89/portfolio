import { FaHandPeace } from "react-icons/fa";
import "./Home.scss";
const Home = () => {
  return (
    <div className="mt-3">
      <div className="title text-center pt-4">
        <div>
          <h1>
            Hi, i'm Hosam <FaHandPeace />
          </h1>
        </div>
        <div></div>
      </div>
      <div className="para">
        <p className="px-3 mt-5">
          Welcome to my web development portfolio! I'm thrilled to showcase my
          passion for web development and the projects I've worked on. As a web
          developer, I'm constantly exploring new technologies, design patterns,
          and best practices to deliver engaging, user-friendly, and responsive
          web solutions. I invite you to browse through my portfolio and see the
          projects I've completed, the skills I've honed, and the challenges
          I've tackled. Whether you're a potential employer, a fellow developer,
          or someone interested in my work, I hope my portfolio inspires you and
          demonstrates my dedication to delivering top-notch web development
          solutions
        </p>
      </div>
    </div>
  );
};

export default Home;
