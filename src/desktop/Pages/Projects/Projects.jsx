import Window from "../../component/Window";
import ProjectCard from "../../component/ProjectCard";
import Project from "../../component/Project";
import { Link } from "react-router-dom";
import { useState } from "react";
import { data } from "./discription.js";
import "./Projects.scss";
import "animate.css";

const Projects = () => {
  const [discord, setDiscord] = useState(false);
  const [music, setMusic] = useState(false);
  const [project, setproject] = useState(false);
  const [recipe, setRecipe] = useState(false);
  const [benny, setBenny] = useState(false);
  return (
    <div className="dtProject">
      <Window />
      <div className="controlIcons">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="d-flex">
        <div className="projects p-4 d-flex flex-column">
          <ProjectCard
            projectName={"Discord"}
            state={discord}
            setState={setDiscord}
          />
          <ProjectCard
            projectName={"Music-App"}
            state={music}
            setState={setMusic}
          />
          <ProjectCard
            projectName={"Project-Manager"}
            state={project}
            setState={setproject}
          />
          <ProjectCard
            projectName={"Recipe App"}
            state={recipe}
            setState={setRecipe}
          />
          <ProjectCard
            projectName={"Benny's Burger"}
            state={benny}
            setState={setBenny}
          />
        </div>
        <div className="d-flex gap-4 flex-wrap">
          {discord && (
            <Project
              CardTitle={"Discord"}
              discription={data.discord[0]}
              link={data.discord[1]}
            />
          )}
          {music && (
            <Project
              CardTitle={"Music"}
              discription={data.music[0]}
              link={data.music[1]}
            />
          )}
          {project && (
            <Project
              CardTitle={"Dasanna"}
              discription={data.project[0]}
              link={data.project[1]}
            />
          )}
          {recipe && (
            <Project
              CardTitle={"Recipe App"}
              discription={data.recipe[0]}
              link={data.recipe[1]}
            />
          )}
          {benny && (
            <Project
              CardTitle={"Benny's"}
              discription={data.benny[0]}
              link={data.benny[1]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
