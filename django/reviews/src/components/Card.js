import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck, CardLink,
  CardGroup, Pagination, PaginationItem, PaginationLink,
  Row, Col, Container, Media
} from 'reactstrap';
import PropTypes from "prop-types";
import shortid from "shortid";
import DataProvider from "./DataProvider"
import LocationNamer from "./LocationNamer"
import UserNamer from "./UserNamer"


const cardStyle = {
  minWidth: "30%",
  maxWidth: "30%",
  margin: "11px",
  background: "whitesmoke",
  border: "None",
  padding: "25px",

}
const ratingStyle = {
  fontSize: "25px",
}
const cardBodyStyle = {
  textDecoration: "none",
  color: "black",
}
const cardImgStyle = {
  paddingTop: "10px",
}


const NameEl = ({ id }) => (
  <DataProvider endpoint="http://localhost:8000/reviews/api/location/" render={data => <LocationNamer data={data.slice(id, id + 1)} />} />
);

const AuthorName = ({ id }) => (
  <DataProvider endpoint="http://localhost:8000/reviews/api/user/" render={data => <UserNamer data={data.slice(id, id + 1)} />} />
);
const uuid = shortid.generate;


const ReviewCard = ({ data, term }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
      <div>
        {/* <div>
          {term ? null : "All Reviews:"}
        </div> */}
        <CardDeck>
          {data.map((data, location) => (

            <Card style={cardStyle}>
              <a href={"/reviews/" + data.slug + "/"} style={cardBodyStyle}>
                <div key={uuid()}><strong>{data.title}</strong></div>
                <CardImg style={cardImgStyle} top src="https://thumbs.dreamstime.com/b/beautiful-view-green-fields-meadows-sunset-tuscany-italy-46410906.jpg" alt="Card image cap" />
                <div style={ratingStyle}>
                  {data.rating} / 10
                    </div>
                <div>Written by: <AuthorName id={data.author} style={cardBodyStyle} /></div>
                <div><NameEl id={data.location} /></div>

                {/* <CardText>{data.text ? data.text.substring(0,60)+" ... " : null}</CardText> */}
                {/* <Button href={"/reviews/"+data.slug+"/"}>Read More</Button> */}

              </a>
            </Card>

          ))}
        </CardDeck></div>);


export default ReviewCard;
