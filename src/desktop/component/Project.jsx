import ProjectWindow from "./ProjectWindow";
import { Card, Button } from "react-bootstrap";
const Project = ({ CardTitle, discription, link }) => {
  return (
    <div className="project">
      <ProjectWindow title={CardTitle} />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{discription}</Card.Text>

          <Button variant="primary">
            <a href={link}>Visit App</a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
