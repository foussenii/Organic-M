import React from 'react';
// import './partenaire.css';
import img1 from "./../../public/img/104.png";
import img2 from "./../../public/img/gene.png";
import img3 from "./../../public/img/heart.png";
import img4 from "./../../public/img/upon.png";
import img5 from "./../../public/img/q.png";
import img6 from "./../../public/img/chouette.png";
class Partenaire extends React.Component {

    render() {

        return (
            <div className="partenaire">
                <h1>Nos Partenaires</h1>
                <div className="section">
                    <div className="logo">

                        <div className="logo1">
                            <img className={img1} src="img/104.jpg" alt=""/></div>
                        <div className="logo2">
                            <img className={img2} src="img/gene.png" alt=""/></div>
                        <div className="logo3">
                            <img className={img3} src="img/heart.png" alt=""/></div>
                        <div className="logo4">
                            <img className={img4} src="img/upon.png" alt=""/></div>
                        <div className="logo5">
                            <img className={img5} src="img/q.png" alt=""/></div>
                        <div className="logo6">
                            <img  src="img/chouette.png" alt=""/></div>

                    </div>
                </div>
            </div>
          );
    }
    }
            export default Partenaire;
