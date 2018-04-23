import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import SimpleMap from "./map"
import MainMapBlock from "./examples/x_main/main_map_block"
import DataProvider from "./DataProvider"
const divstyle = {
    width: '100px',
    height: '100px',
};
const MKmap = () => (
    <div style={divstyle}>
        <MainMapBlock/>
    </div>
);

const wrapper = document.getElementsByClassName("Map");

for (var i = 0; i < wrapper.length; i++) {
    wrapper[i] ? ReactDOM.render(<MKmap />, wrapper[i]) : null;
}

