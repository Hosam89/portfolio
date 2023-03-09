import { useState } from "react";
import "./ListItem.scss";
const ListOfEducation = ({ title, place, date }) => {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowthird] = useState(false);
  return (
    <div className="list d-flex justify-content-center aling-items-center gap-5 py-5">
      <div className=" btnContainer d-flex justify-content-between align-items-centre flex-column">
        <button
          className="listBtn btn btn-danger"
          onClick={() => {
            setShowFirst(true);
            setShowSecond(false);
            setShowthird(false);
          }}
        ></button>
        <button
          className="listBtn btn btn-danger"
          onClick={() => {
            setShowFirst(false);
            setShowSecond(true);
            setShowthird(false);
          }}
        ></button>
        <button
          className="listBtn btn btn-danger"
          onClick={() => {
            setShowFirst(false);
            setShowSecond(false);
            setShowthird(true);
          }}
        ></button>
      </div>
      {showFirst && !showSecond && !showThird && (
        <div className="listItem">
          <p className="title">Web Development Course</p>
          <p className="place">Digital Career Institute gGmbH</p>
          <span className="date">07/2022 - 07/2003</span>
        </div>
      )}
      {!showFirst && showSecond && !showThird && (
        <div className="listItem">
          <p className="title">Mechanical Engineering</p>
          <p className="place">Essen Duisburg Univercity</p>
          <span className="date">09/2019 - 06/2022</span>
        </div>
      )}
      {!showFirst && !showSecond && showThird && (
        <div className="listItem">
          <p className="title">Mechatronic Engineering (Without degree)</p>
          <p className="place">Homs, Syria</p>
          <span className="date">09/2008 - 09/2014</span>
        </div>
      )}
    </div>
  );
};

export default ListOfEducation;
