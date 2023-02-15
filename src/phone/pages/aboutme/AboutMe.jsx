import Accordion from "react-bootstrap/Accordion";
import {
  BootstraoLogo,
  CSSLogo,
  FireBaseLogo,
  GitHubLogo,
  HTMLLogo,
  JSLogo,
  NodeJsLogo,
  ReactLogo,
  SassLogo,
  TailwindLogo,
  TypeScriptLogo,
  CPlusPlusLogo,
  Matlab_Logo,
} from "../../../assets/LOGOS/index";

import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div>
      <div className="education mt-4">
        <h3 className="ms-3">Education:</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Al baath university</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eligendi laborum, provident vitae ratione amet?
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Universität Duisburg-Essen</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eligendi laborum, provident vitae ratione amet?
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Digital Career Institute</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eligendi laborum, provident vitae ratione amet?
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="skills mt-3">
        <h2 className="ms-3">Skills:</h2>
        <div className="d-flex  flex-column gap-3 align-items-center mt-4">
          <div className="row d-flex gap-2">
            <div className="img-card">
              <img src={JSLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={HTMLLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={CSSLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={SassLogo} alt="" />
            </div>
          </div>
          <div className="row d-flex gap-2">
            <div className="img-card">
              <img src={TypeScriptLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={NodeJsLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={Matlab_Logo} alt="" />
            </div>
            <div className="img-card">
              <img src={CPlusPlusLogo} alt="" />
            </div>
          </div>
          <div className="row d-flex gap-2">
            <div className="img-card">
              <img src={BootstraoLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={FireBaseLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={ReactLogo} alt="" />
            </div>
            <div className="img-card">
              <img src={TailwindLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
