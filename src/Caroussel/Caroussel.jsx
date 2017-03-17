import React from 'react';
import "./caroussel.css";
import chevron from "./../../public/img/chevron.png";
import { Link } from 'react-router';

const slides=[
	{
		url:"./img/qiqong.jpg",
		title:"Vis ton mouvement, investi ton souffle et rencontre ta liberté"
	},
	{
		url:"./img/2.JPG",
		title:""
	},
	{
		url:"http://www.yoghamsa.com/wp-content/uploads/2016/01/yoga-mer-ponton.jpg",
		title:""
	},
	{
		url:"http://caffeyoga.com/wp-content/uploads/2016/01/beach-yoga1.jpg",
		title:""
	},
]

class Caroussel extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {position:0};
}

	nextSlide(){
		if(this.state.position>=3){
		this.setState({position:0})
	}
	else{
		this.setState({position:++this.state.position})
	}
}
	prevSlide(){
		if(this.state.position<1){
			this.setState({position:0})
		}
		else{
		this.setState({position:--this.state.position})
	}
}

  render() {

// la position est traduite par une margin left de: 0*-400, 1*-400 2*-400 etc
  	let newMargin=this.state.position * -25+'%';
    return (

    <div className="App">
      <div className="wrapCar">
     	<div className="navcontent">
	     	<div className="contact">
	          <div className="triangle"></div>
	          <Link to="/event"><button className="ok" type="button">Events</button></Link>
	        </div>
		     	<div className="prev" onClick={() => this.prevSlide()}><img src={chevron} alt="prev"/></div>
		     	<div className="next" onClick={this.nextSlide.bind(this)}><img src={chevron} alt="next"/></div>
		     		<ul style={{marginLeft:newMargin}}>
	     			
		     		{slides.map(slide=>
		     			<li className="picbox">
		     			{/*<p> {slide.title}</p>*/}
		     		<img src={slide.url} alt="1"/>
		     			</li>
		     		)}
	     			</ul>
	     	</div>
     </div> 	
    </div>
    );
  }
}

export default Caroussel;