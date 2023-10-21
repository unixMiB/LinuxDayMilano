import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => (
  <div className='d-flex flex-column' style={{ minHeight: "100vh" }}>
    <Header />
    <div className='container-fluid flex-grow-1' style={{ padding: 0 }}>
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
