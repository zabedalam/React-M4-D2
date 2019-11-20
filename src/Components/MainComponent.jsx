import React from "react";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import { Container, Row, Col } from "reactstrap";
import Welcome from "./Welcome";
import LatestRelease from "./LatestRelease";

import history from "../data/history";

class MainComponent extends React.Component {
  state = {};
  render() {
    // console.log(history);
    return (
      <Container>
        <Col md="12">
          <MyNav />
        </Col>
        <Col md="12">
          <Welcome />
        </Col>
        <Container>
          <Row>
            {history.map((bookEntry, index) => (
              <Col md="3">
                <LatestRelease book={bookEntry} key={index} />{" "}
              </Col>
            ))}
          </Row>
        </Container>

        <Col md="12">
          <MyFooter />
        </Col>
      </Container>
    );
  }
}

export default MainComponent;
