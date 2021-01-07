import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Button, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            event {
              year: date(formatString: "YYYY")
              time
              text: date(formatString: "dddd DD MMMM YYYY", locale: "It")
            }
            contacts {
              email
              website
              place {
                building
                name
              }
            }
            switches {
              schedule
              cfp
            }
          }
        }
      }
    `
  );

  return (
    <div id='hero'>
      <Container>
        <h1 style={{ textTransform: "uppercase" }} className='title'>
          Linux Day Milano <span>{data.site.siteMetadata.event.year}</span>
        </h1>
        <h3 className='title'>
          <small>organizzato da</small>{" "}
          <a
            title='Scopri di più su unixMiB'
            href='https://unixmib.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            unix<span className='unixmib'>MiB</span>
          </a>
        </h3>

        <div className='subtitle'>
          <FontAwesomeIcon icon='calendar' />{" "}
          {data.site.siteMetadata.event.text}
          <br />
          <FontAwesomeIcon icon='clock' /> Ore{" "}
          {data.site.siteMetadata.event.time}
          <br />
          <FontAwesomeIcon icon='map-marked-alt' />{" "}
          {data.site.siteMetadata.contacts.place.name}
          <br />
          <FontAwesomeIcon icon='chevron-right' />{" "}
          {data.allSettingsYaml.nodes[0].settings.contactsPlaceBuilding}
          <br />
        </div>
        <Button href='/#explore' className='scroll btn-lg' variant='warning'>
          Scopri di più
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
