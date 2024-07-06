//U4888-2664
//Task 1:Creating the react enviroment.
import React from "react";
import "./App.css";
import Profile from "./Profile";
import Skill1 from "./Skill1";
import Skill2 from "./Skill2";
import Skill3 from "./Skill3";
import Experience from "./Experience";
import Education from "./Education";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile and Skills</h1>
      </header>
      <Profile />
      <div className="Skills">
        <h2>Skills</h2>
        <Skill1
          name="JavaScript"
          level="Competent"
          text="I am able to use javascript to produce code that does what I want, but it takes some time and trial and error."
        />
        <Skill2
          name="Soccer"
          level="Casually Good"
          text="I have played soccer for a few years casually as a defender and prevented many opportunities for shots on goals."
        />
        <Skill3
          name="Cooking"
          level="Good"
          text="I am able to follow recipies well and nearly always turn out with a dish that does not deviate often from what was expected."
        />
      </div>
      <div className="WorkExperience">
        <h2>Work Experience</h2>
        <Experience
          title="Crew Member"
          company="Moes Southwest Grill"
          duration="July 2021 - September 2021"
        />
        <Experience
          title="Back of House Member"
          company="Chick-fil-a"
          duration="June 2023 - Present"
        />
      </div>
      <div className="educationInfo">
        <h2>Education</h2>
        <Education
          institutionName="Parkside Christian Homeschool"
          degree="High School Diploma"
          years="August 2007 - June 2022"
        />
        <Education
          institutionName="Hillsborough Community College"
          degree="Associate of Arts"
          years="August 2020 - June 2022, January 2023 - December 2023"
        />
        <Education
          institutionName="Palm Beach Atlantic"
          degree="N/A"
          years="August 2022 - December 2023)"
        />
        <Education
          institutionName="University of South Florida"
          degree="Associate of Arts"
          years="January 2024 - Present"
        />
      </div>
    </div>
  );
}

export default App;
