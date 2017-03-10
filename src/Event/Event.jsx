import React from 'react';
import Navbar from "./../Navbar/Navbar.jsx";
import Footer from "./../Footer/Footer.jsx";
import contenu from "../Cards/data.js";

class Event extends React.Component{
	render(){

		return(
				<div className="eventContent">
					<Navbar/>
					<div className="grid">
						<h1> Evenements OrganicM</h1>
						{ contenu.activites.map(info =>
					    <div className="omEvent">
					              <img src={info.image} className="img"/>
					              <div className="text">
					                <div className="title">{info.name}</div>
					                <div className="desc">{info.description}</div>
					              </div>
					            </div>
					          )}
					</div>
					<Footer/>
				</div>
			);
		}
	}

export default Event;