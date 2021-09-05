import * as React from "react";
import { Helmet } from "react-helmet";
import About from "../components/about/About";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Topbar from "../components/topbar/Topbar";
import "./index.scss";

const IndexPage = () => {
  return (
    <main className='app'>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700;900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='shortcut icon'
          href='https://img.icons8.com/ios-glyphs/30/000000/macbook.png'
          type='image/x-icon'
        />
        <title>Levi Lieberman</title>
      </Helmet>
      <Topbar />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <About />
      </div>
    </main>
  );
};

export default IndexPage;
