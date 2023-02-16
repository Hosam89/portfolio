import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { projectFireStore, timestamp } from "../../../firebase/config";
import "./Contact.scss";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  /** A Function to submit the Data to the db */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      contactEmail: email,
      contactName: fullName,
      contactMessage: message,
      sendAt: timestamp.fromDate(new Date()),
    };

    try {
      await projectFireStore.collection("contact").add(body);
      setFullName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error, error.message);
    }
  };
  return (
    <div className="px-5 d-flex justify-content-center align-items-center mt-5">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Form.Text className="text-muted">
            i'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Message :"
          className="my-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
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
