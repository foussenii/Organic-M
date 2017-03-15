import React from 'react';
import "./activites.css";
import Cards from "../Cards/Cards.jsx";

class activites extends React.Component{
	render(){

		return(
				<div className="activites">
					<h1> Activités Pédagogiques</h1>
					<Cards/>
				</div>
			);
		}
	}

export default activites;