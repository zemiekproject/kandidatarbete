import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import ReviewCard from "./Card";



function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      term: '',
    };
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    const { data, term } = this.state;


    
    
    return <div>
            <div className="column">

            <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Search for reviews here:</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="" type="text" onChange={this.searchHandler}/>
          </InputGroup>
            <DataProvider endpoint="http://localhost:8000/reviews/api/review/"  
          render={data => <ReviewCard term={term} data={data.filter(searchingFor(term))} />} />
          </div>
          </div>
          
  }
}


const wrapper = document.getElementsByClassName("Main");


for (var i = 0; i < wrapper.length; i++) {
  wrapper[i] ? ReactDOM.render(<App />, wrapper[i]) : null;
}