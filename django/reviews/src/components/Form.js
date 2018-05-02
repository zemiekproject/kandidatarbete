import React, { Component } from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import FormLocation from "./formLocation";
import FormTags from "./formTags";

const DropdownLocation = () => (
  <DataProvider endpoint="api/location/" render={data => <FormLocation data={data} /> } />
);

const SelectTags = () => (
  <DataProvider endpoint="api/tag/" render={data => <FormTags data={data} /> } />
);

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    title: "",
    location: "",
    lat: "",
    lng: "",
    text: "",
    rating: "",
    tags: [],
  };

  handleChange = e => {
    
    if(e.target.name == "tags"){
      if(e.target.options){
        var options = e.target.options;
        var values = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            values.push(options[i].value);
          }
        }
        this.setState({ [e.target.name]: values });
      }
      else {
        var new_tag = true;

        for (var i = 0, l = this.state.tags.length; i < l; i++) {
          if (e.target.value.includes(this.state.tags[i])) {
            this.state.tags[i] = e.target.value;
            new_tag = false;
          };
        };

        if(new_tag){
          this.state.tags.push(e.target.value);
        };
      };
    }
    else if(e.target.name == "location"){
      if(e.target.options){
        this.state.location = e.target[e.target.value-1].attributes.value.value;
        this.state.lat = e.target[e.target.value-1].attributes['data-lat'].value;
        this.state.lng = e.target[e.target.value-1].attributes['data-lng'].value;
        this.forceUpdate();
      }
      else {
        this.setState({ [e.target.name]: e.target.value });
      };
    }
    else if(e.target.name == "lat"){
      this.setState({ [e.target.name]: e.target.value });
    }
    else if(e.target.name == "lng"){
      this.setState({ [e.target.name]: e.target.value });
    }
    else{
      
      this.setState({ [e.target.name]: e.target.value });

    }
  };

  handleSubmit = e => {
    e.preventDefault();

    var locationNames = [];
    var locationValues = [];
    for (var i = 0, l = e.target.location[0].options.length; i< l; i++) {
      locationNames.push(e.target.location[0].options[i].attributes['name'].value);
      locationValues.push(e.target.location[0].options[i].attributes['value'].value);
    };

    if(!(locationNames.includes(this.state.location)) && !(locationValues.includes(this.state.location.toString()))){
      console.log("added new location");
      name  = this.state.location;
      const lng = this.state.lng;
      const lat = this.state.lat;
      const location = { name, lng, lat };
      const confLoc = {
        method: "post",
        body: JSON.stringify(location),
        headers: new Headers({ "Content-Type": "application/json" })
      };
      fetch("api/location/", confLoc).then(response => console.log(response));
      this.state.location = (locationValues.length + 1).toString();
    }
    else{
      for (var i = 0, l = locationNames.length; i< l; i++) {
        if (locationNames[i] == this.state.location){
          this.state.location = locationValues[i];
          break;
        };
      };
    };

    

    var tagValues = [];
    for (var i = 0, l = e.target.tags[0].options.length; i< l; i++) {
      tagValues.push(e.target.tags[0].options[i].attributes[0].value);
    };

    for (var i = 0, l = this.state.tags.length; i< l; i++) {
      console.log("tag: " + this.state.tags[i]);
      if(!(tagValues.includes(this.state.tags[i]))){
        console.log("adding new tag");
        name  = this.state.tags[i];
        const tag = { name };
        const confTag = {
          method: "post",
          body: JSON.stringify(tag),
          headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch("api/tag/", confTag).then(response => console.log(response));
        this.state.tags[i] = (tagValues.length + 1).toString();
      };
    };

    const { title, location, lat, lng, text, rating, tags } = this.state;
    const author = document.getElementById('uid').innerHTML;
    const review = { author, title, location, lat, lng, text, rating, tags};

    console.log(review);
    const conf = {
      method: "post",
      body: JSON.stringify(review),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint)
    .then(function(response) {
      fetch("api/review/", conf).then(response => console.log(response));
    });
  };

  render() {
    const { title, location, lat, lng, text, rating, tags } = this.state;

    return (
      <div>
        <form inline className="form" onSubmit={this.handleSubmit}>
          <div className="field" className="form-group">
            <label className="label"><b>Name</b></label>
            <div className="control">
              <input
                className="input"
                className="form-control"
                type="text"
                name="title"
                onChange={this.handleChange}
                value={title}
                required
              />
            </div>
          </div>
          <div className="field" className="form-group" onChange={this.handleChange} value={location}>
            <label className="label"><b>Location (Choose existing or create new)</b></label>
            
             <DropdownLocation />
             
          </div>
          Add new location latitude and longitude below:
          <div className="field" className="form-group">
            <label className="label"></label>
            <div className="control">
              Latitude: <input
                className="textarea"
                type="number"
                name="lat"
                onChange={this.handleChange}
                value={lat}
                step="0.000001"
              />
            </div>
          </div>
          <div className="field" className="form-group">
            <label className="label"></label>
            <div className="control">
              Longitude: <input
                className="textarea"
                type="number"
                name="lng"
                onChange={this.handleChange}
                value={lng}
                step="0.000001"
              />
            </div>
          </div>
          <div className="field" className="form-group">
            <label className="label"><b>Text</b></label>
            <div className="control">
              <textarea
                className="textarea"
                className="form-control"
                type="text"
                name="text"
                onChange={this.handleChange}
                value={text}
                required
              />
            </div>
          </div>
          <div className="field" className="form-group">
            <label className="label"><b>Rating (0-10)</b></label>
            <div className="control">
              <input
                  className="textarea"
                  type="number"
                  name="rating"
                  onChange={this.handleChange}
                  value={rating}
                  min="0" max="10"
                />
            </div>
          </div>
          <div className="field" className="form-group" onChange={this.handleChange} value={tags}>
            <label className="label"><b>Tags</b></label>
            
            <SelectTags />
            
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Send text
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
