import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import watch from '../assets/watch.png';
import talks from '../assets/talk-subscription.png';
import ear from '../assets/ear-piece.png';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
	<Layout>
		<SEO />
		<main id="index">
			<div id="hero">
				<Container>
					<h1 style={{ textTransform: 'uppercase' }} className="title">
						Linux Day Milano <span>{data.allSettingsYaml.nodes[0].settings.eventYear}</span>
					</h1>
					<h3 className="title">
						<small>organizzato da</small>{' '}
						<a
							title="Scopri di più su unixMiB"
							href="https://unixmib.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							unix<span className="unixmib">MiB</span>
						</a>
					</h3>
					<br />
					{data.allSettingsYaml.nodes[0].settings.notify != '' ? (
						<Alert variant={data.allSettingsYaml.nodes[0].settings.notifyType}>
							Finalmente disponibili le registrazioni e le slide al download!{' '}
							<Alert.Link href="/schedule">Apri il programma della giornata</Alert.Link>
						</Alert>
					) : (
						''
					)}

					<div className="subtitle">
						<FontAwesomeIcon icon="calendar" /> {data.allSettingsYaml.nodes[0].settings.eventDateText}
						<br />
						<FontAwesomeIcon icon="clock" /> Ore {data.allSettingsYaml.nodes[0].settings.eventTime}
						<br />
						<FontAwesomeIcon icon="map-marked-alt" />{' '}
						{data.allSettingsYaml.nodes[0].settings.contactsPlaceName}
						<br />
						<FontAwesomeIcon icon="chevron-right" />{' '}
						{data.allSettingsYaml.nodes[0].settings.contactsPlaceBuilding}
						<br />
					</div>
					<Button href="/#explore" className="scroll btn-lg" variant="warning">
						Scopri di più
					</Button>
				</Container>
			</div>

			<section id="explore">
				<Row>
					<div className="watch">
						<img alt="" role="presentation" src={watch} />
					</div>
					<div className="front text">
						<p>
							<h2 style={{ textTransform: 'uppercase' }}>
								Il Linux Day <span>Milano</span> si svolgerà
								<br />
								<span>{data.allSettingsYaml.nodes[0].settings.eventDateText}</span>
							</h2>
							<br />
							Torna la principale manifestazione italiana dedicata a GNU/Linux, al software libero, alla
							cultura aperta e alla condivisione.
							<br />
							<span>
								L'edizione {data.allSettingsYaml.nodes[0].settings.eventYear} è dedicata{' '}
								{data.allSettingsYaml.nodes[0].settings.topic}
							</span>
						</p>
					</div>
				</Row>
			</section>

			{data.allSettingsYaml.nodes[0].settings.cfpEnabled ? (
				<section id="schedule">
					<Container>
						<Row>
							<Col sm="4">
								<img className="img-fluid" alt="" role="presentation" src={talks} />
							</Col>
							<Col sm="8">
								<h2 style={{ textTransform: 'uppercase' }}>Call for paper</h2>
								<p>
									<strong>Ecco in breve alcuni dei nostri talk:</strong>
									<ul>
										{data.allSettingsYaml.nodes[0].settings.topicList.map((topic) => {
											return <li>{topic}</li>;
										})}
									</ul>
								</p>
								<br />

								<Button
									href={data.allSettingsYaml.nodes[0].settings.cfpUrl}
									className="btn-lg"
									variant="warning"
								>
									Presenta un intervento
								</Button>
							</Col>
						</Row>
					</Container>
				</section>
			) : (
				''
			)}

			{data.allSettingsYaml.nodes[0].settings.programEnabled ? (
				<section id="schedule">
					<Container>
						<Row>
							<Col sm="4">
								<img className="img-fluid" alt="" role="presentation" src={talks} />
							</Col>
							<Col sm="8">
								<h2 style={{ textTransform: 'uppercase' }}>Programma</h2>
								<p>
									<strong>Ecco in breve alcuni dei nostri talk:</strong>
									<ul>
										{data.allSettingsYaml.nodes[0].settings.topicList.map((topic) => {
											return <li>{topic}</li>;
										})}
									</ul>
								</p>
								<br />

								<Button href="/schedule" className="btn-lg" variant="warning">
									Guarda il programma
								</Button>
							</Col>
						</Row>
					</Container>
				</section>
			) : (
				''
			)}

			<section id="sponsors">
				<Container>
					<div className="text">
						<h2 style={{ textTransform: 'uppercase' }}>Sponsors Linux Day Milano</h2>
					</div>
					<div className="row">
						{data.allFile.nodes.map((item) => {
							return (
								<div className="col-6 col-sm-4 col-md-3 pb-3">
									<Img width="5rem" fluid={item.childImageSharp.fluid} />
								</div>
							);
						})}
					</div>
				</Container>
			</section>

			<section id="contattaci">
				<Row>
					<div id="ear">
						<img alt="" role="presentation" src={ear} />
					</div>
					<div className="text front">
						<h3>Contatta l'organizzazione</h3>
						<ul>
							<li title="Indirizzo di posta">
								<FontAwesomeIcon icon="envelope" />{' '}
								<a href={'mailto:' + data.allSettingsYaml.nodes[0].settings.contactsEmail}>
									{data.allSettingsYaml.nodes[0].settings.contactsEmail}
								</a>
							</li>
							<li title="Sito web">
								<FontAwesomeIcon icon="globe" />{' '}
								<a href={data.allSettingsYaml.nodes[0].settings.contactsWebsite} title="Sito web">
									{data.allSettingsYaml.nodes[0].settings.contactsWebsite}
								</a>
							</li>
							<li title="Luogo dell'evento">
								<FontAwesomeIcon icon="map-marked-alt" />{' '}
								{data.allSettingsYaml.nodes[0].settings.contactsPlaceName}
							</li>
							<li title="Luogo dell'evento">
								<FontAwesomeIcon icon="chevron-right" />{' '}
								{data.allSettingsYaml.nodes[0].settings.contactsPlaceStreet}
							</li>
							<li title="Luogo dell'evento">
								<FontAwesomeIcon icon="chevron-right" />{' '}
								{data.allSettingsYaml.nodes[0].settings.contactsPlaceBuilding}
							</li>
							<li title="Luogo dell'evento">
								<FontAwesomeIcon icon="chevron-right" />{' '}
								{data.allSettingsYaml.nodes[0].settings.contactsPlaceCAP}
							</li>
						</ul>
					</div>
				</Row>
			</section>
		</main>
	</Layout>
);

export const query = graphql`
	{
		allFile(filter: { sourceInstanceName: { eq: "brands" } }) {
			nodes {
				name
				publicURL
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
		}
		allSettingsYaml {
			nodes {
				settings {
					contactsPlaceCAP
					contactsEmail
					contactsPlaceBuilding
					contactsPlaceName
					contactsPlaceStreet
					contactsWebsite
					eventTime
					eventDate
					eventDateText: eventDate(formatString: "dddd DD MMMM YYYY", locale: "It")
					eventYear: eventDate(formatString: "YYYY")
					notify
					programEnabled
					topic
					topicList
					notifyType
					cfpEnabled
					cfpUrl
				}
			}
		}
	}
`;

export default IndexPage;
