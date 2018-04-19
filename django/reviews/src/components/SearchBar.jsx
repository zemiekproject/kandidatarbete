import React from "react"

const inputStyles = {
  fontSize: "45px",
}
const textStyles = {
  fontSize: "40px",
  color: "White",
}

export default class SearchBar extends React.Component {
  render() {
    return (
      <div style={inputStyles}>
        <strong style={textStyles}>Where do you want to travel?</strong> <br/> <input type="text" />
      </div>
    )
  }
}
