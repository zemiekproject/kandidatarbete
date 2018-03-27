import React from "react"
import Radium from "radium"
import Headline from "../components/Headline"


const styles = {
  button: {
    cursor: "pointer",
  },
  counter: {
    color: "blue",
    fontSize: "20px",
  }
}


@Radium
export default class App1Container extends React.Component {

  render() {
    return (
<div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Sample App!</Headline>
            <button style={[styles.button]}>Hej</button>
          </div>
        </div>
      </div>
    )
  }
}