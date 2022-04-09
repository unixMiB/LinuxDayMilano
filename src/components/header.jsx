import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/logo_simple.svg";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          event {
            year: date(formatString: "YYYY")
          }
          switches {
            schedule
            cfp
          }
        }
      }
    }
  `);

  const year = data.site.siteMetadata.event.year;
  const switches = data.site.siteMetadata.switches;

  return (
    <header>
      <Navbar
        id='navbar'
        collapseOnSelect
        expand='md'
        variant='dark'
        style={{
          backgroundColor: "inherit",
        }}
      >
        <Container>
          <Navbar.Brand style={{ maxWidth: "5rem" }} className='brand' href='/'>
            <img src='Logo' aria-hidden='true' alt='' className='logo' /> LD
            <span>MI {year}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Nav.Link href='/#explore'>Evento</Nav.Link>
              {switches.cfp && (
                <Nav.Link href='/#call-for-papers'>Call for papers</Nav.Link>
              )}
              {switches.schedule && (
                <Nav.Link href='/#schedule'>Programma</Nav.Link>
              )}
              <Nav.Link href='/#sponsors'>Sponsors</Nav.Link>
              <Nav.Link href='/#contattaci'>Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
