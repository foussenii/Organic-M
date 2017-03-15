import React from 'react';
import './contact.css';
import img1 from "./../../public/img/OM.png"


class Contact extends React.Component {

    render() {

        return (
          <div className="contact">
            <header className="header">

                  <img id="maquette" src="OM.png" alt="" />
                  <br>
              <header/>
              <section>

                  <h1 class="contact">Nous contacter</h1>


                  <form class="form" action="contact.html" method="post">
                      <div class="nom">
                          <label for="nom"></label>
                          <input type="text" name="user_name" id="name" placeholder="name(obligatoire)"/>
                      </div>
                      <div class="courrier">
                          <label for="courrier"></label>
                          <input type="email" name="user_email" id="mail" placeholder="email(obligatoire)"/>
                      </div>
                      <div class="message">
                          <label for="message"></label>
                          <textarea id="messeng" name="user_message" placeholder="message"></textarea>

                      </div>
                      <div class="button">
                          <button type="submit" name="button"/>envoyer votre message</button>
                      </div>
                      <p>Votre adresse de messagerie ne sera pas publiée </p>
                  </form>
              </section>
              <footer class="fin">
                  <h2 class="end"> 2017- Organic M</h2>
              </footer>

                </div>


            );
		}
	}
export default Contact;
