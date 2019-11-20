import React from "react";
// import { Container } from "reactstrap";

class MyFooter extends React.Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="footer">
          <div className="row text-center">
            <div className="col-md-3">
              <h3>About us</h3>
            </div>
            <div className="col-md-3">
              <h3> Policy&Service</h3>
            </div>
            <div className="col-md-3">
              <h3> User Agreement</h3>
            </div>
            <div className="col-md-3">
              <h3> Terms&Conditions</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyFooter;
