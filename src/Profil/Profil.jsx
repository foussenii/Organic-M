import React from 'react';
import './profil.css';
import profil1 from "./../../public/img/usher1.png";
import profil2 from "./../../public/img/usher1.png";


class Profil extends React.Component {

    render() {

        return (
            <div className="profil">
              <h1>Notre Equipe</h1>

              <div className="theme">
                <img className="profil1"
                src="./img/usher1.png" alt=""/>
              <img className= "profil2"
                 src="./img/will-smith1.jpg" alt=""/>

            </div>
          <div className="name">
            <h2 className="name1">Usher</h2>
              <h2 className="name2">Will</h2>
            </div>

                </div>

          );
      }
    }
            export default Profil;
