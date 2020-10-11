import React from "react";
import "./style.css"

function Jumbotron() {
  return <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: '#2ecc71'}}>
  <div className="container">
    <h1 className="display-4">Employee Directory</h1>
    <p className="lead">Search employees by first name, last name, email address...</p>
  </div>
</div>
}

export default Jumbotron;
