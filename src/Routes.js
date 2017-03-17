import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Event from "./Event/Event.jsx";
import Activites from "./Activites/Activites.jsx";
import Disciplines from './Disciplines/Disciplines.jsx';
import Partenaire from './Partenaire/Partenaire.jsx';
import Tarif from './Tarif/Tarif.jsx';
import Presentation from './Presentation/Presentation.jsx';
import Intro from './Intro/Intro.jsx';


const Routes = (props) => (
  <Router {...props}>
  	<Route path="/" component={Intro}/>
    <Route path="/home" component={App} />
	<Route path="/event" component={Event} />
	<Route path="/disciplines" component={Disciplines} />
	<Route path="/activites" component={Activites} />
	<Route path="/partenaire" component={Partenaire} />
	<Route path="/tarifs" component={Tarif} />
	<Route path="/presentation" component={Presentation} />
   </Router>
);


export default Routes;
