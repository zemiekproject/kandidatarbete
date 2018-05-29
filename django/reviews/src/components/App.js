import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import ReviewCard from "./Card";
import ReviewList from "./axios/ReviewList";
import LocationNamer from "./LocationNamer"
import UserNamer from "./UserNamer"
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const buttonmargin = {
  marginLeft: 20
};

const addButtonStyle = {
  position: "fixed",
  border: "none",
  color: "white",
  borderRadius: "50%",
  background: "#bd5734",
  width: "12vh",
  height: "12vh",
  top: "85vh",
  left: "90vh",
  zIndex: "99",
}

const searchBoxStyle = {
  width: "105vh",
  paddingLeft: "20px",
}

function searchingFor(term) {
  return function(x) {
    return (x.title.toLowerCase().includes(term.toLowerCase()) || x.text.toLowerCase().includes(term.toLowerCase())) || !term;
  }
}

function activeUser() {
  if (window.location.pathname.split('/')[1] == 'u') {
    return function (x) {
      return x.author == document.getElementById('userid').innerHTML;
    }
  }
  else return function (x) { return x }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      term: '',
      pages: 0,
    };
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  paginate(num) {
    var newPage = (this.state.pages + num);
    if ((document.getElementsByClassName('card').length == 9 && num == 1) || (this.state.pages > 0 && num == -1)) {
      this.setState({ pages: newPage })
    }
  };

  dataSelection(data) {
    return
  }

  render() {
    const { data, term } = this.state;
    console.log(data);
    data.sort((a,b) => a.rating - b.rating);
    console.log(data);
    
    
    return <div>

      <div className="column">
        <div className="row"><div className="column" className="hspaced">
          {/* <button style={buttonmargin} className="submitbutton" id="submitbutton" onClick={function () { window.location.pathname = '/reviews/create' }} href="{% url 'reviews:create' %}"><h4>Make review</h4></button> */}
        </div>
          <div className="column">
            <button style={addButtonStyle} className="newSubmitButton" onClick={function () { window.location.pathname = '/reviews/create' }} href="{% url 'reviews:create' %}">WRITE REVIEW</button>
            <InputGroup style={searchBoxStyle}>
              <Input placeholder="Search" type="text" onChange={this.searchHandler} />
              <InputGroupAddon addonType="append">
                <Button color="secondary">SEARCH</Button>
              </InputGroupAddon>
            </InputGroup>
          </div></div>
        <DataProvider endpoint="http://localhost:8000/reviews/api/review/"
          render={data => <ReviewCard term={term} data={data.filter(searchingFor(term)).filter(activeUser()).slice(0 + this.state.pages * 9, 9 + this.state.pages * 9)} />} />
      </div>
      <Pagination>
        <PaginationItem>
          <PaginationLink previous onClick={function () { this.paginate(-1) }.bind(this)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={function () { this.paginate(1) }.bind(this)} />
        </PaginationItem>
      </Pagination>
    </div>

  }
}

const wrapper = document.getElementsByClassName("Main");


for (var i = 0; i < wrapper.length; i++) {
  wrapper[i] ? ReactDOM.render(<App />, wrapper[i]) : null;
}
