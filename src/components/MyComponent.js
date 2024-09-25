// có 2 cách 
// class component (cũ)
// function component
import React from "react";

//class component
class MyComponent extends React.Component{
  //tập hợp html xong render
  //JSX
  render(){
    return (
      <div> my first component
        { Math.random()}
      </div>
    )
  }
}
export default MyComponent