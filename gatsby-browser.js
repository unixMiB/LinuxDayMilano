/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const onServiceWorkerUpdateReady = () => {
  // Change me to a react toast

  const answer = window.confirm(
    `Il sito è stato aggiornato. ` +
      `Ricaricare per visualizzare la versione aggiornata?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
