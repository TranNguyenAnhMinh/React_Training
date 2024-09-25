// có 2 cách 
// class component (cũ)
// function component
import React from "react";

//class component
class MyComponent extends React.Component {
  //tập hợp html xong render
  //JSX
  state = {
    name: 'Min',
    address: 'dalala',
    age: 20
  }
  handleClick(event) {
     console.log(">> clickme");
    
  }
  handleOnMouseOver(event){
    console.log(event)
  }
  render() {
    return (
      <div>
        my name is {this.state.name}
        <button onMouseOver={this.handleOnMouseOver}>click me</button>
        <button onClick={this.handleClick}>click me</button>
      </div>
    )
  }
}
export default MyComponent