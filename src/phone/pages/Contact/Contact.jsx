import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs, { send } from "@emailjs/browser";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { projectFireStore, timestamp } from "../../../firebase/config";
import "./Contact.scss";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState("");
  const form = useRef();
  /** A Function to submit the Data to the eamil */
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2iut1di",
        "Contact_Form",
        form.current,
        "QiAyXmev4qiFRGgRj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setConfirmation(" your Message was sent, Thank you!");
        },
        (error) => {
          console.log(error.text);
          setConfirmation(
            " something went wrong with the Messaging Service, please send me an email instead"
          );
        }
      );
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="px-5 d-flex justify-content-center align-items-center mt-5">
      <Form onSubmit={(e) => sendEmail(e)} ref={form}>
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
            name="name"
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
            name="message"
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
        {confirmation && (
          <h4 className="" placeholder="message confirmation">
            message confirmation status: {confirmation}
          </h4>
        )}
      </Form>
    </div>
  );
};

export default Contact;
