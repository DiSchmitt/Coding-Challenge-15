//Task 2, Personal Information Section: Create a component to display your name, a brief biography, and contact information such as email and LinkedIn.
import React from "react";

function Profile() {
  return (
    <div className="Profile">
      <h1>Dawson Schmitt</h1>
      <h4>About Me:</h4>
      <p>
        I am 20 years of age and am attending the University of South Florida as
        a junior. I am studying to earn a bachelors in Business analytics and
        information systems. I enjoy listening to video game soundtracks and my
        favorite game is Deep Rock Galactic.
      </p>
      <h4>Contact information:</h4>
      <p>dischmitt@usf.com</p>
      <p>https://www.linkedin.com/in/dawson-schmitt-510144301/</p>
    </div>
  );
}

export default Profile;
