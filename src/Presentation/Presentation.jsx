import React from 'react';
import Navbar from "./../Navbar/Navbar.jsx";
import Footer from "./../Footer/Footer.jsx";

class Event extends React.Component{
	render(){

		return(
				<div className="eventContent">
					<Navbar/>
					<div className="prezgrid">
						<h1> OrganicM</h1>
							<p>Organic'M est une entité associative qui regroupe des passionnés du mouvement et des corps : le
corps physique, le corps énergétique et le corps spirituel.<br/>
Par la voie de techniques corporelles unifiantes, qui harmonisent le corps et l'esprit, nous nous
dédions à proposer des espaces d'expérimentation et de développement de la conscience de nos
corps, et des temps de restauration de notre être.<br/>
Via le mouvement vécu en conscience par la respiration, et nourri de l'attention, nous proposons
une pratique adaptée à tous, dans l'horizon d'intégrer la dimension du cœur.<br/>
Nous proposons des initiations et des approfondissements de l'Ashtanga Vinyasa Yoga (incluant
le yoga pré-natal et post-natal, le restauratif yoga) du Qi Gong (incluant les qi gong dynamiques
bouddhistes et taoîstes, le zhi neng qi gong, le nei-gong), de la danse (danse contemporaine) et
du travail postural.<br/>
La transversalité de nos pratiques suscite une dynamique créative pour chacun afin de construire
son propre équilibre physique, émotionnel, mental, et entretenir sa santé.<br/>
Nos propositions à l'adresse des enfants (à partir de 18 mois jusqu'à l'adolescence) nourrissent le
développement psychomoteur, cognitif et intuitif de ces derniers, tout en développant la confiance
en soi, le « care », et la joie.<br/>
Des séances spécifiques parent/enfant en yoga et en danse sont délivrées, ainsi que des
interventions chorégraphiques dans le cadre de créations chorégraphiques pour amateurs.<br/>
Nos intervenants sont qualifiés, diplômés d'état et ont tous un parcours professionnel confirmé
dans leurs disciplines respectives, avec l'intention commune de mettre en relation le corps, le
cœur et le cerveau.</p>
						<p>Les missions d’Organic'M

Organic'M a comme vocation d'amener la danse, le Yoga, le Qi gong, et la création
artistique là où on ne l'attend pas grâce aux différentes approches pour toucher un public
aussi large que possible.<br/>
A travers ces disciplines, l'objectif est de promouvoir le bien-être émotionnel (gestion du
stress, confusions, dépression...), développer les perceptions de soi (estime de soi,
perception et maîtrise de soi...), le bien-être physique et le bien-être perçu (qualité de vie,
sens à la vie...)
Nos formes d'interventions sont:

 Des chantiers artistiques qui conjuguent le travail de création et le travail de

transmission.

 Des projets pédagogiques, artistique et sportif de 3 à 107 ans

 Des projets transgénérationnels pour dépasser les frontières de l’âge et

reconnecter les corps et les esprits.

 Des performances dans des lieux inattendus et des spectacles avec des amateurs

 Des séances d'initiation et de découverte de techniques corporelles

 Des cours hebdomadaires de danse, de yoga et de Qi Gong pour tous publics</p>

<p>Plus spécifiquement, nous proposons des actions d'animation, au sein d'établissements
scolaires, pour les ARE et les TAP, afin de contribuer à la diffusion des valeurs éducatives
des pratiques artistiques et de la pratique physique au sein de l'éducation formelle.<br/>
Nos ateliers pédagogiques artistiques sont variés, et certains sont multidisciplinaires afin
de développer chez l'enfant la curiosité et le sensibiliser à la vie en collectivité.</p>
					</div>
					<Footer/>
				</div>
			);
		}
	}

export default Event;