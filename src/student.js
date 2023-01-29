import React from "react";
const Student = (props) => {
    const { roll,name,marks} = props;
  
    return (
      <div className="student">
        <h1>{roll}:</h1>
        <h3>{name}</h3>
        <h3>{marks}</h3>
        {/* <ul>
        <li><h2>{roll}   {name}   {marks}</h2></li>
        </ul> */}
      </div>
    );
  };

export default Student;