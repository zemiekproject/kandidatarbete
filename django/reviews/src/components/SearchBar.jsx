import React from "react"

const inputStyles = {
  fontSize: "45px",
}
const textStyles = {
  fontSize: "37px",
  color: "White",
}




function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}


export default class SearchBar extends React.Component {

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
    return (
      <div style={inputStyles}>
        <strong style={textStyles}>Where do you want to travel?</strong> <br/> <input type="text" onSubmit={this.searchHandler} />
      </div>
    )
  }
  
}
