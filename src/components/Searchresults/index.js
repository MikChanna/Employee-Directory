import React, {Component} from "react";
import users from "../../../src/user.json";
import Userrow from "../Userrow";

class SearchResults extends Component {
  state = {
    users
  }


 render() {
  return (
    <div>
    {this.state.users.map(user => (
      <Userrow
      picture = {user.picture.large}
      firstName = {user.name.first}
      lastName = {user.name.last}
      country = {user.location.country}
      email = {user.email}
      birthday = {user.dob.date}
      />
    ))}
    </div>
   
  );
}
}

export default SearchResults;
