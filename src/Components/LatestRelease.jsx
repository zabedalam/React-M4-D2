import React from "react";
import "../App.css";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardDeck
} from "reactstrap";

class LatestRelease extends React.Component {
  state = {};
  render() {
    // console.log(this.props);
    return (
      <CardDeck className="cardDisplay">
        <Card className="m-2">
          <CardImg
            top
            width="100%"
            
            src={this.props.book.img}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Title: {this.props.book.title.slice(0, 25).concat("...")}</CardTitle>
            <CardSubtitle>Price: ${this.props.book.price}</CardSubtitle>
          </CardBody>
        </Card>
      </CardDeck>
    );
  }
}

export default LatestRelease;
