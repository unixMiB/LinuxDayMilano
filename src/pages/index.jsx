import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import watch from "../assets/watch.svg";
import talks from "../assets/talk-subscription.png";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import SEO from "../components/seo";
import Hero from "../components/hero";

import "swiper/css/pagination";
import 'swiper/css';

const IndexPage = ({ data }) => {
  const isPast = new Date(data.site.siteMetadata.event.date) <= new Date();

  return (
    <Layout>
      <SEO />
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
                  {data.site.siteMetadata.event.topic && (
                    <span>
                      L'edizione {data.site.siteMetadata.event.year} è dedicata
                      {" " + data.site.siteMetadata.event.topic}
                    </span>
                  )}
                </p>
              </div>
            </Container>
          </div>
        </section>

        <section id='schedule'>
          <Container>
            <Row>
              <Col sm='4'>
                <img
                  alt=''
                  className='img-fluid mb-4 mb-sm-0'
                  role='presentation'
                  src={talks}
                />
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
                {data.site.siteMetadata.switches.cfp && (
                  <Button
                    href={data.site.siteMetadata.event.cfp}
                    className='btn-lg'
                    variant='warning'
                  >
                    Presenta un intervento
                  </Button>
                )}
                {data.site.siteMetadata.switches.schedule && (
                  <Button href='/schedule' className='btn-lg' variant='warning'>
                    Guarda il programma
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </section>

        {/* Don't show sponsors section if there are none and submission is closed */}
        {(data.site.siteMetadata.switches.sponsor_submit ||
          !!data.sponsors.nodes.length) && (
          <section id='sponsors'>
            <Container>
              <div className='text'>
                <h2 style={{ textTransform: "uppercase" }}>
                  Sponsors Linux Day Milano
                </h2>
              </div>
            </Container>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
              >
                {data.sponsors.nodes.map((item) => {
                    return (
                        <SwiperSlide>
                          <GatsbyImage width='5rem' image={getImage(item)} />
                        </SwiperSlide>
                    );
                  })}
            </Swiper>
            <Container>
              {data.site.siteMetadata.switches.sponsor_submit && (
                <Row className=''>
                  <Col className='justify-content-center'>
                    <Button className='btn-lg' variant='warning'>
                      Diventa uno sponsor
                    </Button>
                  </Col>
                </Row>
              )}
            </Container>
          </section>
        )}
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    sponsors: allFile(filter: { sourceInstanceName: { eq: "brands" } }) {
      nodes {
        name
        publicURL
        childImageSharp {
          gatsbyImageData(
            quality: 80
            placeholder: NONE
            layout: FULL_WIDTH
            jpgOptions: { progressive: true }
            formats: [AUTO, WEBP, AVIF]
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
          sponsor_submit
        }
      }
    }
  }
`;

export default IndexPage;
