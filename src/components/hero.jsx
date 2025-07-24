import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Alert from "react-bootstrap/Alert";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Hero = ({ small }) => {
  const data = useStaticQuery(graphql`
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

      allSchedulesYaml(sort: { order: DESC, fields: year }) {
        nodes {
          year
        }
      }
    }
  `);

  const metadata = data.site.siteMetadata;

  const previousYear = data.allSchedulesYaml.nodes.map((node) => node.year)[1];
  const params = data.site.siteMetadata.switches.schedule
    ? ""
    : "?" + new URLSearchParams({ year: previousYear });

  return (
    <div
      style={{
        position: "relative",
        color: "black",
      }}
    >
      <StaticImage
        style={{
          filter: "brightness(0.4)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        src='../assets/images/hero.jpg'
        formats={["auto", "avif", "webp"]}
        layout='fullWidth'
        aspectRatio={3 / 1}
        alt=''
        aria-hidden='true'
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container className='hero'>
          {/* {small && (
            <Alert variant='info'>
              <Alert.Heading>
                <FontAwesomeIcon
                  className='me-3'
                  icon={icon({
                    name: "circle-info",
                    family: "classic",
                    style: "solid",
                  })}
                />
                Pubblicate le slide dei talk
              </Alert.Heading>
              <hr />
              <p>
                Finalmente sono disponibili le slide dei talk che si sono tenuti
                durante il Linux Day Milano 2023. Puoi trovarle nella sezione{" "}
                <a href='/schedule'>programma</a>.
              </p>
            </Alert>
          )} */}
          <h1 style={{ textTransform: "uppercase" }} className='mb-0 title'>
            Linux Day Milano <span className='ldmi'>{metadata.event.year}</span>
          </h1>
          <h4 className='pb-3 pb-sm-5 title'>
            <small>
              organizzato da{" "}
              <a
                title='Scopri di più su POuL'
                href={metadata.contacts.website}
                target='_blank'
                className='unixmib text-white'
                rel='noopener noreferrer'
              >
                <span className='ldmi'>POuL</span>
              </a>
            </small>
          </h4>
          <div className='subtitle'>
            <FontAwesomeIcon
              icon={icon({
                name: "calendar",
                family: "classic",
                style: "solid",
              })}
            />{" "}
            {metadata.event.text}
            <br />
            <FontAwesomeIcon
              icon={icon({ name: "clock", family: "classic", style: "solid" })}
            />{" "}
            Ore {metadata.event.time}
            <br />
            <FontAwesomeIcon
              icon={icon({
                name: "map-marked-alt",
                family: "classic",
                style: "solid",
              })}
            />{" "}
            {metadata.contacts.place.name}
            <br />
            <FontAwesomeIcon
              icon={icon({
                name: "chevron-right",
                family: "classic",
                style: "solid",
              })}
            />{" "}
            {metadata.contacts.place.building}
            <br />
          </div>
          {small && (
            <div className='mt-5 gx-5 d-flex flex-wrap justify-content-start clearfix'>
              <Button
                href='/#explore'
                as={Link}
                size='lg'
                className='m-1'
                variant='warning'
              >
                Scopri di più
              </Button>
              <Button
                as={Link}
                href={`/schedule/${params}#calendar`}
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
    </div>
  );
};

export default Hero;
