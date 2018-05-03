import React from 'react';

export default class SearchBox extends React.Component {
  static propTypes = {
    placeholder: React.PropTypes.string,
    onPlacesChanged: React.PropTypes.func,
  }
  constructor(){
      super();
    this.state = {
        inputStyles: {
            fontSize: "45px",
            color: 'white',
        },
    divid: 'over_map'
    }  
    }
  render() {
    if(window.location.pathname=="/"){
    return <div id={this.state.divid} style={this.state.inputStyles}><center><p>Welcome to Locus</p></center><input ref="input" {...this.props} type="text"/></div>;
        
    }
    else{
        return <div><center><p>Welcome to Locus</p></center><input ref="input" {...this.props} type="text"/></div>;
    }
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
      this.state.divid = 'hidden';
    }
  }
  componentDidMount() {
    var input = React.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBoxListener = this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    google.maps.event.removeListener(this.searchBoxListener);
  }
}
