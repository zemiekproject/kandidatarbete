import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import SimpleMap from "./map";
import DataProvider from "./DataProvider";

const MKmap = () => (
    <div>
    <DataProvider endpoint="http://localhost:8000/reviews/api/review/" render={data => <SimpleMap data={data} />} />
    </div>
);

const wrapper = document.getElementsByClassName("Map");


// Varför är det här en for-loop?
// För att den loopar genom alla divvar med klassen "Map" 
for (var i = 0; i < wrapper.length; i++) {
    wrapper[i] ? ReactDOM.render(<MKmap />, wrapper[i]) : null;
}

