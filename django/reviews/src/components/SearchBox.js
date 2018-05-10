import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './axios/ReviewList'


function searchingFor(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

export default class SearchBox extends React.Component {
  static propTypes = {
    placeholder: React.PropTypes.string,
    onPlacesChanged: React.PropTypes.func,
  }
  constructor() {
    super();
    this.state = {
      inputStyles: {
        fontSize: "45px",
        color: 'white',
      },
      divid: 'over_map',
      showList: false,
      term: '',
    }
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(event) {
    event.preventDefault()
    this.setState({ term: event.target.value })
  }
  render() {
    if (window.location.pathname == "/") {
      return <div id={this.state.divid} style={this.state.inputStyles}>
        <center>
          <p>Welcome to LOCUS</p>
        </center>
        <input ref="input" onChange={this.searchHandler} {...this.props} type="text" />
        {this.state.showList ? <div id="homeReviewList"><ReviewList term={this.state.term} />
        </div> : null}
      </div>;

    }
    else {
      return <div><center><p>Welcome to Locus</p></center><input ref="input" {...this.props} type="text" /></div>;
    }
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
      this.state.divid = 'hidden';
      this.setState({ showList: true })
    }
  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBoxListener = this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    google.maps.event.removeListener(this.searchBoxListener);
  }
}
