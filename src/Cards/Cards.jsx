import React from 'react';
import contenu from "./data.js";
import './cards.css';

class Cards extends React.Component{
	render(){
		return(
			<div className="cards">
					{ contenu.activites.map(info =>
					    <div className="Card">
					              <img src={info.image} className="img"/>
					              <div className="text">
					                <div className="title">{info.name}</div>
					                <div className="desc">{info.description}</div>
					              </div>
					            </div>
					          )}

			</div>
		);
	}
}

export default Cards;