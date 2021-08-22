import React from "react";
import { createPortal } from "react-dom";

const Button = ({text,color,style}) => {
  return (
    <div className="main-button" style={{backgroundColor:color,color:`${color=='white'? 'black':null }` ,display:style,opacity:1}} >
        {text}
    </div>
  );
};

export default Button;
