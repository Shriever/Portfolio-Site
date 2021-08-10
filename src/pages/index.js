import * as React from "react";
import { Helmet } from "react-helmet";
import "../index.css";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700;900&display=swap'
          rel='stylesheet'
        />
        <title>Levi Lieberman</title>
      </Helmet>
    </main>
  );
};

export default IndexPage;
