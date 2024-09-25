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
     // merge state
    this.setState({
      name:'MewMew',
      age:Math.floor((Math.random()*100)+1)
    })
  }
  // handleOnMouseOver(event){
  //   console.log(event.pageX)
  // }
handleOnChangeInput = (event) =>{
this.setState({
  name: event.target.value
})
}
handleOnSubmit =(event)=>{
 event.preventDefault();
 console.log(this.state)
}
  render() {
    return (
      <div>
        my name is {this.state.name} and   my age is {this.state.age}
      <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
        <input 
        type="text"
        onChange={(event)=> this.handleOnChangeInput(event)}
        /> 
        <button>Submit</button>
      </form>
      </div>
    )
  }
}
export default MyComponent