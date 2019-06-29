import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = ({ siteData }) => (
  <>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant={siteData.navbarVariant}
      style={{
        margin: '0 auto',
        backgroundColor: siteData.theme,
        marginBottom: '3rem'
      }}
    >
      <Container style={{ maxWidth: 1000 }}>
        <Navbar.Brand href="/">{siteData.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="https://kowalski7cc.xyz">My website</Nav.Link>
            <Nav.Link href="https://github.com/kowalski7cc/gatsby-starter-kowalski7cc">
              Fork me
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default Header
