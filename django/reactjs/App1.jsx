import React from "react"
import { render } from "react-dom"

import HomeContainer from "./containers/HomeContainer"

class App1 extends React.Component {



  render() {
    return (
      <HomeContainer />
    )
  }
}

render(<App1/>, document.getElementById('App1'))