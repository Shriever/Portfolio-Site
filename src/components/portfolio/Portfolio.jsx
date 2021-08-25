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
      techUsed: ["ReactJS", "Redux", "Material-UI"],
      description:
        "Interactive Q&A game that fetches data from two APIs. Get ready for some Chuck Norris action!",
    },
    {
      title: "Compound Interest Calculator",
      links: {
        github: "https://github.com/Shriever/Compound-interest-calculator",
        live: "https://shriever.github.io/Compound-interest-calculator/",
      },
      techUsed: ["TypeScript", "ReactJS"],
      description:
        "As the name suggests, this is a compound interest calculator. Great for projecting potential investment gains or determining the cost of a mortgage.",
    },
    {
      title: "Flash Cards",
      links: {
        github: "https://github.com/Shriever/Flash-Cards/",
        live: 'https://shriever.github.io/Flash-Cards/',
      },
      techUsed: ["OOP", "Scss", "Vanilla JS"],
      description:
        "Want to quiz yourself for an upcoming test? Try using these flash cards to boost productivity!",
    },
  ];
  return (
    <div id='portfolio' className='portfolio'>
      <h1 className='portfolio-heading'>Projects</h1>
      <div className='container'>
        {projects.map(project => {
          const { title, links, techUsed, description } = project;
          return (
            <div className='card'>
              <h3 className='card-title'>{title}</h3>
              <p className='description'>{description}</p>
              <div className='links'>
              <p className='tech-text'>{techUsed.join(" | ")}</p>
                {links.live && (
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={links.live}
                    className='link-btn'
                  >
                    Live Site
                  </a>
                )}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={links.github}
                  className='link-btn link-btn-code'
                >
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
