import "./Projects.scss";

const Projects = () => {
  return (
    <div className="mt-5">
      <div className="introduction px-4">
        <p>
          During my bootcamp at DCI and through self-learning on various media
          platforms like YouTube, I have built numerous interesting projects.
          The examples provided below are just a small glimpse of what I have
          accomplished.
        </p>
      </div>
      <div className="projects p-3">
        <div className="project mt-5">
          <a href="https://music-react-lilac.vercel.app" target={"_blank"}>
            <button className="btn btn-dark">
              Lyrics Music App with React
            </button>
          </a>
        </div>
        <div className="project mt-5">
          <a
            href="https://project-manger-ten.vercel.app/login"
            target={"_blank"}
          >
            <button className="btn btn-dark">
              Project management App with Rreact and Firebase
            </button>
          </a>
        </div>
        <div className="project mt-5">
          <a href="https://vercel.com/hosam89/recipe" target={"_blank"}>
            <button className="btn btn-dark">Recipe App with Firebase</button>
          </a>
        </div>
        <div className="project mt-5">
          <a href="https://benny-s-burger.vercel.app" target={"_blank"}>
            <button className="btn btn-dark">
              A pure HTML and CSS Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
