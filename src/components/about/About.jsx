import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div id='about' className='about'>
      <h2 className='header'>About Me</h2>
      <div className='about-body'>
        <p className='about-text'>
          My name is Levi Lieberman. I love learning about the web and how to
          solve problems with code. I think that the power of computers is vast
          and I am always searching out new ways to explore the world of
          technology.
        </p>
        <p className='about-text'>
          I work with modern technologies like TypeScript and GraphQL to
          implement clever solutions to everyday problems. I'm looking to meet
          great people in the tech space and improve my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
