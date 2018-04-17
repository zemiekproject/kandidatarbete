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
        <input type="text" onChange={this.searchHandler}/> Hello? 
      </form> 
      <div>{data.filter(searchingFor(term)).map( data => <div key={data.id}><h1>{data.title}</h1></div>)}</div>
      {loaded ? this.props.render(data) : <p>{placeholder}</p>}  </div>
  
  }
}
//


export default DataProvider;




;

