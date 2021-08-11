import React from "react";
import "./intro.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const Intro = () => {
  return (
    <div id='intro' className='intro'>
      <h1 className='header'>
        Levi Lieberman,
        <br />
        Web Developer
      </h1>
      <a href='#portfolio'>
        <KeyboardArrowDownIcon className='down-arrow' />
      </a>
    </div>
  );
};

export default Intro;
