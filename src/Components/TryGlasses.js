import React, { Component } from "react";
import Header from "./HeaderComponents/Header";
import Home from "./HomeComponents/Home";

export default class TryGlasses extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
