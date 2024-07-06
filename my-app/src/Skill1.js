//Task 2, Skills Section: Develop a component that lists your skills.
//Each skill could be displayed using a separate component that receives props for the skill name and proficiency level.
import React from "react";

function Skill1(props) {
  return (
    <div className="SkillItem">
      <h3>{props.name}</h3>
      <p>Proficiency: {props.level}</p>
      <p>{props.text}</p>
    </div>
  );
}

export default Skill1;
