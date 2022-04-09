/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
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
import { config } from "@fortawesome/fontawesome-svg-core";
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
