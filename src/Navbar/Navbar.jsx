import React from 'react';
import "./Navbar.css";
import logo from "./../../public/img/OM.png";

class Navbar extends React.Component{
	render(){

		return(
				<div className="header">
					<div className="navpart1">
						<ul>
							<li>Home</li>
							<li>Présentation</li>
							<li>Disciplines
								<ul>
									<li>Nos disciplines</li>
									<li>Activités pédagogiques</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="logo"><img src={logo}/></div>
					<div className="navpart2">
						<ul>
							<li>Tarifs</li>
							<li>Notre équipe</li>
							<li>Nos partenaires</li>
						</ul>
					</div>
					
				</div>
			);
		}
	}

export default Navbar;