import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
<<<<<<< HEAD
import SimpleMap from "./map"
import MainMapBlock from "./examples/x_main/main_map_block"
import DataProvider from "./DataProvider"

const MKmap = () => (
    <div>
        <DataProvider endpoint="reviews/api/review/" 
          render={data => <SimpleMap data={data} />} />
=======
import SimpleMap from "./map";
import DataProvider from "./DataProvider";

const divstyle = {
    width: '100px',
    height: '100px',
};
const MKmap = () => (
    <div>
    <DataProvider endpoint="http://localhost:8000/reviews/api/review/" render={data => <SimpleMap data={data} />} />
>>>>>>> 429f904474865e0d3693a2430de02a0cb3eb5d5b
    </div>
);

const wrapper = document.getElementsByClassName("Map");


// Varför är det här en for-loop?
// För att den loopar genom alla divvar med klassen "Map" 
for (var i = 0; i < wrapper.length; i++) {
    wrapper[i] ? ReactDOM.render(<MKmap />, wrapper[i]) : null;
}

