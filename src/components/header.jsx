import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../assets/logo_simple.svg'

const Header = ({ siteData }) => (
  <>
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: siteData.theme,
      }}
    >
      <Navbar.Brand style={{ maxWidth: '5rem' }} className="brand" href="/">
        <Logo className="logo" /> LD<span>MI</span> 2019
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/index#evento">Evento</Nav.Link>
          <Nav.Link href="/index#programma">Call for papers</Nav.Link>
          {/* <Nav.Link href="/index#programma">Programma</Nav.Link> */}
          <Nav.Link href="/index#programma">Sponsors</Nav.Link>
          <Nav.Link href="/index#programma">Contatti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Header
