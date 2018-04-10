import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

const App = () => (
  <DataProvider endpoint="api/review/" 
                render={data => <Table data={data} />} />
);

const wrapper = document.getElementById("Main");

wrapper ? ReactDOM.render(<App />, wrapper) : null;





// import React from "react"
// import { render } from "react-dom"
// 
// import HomeContainer from "./containers/HomeContainer"
// 
// class App1 extends React.Component {
// 
// 
// 
//   render() {
//     return (
//       <HomeContainer />
//     )
//   }
// }
// 
// render(<App1/>, document.getElementById('App1'))
