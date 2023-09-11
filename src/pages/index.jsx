import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import watch from "../assets/watch.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Hero from "../components/hero";

const IndexPage = ({ data }) => {
  const isPast = new Date(data.site.siteMetadata.event.date) <= new Date();

  return (
    <Layout>
      <Seo />
      <main id='index'>
        <Hero small={true} />
        <section id='explore'>
          <div>
            <div className='watch'>
              <img
                alt=''
                className='img-fluid'
                role='presentation'
                src={watch}
                style={{ height: "316px", width: "256px" }}
              />
            </div>
            <Container className='front' style={{ position: "sticky" }}>
              <div className='d-flex justify-content-center'>
                <div className='col-lg-7'>
                  {" "}
                  {/* TODO FIX ME */}
                  <h2 style={{ textTransform: "uppercase" }}>
                    Il Linux Day <span>Milano</span> si{" "}
                    {isPast ? "è svolto" : "svolgerà"} il
                    <br />
                    <span>{data.site.siteMetadata.event.text}</span>
                  </h2>
                  <p>
                    Torna la principale manifestazione italiana dedicata a
                    GNU/Linux, al software libero, alla cultura aperta e alla
                    condivisione.
                    <br />
                    Al Linux Day Milano potrai trovare tanti talk,
                    presentazioni, workshop inerenti a tantissimi temi
                    interessanti per gli appassionati di Linux, Software Libero,
                    e tanto altro!
                  </p>
                  <p>
                    {data.site.siteMetadata.event.topic && (
                      <span>
                        L'edizione {data.site.siteMetadata.event.year} è
                        dedicata
                        {" " + data.site.siteMetadata.event.topic}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section id='schedule'>
          <Container>
            <Row>
              <Col sm='4'>
                <GatsbyImage
                  alt=''
                  className='img-fluid mb-4 mb-sm-0'
                  role='presentation'
                  image={getImage(data.talk_subscription_image)}
                />
              </Col>
              <Col sm='8'>
                {data.site.siteMetadata.switches.cfp ? (
                  <h2 style={{ textTransform: "uppercase" }}>Call for paper</h2>
                ) : (
                  <h2 style={{ textTransform: "uppercase" }}>
                    Programma della giornata
                  </h2>
                )}

                {data.site.siteMetadata.switches.cfp && (
                  <>
                    <p>
                      Abbiamo aperto la call-for-speakers! Ecco cosa devi sapere
                      se vuoi presentare qualcosa al Linux Day Milano.
                    </p>
                    <p>
                      Siamo interessati a tutti i generi di talk e presentazioni
                      inerenti (anche in piccola parte) al mondo Linux, del
                      Software Libero e dello Sviluppo Software Open Source.
                    </p>
                    <p>
                      Alcuni argomenti che piacciono a chi viene al Linux Day:
                      Linux, Software Libero, Sviluppo Software, Machine
                      Learning, Big Data, Self-hosting, Privacy, Retro Gaming,
                      Storia dell'informatica, Do It Yourself ...
                    </p>
                    <p>
                      Sei anche il benvenuto se vuoi presentare un tuo progetto
                      o mostrare una tua invenzione.
                    </p>
                    <p>Per tutti i dettagli prosegui al link qui sotto.</p>
                    <p className='fw-bold'>
                      Deadline{" "}
                      {new Date("2023-09-21").toLocaleDateString("it-IT", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>

                    {data.site.siteMetadata.event.cfp ? (
                      <Button
                        href={data.site.siteMetadata.event.cfp}
                        className='btn-lg'
                        variant='warning'
                      >
                        Presenta un intervento
                      </Button>
                    ) : (
                      <Button className='btn-lg' variant='warning' disabled>
                        Presto disponibile
                      </Button>
                    )}
                  </>
                )}
                <br />
                <br />
                <Button
                  className='btn-lg'
                  variant='warning'
                  href='https://survey.linux.it/index.php/443825'
                >
                  Richiedi uno stand
                </Button>
                {data.site.siteMetadata.switches.schedule && (
                  <>
                    <p>
                      <strong>Ecco in breve alcuni dei nostri talk:</strong>
                      <ul>
                        {data.site.siteMetadata.event.arguments.map((topic) => {
                          return <li>{topic}</li>;
                        })}
                      </ul>
                    </p>{" "}
                    <Button
                      href='/schedule'
                      className='btn-lg'
                      variant='warning'
                    >
                      Guarda il programma
                    </Button>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </section>

        <section id='sponsors'>
          <Container className='py-5'>
            <h2 style={{ textTransform: "uppercase" }}>Sponsor dell'evento</h2>
            <Row className='mb-3'>
              {data.brandsYaml.sponsors.map((item, index) => {
                return (
                  <Col
                    key={index}
                    className='align-self-start col-6 col-sm-4 col-md-3 pb-2 pb-sm-3'
                  >
                    <a href={item.website}>
                      <GatsbyImage
                        alt={item.name}
                        title={item.name}
                        width='5rem'
                        image={getImage(item.logo)}
                      />
                    </a>
                  </Col>
                );
              })}
            </Row>
            <h2 style={{ textTransform: "uppercase" }}>Con i patrocini di</h2>
            <Row className='mb-3'>
              {data.brandsYaml.patrocini.map((item) => {
                return (
                  <Col className='align-self-start col-6 col-sm-4 col-md-3 pb-2 pb-sm-3'>
                    <a href={item.website}>
                      <GatsbyImage
                        alt={item.name}
                        title={item.name}
                        width='5rem'
                        image={getImage(item.logo)}
                      />
                    </a>
                  </Col>
                );
              })}
            </Row>
            <h2 style={{ textTransform: "uppercase" }}>Parlano di noi</h2>
            {data.brandsYaml.referrals.map((item) => {
              return (
                <Row>
                  <Col className='align-self-start col-6 col-sm-4 col-md-3 pb-2 pb-sm-3'>
                    <a href={item.website}>
                      <GatsbyImage
                        alt={item.name}
                        title={item.name}
                        width='5rem'
                        image={getImage(item.logo)}
                      />
                    </a>
                  </Col>
                  <Col className='align-self-start col-12 col-md-6 pb-2 pb-sm-3'>
                    <figure>
                      <blockquote class='blockquote'>
                        <p>{item.comment}</p>
                      </blockquote>
                      <figcaption class='blockquote-footer'>
                        {item.author}
                      </figcaption>
                    </figure>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    brandsYaml {
      patrocini {
        name
        website
        logo {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              placeholder: NONE
              layout: FULL_WIDTH
              jpgOptions: { progressive: true, quality: 80 }
              avifOptions: { lossless: true }
              webpOptions: { quality: 80 }
              blurredOptions: { toFormat: AUTO }
              pngOptions: { quality: 80 }
              breakpoints: [156, 216, 296, 356, 416, 512, 620, 710]
            )
          }
        }
      }
      sponsors {
        name
        website
        logo {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              placeholder: NONE
              layout: FULL_WIDTH
              jpgOptions: { progressive: true, quality: 80 }
              avifOptions: { lossless: true }
              webpOptions: { quality: 80 }
              blurredOptions: { toFormat: AUTO }
              pngOptions: { quality: 80 }
              breakpoints: [156, 216, 296, 356, 416, 512, 620, 710]
            )
          }
        }
      }
      referrals {
        comment
        name
        website
        author
        logo {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              placeholder: NONE
              layout: FULL_WIDTH
              jpgOptions: { progressive: true, quality: 80 }
              avifOptions: { lossless: true }
              webpOptions: { quality: 80 }
              blurredOptions: { toFormat: AUTO }
              pngOptions: { quality: 80 }
              breakpoints: [156, 216, 296, 356, 416, 512, 620, 710]
            )
          }
        }
      }
    }

    talk_subscription_image: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "talk-subscription.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          quality: 80
          placeholder: NONE
          layout: FULL_WIDTH
          jpgOptions: { progressive: true, quality: 80 }
          avifOptions: { lossless: true }
          webpOptions: { quality: 80 }
          blurredOptions: { toFormat: AUTO }
          pngOptions: { quality: 80 }
          breakpoints: [156, 216, 296, 356, 416, 512, 620]
        )
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
          sponsor_submit
        }
      }
    }
  }
`;

export default IndexPage;
