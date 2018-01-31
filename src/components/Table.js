import React, { Component } from 'react';
import '../index.css';
import Row from './Row';

class Table extends Component {

  render() {
    return (
      <div className="Table">
        <table className="MyTable">
          <tbody>
          <tr className="tableHeading">
            <td >Word</td>
            <td >Occurrence</td>
          </tr>
          {this.props.table_data.map((one) => {
            return(
                <Row key = {one[0]} data = {one}/>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
