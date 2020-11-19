import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      sort_method: 'none'
    }
  }

  handleChange= (e) => {
    this.setState(
      {
        sort_method: e.target.value
      }
    )
  }
  sendHogs = () => {
    let method = this.state.sort_method
    if (method === "none") {
      return this.state.hogs
    }
    if (method === "greased") {
      return this.state.hogs.filter(hog => {
        return hog.greased === true
      })
    }
    if (method === "weight") {
      return this.state.hogs.sort((a,b) => (a.weight < b.weight) ? 1 : -1)
    }
    if (method === "name") {
      return this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
    }
  }

  render() {
    console.log(this.state.hogs)
    return (
      <div className="App">
        <Nav handleChange={this.handleChange}/>
        <HogContainer hogs={this.sendHogs()}/>
      </div>
    );
  }
}

export default App;
