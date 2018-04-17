import React from "react";
import ReactDOM from "react-dom";
import Upvotebutton from "./upvotebutton";

const Upvote = () => (
    <div>
    <Upvotebutton endpoint="http://localhost:8000/reviews/api/review/" />
    </div>
);

const wrapper = document.getElementById("upvoter");

wrapper ? ReactDOM.render(<Upvote />, wrapper) : null;
