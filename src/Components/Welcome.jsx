import React from "react";
import { Jumbotron } from "reactstrap";

class Welcome extends React.Component {
  state = {};
  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">Welcome to Online Book Shop!</h1>
        <p className="lead">Deliver to your door in time!!</p>
        <hr className="my-2" />
        <p>Explore!!!</p>
      </Jumbotron>
    );
  }
}

export default Welcome;
