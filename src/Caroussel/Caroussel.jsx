import React from 'react';
import "./caroussel.css";
import chevron from "./../../public/img/chevron.png";

const slides=[
	{
		url:"https://vemco.com/wp-content/uploads/2012/09/image-banner2.jpg",
		title:"ma premiere image"
	},
	{
		url:"http://www.w3schools.com/css/img_fjords.jpg",
		title:"ma deuxieme image"
	},
	{
		url:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg",
		title:"ma troisieme image"
	},
	{
		url:"https://vemco.com/wp-content/uploads/2012/09/image-banner2.jpg",
		title:"ma troisieme image"
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
  	let newMargin=this.state.position * -1280;
    return (

    <div className="App">
      <div className="wrapCar">
     	<div className="navcontent">
	     	<div className="prev" onClick={() => this.prevSlide()}><img src={chevron} alt="prev"/></div>
	     	<div className="next" onClick={this.nextSlide.bind(this)}><img src={chevron} alt="next"/></div>
	     		<ul style={{marginLeft:newMargin}}>
     			
	     		{slides.map(slide=>
	     			<li className="picbox">
	     		<img src={slide.url} alt="1"/>
	     		<p> {slide.title} </p>
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