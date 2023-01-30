import React from "react";
const Student = (props) => {
    const { roll,name,marks} = props;
  
    return (
      <div className="student">
        <p>{roll}-{name} scored {marks}</p>
      </div>
    );
  };

export default Student;