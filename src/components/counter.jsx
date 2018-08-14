import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "There are no tag!"}
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    return (
      <ul>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
