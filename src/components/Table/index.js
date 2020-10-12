import React from 'react';
import Userrow from "../Userrow";
import "./style.css";
import moment from "moment";



function Table (props) {
    return <div className = "container">
        <table className="table row table-striped">
    <thead>
      <tr>
        <th className="col ">Photo</th>
       
        <th className="col">First Name</th>
      
    
        <th className="col">Last Name</th>
       
        <th className="col">Email</th>
       
        <th className="col">Birthday</th>
      
        <th className="col">Country</th>
     
        
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
      birthday = {moment(user.dob.date).format('MMMM Do')}
      />
    ))}
    </tbody>
  </table>
  </div>
}
 

export default Table;