import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/foot.svg";

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

      allSchedulesYaml(sort: { order: DESC, fields: year }) {
        nodes {
          year
        }
      }
    }
  `);

  const year = data.site.siteMetadata.event.year;
  const switches = data.site.siteMetadata.switches;

  const previousYear = data.allSchedulesYaml.nodes.map((node) => node.year)[1];
  const params = switches.schedule
    ? ""
    : "?" + new URLSearchParams({ year: previousYear });

  return (
    <header className='d-print-none'>
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
              src={Logo}
              style={{ fontSize: "1.5em" }}
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
              <Nav.Link href='/#sponsors'>Patrocini</Nav.Link>
              <Nav.Link href='/#contattaci'>Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
