import { useState } from "react";
import "./ListItem.scss";

const ListOfWork = () => {
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
            <p className="title">Work for you</p>
            <p className="place">At your Company</p>
            <span className="date">07/23 - till the End</span>
          </div>
        )}
        {!showFirst && showSecond && !showThird && !showForth && (
          <div className="listItem">
            <p className="title">Class Tutor</p>
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
        {!showFirst && !showSecond && showThird && !showForth && (
          <div className="listItem">
            <p className="title">Machinery and Equipment operator</p>
            <p className="place">
              <a
                href="https://www.hengst.com/de/"
                target={"_blank"}
                rel="noreferrer"
              >
                Hengst GmbH
              </a>
            </p>
            <span className="date">07/19 - 09/19</span>
          </div>
        )}
        {!showFirst && !showSecond && !showThird && showForth && (
          <div className="listItem">
            <p className="title">
              Specialist in software and hardware for Mobile and laptops
            </p>
            <p className="place">Homs, Syria</p>
            <span className="date">1/15 - 02/16</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListOfWork;
