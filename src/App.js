import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Navbar from "./Navbar/Navbar.jsx";
import Caroussel from "./Caroussel/Caroussel.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Caroussel/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
