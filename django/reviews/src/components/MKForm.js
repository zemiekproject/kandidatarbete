import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import SimpleMap from "./map"
import DataProvider from "./DataProvider";

const MKForm = () => (
    <div>
    <Form endpoint="http://localhost:8000/reviews/create/api/review/" />
    <SimpleMap />
    </div>
);

const wrapper = document.getElementById("ReviewForm");

wrapper ? ReactDOM.render(<MKForm />, wrapper) : null;
