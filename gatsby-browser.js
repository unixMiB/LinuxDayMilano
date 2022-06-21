/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/main.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faFlag,
  faWrench,
  faBullhorn,
  faShoppingBag,
  faInfoCircle,
  faVideo,
  faCalendar,
  faClock,
  faMapMarkedAlt,
  faChevronRight,
  faEnvelope,
  faDownload,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;
library.add(
  fab,
  faVideo,
  faUsers,
  faFlag,
  faInfoCircle,
  faWrench,
  faDownload,
  faBullhorn,
  faShoppingBag,
  faCalendar,
  faClock,
  faMapMarkedAlt,
  faChevronRight,
  faEnvelope,
  faGlobe
);

// import React
const React = require("react")
const ReactDOM = require('react-dom') 
const Toast = require("react-bootstrap/Toast")
const Button = require('react-bootstrap/Button')

export const onServiceWorkerUpdateReady = () => {
  const toast = (
    <Toast bg="secondary">
      <Toast.Body className='text-white'>
        Una nuova versione della pagina è disponibile.
        <Button onClick={() => { window.location.reload() }}
          size="sm" className="text-uppercase"
          variant="link">Aggiorna</Button>
      </Toast.Body>
    </Toast>
  )
  ReactDOM.render(toast, document.getElementById('root'));
}