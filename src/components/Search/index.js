import React, {Component} from "react";
import Userrow from "../Userrow";
import Header from "../Header";
import API from "../../utils/API";
import "./style.css";

class Search extends Component {
  state = {
    search: "",
    users:[]
    
  }

  // mounts with 50 employees
  componentDidMount() {
  API.getRandomUsers()
  .then(res => this.setState({ users : res.data.results }))
  .catch(err => console.log(err))
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value })
  
  }

   handleSearchSubmit = event => {
    event.preventDefault();
    
    const filtered = this.state.users.filter(item =>
      item.name.first.toLowerCase().includes(this.state.search.toLowerCase()) 
      || item.name.last.toLowerCase().includes(this.state.search.toLowerCase())
      || item.email.toLowerCase().includes(this.state.search.toLowerCase())
      || item.location.country.toLowerCase().includes(this.state.search.toLowerCase())
    )
    this.setState({ users: filtered})
    };



  render() {
    
    return <div>
      <div className="row">
      <input type="text" className="searchbar col-6" id="searchInput" onChange = {this.handleInputChange}></input>
      <button className="col-4" id="submitSearch" onClick = {this.handleSearchSubmit}>
        Submit
      </button>
      </div>
      <Header/>
      {this.state.users.map(user => (
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
      </div>
  }
  

}

export default Search;


