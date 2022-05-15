import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Button, Row, Col, Container } from "react-bootstrap";
import watch from "../assets/watch.png";
import talks from "../assets/talk-subscription.png";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import Hero from "../components/hero";

const IndexPage = ({ data }) => {
  const isPast = new Date(data.site.siteMetadata.event.date) < new Date();

  return (
    <Layout>
      <SEO />
      <main id='index'>
        <Hero small={true} />
        <section id='explore'>
          <div>
            <div className='watch'>
              <img alt='' role='presentation' src={watch} />
            </div>
            <Container className="front">
              <div className="d-flex justify-content-center">
                <p>
                  <h2 style={{ textTransform: "uppercase" }}>
                    Il Linux Day <span>Milano</span> si{" "}
                    {isPast ? "è svolta" : "svolgerà"} il
                    <br />
                    <span>{data.site.siteMetadata.event.text}</span>
                  </h2>
                  <br />
                  Torna la principale manifestazione italiana dedicata a
                  GNU/Linux, al software libero, alla cultura aperta e alla
                  condivisione.
                  <br />
                  <span>
                    L'edizione {data.site.siteMetadata.event.year} è dedicata
                    {" " + data.site.siteMetadata.event.topic}
                  </span>
                </p>
              </div>

            </Container>
          </div>
        </section>

        {data.site.siteMetadata.switches.cfp && (
          <section id='schedule'>
            <Container>
              <Row>
                <Col sm='4'>
                  <img alt='' className="img-fluid" role='presentation' src={talks} />
                </Col>
                <Col sm='8'>
                  <h2 style={{ textTransform: "uppercase" }}>Call for paper</h2>
                  <p>
                    <strong>Ecco in breve alcuni dei nostri talk:</strong>
                    <ul>
                      {data.site.siteMetadata.event.arguments.map((topic) => {
                        return <li>{topic}</li>;
                      })}
                    </ul>
                  </p>
                  <br />

                  <Button
                    href={data.site.siteMetadata.event.cfp}
                    className='btn-lg'
                    variant='warning'
                  >
                    Presenta un intervento
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        {data.site.siteMetadata.switches.schedule && (
          <section id='schedule'>
            <Container>
              <Row>
                <Col sm='4'>
                  <img
                    alt=''
                    src={talks} />
                </Col>
                <Col sm='8'>
                  <h2 style={{ textTransform: "uppercase" }}>Programma</h2>
                  <p>
                    <strong>Ecco in breve alcuni dei nostri talk:</strong>
                    <ul>
                      {data.site.siteMetadata.event.arguments.map((topic) => {
                        return <li>{topic}</li>;
                      })}
                    </ul>
                  </p>
                  <br />

                  <Button href='/schedule' className='btn-lg' variant='warning'>
                    Guarda il programma
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        <section id='sponsors'>
          <Container>
            <div className='text'>
              <h2 style={{ textTransform: "uppercase" }}>
                Sponsors Linux Day Milano
              </h2>
            </div>
            <Row>
              {data.allFile.nodes.map((item) => {
                return (
                  <div className='col-6 col-sm-4 col-md-3 pb-3'>
                    <GatsbyImage
                      width='5rem'
                      fluid={item.childImageSharp.gatsbyImageData}
                    />
                  </div>
                );
              })}
            </Row>
            <Row className="">
              <Col className="justify-content-center">
                <Button>Diventa uno sponsor</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "brands" } }) {
      nodes {
        name
        publicURL
        childImageSharp {
          gatsbyImageData(
            quality: 80
            placeholder: NONE
            layout: FULL_WIDTH
            jpgOptions: { progressive: true }
            formats: [WEBP, PNG]
            avifOptions: { lossless: true }
          )
        }
      }
    }
    site {
      siteMetadata {
        event {
          year: date(formatString: "YYYY")
          time
          date
          topic
          cfp
          arguments
          text: date(formatString: "dddd DD MMMM YYYY", locale: "It")
        }
        contacts {
          email
          website
        }
        switches {
          schedule
          cfp
        }
      }
    }
  }
`;

export default IndexPage;
