import React from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            levi.
          </a>
          <a href='#portfolio' className='nav-btn'>
            Projects
          </a>
          <a href='#about' className='nav-btn'>
            About Me
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://docs.google.com/document/d/1YiSmCrDEDMfRN2xCKjfBGvatOeu8rOuMdgfLqyHkMCM/edit?usp=sharing'
            className='nav-btn'
          >
            Resume
          </a>
        </div>
        <div className='right'>
          <a
            className='nav-link'
            href='https://www.linkedin.com/in/levi-lieberman-b80960108/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedIn />
          </a>
          <a
            className='nav-link'
            href='https://github.com/Shriever'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
