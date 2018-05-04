import React from "react";
import { Table } from 'reactstrap';
import PropTypes from "prop-types";
import shortid from "shortid";


const uuid = shortid.generate;
var i = -1;
function counter() {
  if (i = 2) {
    i = 0;
  } else {
  i = i + 1;
  return i;
  }
}


const theTable = ({ data }) =>  
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <Table>
        <thead>
          <tr>
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
      </Table>
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default theTable;

