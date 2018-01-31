import React, { Component } from 'react';
import '../index.css';


class Row extends Component {

  render() {
    return(
      <tr>
        <td>{this.props.data[0]}</td>
        <td>{this.props.data[1]}</td>
      </tr>
    );
}
}

export default Row;
