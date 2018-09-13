import React from "react";
import Form from "./Form.jsx";

const Display = (props) => {
  return (
      <div className="menu">
        <div className="heading">
          <div className="logo">
            <i className="fas fa-calculator"></i>
          </div>

          <div className="title">
            <h2>TDEE CALCULATOR</h2>
            <p>Use this calculator to determin what your daily caloric intake needs to be to meet your goals.</p>
          </div>
        </div>

        <Form />
      </div>
  );
}


export default Display;
