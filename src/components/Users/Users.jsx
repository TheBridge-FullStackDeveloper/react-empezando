import React from 'react'

const Users = (props) => {
    console.log("props users",props.usersProps)
    // const listItems = numbers.map((number) => <li>{number}</li>);

  return (
    <div>{props.usersProps.map((user) => <p>{user.name} {user.lastName}</p> )}</div>
  )
}

export default Users