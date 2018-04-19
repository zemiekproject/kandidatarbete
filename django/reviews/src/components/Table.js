import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const uuid = shortid.generate;
var i = -1;
function counter() {
  i = i + 1;
  return i;
}


const Table = ({ data }) =>  

  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            {console.log(Object)}
            {console.log(Object.entries)}
            {console.log(Object.entries(data))}
            {console.log(Object.entries(data[0]))}

            {Object.entries(data[0]).map(el => <th key={uuid()}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {counter()}
          {data.map( (el, i) => (
            <tr key={el.id}>
                {Object.entries(el).map(el => <td key={uuid()}><a href={"/reviews/"+data[i].slug+"/"}>{el[1]}</a></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
