import React from "react";
import Popup from "reactjs-popup";
import Table from "./Table";

const popup = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>{Table}</div>
  </Popup>
);

export default Popup;
