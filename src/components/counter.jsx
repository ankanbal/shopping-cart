import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(this.product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = (product) => {
    //console.log(this.product);
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
