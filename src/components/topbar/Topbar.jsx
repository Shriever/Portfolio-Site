import React from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            genius.
          </a>
          <a href='#portfolio' className='nav-btn'>
            Portfolio
          </a>
          <a href='#about' className='nav-btn'>
            About Me
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
