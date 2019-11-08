import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => (
  <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
    <Header />
    <div className="container-fluid flex-grow-1" style={{ padding: 0 }}>
      {children}
    </div>
    <footer className="text-center align align-middle">
      Quest'opera è distribuita con Licenza Creative Commons Attribuzione -{' '}
      <span className="ldmi">
        Condividi allo stesso modo 4.0 Internazionale
      </span>{' '}
      - unix
      <span className="unixmib">MiB</span> 2019
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
