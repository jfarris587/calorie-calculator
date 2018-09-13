import React from "react";

const Option = (props) => {
  var classes = "option";

  if(props.selected){
    classes += " option-selected";
  }

  return (
    <div className={classes} onClick={()=>props.clicked(props.index, props.type)}>{props.text}</div>
  );
}


export default Option;
