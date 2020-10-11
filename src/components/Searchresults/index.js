import React, {Component} from "react";
import userData from "./src/userData";
import UserRow from "./components/UserRow";

class SearchResults extends Component {
  state = {
    userData
  }


 render() {
  return (
    <div>
    {this.state.userData.map(user => (
      <UserRow
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
