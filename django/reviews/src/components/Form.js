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
    text: "",
    tags: [],
  };

  handleChange = e => {
    // console.log("Field changed");
    // console.log(e.target.name + " : " + e.target.value);
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
    else{
      
      this.setState({ [e.target.name]: e.target.value });

    }
  };

  handleSubmit = e => {
    // console.log(e.target.tags[0].options);
    e.preventDefault();

    var locationNames = [];
    var locationValues = [];
    for (var i = 0, l = e.target.location[0].options.length; i< l; i++) {
      locationNames.push(e.target.location[0].options[i].attributes[1].value);
      locationValues.push(e.target.location[0].options[i].attributes[0].value);
    };

    if(!(locationNames.includes(this.state.location)) && !(locationValues.includes(this.state.location.toString()))){
      console.log("added new location");
      name  = this.state.location;
      const location = { name };
      const conf1 = {
        method: "post",
        body: JSON.stringify(location),
        headers: new Headers({ "Content-Type": "application/json" })
      };
      fetch("api/location/", conf1).then(response => console.log(response));
      this.state.location = (locationNames.length + 1).toString();
      this.forceUpdate();
    }
    else{
      for (var i = 0, l = locationNames.length; i< l; i++) {
        if (locationNames[i] == this.state.location){
          this.state.location = locationValues[i];
          break;
        };
      };
    };
    this.forceUpdate();

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
        const conf1 = {
          method: "post",
          body: JSON.stringify(tag),
          headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch("api/tag/", conf1).then(response => console.log(response));
        this.state.tags[i] = (tagValues.length + 1).toString();
        this.forceUpdate();
      };
      // else{
      //   for (var j = 0, l = tagNames.length; j< l; j++) {
      //     if (tagNames[j] == this.state.tags[i]){
      //       this.state.tags[i] = locationValues[i];
      //       break;
      //     };
      //   };
      // };
    };
    this.forceUpdate();

    const { title, location, text, tags } = this.state;
    const author = document.getElementById('uid').innerHTML;
    const review = { author, title, location, text, tags};

    console.log(review);
    const conf = {
      method: "post",
      body: JSON.stringify(review),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };

  render() {
    const { title, location, text, tags } = this.state;

    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="title"
                onChange={this.handleChange}
                value={title}
                required
              />
            </div>
          </div>
          <div className="field" onChange={this.handleChange} value={location}>
            <label className="label">location</label>
            
             <DropdownLocation />
             
          </div>
          <div className="field">
            <label className="label">text</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="text"
                onChange={this.handleChange}
                value={text}
                required
              />
            </div>
          </div>
          <div className="field" onChange={this.handleChange} value={tags}>
            <label className="label">tags</label>
            
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
