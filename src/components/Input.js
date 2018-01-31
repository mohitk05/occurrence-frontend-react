import React, { Component } from 'react';
import '../index.css';
import axios from 'axios';


class Input extends Component {
  constructor(props){
    super();
    this.state = {
      input_num: '',
    };
  }

  changeState(e){
      this.setState({
        input_num: e.target.value
      });
  }

  submitNumber(){
    const url = 'https://occ-node.herokuapp.com/find?num='+ this.state.input_num;
    axios.get(url).then(res => {
      this.props.fromApp(res.data);
    });
  }

  render() {
    let error_msg = 'Huh! Enter a number!';
    return (
      <div className="Input">
        <h2 className="heading">Your number:</h2>
        <input className="myInput" type="text" placeholder="Enter a number" onChange={e => this.changeState(e)}></input>
        <br/><span>{isNaN(this.state.input_num) ? error_msg : ''}</span>
        <br/>
        <button className="button" disabled = {isNaN(this.state.input_num) | !this.state.input_num.trim().length} onClick={this.submitNumber.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default Input;
