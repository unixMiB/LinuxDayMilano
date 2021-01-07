import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";
import ear from "../assets/ear-piece.png";

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            contacts {
              place {
                name
                street
                building
                cap
              }
              email
              website
            }
          }
        }
      }
    `
  );

  return (
    <footer>
      <section id='contattaci'>
        <Row>
          <div id='ear'>
            <img alt='' role='presentation' src={ear} />
          </div>
          <div className='text front mt-5 ml-5'>
            <h3>Contatta l'organizzazione</h3>
            <ul>
              <li title='Indirizzo di posta'>
                <FontAwesomeIcon icon='envelope' />{" "}
                <a href={"mailto:" + site.siteMetadata.contacts.email}>
                  {site.siteMetadata.contacts.email}
                </a>
              </li>
              <li title='Sito web'>
                <FontAwesomeIcon icon='globe' />{" "}
                <a href={site.siteMetadata.contacts.website} title='Sito web'>
                  {site.siteMetadata.contacts.website}
                </a>
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon='map-marked-alt' />{" "}
                {site.siteMetadata.contacts.place.name}
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon='chevron-right' />{" "}
                {site.siteMetadata.contacts.place.street}
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon='chevron-right' />{" "}
                {site.siteMetadata.contacts.place.building}
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon='chevron-right' />{" "}
                {site.siteMetadata.contacts.place.cap}
              </li>
            </ul>
          </div>
        </Row>
      </section>
      <section className='section-license text-center align align-middle'>
        Quest'opera è distribuita con Licenza Creative Commons Attribuzione -{" "}
        <span className='ldmi'>
          Condividi allo stesso modo 4.0 Internazionale
        </span>{" "}
        - unix
        <span className='unixmib'>MiB</span> {new Date().getFullYear()}
      </section>
    </footer>
  );
};

export default Footer;
