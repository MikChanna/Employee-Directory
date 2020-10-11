import React, {Component} from "react";
import Userrow from "../Userrow";
import Header from "../Header";
import API from "../../utils/API";


class SearchResults extends Component {
  state = {
    users:[]
    
  }

  // mounts with 50 employees
  componentDidMount() {
  API.getRandomUsers()
  .then(res => this.setState({ users : res.data.results }))
  .catch(err => console.log(err))
  }

 render() {
  return (
    <div>
      <Header/>
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
