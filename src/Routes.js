import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Event from "./Event/Event.jsx";
import Articles from "./Activites/Activites.jsx";
import Disciplines from './Disciplines/Disciplines.jsx';
import Tarif from './Tarif/Tarif.jsx';
import Presentation from './Presentation/Presentation.jsx';
//import Intro from './Intro/Intro.jsx';


const Routes = (props) => (
  <Router {...props}>
  	{/*<Route path="/" component={Intro}/>*/}
    <Route path="/" component={App} />
	<Route path="/event" component={Event} />
	
	<Route path="/disciplines" component={Disciplines} />
	{/*<Route path="/disciplines/danse" component={Danse} />
	<Route path="/disciplines/yoga" component={Yoga} />
	<Route path="/disciplines/qigong" component={Qigong} />*/}
	<Route path="/articles" component={Articles} />
	
	<Route path="/tarifs" component={Tarif} />
	<Route path="/presentation" component={Presentation} />
   </Router>
);


export default Routes;
