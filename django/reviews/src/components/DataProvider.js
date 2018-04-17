import React, { Component } from "react";
import PropTypes from "prop-types";

function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;

  }
}

class DataProvider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading...",
      term: '',
    };
    this.searchHandler = this.searchHandler.bind(this)
  }

  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  //

  // state = {
  //     data: [],
  //     loaded: false,
  //     placeholder: "Loading...",
  //     term: '',
  //   };

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render() {
    const { data, loaded, placeholder, term } = this.state;
    return <div>
      <form>
         Search review: <input type="text" onChange={this.searchHandler}/>
      </form> 
      {loaded ? this.props.render(data.filter(searchingFor(term))) : <p>{placeholder}</p>}  </div>
  
  }
}
//


export default DataProvider;






