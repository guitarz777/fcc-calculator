import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "./calculator.css";

class Calculator extends Component {
  state = {
    entry: 0,
    result: 0,
    operation: "",
    num1: null,
    disp: false,
    opCount: 0
  };

  /*
  calculate function is called anytime an operator button or equals button is pressed
  it checks the state of operation and performs the appropriate action
  if the state of operation is '' it is assumed to be the first number in a new
  equation and num1 is assigned the entry value
  if there is a number in num1 it represents a new equation and will perform the action on
  num1 instead of the old result
  after each instance of calculate inside of a handle event is called, the handle
  event then sets state.operation to the operation called

*/

  calculate = () => {
    switch (this.state.operation) {
      case "ADD":
        this.setState({
          result: this.state.num1
            ? parseFloat(this.state.num1) + parseFloat(this.state.entry)
            : parseFloat(this.state.result) + parseFloat(this.state.entry)
        });
        break;
      case "SUBTRACT":
        this.setState({
          result: this.state.num1
            ? parseFloat(this.state.num1) - parseFloat(this.state.entry)
            : parseFloat(this.state.result) - parseFloat(this.state.entry)
        });
        break;
      case "MULTIPLY":
        this.setState({
          result: this.state.num1
            ? parseFloat(this.state.num1) * parseFloat(this.state.entry)
            : parseFloat(this.state.result) * parseFloat(this.state.entry)
        });
        break;
      case "DIVIDE":
        this.setState({
          result: this.state.num1
            ? parseFloat(this.state.num1) / parseFloat(this.state.entry)
            : parseFloat(this.state.result) / parseFloat(this.state.entry)
        });
        break;
      default:
        this.setState({
          num1: this.state.entry
        });
    }
  };

  //append numbers to entry. should not add meaninglingless 0's to beggining, should only accept
  //one decimal per entry, should change disp to false in order to display the entry rather than
  //the result, resets opCount to tell the program to be ready for the next operation
  handleClicked = e => {
    if (this.state.entry === 0 || this.state.disp === true) {
      this.setState({
        entry: e.target.value,
        disp: false
      });
    } else {
      this.setState({
        entry: this.state.entry.concat(e.target.value).replace(/^0+/, "0")
      });
    }
    this.setState({
      opCount: 0
    });
  };

  /*
the handle opperation functions set the state of the opperation to the correct action,
resets the entry
*/
  handleAdd = () => {
    this.calculate();
    this.setState({
      operation: "ADD",
      entry: 0
    });
    if (
      this.state.operation !== "" &&
      this.state.num1 !== null &&
      this.state.opCount < 1
    ) {
      this.setState({
        num1: null
      });
    }
    this.setState({
      opCount: this.state.opCount + 1,
      disp: true
    });
  };

  handleSubtract = () => {
    this.calculate();
    this.setState({
      operation: "SUBTRACT",
      entry: 0
    });
    if (
      this.state.operation !== "" &&
      this.state.num1 !== null &&
      this.state.opCount < 1
    ) {
      this.setState({
        num1: null
      });
    }
    this.setState({
      opCount: this.state.opCount + 1,
      disp: true
    });
  };

  handleMultiply = () => {
    this.calculate();
    this.setState({
      operation: "MULTIPLY",
      entry: 0
    });
    if (
      this.state.operation !== "" &&
      this.state.num1 !== null &&
      this.state.opCount < 1
    ) {
      this.setState({
        num1: null
      });
    }
    this.setState({
      opCount: this.state.opCount + 1,
      disp: true
    });
  };

  handleDivide = () => {
    this.calculate();
    this.setState({
      operation: "DIVIDE",
      entry: 0
    });
    if (
      this.state.operation !== "" &&
      this.state.num1 !== null &&
      this.state.opCount < 1
    ) {
      this.setState({
        num1: null
      });
    }
    this.setState({
      opCount: this.state.opCount + 1,
      disp: true
    });
  };

  handleClear = () => {
    this.setState({
      entry: 0,
      result: 0,
      num1: null,
      operation: ""
    });
  };

  handleEquals = () => {
    this.calculate();
    this.setState({
      entry: 0,
      operation: "",
      disp: true
    });
  };

  render() {
    return (
      <div id="calculator">
        <div id="logo">
          <h6>JKC Instruments</h6>
        </div>
        <div id="screen">
          {/*<div>operation: {this.state.operation}</div> */}
          {/*<div>Result: {this.state.result}</div>*/}
          <div id="display">
            {this.state.disp
              ? parseFloat(this.state.result.toFixed(4)) //maintain accuracy to 4 digits and parseFloat removes insignificant 0's
              : this.state.entry}
          </div>
          {/*<div>Num1: {this.state.num1}</div>*/}
        </div>
        <div id="keyPad">
          <Button bsStyle="danger" onClick={this.handleClear} id="clear">
            C
          </Button>
          <Button bsStyle="primary" onClick={this.handleDivide} id="divide">
            /
          </Button>
          <Button bsStyle="primary" onClick={this.handleMultiply} id="multiply">
            *
          </Button>
          <Button bsStyle="primary" onClick={this.handleSubtract} id="subtract">
            -
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="seven"
            value={7}
          >
            7
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="eight"
            value={8}
          >
            8
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="nine"
            value={9}
          >
            9
          </Button>
          <Button bsStyle="primary" onClick={this.handleAdd} id="add">
            +
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="four"
            value={4}
          >
            4
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="five"
            value={5}
          >
            5
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="six"
            value={6}
          >
            6
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="one"
            value={1}
          >
            1
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="two"
            value={2}
          >
            2
          </Button>
          <Button
            onClick={this.handleClicked}
            className="num"
            id="three"
            value={3}
          >
            3
          </Button>
          <Button onClick={this.handleClicked} id="zero" value={0}>
            0
          </Button>
          <Button
            onClick={this.handleClicked}
            disabled={/\./.test(this.state.entry)}
            id="decimal"
            value={"."}
          >
            .
          </Button>
          <div>
            <Button bsStyle="success" onClick={this.handleEquals} id="equals">
              =
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
