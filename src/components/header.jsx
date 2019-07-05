import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = ({ siteData }) => (
  <>
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        margin: '0 auto',
        backgroundColor: siteData.theme,
        marginBottom: '3rem',
      }}
    >
      <Container style={{ maxWidth: 1000 }}>
        <Navbar.Brand className="brand" href="/">LD<span>MI</span> 2019</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/index#evento">Evento</Nav.Link>
            <Nav.Link href="/index#programma">Call for papers</Nav.Link>
            {/* <Nav.Link href="/index#programma">Programma</Nav.Link> */}
            <Nav.Link href="/index#programma">Sponsors</Nav.Link>
            <Nav.Link href="/index#programma">Contati</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default Header
