import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';
import PropTypes from "prop-types";
import shortid from "shortid";



var i = -1;
function counter() {
  if (i = 1) {
    i = 0;
  } else {
  i = 1;
  }
  return i;
}
const uuid = shortid.generate;

const ReviewCard = ({ data }) =>  

  !data.length ? (
    <p>Nothing to show</p>
  ) : (
<div>
    {data.map( (data) => (
        <div>
            {counter}
    <CardDeck>
        <Card>
            {/* <CardImg top width="100%" src="https://thumbs.dreamstime.com/b/beautiful-view-green-fields-meadows-sunset-tuscany-italy-46410906.jpg" alt="Card image cap" /> */}
                <CardBody>
                    <CardTitle key={uuid()}>{data.title}</CardTitle>
                    <CardSubtitle>{data.location}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button href={"/reviews/"+data.slug+"/"}>Button</Button>
                </CardBody>
            </Card> 
        </CardDeck>
        </div>
       ))}
</div>);


export default ReviewCard;