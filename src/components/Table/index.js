import React from 'react';
import Userrow from "../Userrow";




function Table(props) {
    return <table className="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Birthday</th>
        <th scope="col">Country</th>
      </tr>
    </thead>
    <tbody>
      {props.user.map(user => (
      <Userrow
      key = {user.registered.date}
      picture = {user.picture.large}
      firstName = {user.name.first}
      lastName = {user.name.last}
      country = {user.location.country}
      email = {user.email}
      birthday = {user.dob.date}
      />
    ))}
    </tbody>
  </table>
}

export default Table;