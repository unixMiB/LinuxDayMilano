import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../assets/logo_simple.svg';

const Header = () => {
	const data = useStaticQuery(graphql`
		{
			allSettingsYaml {
				nodes {
					settings {
						eventYear: eventDate(formatString: "YYYY")
						programEnabled
						cfpEnabled
					}
				}
			}
		}
	`);
	return (
		<header>
			<Navbar
				id="navbar"
				collapseOnSelect
				expand="md"
				variant="dark"
				style={{
					backgroundColor: 'inherit'
				}}
			>
				<Container>
					<Navbar.Brand style={{ maxWidth: '5rem' }} className="brand" href="/">
						<Logo className="logo" /> LD<span>MI</span> {data.allSettingsYaml.nodes[0].settings.eventYear}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav>
							<Nav.Link href="/#explore">Evento</Nav.Link>
							{data.allSettingsYaml.nodes[0].settings.cfpEnabled ? (
								<Nav.Link href="/#call-for-papers">Call for papers</Nav.Link>
							) : (
								''
							)}
							{data.allSettingsYaml.nodes[0].settings.programEnabled ? (
								<Nav.Link href="/#schedule">Programma</Nav.Link>
							) : (
								''
							)}
							<Nav.Link href="/#sponsors">Sponsors</Nav.Link>
							<Nav.Link href="/#contattaci">Contatti</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
