import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import SimpleMap from "./map"
import SimpleMapPage from "./examples/x_events/events_map_page"
import DataProvider from "./DataProvider"
const divstyle = {
    width: '100px',
    height: '100px',
};
const MKmap = () => (
    <div style={divstyle}>
        <EventsMapPage/>
    </div>
);

const wrapper = document.getElementsByClassName("Map");

for (var i = 0; i < wrapper.length; i++) {
    wrapper[i] ? ReactDOM.render(<MKmap />, wrapper[i]) : null;
}

