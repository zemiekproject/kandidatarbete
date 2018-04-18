import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import SimpleMap from "./map"

const MKmap = () => (
    <div>
    <SimpleMap />
    </div>
);

const wrapper = document.getElementsByClassName("Map");

for (var i = 0; i < wrapper.length; i++) {
    wrapper[i] ? ReactDOM.render(<MKmap />, wrapper[i]) : null;
}