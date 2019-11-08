import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import SEO from '../components/seo'

const enableSchedule = true

class DetailView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: 'Titolo talk',
      author: 'Relatore',
      description: 'Breve descrizione del talk',
      room: '',
      duration: 'Durata intervento',
      slides: '',
    }
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
    })
  }

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={() => {
          this.setState({ show: false })
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.state.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.state.description}</p>
          <br />
          <h6>{this.state.author}</h6>
          <Row>
            <Col>Durata: {this.state.duration}</Col>
            {/* <Col className="text-right">Aula: {this.state.room}</Col> */}
            <Col className="text-right">
              {this.state.room === '' ? '' : 'Aula: ' + this.state.room}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {this.state.slides === '' || this.state.slides == null ? (
            ''
          ) : (
            <Button target="_blank" href={this.state.slides} variant="warning">
              <FontAwesomeIcon icon="download" /> Slides
            </Button>
          )}
          <Button
            variant="warning"
            onClick={() => {
              this.setState({ show: false })
            }}
          >
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

class Talks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.scheduleData,
      required: {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore',
        room: 'Aula',
        duration: 'Durata',
        slides: '',
      },
    }
    this.replaceModalItem = this.replaceModalItem.bind(this)
  }

  replaceModalItem(item) {
    this.setState({
      required: item,
    })
  }

  render() {
    let modalData = this.state.required
    return (
      <Container>
        {this.state.data.map(i => {
          return (
            <Row className="pb-4">
              <Col lg={1} md={12} className="pb-4 mr-2">
                <h5 className="schedule-time">{i.time}</h5>
              </Col>
              {i.talks.map(t => {
                return (
                  <Col sm={12} md className="pb-4">
                    <div
                      onClick={() => this.replaceModalItem(t)}
                      className="event border rounded h-100 d-flex flex-column"
                      style={{
                        padding: '1rem',
                        cursor: 'pointer',
                      }}
                    >
                      <Row>
                        <Col>
                          <h5>{t.title}</h5>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <h6>{t.author}</h6>
                        </Col>
                      </Row>
                      <Row className="flex-grow-1 mt-3 align-items-end">
                        <Col className="text-left">{t.duration}</Col>
                        <Col className="text-center">{t.room}</Col>
                        <Col className="text-right">
                          <FontAwesomeIcon sm={true} icon="info-circle" />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                )
              })}
            </Row>
          )
        })}
        <DetailView
          title={modalData.title}
          author={modalData.author}
          description={modalData.description}
          room={modalData.room}
          duration={modalData.duration}
          slides={modalData.slides}
        />
      </Container>
    )
  }
}

function Placeholder(props) {
  return (
    <div id="schedule-placeholder">
      <Container>
        <h1>Presto disponibile</h1>
        <h6>
          Il nostro team di pinguini sta terminando il programma del Linux Day,
          ricontrolla fra qualche giorno.
        </h6>
      </Container>
    </div>
  )
}

export default ({ data }) => (
  <Layout>
    <SEO title="Programma" />
    <main id="index">
      <div id="hero">
        <Container>
          <h1 className="title">
            Linux Day Milano <span>2019</span>
          </h1>
          <h3 className="title">
            <small>organizzato da</small>{' '}
            <a
              href="https://unixmib.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              unix<span className="unixmib">MiB</span>
            </a>
          </h3>
          <br />
          <div className="subtitle">
            <FontAwesomeIcon icon="calendar" /> Sabato 26 Ottobre 2019
            <br />
            <FontAwesomeIcon icon="clock" /> Ore 9:30
            <br />
            <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
            <br />
            <FontAwesomeIcon icon="chevron-right" /> Edificio U7
            <br />
          </div>
        </Container>
      </div>
      <section style={{ color: 'black' }}>
        {enableSchedule ? (
          <Talks scheduleData={data.allScheduleYaml.nodes} />
        ) : (
          <Placeholder />
        )}
      </section>
    </main>
  </Layout>
)

export const query = graphql`
  {
    allScheduleYaml {
      nodes {
        talks {
          title
          slides
          room
          duration
          description
          author
        }
        time
      }
    }
  }
`
