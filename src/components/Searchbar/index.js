import React from "react";


function Searchbar() {
  
  return <div className = "row">
    <input type="text" className="searchbar" id="searchInput"></input>
    <button className="column" id="submitSearch">
      Submit
    </button>
    </div>
  

}

export default Searchbar;
