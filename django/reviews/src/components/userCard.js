import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck,
  CardGroup } from 'reactstrap';
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
const uuid = shortid.generate;


class userCard({data, term }){
    constructor(props){
        super(props);
        this.state = {
      data: [],
      term: '',
    };
    }
    render(){
      const { data, term } = this.state;
      
      return(
<div>
  <div>
    {term ? null : "All Reviews:"} 
  </div>
  <CardGroup>
    {data.map( (data, location) => (
        <Card style={cardStyle}>
            {/* <CardImg top width="100%" src="https://thumbs.dreamstime.com/b/beautiful-view-green-fields-meadows-sunset-tuscany-italy-46410906.jpg" alt="Card image cap" /> */}
                <CardBody>
                    <CardTitle key={uuid()}>{data.title}</CardTitle>
                    <CardSubtitle>{data.location}</CardSubtitle>
                    <CardText>{data.text}</CardText>
                    <Button href={"/reviews/"+data.slug+"/"}>Read More</Button>
                </CardBody>
            </Card> 
       ))}
 </CardGroup></div>);
}
}


export default userCard;
