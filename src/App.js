import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Navbar from "./Navbar/Navbar.jsx";
import Caroussel from "./Caroussel/Caroussel.jsx";
import Parallax from "./Parallax/Parallax.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Caroussel/>
        <Parallax />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
