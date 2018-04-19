import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

const App = () => (
  <DataProvider endpoint="create/api/review/" 
                render={data => <Table data={data} />} />
);

const wrapper = document.getElementById("Main");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
