import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call to refresh the list
    }
  }

  componentWillUnmount() {
    console.log("Component will un mount");
  }
  // State is Local to class

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // } use arrow key => bind

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // }; to simple experssion check OnClick

  // this.props is input to this component

  render() {
    // console.log("Props", this.props);
    // Note props childern renders h4
    console.log("Counter- Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
