// có 2 cách 
// class component (cũ)
// function component
import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
//class component
class MyComponent extends React.Component {
  //tập hợp html xong render
  //JSX
  
  render() {
    return (
      <div>
       <UserInfor/>
       <br/>
       <DisplayInfo name="Min" age="22"/>
      </div>
    )
  }
}
export default MyComponent