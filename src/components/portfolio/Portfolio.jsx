import React from "react";
import "./portfolio.scss";

const Portfolio = () => {
  const projects = [
    {
      title: "Quiz App",
      links: {
        github: "https://github.com/Shriever/Quiz-App",
        live: "https://quizapp.gatsbyjs.io/",
      },
      techUsed: ["ReactJS", "Redux", "Material UI"],
    },
    {
      title: "Compound Interest Calculator",
      links: {
        github: "https://github.com/Shriever/Compound-interest-calculator",
        live: "https://shriever.github.io/Compound-interest-calculator/",
      },
      techUsed: ["TypeScript", "ReactJS"],
    },
    {
      title: "Thought Tracker",
      links: {
        github: "https://github.com/Shriever/Thought-Tracker",
        live: null,
      },
      techUsed: ["Shell", "Python", "SQL"],
    },
  ];
  return (
    <div id='portfolio' className='portfolio'>
      <h1 className='portfolio-heading'>Projects</h1>
      <div className='container'>
        {projects.map(el => {
          const { title, links, techUsed } = el;
          return (
            <div className='card'>
              <h3 className='card-title'>{title}</h3>
              <p className='tech-text'>Tech Used: {techUsed.join(", ")}</p>
              <div className='links'>
                <a href={links.live} className='link-btn'>
                  Live Site
                </a>
                <a href={links.github} className='link-btn'>
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
