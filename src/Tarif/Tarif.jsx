import React from 'react';
import Navbar from "./../Navbar/Navbar.jsx";
import Footer from "./../Footer/Footer.jsx";

class Event extends React.Component{
	render(){

		return(
				<div className="eventContent">
					<Navbar/>
					<div className="tarifgrid">
						<h1> Nos tarifs</h1>
					</div>
					<Footer/>
				</div>
			);
		}
	}

export default Event;