//Task 2, Education Section: Show your educational background
//including the name of the institution, degree obtained, and the years attended.
import React from "react";

function Education(props) {
  return (
    <div className="Education">
      <h3>{props.institutionName}</h3>
      <p>Degree Received: {props.degree}</p>
      <p>Years Attended: {props.years}</p>
    </div>
  );
}

export default Education;
