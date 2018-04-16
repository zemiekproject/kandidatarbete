import React, { Component } from "react";
import PropTypes from "prop-types";

class Upvotebutton extends Component {
    static propTypes = {
      endpoint: PropTypes.string.isRequired
    };

    state = {
        upvotes: "",
    }
  
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSubmit = e => {
      e.preventDefault();
      const upvotes = parseInt(document.getElementById('votes').innerHTML) + 1;
      const review = { upvotes };
  
      console.log(review);
      const conf = {
        method: "post",
        body: JSON.stringify(review),
        headers: new Headers({ "Content-Type": "application/json" })
      };
      fetch(this.props.endpoint, conf).then(response => console.log(response));
    };
  
    render() {
      return (
        <div className="column">
          <form onSubmit={this.handleSubmit}>
            <div className="control">
              <button type="submit" className="button is-info">
                Upvote
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default Upvotebutton;