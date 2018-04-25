import React, {Component} from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class fetchName extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.data,
          id: this.props.num,
        };
      }
    render(){
        console.log('rendering');
        console.log(id);
        return(<td><p>{data.map(el => {el[id].name})}</p></td>)}}

fetchName.propTypes = {
  data: PropTypes.array.isRequired
};

export default fetchName;
