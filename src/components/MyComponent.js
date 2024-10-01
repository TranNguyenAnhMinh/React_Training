// có 2 cách 
// class component (cũ)
// function component
import React from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
//class component
class MyComponent extends React.Component {
  //tập hợp html xong render
  //JSX
  state = {
    listUser: [
      { id: 1, name: 'Mewmew', age: '16' },
      { id: 2, name: '123', age: '23' },
      { id: 3, name: 'min', age: '60' }
    ]
  }
  handleAddNewUser = (userObj) => {
    console.log(userObj)
    this.setState({
      listUser: [userObj,...this.state.listUser]
    })
  }
  render() {
    return (
      <div>
        <AddUserInfor
          handleAddNewUser={this.handleAddNewUser}
        />
        <br />
        <DisplayInfo
          listUser={this.state.listUser}

        />
      </div>
    )
  }
}
export default MyComponent