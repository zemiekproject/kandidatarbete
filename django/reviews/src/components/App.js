import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

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
            <form>
              <input type="text" onChange={this.searchHandler} />
            </form> 
            <DataProvider endpoint="api/review/" 
          render={data => <Table data={data.filter(searchingFor(term))} />} />
          </div>
          
  }
}


const wrapper = document.getElementById("Main");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
