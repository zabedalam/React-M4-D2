import React from "react";
import { Nav, NavItem, NavLink, Container, Row } from "reactstrap";

class MyNav extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Nav>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Browse</NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Container>
    );
  }
}

export default MyNav;
