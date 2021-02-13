import React, { Fragment } from "react";

import { Hero,  } from "../components";


class Home extends React.Component {
  render() {  
    return (
      <Fragment>
        <Hero />
        <hr />
      </Fragment>
    );
  }
}

export default Home;
