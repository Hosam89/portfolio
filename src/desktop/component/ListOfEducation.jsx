import { useState } from "react";
import "./ListItem.scss";
const ListOfEducation = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowthird] = useState(false);
  const [showForth, setShowForth] = useState(false);
  return (
    <div className="list d-flex gap-5 mt-5">
      <div className=" btnContainer ">
        <button
          className="listBtn btn btn-primary"
          onClick={() => {
            setShowFirst(true);
            setShowSecond(false);
            setShowthird(false);
            setShowForth(false);
          }}
        ></button>
        <button
          className="listBtn btn btn-primary"
          onClick={() => {
            setShowFirst(false);
            setShowSecond(true);
            setShowthird(false);
            setShowForth(false);
          }}
        ></button>
        <button
          className="listBtn btn btn-primary"
          onClick={() => {
            setShowFirst(false);
            setShowSecond(false);
            setShowthird(true);
            setShowForth(false);
          }}
        ></button>
        <button
          className="listBtn btn btn-primary"
          onClick={() => {
            setShowFirst(false);
            setShowSecond(false);
            setShowthird(false);
            setShowForth(true);
          }}
        ></button>
      </div>
      <div className="listItems">
        {showFirst && !showSecond && !showThird && !showForth && (
          <div className="listItem">
            <p className="title">Web developer</p>
            <p className="place">
              <a
                href="https://digitalcareerinstitute.org"
                target={"_blank"}
                rel="noreferrer"
              >
                Digital Career Institute gGmbH
              </a>
            </p>
            <span className="date">07/22 - 07/23</span>
          </div>
        )}
        {!showFirst && showSecond && !showThird && !showForth && (
          <div className="listItem">
            <p className="title">Mechanical Engineering</p>
            <p className="place">
              <a
                href="https://www.uni-due.org"
                target={"_blank"}
                rel="noreferrer"
              >
                Essen Duisburg Univercity
              </a>
            </p>
            <span className="date">09/18 - 11/22</span>
          </div>
        )}
        {!showFirst && !showSecond && showThird && !showForth && (
          <div className="listItem">
            <p className="title">german as a foreign language</p>
            <p className="place">Germany Münster</p>
            <span className="date">02/16 - 09/18</span>
          </div>
        )}
        {!showFirst && !showSecond && !showThird && showForth && (
          <div className="listItem">
            <p className="title">Mechatronic Engineering(Without degree)</p>
            <p className="place">Homs, Syria</p>
            <span className="date">09/08 - 07/14</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListOfEducation;
