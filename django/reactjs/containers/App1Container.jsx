import React from "react"
import Radium from "radium"
import Headline from "../components/Headline"
import ReactButton from "../components/ReactButton"
import { Container, Row, Col } from 'reactstrap'


const styles = {
  button: {
    cursor: "pointer",
  },
  counter: {
    color: "blue",
    fontSize: "20px",
  },
  column:{
    background: "green",
    textAlign: 'center', 
  },

}


@Radium
export default class App1Container extends React.Component {
  constructor(){
    super();
    this.state ={
      redirectPath: ""
    }
  }

  render() {
    return (
<div className="container">
        {/* <div className="row">
           <div className="col-sm-1">
          </div>
          <div className="col-sm-auto">
            <Headline>Sample App!</Headline>
            <button style={[styles.button]}>Hej</button>
          </div>
        <div className="col-sm-1">
          </div>
        </div> */}
        <Container noGutters>
          <Row>
            <Col><Headline>Sample AP!</Headline></Col>
            <Col md={2} ><div style={[styles.column]}>.col</div></Col>
            <Col md={2}><ReactButton redirectPath = "/review/">Review</ReactButton></Col>
            <Col md={2}><ReactButton redirectPath = "/review/">Home</ReactButton></Col>
            <Col md={2}><ReactButton redirectPath = "/review/">World Map</ReactButton></Col>
            <Col md={2}><ReactButton redirectPath = "/review/">About Us</ReactButton></Col>
            <Col md={2}><ReactButton redirectPath = "/review/">My Page</ReactButton></Col>
          </Row>
          </Container>
      </div>
    )
  }
}