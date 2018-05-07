import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck, CardLink,
  CardGroup
} from 'reactstrap';
import PropTypes from "prop-types";
import shortid from "shortid";

const cardStyle = {
  minWidth: "33%"
}

var i = -1;
function counter() {
  if (i = 1) {
    i = 0;
  } else {
    i = 1;
  }
  return i;
}



const idToString = async (type) => {

  const locationResponse = await fetch('api/location');
  const locationJSON = await locationResponse.json();
  var locationNames = [];
  locationNames = locationJSON.map(function (arg) { return arg.name })
  var locationValues = [];
  locationValues = locationJSON.map(function (arg) { return arg.id })


  const reviewResponse = await fetch('api/review');
  const reviewJSON = await reviewResponse.json();
  var reviewNames = [];
  reviewNames = reviewJSON.map(function (arg) { return arg.name })
  var reviewValues = [];
  reviewValues = reviewJSON.map(function (arg) { return arg.id })

  if (type === "location") {
    var thisLocation = '';
    for (var i = 0; i < locationValues.length; i++) {
      if (locationValues[i] === data.location) {
        thisLocation = locationNames[i];
      };
    };
    return thisLocation;
  }
  else if (type === "author") {
    var thisAuthor = '';
    for (var i = 0; i < AuthorValues.length; i++) {
      if (AuthorValues[i] === data.location) {
        thisAuthor = AuthorNames[i];
      };
    };
    return thisAuthor;
  }
}




const uuid = shortid.generate;

const ReviewCard = ({ data, term }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
      <div>
        <div>
          {term ? null : "All Reviews:"}
        </div>
        <CardGroup>
          {data.map((data, location) => (
            <Card style={cardStyle}>
              {/* <CardImg top width="100%" src="https://thumbs.dreamstime.com/b/beautiful-view-green-fields-meadows-sunset-tuscany-italy-46410906.jpg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle key={uuid()}>{data.title}</CardTitle>
                <CardSubtitle>{idToString("location")}</CardSubtitle>
                <CardText>{data.text}</CardText>
                <CardLink>Written by: {idToString("author")}</CardLink><br />
                <Button href={"/reviews/" + data.slug + "/"}>Read More</Button>
              </CardBody>
            </Card>
          ))}
        </CardGroup></div>);


export default ReviewCard;
