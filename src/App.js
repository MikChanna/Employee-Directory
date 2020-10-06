import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Search from "./pages/Search";
import Results from "./pages/Results";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Results />
    </div>
  );
}

export default App;
