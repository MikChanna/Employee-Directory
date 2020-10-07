import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Searchresults from "../components/Searchresults";
import Footer from "../components/Footer";

function Main() {
  return (
    <div>
      <Container>
        <Navbar />
        <Searchbar />
        <Button />
        <Searchresults />
        <Footer />
      </Container>
    </div>
  );
}

export default Main;
