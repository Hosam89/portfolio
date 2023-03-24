import folrderIcon from "../../assets/DesktopIcons/folder.ico";

const ProjectCard = ({ projectName, state, setState }) => {
  return (
    <div>
      <img src={folrderIcon} alt="" onClick={() => setState(!state)} />
      <p className="ps-2">{projectName}</p>
    </div>
  );
};

export default ProjectCard;
