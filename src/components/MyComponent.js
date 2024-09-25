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
  state ={
    listUser: [
      {id:1,name:'Mewmew',age:'51'},
      {id:2,name:'123',age:'23'},
      {id:3,name:'min',age:'20'}
    ]
  }
  render() {
    return (
      <div>
       <UserInfor/>
       <br/>
       <DisplayInfo listUser={this.state.listUser}/>
      </div>
    )
  }
}
export default MyComponent