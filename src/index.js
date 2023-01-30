import React from 'react';
import ReactDOM from 'react-dom/client';
import Student from './student';
import { students } from './students';


function Details() {
  return (
    <>
      <h1><i>Student Details</i></h1>
      <p><b>Roll-Name   Marks</b></p>
      <div>
        {students.map((stu) => {
          return <Student {...stu} key={stu.id} />;
        })}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details/>);
