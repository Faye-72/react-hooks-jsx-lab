import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Hi, my name is Liza and I am a junior studying Material Science and
        Engineering with a minor in Computer Science.I have a passion for
        techology.At XYZ healthcare software company, worked closely with
        Product, UX, and end users to redesign a billing workflow within the iOS
        app, resulting in 20% less calls to the Customer Support team.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
