import React from "react";
// import Table from "../Table";
// import API from "../../utils/API";
import "./style.css";



function Search (props) {

    
    return <div className="container">
      <div className = "row">
      <input type="text" className="searchbar col-6" id="searchInput" onChange = {props.handleInputChange}></input>
      <button className="col-4" id="submitSearch" onClick = {props.handleSearchSubmit}>
        Submit
      </button>
      </div>
      </div>
     
  
  

}

export default Search;


