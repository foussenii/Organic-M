import React from 'react';
import logo from "./../../public/img/OM.png";
import { Link } from 'react-router';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
          <div className="logo2"><Link to="/home"><img src={logo}/></Link></div>
      </div>
    );
  }
}

export default Intro;