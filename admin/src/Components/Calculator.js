import React,{Component} from "react";
import './Cal.css'

class Calculator extends Component {
    constructor(){
      super();
      this.state={
        Result:0
      }
    }
   calculate = () => {
    var x = this.fnumbox.value*1
    var y = this.snumbox.value*1
    var op = this.opbox.value*1
    var z = 0;
  
   switch(op){
    case 1:
      z=x+y;
      break;
  
    case 2:
      z = x-y;
      break;
  
    case 3:
      z = x*y;
      break;
  
    case 4:
      z = x/y;
      break;
  
    case 5:
      z = x%y;
      break;
      default:
   }
   this.setState({Result:z});
   this.clearbox();
    }
    
    clearbox = () =>{
    this.fnumbox.value=""
    this.snumbox.value=""
    }
    render(){
      return(
        <div>
          <div class="navBar">
          <h1>Calculator</h1>
          <input ref={(c)=>(this.fnumbox=c)} placeholder="Enter 1st NO."></input>
          <input ref={(c)=>(this.snumbox=c)} placeholder="Enter 2nd NO."></input>
          <select ref={(c)=>(this.opbox=c)} onChange={this.calculate}>
            <option value="1">Add</option>
            <option value="2">Sub</option>
            <option value="3">Mul</option>
            <option value="4">Div</option>
            <option value="5">Mod</option>
          </select>
          <button onClick={this.calculate} >Submit</button>
          </div>
          <div class="result">
          <h1>Result : {this.state.Result}</h1>
        </div>
        </div>
      )
    }
   }
  
  
  export default Calculator;