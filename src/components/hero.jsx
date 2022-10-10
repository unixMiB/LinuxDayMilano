import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "react-bootstrap/Alert";

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
            switches {
              schedule
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
    <div className='hero'>
      <Container>
        <Alert variant='warning'>
          A causa di problemi organizzativi, l'evento è stato spostato
          nell'edificio U6, presso la Piazza dell'Ateneo
        </Alert>
        {small && (
          <Alert variant='success'>
            Finalmente disponibile online il programma dell'edizione 2022!
          </Alert>
        )}
        <h1 style={{ textTransform: "uppercase" }} className='mb-0 title'>
          Linux Day Milano <span className='ldmi'>{metadata.event.year}</span>
        </h1>
        <h4 className='pb-3 pb-sm-5 title'>
          <small>
            organizzato da{" "}
            <a
              title='Scopri di più su unixMiB'
              href={metadata.contacts.website}
              target='_blank'
              className='unixmib text-white'
              rel='noopener noreferrer'
            >
              <span className='unix'>unix</span>
              <span className='mib'>MiB</span>
            </a>
          </small>
        </h4>
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
          <div className='mt-5 gx-5 d-flex flex-wrap justify-content-start clearfix'>
            <Button
              href='/#explore'
              size='lg'
              className='m-1'
              variant='warning'
            >
              Scopri di più
            </Button>
            <Button
              href='/schedule'
              size='lg'
              className='m-1'
              variant='warning'
            >
              {metadata.switches.schedule
                ? "Guarda il programma"
                : "Programma precedente"}
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Hero;
