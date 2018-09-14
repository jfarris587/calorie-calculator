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
            <p>Find your daily caloric needs.</p>
          </div>
        </div>

        <Form
          setCalories={props.setCalories}
        />
      </div>
  );
}


export default Display;
