// có 2 cách 
// class component (cũ)
// function component
import React from "react";
import UserInfor from "./UserInfo";
//class component
class MyComponent extends React.Component {
  //tập hợp html xong render
  //JSX
  
  render() {
    return (
      <div>
       <UserInfor/>
      </div>
    )
  }
}
export default MyComponent