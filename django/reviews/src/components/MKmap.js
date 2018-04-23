import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import SimpleMap from "./map"
import DataProvider from "./DataProvider"

const MKmap = () => (
    <div>
        <DataProvider endpoint="http://localhost/reviews/api/review/"
        render = { data => <SimpleMap data={data}/>}/>
    </div>
);

const wrapper = document.getElementsByClassName("Map");

// Varför är det här en for-loop?
for (var i = 0; i < wrapper.length; i++) {
    wrapper[i] ? ReactDOM.render(<MKmap />, wrapper[i]) : null;
}
