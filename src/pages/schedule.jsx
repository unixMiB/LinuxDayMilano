import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Modal, Button, Dropdown } from "react-bootstrap";
import SEO from "../components/seo";
import Hero from "../components/hero";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "Titolo talk",
      author: "Relatore",
      description: "Breve descrizione del talk",
      room: "",
      duration: "Durata intervento",
      slides: "",
      video: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: true,
      title: nextProps.title,
      author: nextProps.author,
      description: nextProps.description,
      room: nextProps.room,
      duration: nextProps.duration,
      slides: nextProps.slides,
      video: nextProps.video,
    });
  }

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={() => {
          this.setState({ show: false });
        }}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {this.state.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.state.description}</p>
          <br />
          <h6>{this.state.author}</h6>
          <Row>
            <Col>{this.state.duration && "Durata: " + this.state.duration}</Col>
            <Col className='text-right'>
              {this.state.room && "Aula: " + this.state.room}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {!(this.state.video === "" || this.state.video == null) && (
            <Button target='_blank' href={this.state.video} variant='warning'>
              <FontAwesomeIcon icon='video' /> Video
            </Button>
          )}
          {!(this.state.slides === "" || this.state.slides == null) && (
            <Button target='_blank' href={this.state.slides} variant='warning'>
              <FontAwesomeIcon icon='download' /> Slides
            </Button>
          )}
          <Button
            variant='warning'
            onClick={() => {
              this.setState({ show: false });
            }}
          >
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Talks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.scheduleData,
      required: {
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
      required: item,
    });
  }

  render() {
    let modalData = this.state.required;
    return (
      <>
        {this.state.data.map((i) => {
          return (
            <Row className='pb-4'>
              <Col lg={1} md={12} className='pb-4 mr-2'>
                <h5 className='schedule-time'>{i.time}</h5>
              </Col>
              {i.talks.map((t) => {
                return (
                  <Col sm={12} md className='pb-4'>
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
                        <Col className='text-left'>{t.duration}</Col>
                        <Col className='text-center'>{t.room}</Col>
                        <Col className='text-right'>
                          <FontAwesomeIcon sm={true} icon='info-circle' />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })}
            </Row>
          );
        })}
        <DetailView
          title={modalData.title}
          author={modalData.author}
          description={modalData.description}
          room={modalData.room}
          duration={modalData.duration}
          slides={modalData.slides}
          video={modalData.video}
        />
      </>
    );
  }
}

export default ({ data }) => {
  const allSchedules = data.allSchedulesYaml.nodes;
  const [sched, setSched] = useState(0);
  return (
    <Layout>
      <SEO title='Programma' />
      <main id='index'>
        <Hero />
        <section style={{ color: "black" }}>
          <Container>
            <ThemeToggler>
              {({ theme }) => (
                <div className='d-flex justify-content-between align-items-center align-middle mb-5'>
                  <h2 className={theme === "dark" ? " text-light" : ""}>
                    Programma della giornata
                  </h2>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant={theme === "dark" ? "outline-warning" : "warning"}
                    >
                      Anno {allSchedules[sched]?.year}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {allSchedules.map((s, i) => (
                        <Dropdown.Item key={i} onClick={() => setSched(i)}>
                          {s.year}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}
            </ThemeToggler>

            <Talks scheduleData={allSchedules[sched]?.schedule} />
          </Container>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    schedulesYaml(year: { eq: 2019 }) {
      schedule {
        talks {
          author
          description
          duration
          room
          slides
          title
          video
        }
        time
      }
    }

    allSchedulesYaml(sort: { order: ASC, fields: year }) {
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
        }
      }
    }
  }
`;
