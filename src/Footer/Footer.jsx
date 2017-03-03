import React from 'react';
import './footer.css';
import img1 from "./../../public/img/twit.png"
import img2 from "./../../public/img/fb.png"
import img3 from "./../../public/img/insta.png"
import img4 from "./../../public/img/youtb.png"
import img5 from "./../../public/img/mail.png"

class Footer extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="items1">
                    <a href="#">
                        <img className="twit" src={img1} alt=""/>
                    </a>
                </div>
                <div className="items2">
                    <a href="#">
                        <img className="facebook" src={img2} alt=""/>
                    </a>
				</div>
                <div className="items3">
                    <a href="#">
                        <img className="instagram" src={img3} alt=""/>
                    </a>
				</div>
                <div className="items4">
                    <a href="#">
                        <img className="youtube" src={img4} alt=""/>
                    </a>
				</div>
                <div className="items5">
                    <a href="#">
                        <img className="mail" src={img5}alt=""/>
                    </a>
                </div>
                <div className="fin">
                    <h2>2017- Organic M</h2>
                </div>
  			</div>
            );
		}
	}
export default Footer;
