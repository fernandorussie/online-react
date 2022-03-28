import React from 'react';
export default class Count extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    const { count } = this.state;
    if (count < 10)
      this.setState({
        count: count + 1,
      });
  };
  remove = () => {
    const { count } = this.state;
    if (count > 0)
      this.setState({
        count: count - 1,
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.remove}>-</button>
      </div>
    );
  }
}
