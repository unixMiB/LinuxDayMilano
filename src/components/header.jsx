import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from "@assets/foot.svg";
import { default as siteMetadata } from "@assets/siteMetadata.yml";

const Header = ({ allSchedulesYaml }) => {
  const year = siteMetadata.event.date.getFullYear();
  const organizer = siteMetadata.organizer;
  const switches = siteMetadata.switches;
  const previousYear = allSchedulesYaml.map((node) => node.data.year)[1];
  const params = switches.schedule
    ? ""
    : "?" + new URLSearchParams({ year: previousYear });

  return (
    <>
      <Navbar
        id='navbar'
        collapseOnSelect
        expand='sm'
        variant='dark'
        style={{
          backgroundColor: "inherit",
        }}
      >
        <Container>
          <Navbar.Brand className='brand d-flex align-items-center' href='/'>
            <img
              src={Logo.src}
              style={{ fontSize: "1.5em", height: "1em" }}
              aria-hidden='true'
              alt=''
              className='logo me-2 svg-inline--fa'
            />
            LD
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
                <Nav.Link href='/#schedule'>Call for papers</Nav.Link>
              )}
              <Nav.Link href={`/schedule/${params}#calendar`}>
                {switches.schedule ? "Programma" : "Programma precedente"}
              </Nav.Link>
              <Nav.Link href='/codeofconduct'>Code of Conduct</Nav.Link>
              {switches.sponsors && (
                <Nav.Link href='/#sponsors'>Patrocini e sponsor</Nav.Link>
              )}
              <Nav.Link href='/#contattaci'>Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
