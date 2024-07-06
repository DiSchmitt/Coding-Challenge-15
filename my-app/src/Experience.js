//Task 2, Experience Section: Display your past work experiences, including job title, company name, and the duration of each role.
//Consider creating a reusable component to display each experience entry, enhancing the maintainability of your code.
import React from "react";

function Experience(props) {
  return (
    <div className="Experience">
      <h3>{props.title}</h3>
      <p>{props.company}</p>
      <p>{props.duration}</p>
    </div>
  );
}

export default Experience;
