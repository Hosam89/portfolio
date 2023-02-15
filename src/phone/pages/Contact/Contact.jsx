import { Button, Form, FloatingLabel } from "react-bootstrap";
// import { projectFireStore, timestamp } from "../../../firebase/config";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="px-5 d-flex justify-content-center align-items-center mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            i'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comments"
          className="my-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "200px" }}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
