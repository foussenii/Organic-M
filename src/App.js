import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';

import Partenaire from './Partenaire/Partenaire.jsx';

import Navbar from "./Navbar/Navbar.jsx";
import Caroussel from "./Caroussel/Caroussel.jsx";
import Parallax from "./Parallax/Parallax.jsx";
import Activites from "./Activites/Activites.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">





        <Navbar />
        <Caroussel/>

        <Parallax />
        <Activites />

        <Partenaire/>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
