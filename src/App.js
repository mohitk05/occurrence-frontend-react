import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      response_arr: []
    }
  }

  getDataFromInput = (table_data) => {
    this.setState({
      response_arr: table_data
    });
  }
  render() {
    return (
      <div className="App">
        <Input fromApp = {this.getDataFromInput}/>
        <Table className={!this.state.response_arr.length ? "hidden" : "MyTable"} table_data = {this.state.response_arr} />
        <Footer />
      </div>
    );
  }
}

export default App;
