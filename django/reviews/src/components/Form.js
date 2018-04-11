import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    title: "",
    location: "",
    text: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, location, text } = this.state;
    const review = { title, location, text };
    const conf = {
      method: "post",
      body: JSON.stringify(review),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };

  render() {
    const { title, location, text } = this.state;
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
          <div className="field">
            <label className="label">location</label>
            <div className="control">
              <input
                className="input"
                type="location"
                name="location"
                onChange={this.handleChange}
                value={location}
                required
              />
            </div>
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
