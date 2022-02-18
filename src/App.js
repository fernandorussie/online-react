import React from 'react';
export default class Calc extends React.Component {
  state = {
    num1: '',
    num2: '',
    result: '',
    sinal: '',
  };

  handleChange = (ev) => {
    this.setState({
      num1: Number(ev.target.value),
    });
  };
  handleChange2 = (ev) => {
    this.setState({
      num2: Number(ev.target.value),
    });
  };
  sub = () => {
    let { num1, num2, result } = this.state;
    // this.setState({
    //   result: (num1 && num2) !== null ? num1 + num2 : result,
    //   sinal: '-',
    // }) 
    if (this.state.num1 && this.state.num2 != null) {
      this.setState({
        result: this.state.num1 - this.state.num2,
        sinal: '-',
      });
    }else{
      this.setState({
        result: "nenhum valor foi digitado"
      })
    }
  };
  mult = () => {
    if (this.state.num1 && this.state.num2 != null) {
      this.setState({
        result: this.state.num1 * this.state.num2,
        sinal: 'x',
      });
    }else{
      this.setState({
        result: "nenhum valor foi digitado"
      })
    }
  };
  div = () => {
    let { num1, num2, result } = this.state;
    if (num1 && num2 != null) {
      this.setState({
        result: num1 / num2,
        sinal: '/',
      });
    }else{
      this.setState({
        result: "nenhum valor foi digitado"
      })
    }
  };
  soma = () => {
    if (this.state.num1 && this.state.num2 != null) {
      this.setState({
        result: this.state.num1 + this.state.num2,
        sinal: '+',
      });
    }else{
      this.setState({
        result: "nenhum valor foi digitado"
      })
    }
  };
  media = () => {
    let {result} = this.state
    if (this.state.num1 && this.state.num2 != null) {
      this.setState({
        result: (this.state.num1 + this.state.num2) / 2,
        sinal: '+',
      });
    }else{
      this.setState({
        result: "nenhum valor foi digitado"
      })
    }
  };
  porcen = () => {
    if (this.state.num1 && this.state.num2 != null) {
      this.setState({
        result: (this.state.num1 + this.state.num2) / 100,
        sinal: '%',
      });
    }else{
      this.setState({
        result: "nenhum valor foi digitado"
      })
    }
  };
  clear = () => {
    this.setState({
      num1: '',
      num2: '',
      result: '',
      sinal: '',
    });
  };
  render() {
    const { sub, mult, div, soma, clear, media, porcen } = this;
    const { result } = this.state;
    return (
      <div>
        <h1>Calculadora</h1>
        <input onChange={this.handleChange} value={this.state.num1} />
        <input onChange={this.handleChange2} value={this.state.num2} />
        <button onClick={sub}>-</button>
        <button onClick={mult}>x</button>
        <button onClick={div}>/</button>
        <button onClick={soma}>+</button>
        <button onClick={clear}>C</button>
        <button onClick={media}>Media</button>
        <button onClick={porcen}>%</button>
        <div>
          <h3>
            {this.state.num1} {this.state.sinal} {this.state.num2}
          </h3>
          <h2>{result}</h2>
        </div>
      </div>
    );
  }
}
