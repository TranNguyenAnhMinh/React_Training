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
  handleClick= (event) => {
     console.log(">> clickme");
     console.log("My name is", this.state.name)
    this.setState({
      name:'MewMew'
    })
  }
  handleOnMouseOver(event){
    console.log(event.pageX)
  }
  render() {
    return (
      <div>
        my name is {this.state.name}
        <button onMouseOver={this.handleOnMouseOver}>hold me</button>
        <button onClick={(event) => {this.handleClick(event)}}>click me</button>
      </div>
    )
  }
}
export default MyComponent