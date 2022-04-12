
import "tachyons";

import CardList from "./components/CardList";
import Searchbox from "./components/Searchbox";

import React, { Component } from "react";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '' 
    };
  }

  onChangeInput = async (val) => {
    await this.setState({searchfield:val})
  };

  componentDidMount =() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({robots : users})
    })
  }
  render() {
    const filteredRobot =  this.state.robots.filter((robot) =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="App tc">
        <h1>This is a Robot App</h1>
        <Searchbox onChangeInput={this.onChangeInput} />
        <CardList robots={filteredRobot} />
      </div>
    );
  }
}
