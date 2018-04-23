import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

const MKSearch = () => (
    <div>
    <SearchBar/>
    </div>
);

const wrapper = document.getElementById("searchBar");

wrapper ? ReactDOM.render(<SearchBar />, wrapper) : null;
<<<<<<< HEAD

=======
>>>>>>> 3fd25e762e424a8501fa63a44c1bb009de693be0
