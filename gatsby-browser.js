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

export const onServiceWorkerUpdateReady = () => {
  // Change me to a react toast

  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
