import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true
  }
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser
    })
  }
  render() {
    const { listUser } = this.props;
    console.log(listUser)
    return (

      //props là obj=> properties tài sản
      <div>
        <div>
          <span onClick={() => { this.handleShowHide() }}>Hide ls user</span>
        </div>
        {listUser.map((user) => {
          return (
            <div>
              {this.state.isShowListUser &&
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name} </div>
                  <div>My age's {user.age}</div>
                </div>}
            </div>
          )
        })}
      </div>
    )
  }
}
export default DisplayInfo