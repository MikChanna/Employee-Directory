import React from 'react';
import Userrow from "../Userrow";
import "./style.css";




function Table (props) {
    return <div className = "container">
        <table className="table row table-striped">
    <thead>
      <tr>
        <th className="col ">Photo</th>
       
        <th className="col">First Name</th>
      
         <button class="arrowBtn">
             ↑
        </button>
        <button class="arrowBtn">
              ↓
        </button>
        <th className="col">Last Name</th>
        <button class="arrowBtn">
             ↑
        </button>
        <button class="arrowBtn">
              ↓
        </button>
        <th className="col">Email</th>
        <button class="arrowBtn">
             ↑
        </button>
        <button class="arrowBtn">
              ↓
        </button>
        <th className="col">Birthday</th>
        <button class="arrowBtn">
             ↑
        </button>
        <button class="arrowBtn">
              ↓
        </button>
        <th className="col">Country</th>
        <button class="arrowBtn">
             ↑
        </button>
        <button class="arrowBtn">
              ↓
        </button>
        
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
  </div>
}
 

export default Table;