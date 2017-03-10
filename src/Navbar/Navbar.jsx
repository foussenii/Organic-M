import React from 'react';
import "./Navbar.css";
import logo from "./../../public/img/OM.png";
import { Link } from 'react-router';

class Navbar extends React.Component{
	render(){

		return(
				<div className="header">
					<div className="wrapHead">
					<div className="navpart1">
						<ul>
							<li>Home</li>
							<li><Link to="/">Présentation</Link></li>
							<li>Disciplines
								<ul>
									<li><Link to="/Disciplines">Nos disciplines</Link></li>
									<li><Link to="/activites">Activités pédagogiques</Link></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="logo"><img src={logo}/></div>
					<div className="navpart2">
						<ul>
							<li>Tarifs</li>
							<li>Notre équipe</li>
							<li><Link to="/partenaire">Nos partenaires</Link></li>
						</ul>
					</div>
					</div>
				</div>
			);
		}
	}

export default Navbar;