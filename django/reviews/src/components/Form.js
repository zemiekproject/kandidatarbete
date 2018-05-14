import React, { Component } from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import FormLocation from "./formLocation";
import FormAutosuggest from "./formAutosuggest";
import TagsInput from 'react-tagsinput';
import "babel-polyfill";

// const DropdownLocation = () => (
//   <DataProvider endpoint="api/location/" render={data => <FormLocation data={data} />} />
// );

// const Autosuggest = () => (
//   <DataProvider endpoint="api/location/" render={data => <FormAutosuggest data={data} /> } />
// );

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
    country: "",
    tags: [],
  };

  handleChange = e => {
    this.setState({ lat: document.getElementById('lat').getAttribute('value') });
    this.setState({ lng: document.getElementById('lng').getAttribute('value') });
    this.setState({ location: document.getElementById('location').getAttribute('value') });
    this.setState({ country: document.getElementById('country').getAttribute('value') });
    if (!e.target) {
      this.setState({ ['tags']: e });
    }
    if (e.target) {
      if (e.target.name == "location") {
        if (e.target.options) {
          this.state.location = e.target[e.target.value - 1].attributes.value.value;
          this.state.lat = e.target[e.target.value - 1].attributes['data-lat'].value;
          this.state.lng = e.target[e.target.value - 1].attributes['data-lng'].value;
          this.forceUpdate();
        }
        else {
          this.setState({ [e.target.name]: e.target.value });
        };
      }
      else if (e.target.name == "lat") {
        this.setState({ [e.target.name]: e.target.value });
      }
      else if (e.target.name == "lng") {
        this.setState({ [e.target.name]: e.target.value });
      }
      else {

        this.setState({ [e.target.name]: e.target.value });
      }
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    const formRequest = async () => {
        
      var locationNames = [];
      var locationValues = [];
      
      const locationResponse = await fetch('api/location/');
      const locationJson = await locationResponse.json();

      locationNames = locationJson.map(function (arg) { return arg.name });
      locationValues = locationJson.map(function (arg) { return arg.id });
    

      if (!(locationNames.includes(this.state.location)) && !(locationValues.includes(this.state.location.toString()))) {
        console.log("added new location");
        name = this.state.location;
        const lng = this.state.lng;
        const lat = this.state.lat;
        const country = this.state.country;
        const location = { name, country, lng, lat };
        const confLoc = {
          method: "post",
          body: JSON.stringify(location),
          headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch("api/location/", confLoc).then(response => console.log(response));
        this.state.location = (locationValues.length + 1).toString();
      }
      else {
        for (var i = 0, l = locationNames.length; i < l; i++) {
          if (locationNames[i] == this.state.location) {
            this.state.location = locationValues[i];
            break;
          };
        };
      };

      var tagNames = [];
      var tagValues = [];

      const tagResponse = await fetch('api/tag/');
      const tagJson = await tagResponse.json();

      tagNames = tagJson.map(function (arg) { return arg.name });
      tagValues = tagJson.map(function (arg) { return arg.id });
      
      for (var i = 0, l = this.state.tags.length; i < l; i++) {
        if (!tagNames.includes(this.state.tags[i])) {
          console.log("adding new tag");
          name = this.state.tags[i];
          const tag = { name };
          const confTag = {
            method: "post",
            body: JSON.stringify(tag),
            headers: new Headers({ "Content-Type": "application/json" })
          };
          await fetch("api/tag/", confTag).then(response => console.log(response));
          tagNames.push(this.state.tags[i]);
          this.state.tags[i] = (tagNames.length).toString();
          tagValues.push(this.state.tags[i]);
        }
        else {
          for (var j = 0, le = tagNames.length; j < le; j++) {
            if (tagNames[j] == this.state.tags[i]) {
              this.state.tags[i] = tagValues[j].toString();
              break;
            };
          };
        };
      };

      const { title, location, lat, lng, text, rating, tags } = this.state;
      const author = document.getElementById('uid').innerHTML;
      const review = { author, title, location, lat, lng, text, rating, tags };

      console.log(review);
      const conf = {
        method: "post",
        body: JSON.stringify(review),
        headers: new Headers({ "Content-Type": "application/json" })
      };
      await fetch(this.props.endpoint)
        .then(function (response) {
          console.log(conf);
          fetch("api/review/", conf).then(function(){
              window.location.replace("http://localhost:8000/reviews");
        },function(){
            console.log('nvmifuckedup');
        }
        );
        });
    };
    formRequest();
  };

  render() {
    const { title, location, country, lat, lng, text, rating, tags } = this.state;

    return (
      <div>
        <form inline className="form" onSubmit={this.handleSubmit}>
          <div className="field" className="form-group" id="namefield">
            <label className="label"><b>Name</b></label>
            <div className="control">
              <input
                className="input"
                className="form-control"
                placeholder="Type your review title here"
                type="text"
                name="title"
                onChange={this.handleChange}
                value={title}
                required
              />
            </div>
          </div>

        <div className="field" className="form-group" id="locationfield">
            <label className="label"><b>Location</b></label>
            <div className="control">
              <input
                className="input"
                className="form-control"
                placeholder="Please mark your desired location on the map"
                type="text"
                id='location'
                name="location"
                onChange={this.handleChange}
                value={location}
                readOnly="readonly"
                required
              />
            </div>
          </div>
          <div className="field" className="form-group" id="countryfield">
            <label className="label"><b>Country</b></label>
            <div className="control">
              <input
                className="input"
                placeholder="Please mark your desired location on the map"
                className="form-control"
                type="text"
                id='country'
                name="country"
                onChange={this.handleChange}
                value={country}
                readOnly="readonly"
                required
              />
            </div>
          </div>

          <div className="field" className="form-group">
            <div className="control" >
              <input
                className="textarea"
                className='hiddenform'
                type="text"
                id='lat'
                name="lat"
                onChange={this.handleChange}
                value={lat}
                step="0.000001"
              />
            </div>
          </div>
          <div className="field" className="form-group">
            <div className="control">
              <input
                className="textarea"
                className='hiddenform'
                type="text"
                id='lng'
                name="lng"
                onChange={this.handleChange}
                value={lng}
                step="0.000001"
              />
            </div>
          </div>
          <div className="field" className="form-group" id="textfield">
            <label className="label"><b>Text</b></label>
            <div className="control">
              <textarea
                id = "textbox"
                className="textarea"
                className="form-control"
                placeholder="Type your review here"
                type="text"
                name="text"
                onChange={this.handleChange}
                value={text}
                required
              />
            </div>
          </div>
          <div className="field" className="form-group" id="ratingfield">
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

          <div className="field" className="form-group">
            <label className="label"><b>Tags (Press space to add additional ones)</b></label>

            <div className="control">
              <TagsInput value={tags} onChange={this.handleChange} name="tags" addKeys="[32]" />
            </div>
          </div>
          <div className="control">

            <button type="submit" className="submitbutton" id="submitbutton">
                Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
