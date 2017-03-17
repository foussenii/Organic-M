import React from 'react';
import logo from "./../../public/img/OM.png";
import { Link } from 'react-router';
import "./intro.css";


class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
          <div className="logo2"><Link to="/home"><img src={logo}/></Link></div>
      </div>
    );
  }
}

export default Intro;