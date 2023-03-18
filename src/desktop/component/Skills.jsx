import { useState } from "react";
import OneCard from "./Card";
import * as Logo from "../../assets/LOGOS/index";

const Skills = () => {
  const [frontEnd, setFrontEnd] = useState(true);
  const [backEnd, setBackEnd] = useState(false);
  const [lang, setLang] = useState(false);
  return (
    <div>
      <div className="controlBtn mt-3">
        <button
          className="btn btn-danger mx-4 fs-5"
          onClick={() => {
            setFrontEnd(true);
            setBackEnd(false);
            setLang(false);
          }}
        >
          FrontEnd
        </button>{" "}
        <button
          className="btn btn-danger mx-4 fs-5"
          onClick={() => {
            setFrontEnd(false);
            setBackEnd(true);
            setLang(false);
          }}
        >
          BackEnd
        </button>{" "}
        <button
          className="btn btn-danger mx-4 fs-5"
          onClick={() => {
            setFrontEnd(false);
            setBackEnd(false);
            setLang(true);
          }}
        >
          Programming Languages
        </button>
      </div>
      <div>
        {frontEnd && (
          <div className="d-flex mt-5">
            <OneCard sorce={Logo.HTMLLogo} />
            <OneCard sorce={Logo.CSSLogo} />
            <OneCard sorce={Logo.TailwindLogo} />
            <OneCard sorce={Logo.BootstraoLogo} />
            <OneCard sorce={Logo.ReactLogo} />
            <OneCard sorce={Logo.SassLogo} />
          </div>
        )}
        {backEnd && (
          <div className="d-flex mt-5">
            <OneCard sorce={Logo.NodeJsLogo} />
            <OneCard sorce={Logo.Express} />
            <OneCard sorce={Logo.sqlLogo} />
            <OneCard sorce={Logo.MongoLogo} />
            <OneCard sorce={Logo.FireBaseLogo} />
          </div>
        )}
        {lang && (
          <div className="d-flex mt-5">
            <OneCard sorce={Logo.TypeScriptLogo} />
            <OneCard sorce={Logo.JSLogo} />
            <OneCard sorce={Logo.CPlusPlusLogo} />
            <OneCard sorce={Logo.Matlab_Logo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
