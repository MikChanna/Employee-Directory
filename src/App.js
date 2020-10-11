import React from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import Searchresults from "./components/Searchresults";
import Footer from "./components/Footer";


function App () {


  return  <div>
  <Jumbotron />
    <Searchbar />
    <Searchresults/>
    <Footer />
</div>

}

export default App;
