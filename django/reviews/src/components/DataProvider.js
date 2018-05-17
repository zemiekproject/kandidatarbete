import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading...",
    };
  }

  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  

  state = {
      data: [],
      loaded: false,
      placeholder: "Loading...",
    };

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
//     var pathArray = window.location.pathname.split( '/' );
//     if(pathArray[1]=='u'){
//         this.setState(data,this.state.data.filter(review => review.author==document.getElementById('uid').innerHTML));
//     }
  }

  render() {
    const { data, loaded, placeholder} = this.state;
    if(window.location.pathname=='/reviews/toprated/'){
        data.sort((a,b) => b.rating - a.rating);
    }
    return loaded ? this.props.render(data) : <p>{placeholder}</p>
  }
}
//



export default DataProvider;



