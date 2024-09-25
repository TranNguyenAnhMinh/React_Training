// có 2 cách 
// class component (cũ)
// function component
import React from "react";

//class component
class MyComponent extends React.Component{
  //tập hợp html xong render
  //JSX
  state = {
    name: 'Min',
    address: 'dalala',
    age:20
  }

  render(){
    return (
      <div> 
        my name is {this.state.name}
      </div>
    )
  }
}
export default MyComponent