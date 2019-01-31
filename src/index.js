import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "0",
        total: 0,
        operations: [],
        decimalCount: 0,
        output: false
      }
      this.numberClick = this.numberClick.bind(this);
      this.addClick = this.addClick.bind(this);
      this.subtractClick = this.subtractClick.bind(this);
      this.multiplyClick = this.multiplyClick.bind(this);
      this.divideClick = this.divideClick.bind(this);
      this.equalsClick = this.equalsClick.bind(this);
      this.clearClick = this.clearClick.bind(this);
    };
    numberClick(num) {
      if (num == 0 && this.state.input[0] == 0) {
        this.setState ({  
            input: this.state.input
        })
      }
      else if (this.state.input[0] == 0 && this.state.input.length == 1) {
        if (num == ".") {
          this.setState ({
            input: this.state.input + num,
            decimalCount: this.state.decimalCount + 1
          })
        }
        else {
          this.setState ({
            input: num
          })
        }
      }
      else if (num == ".") {
        if (this.state.decimalCount == 0) {
          this.setState ({
            input: this.state.input + num,
            decimalCount: this.state.decimalCount + 1
          })
        }
        else {
          this.setState ({
              input: this.state.input
          })
        }
      }
      else {
        this.setState ({
          input: this.state.input + num
        })
      }
    };
    addClick() {
      let array = [...this.state.operations];
      array.push(parseFloat(this.state.input));
      array.push("+");
      console.log(array);
      this.setState ({
        operations: array,
        decimalCount: 0,
        input: ""
      });
    };
    subtractClick() {
      let array = [...this.state.operations];
      array.push(parseFloat(this.state.input));
      array.push("-");
      console.log(array);
      this.setState ({
        operations: array,
        decimalCount: 0,
        input: ""
      });
    };
    multiplyClick() {
      let array = [...this.state.operations];
      array.push(parseFloat(this.state.input));
      array.push("x");
      console.log(array);
      this.setState ({
        operations: array,
        decimalCount: 0,
        input: ""
      });
    };
    divideClick() {
      let array = [...this.state.operations];
      array.push(parseFloat(this.state.input));
      array.push("/");
      console.log(array);
      this.setState ({
        operations: array,
        decimalCount: 0,
        input: ""
      });
    };
    equalsClick() {
      let array = [...this.state.operations];   
      array.push(parseFloat(this.state.input));
      console.log(array);
      let total = this.state.operations[0]; 
      for (let i = 0; i < array.length; i++) {
        if (array[i] == "+" && !isNaN(array[i+1]) && !isNaN(array[i-1])) {
          total = total + array[i+1];
        }
        else if (array[i] == "-" && !isNaN(array[i+1]) && !isNaN(array[i-1])) {
          total = total - array[i+1];
        }
        else if (array[i] == "x" && !isNaN(array[i+1]) && !isNaN(array[i-1])) {
          total = total * array[i+1];
        }
        else if (array[i] == "/" && !isNaN(array[i+1]) && !isNaN(array[i-1])) {
          total = total / array[i+1];
        }
        else if (isNaN(array[i-2]) && (typeof array[i-2] != "string") && !isNaN(array[i])) {
          if (array[i-1] == "+") {
            total = total + array[i];
          }
          else if (array[i-1] == "-") {
            total = total - array[i];
          }
          else if (array[i-1] == "x") {
            total = total * array[i];
          }
          else if (array[i-1] == "/") {
            total = total / array[i];
          }
        }
      }
      console.log(total);
      this.setState ({
        total: total,
        output: true
      }); 
    };
    clearClick() {
      this.setState ({
        input: "0",
        total: 0,
        decimalCount: 0,
        operations: [],
        output: false
      });
    };
    render() {
      return (
         <div id="calculator">
          <div id="display">{this.state.output ? this.state.total : this.state.input}</div>
          <div id="number-div">
            <button class="number" id="one" onClick={this.numberClick.bind(this, "1")}>1</button>
            <button class="number" id="two" onClick={this.numberClick.bind(this, "2")}>2</button>
            <button class="number" id="three" onClick={this.numberClick.bind(this, "3")}>3</button>
            <button class="number" id="four" onClick={this.numberClick.bind(this, "4")}>4</button>
            <button class="number" id="five" onClick={this.numberClick.bind(this, "5")}>5</button>
            <button class="number" id="six" onClick={this.numberClick.bind(this, "6")}>6</button>
            <button class="number" id="seven" onClick={this.numberClick.bind(this, "7")}>7</button>
            <button class="number" id="eight" onClick={this.numberClick.bind(this, "8")}>8</button>
            <button class="number" id="nine" onClick={this.numberClick.bind(this, "9")}>9</button>
            <button class="number" id="zero" onClick={this.numberClick.bind(this, "0")}>0</button>
            <button class="number" id="decimal" onClick={this.numberClick.bind(this, ".")}>.</button>
          </div>
          <div id="operator-div">
            <button id="add" onClick={this.addClick.bind(this,)}>+</button>
            <button id="subtract" onClick={this.subtractClick.bind(this,)}>-</button>
            <button id="multiply" onClick={this.multiplyClick.bind(this,)}>x</button>
            <button id="divide" onClick={this.divideClick.bind(this,)}>/</button>
            <button id="equals" onClick={this.equalsClick.bind(this,)}>=</button>
            <button id="clear" onClick={this.clearClick}>C</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<Calculator/>, document.getElementById("root"));
  
  export default Calculator;