import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <span>
        <select id="sorter" onChange={(e) => props.handleChange(e)}>
          <option value="none">choose method</option>
          <option value="greased">Greased</option>
          <option value="weight">Weight</option>
          <option value="name">Name</option>
        </select>
      </span>
    </div>
  );
};

export default Nav;
