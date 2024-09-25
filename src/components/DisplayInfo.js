import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUser } = this.props;
    console.log(listUser)
    return (

      //props là obj=> properties tài sản
      <div>
        {listUser.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name} </div>
              <div>My age's {user.age}</div>
            </div>
          )
        })}
        {/* <div>My name's {name}</div>
        <div>My age's  {age}</div> */}
      </div>
    )
  }
}
export default DisplayInfo