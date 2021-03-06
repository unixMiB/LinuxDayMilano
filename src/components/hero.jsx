import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ small }) => {
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
              website
              place {
                building
                name
              }
            }
          }
        }
      }
    `
  );

  const metadata = data.site.siteMetadata;

  return (
    <div id='hero'>
      <Container>
        <h1 style={{ textTransform: "uppercase" }} className='title'>
          Linux Day Milano <span>{metadata.event.year}</span>
        </h1>
        <h3 className='title pb-3'>
          <small>organizzato da</small>{" "}
          <a
            title='Scopri di più su unixMiB'
            href={metadata.contacts.website}
            target='_blank'
            rel='noopener noreferrer'
          >
            unix<span className='unixmib'>MiB</span>
          </a>
        </h3>
        <div className='subtitle'>
          <FontAwesomeIcon icon='calendar' /> {metadata.event.text}
          <br />
          <FontAwesomeIcon icon='clock' /> Ore {metadata.event.time}
          <br />
          <FontAwesomeIcon icon='map-marked-alt' />{" "}
          {metadata.contacts.place.name}
          <br />
          <FontAwesomeIcon icon='chevron-right' />{" "}
          {metadata.contacts.place.building}
          <br />
        </div>
        {small && (
          <>
            <Button
              href='/#explore'
              className='scroll btn-lg'
              variant='warning'
            >
              Scopri di più
            </Button>{" "}
            <Button
              href='/schedule'
              className='scroll btn-lg'
              variant='warning'
            >
              Programma
            </Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default Hero;
