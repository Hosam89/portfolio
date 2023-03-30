import folrderIcon from "../../assets/DesktopIcons/folder.ico";

const ProjectCard = ({ projectName, state, setState }) => {
  const dc = (e, st, setSt) => {
    if (e.detail === 2) {
      setSt(!st);
    }
  };
  return (
    <div>
      <img src={folrderIcon} alt="" onClick={(e) => dc(e, state, setState)} />
      <p className="ps-2">{projectName}</p>
    </div>
  );
};

export default ProjectCard;
