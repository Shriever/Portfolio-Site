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
    },
    {
      title: "Compound Interest Calculator",
      links: {
        github: "https://github.com/Shriever/Compound-interest-calculator",
        live: "https://shriever.github.io/Compound-interest-calculator/",
      },
    },
    {
      title: "Thought Tracker",
      links: {
        github: "https://github.com/Shriever/Thought-Tracker",
        live: null,
      },
    },
  ];
  return (
    <div id='portfolio' className='portfolio'>
      <h1 className='portfolio-heading'>Projects</h1>
      <div className='container'>
        {projects.map(el => {
          return <div className='card'></div>;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
