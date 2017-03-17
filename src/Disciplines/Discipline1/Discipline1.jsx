import React from 'react';
import Modal from '../Modal/Modal.jsx';
import Button from '../Modal/Button/Button.jsx';



class Disipline1 extends React.Component {
    render() {
        return (
          <Modal titre={this.props.titre} descriptionC='«Je vous invite, par la voie du Qi Gong/ Nei Gong à équilibrer vos sens et vos facultés afin de renouer et retrouver la conformité avec sa propre nature, humaine et spirituelle.Les moyens de la pratique régulière du corps avec l"exploration de la méditation régulent nos rythmes et modèlent un fonctionnement harmonieux de notre physique, de notre émotionnel et de notre mental. Lastabilisation de la tranquillité et de la paix de l"esprit permet à notre capacité intuitive de guider notre vie. Dans cette nouvelle condition, la confiance en soi et l"ouverture de cœur pourront alors s"exprimer au quotidien » Manolie
          La pratique du Qi Gong développe la qualité de détente physique et de calme intérieur grâce au travail de
          l"attention et de la visualisation. Via le Qi Gong nous nourrissons notre capacité d"attention et de focalisation
          gage d’équilibre émotionnel et psychique. Nous stabilisons le mental à l"instant présent par le biais du souffle. Nos sens sont réveillés ou approfondis en appréhendant les différents aspects et niveaux du travail énergétique. Les mouvements en Qi Gong sont réalisés en douceur et dans un état d’ouverture afin d"accéder au ressenti d"espaces internes spacieux et déliés. La vitalité physique est entretenue, les enchaînements sont conçus pour protéger le système nerveux, réguler et harmoniser le système énergétique du corps.'
          sousCategorieC='Tao Qi Gong'
          sousCategorie='Chi Qi Gong / Ba Dua Jin'
          descriptionSousC='Formes de Qi Gong dynamiques issus du système taoîste et martial dont le rôle est de stimuler le câblage neuro-sensoriel, d"activer les chaînes tendineuses musculaires et d"entretenir la vitalité globale du corps.' openModal={this.props.openModal}/>
        );
    }
}

export default Disipline1;
