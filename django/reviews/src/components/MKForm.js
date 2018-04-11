import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

const MKForm = () => (
    <Form endpoint="api/review/" />
);

const wrapper = document.getElementById("ReviewForm");

wrapper ? ReactDOM.render(<MKForm />, wrapper) : null;
