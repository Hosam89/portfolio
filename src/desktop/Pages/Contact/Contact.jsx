import Window from "../../component/Window";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
//icons
import { HiArrowUturnLeft } from "react-icons/hi2";
import { RxClipboardCopy } from "react-icons/rx";
import { BiBrushAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import "./Contact.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [font, setFont] = useState({
    value: "Times New Roman', Times, serif",
    label: "Times New Roman",
  });
  const [fontSize, setFontSize] = useState({ label: 11, value: 11 });
  const form = useRef();
  const [confirmation, setConfirmation] = useState("");

  const fontArray = [
    { value: "'Courier New', Courier, monospace", label: "Courier New" },
    { value: "Times New Roman', Times, serif", label: "Times New Roman" },
    { value: "Arial, Helvetica, sans-serif", label: "Arial" },
    { value: "Georgia, 'Times New Roman', Times, serif", label: "Georgia" },
  ];

  const fontSizes = [
    { value: 11, label: 11 },
    { value: 14, label: 14 },
    { value: 16, label: 16 },
    { value: 18, label: 18 },
  ];
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
          setConfirmation(" your Message was sent, Thank you! DADDY");
        },
        (error) => {
          console.log(error.text);
          setConfirmation(
            " something went wrong with the Messaging Service, please send me an email instead"
          );
        }
      );
    setEmail("");
    setSubject("");
    setText("");
  };
  const copyToClipBoared = () => {
    const copyedtext = ` from :${email} \n to :hosamothman1@gmail.com \n Subject : ${subject} \n content : ${text}`;
    const newElemnt = document.createElement("textarea");
    newElemnt.value = copyedtext;
    document.body.appendChild(newElemnt);
    newElemnt.select();
    document.execCommand("copy");
    document.body.removeChild(newElemnt);
  };
  return (
    <div className="contact">
      <Window />
      <div className="controlIcons d-flex gap-3 justify-content-between mt-3">
        <div className="icon">
          <Link to="/">
            {" "}
            <HiArrowUturnLeft />
          </Link>
        </div>

        <div className="icon d-flex gap-5">
          <div className="left">
            <RxClipboardCopy onClick={copyToClipBoared} />
          </div>
          <div className="right">
            <BiBrushAlt
              onClick={() => {
                setEmail("");
                setSubject("");
                setText("");
              }}
            />
          </div>
        </div>

        <div className="fontSelect">
          <Select
            options={fontArray}
            onChange={(option) => {
              setFont(option);
            }}
            defaultValue={{
              value: "Times New Roman', Times, serif",
              label: "Times New Roman",
            }}
          />
        </div>

        <div className="fontSize">
          <Select
            options={fontSizes}
            onChange={(option) => {
              setFontSize(option);
            }}
            defaultValue={{ label: 11, value: 11 }}
          />
        </div>
      </div>
      <div className="formContainer">
        <form id="myForm" ref={form} onSubmit={(e) => sendEmail(e)}>
          <div className="d-flex">
            <div className="d-flex justify-content-center align-items-center send">
              <button type="submit">
                <FiSend />
              </button>
            </div>
            <div className="formInput">
              <div>
                <label>
                  <span>from</span>
                  <input
                    name="name"
                    type="email"
                    placeholder="Your Email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>&nbsp;&nbsp;CC&nbsp;&nbsp;</span>
                  <input
                    type="email"
                    placeholder="hosamothman1@gmail.com"
                    disabled
                  />
                </label>
              </div>
              <div className="d-flex">
                <label className="subject">
                  <span>Subject</span>
                  <input
                    name="subject"
                    type="text"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    value={subject}
                  />
                </label>
              </div>
              <div className="textarea">
                <label>
                  <textarea
                    name="message"
                    cols="150"
                    rows="10"
                    placeholder="What do you want to tell me"
                    style={{
                      fontFamily: `${font.value}`,
                      fontSize: `${fontSize.value}px`,
                    }}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    value={text}
                  />
                </label>
              </div>
              {confirmation && (
                <h4 className="" placeholder="message confirmation">
                  message confirmation status: {confirmation}
                </h4>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
