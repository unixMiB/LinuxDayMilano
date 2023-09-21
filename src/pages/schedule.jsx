import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Seo from "../components/seo";
import Hero from "../components/hero";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

class Talks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.scheduleData,
      required: {
        show: false,
        title: "Titolo",
        description: "Descrizione",
        author: "Autore",
        room: "Aula",
        duration: "Durata",
        slides: "",
        video: "",
      },
    };
    this.replaceModalItem = this.replaceModalItem.bind(this);
  }

  replaceModalItem(item) {
    this.setState({
      required: {
        ...item,
        show: !this.state.required.show,
      },
    });
  }

  render() {
    let modalData = this.state.required;
    return (
      <>
        <Modal
          show={modalData.show}
          onHide={() => {
            this.setState({
              required: {
                ...modalData,
                show: false,
              },
            });
          }}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              {modalData.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalData.description}</p>
            <br />
            <h6>{modalData.author}</h6>
            <Row>
              <Col>{modalData.duration && "Durata: " + modalData.duration}</Col>
              <Col className='text-end'>
                {modalData.room && "Aula: " + modalData.room}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            {!(modalData.video === "" || modalData.video === null) && (
              <Button target='_blank' href={modalData.video} variant='warning'>
                <FontAwesomeIcon
                  icon={icon({
                    name: "video",
                    family: "classic",
                    style: "solid",
                  })}
                />{" "}
                Video
              </Button>
            )}
            {!(modalData.slides === "" || modalData.slides === null) && (
              <Button target='_blank' href={modalData.slides} variant='warning'>
                <FontAwesomeIcon
                  icon={icon({
                    name: "download",
                    family: "classic",
                    style: "solid",
                  })}
                />{" "}
                Slides
              </Button>
            )}
            <Button
              variant='warning'
              onClick={() => {
                this.setState({
                  required: {
                    ...modalData,
                    show: false,
                  },
                });
              }}
            >
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
        {this.state.data.map((i, k) => {
          return (
            <Row key={k} className='pb-4'>
              <Col lg={1} md={12} className='pb-4 mr-2'>
                <h5 className='schedule-time'>{i.time}</h5>
              </Col>
              {i.talks.map((t, u) => {
                return (
                  <Col key={u} sm={12} md className='pb-4'>
                    <div
                      onKeyPress={() => this.replaceModalItem(t)}
                      onClick={() => this.replaceModalItem(t)}
                      className='event border rounded h-100 d-flex flex-column'
                      style={{
                        padding: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      <Row>
                        <Col>
                          <h5>{t.title}</h5>
                        </Col>
                      </Row>
                      <Row className='mt-2'>
                        <Col>
                          <h6>{t.author}</h6>
                        </Col>
                      </Row>
                      <Row className='flex-grow-1 mt-3 align-items-end'>
                        <Col className='text-start'>{t.duration}</Col>
                        <Col className='text-center'>{t.room}</Col>
                        <Col className='text-end'>
                          <FontAwesomeIcon
                            icon={icon({
                              name: "info-circle",
                              family: "classic",
                              style: "solid",
                            })}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </>
    );
  }
}

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

const Page = ({ data }) => {
  const allSchedules = data.allSchedulesYaml.nodes;
  const [schedData, setSchedData] = useState(allSchedules[0]);

  const params = new URLSearchParams(
    typeof window !== "undefined" && window.location.search
  );
  const year = params.get("year");

  useEffect(() => {
    if (year) {
      allSchedules.forEach((i) => {
        if (i.year === year) {
          setSchedData(i);
        }
      });
    }
  }, [year, allSchedules]);

  if ("development" === activeEnv)
    console.log("schedData: " + JSON.stringify(schedData));

  return (
    <Layout>
      <Seo title='Programma' />
      <main id='index'>
        <Hero />
        <section id='calendar' style={{ color: "black" }}>
          <Container>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center align-middle mb-5'>
              <h2 className='text-md-left text-center'>
                Programma della giornata
              </h2>
              <hr />
              {data.site.siteMetadata.switches.year_switcher ? (
                <Dropdown className='d-block d-md-inline d-print-none'>
                  <Dropdown.Toggle
                    className='w-100 w-sm-auto'
                    variant='warning'
                  >
                    Anno {schedData?.year}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {allSchedules.map((s, i) => (
                      <Dropdown.Item
                        key={i}
                        onClick={() => {
                          navigate(
                            typeof window !== "undefined" &&
                              window.location.pathname + "?year=" + s.year
                          );
                          setSchedData(allSchedules[i]);
                        }}
                      >
                        {s.year}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <small className='d-none d-sm-block'>
                  Anno {schedData?.year}
                </small>
              )}
            </div>

            {schedData?.schedule.length ? (
              <Talks
                scheduleData={schedData?.schedule}
                key={schedData?.schedule}
              />
            ) : (
              <div className='text-center py-4'>
                <FontAwesomeIcon
                  style={{ fontSize: "5em" }}
                  icon={icon({
                    name: "person-digging",
                    family: "classic",
                    style: "solid",
                  })}
                  className='pb-2'
                />
                <h3>
                  Ci sono eventi per questa giornata, sono solo in fase di
                  organizzazione.
                </h3>
                <p>
                  Puoi usare il selettore per leggere il programma degli anni
                  precedenti o ricontrolla tra qualche giorno!
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allSchedulesYaml(sort: { order: DESC, fields: year }) {
      nodes {
        year
        schedule {
          time
          talks {
            title
            description
            author
            room
            duration
            slides
            video
          }
        }
      }
    }

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
        }
        switches {
          schedule
          cfp
          year_switcher
        }
      }
    }
  }
`;

export default Page;
