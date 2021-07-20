import React, { Component } from "react";
import VariationComponent from "./HomeComponents/VariationComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      <section className="body">
        <div className="container">
          <VariationComponent />
        </div>
      </section>
    );
  }
}
