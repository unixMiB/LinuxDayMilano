import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
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
      <Navbar.Brand
        style={{ maxWidth: '5rem' }}
        className="brand"
        href="/#index"
      >
        <Logo className="logo" /> LD<span>MI</span> 2019
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/#explore">Evento</Nav.Link>
          <Nav.Link href="/#schedule">Programma</Nav.Link>
          {/* <Nav.Link href="/index#programma">Programma</Nav.Link> */}
          <Nav.Link href="/#sponsors">Sponsors</Nav.Link>
          <Nav.Link href="/#contattaci">Contatti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Header
