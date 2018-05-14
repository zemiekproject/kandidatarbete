import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import ReviewCard from "./Card";
import ReviewList from "./axios/ReviewList";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const buttonmargin = {
  marginLeft: 20
};



function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

function activeUser() {
  if(window.location.pathname.split('/')[1]=='u'){
  return function(x) {
    return x.author == document.getElementById('userid').innerHTML;
  }}
  else return function(x){return x}
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

  paginate(num){
    var newPage = (this.state.pages+num);
    if ((document.getElementsByClassName('card').length == 6 && num==1)||(this.state.pages>0 && num==-1)){
    this.setState({pages:newPage})
    }
  };

  dataSelection(data){
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
            <button style={buttonmargin} className="submitbutton" id="submitbutton" onClick={function(){window.location.pathname='/reviews/create'}} href="{% url 'reviews:create' %}"><h4>Make review</h4></button></div>
            <div className="column"><InputGroup style={buttonmargin}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Search for reviews here:</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="" type="text" onChange={this.searchHandler}/>
          </InputGroup></div></div>
            <DataProvider endpoint="http://localhost:8000/reviews/api/review/"  
          render={data => <ReviewCard term={term} data={data.filter(searchingFor(term)).filter(activeUser()).slice(0+this.state.pages*6,6+this.state.pages*6)} />} />
          </div>
        <Pagination>
         <PaginationItem>
          <PaginationLink previous onClick={function(){this.paginate(-1)}.bind(this)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={function(){this.paginate(1)}.bind(this)} />
         </PaginationItem>
        </Pagination>
          </div>
          
  }
}

const wrapper = document.getElementsByClassName("Main");


for (var i = 0; i < wrapper.length; i++) {
  wrapper[i] ? ReactDOM.render(<App />, wrapper[i]) : null;
}
