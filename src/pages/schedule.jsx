import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

const schedule = [
  {
    time: '9:30',
    talks: [
      {
        title: 'Keynote',
        description: "Introduzione al Linux Day e all'Intelligenza Artificiale",
        author: 'Daniele Barcella, Ilaria Battiston - unixMiB',
      },
    ],
  },
  {
    time: '10:30',
    talks: [
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
    ],
  },
  {
    time: '11:30',
    talks: [
      {
        title: 'Pausa caffé',
        description: '',
        author: '',
      },
    ],
  },
  {
    time: '11:45',
    talks: [
      {
        title:
          'Titolo davvero molto lungo che probabilmente dovrebbe andare a capo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
    ],
  },
  {
    time: '12:45',
    talks: [
      {
        title: 'Pausa pranzo',
        description: '',
        author: '',
      },
    ],
  },
  {
    time: '14:00',
    talks: [
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
    ],
  },
  {
    time: '15:00',
    talks: [
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
    ],
  },
  {
    time: '16:00',
    talks: [
      {
        title: 'Pausa caffé',
        description: '',
        author: '',
      },
    ],
  },
  {
    time: '16:15',
    talks: [
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
      },
    ],
  },
  {
    time: '17:15',
    talks: [
      {
        title: 'Chiusura',
        description: '',
        author: '',
      },
    ],
  },
]

class DetailView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: "Titolo talk",
      author: "Relatore",
      description: "Breve descrizione del talk"
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: true,
      title: nextProps.title,
      author: nextProps.author,
      description: nextProps.description
    })
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={()=>{this.setState({show:false})}} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.state.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.state.description}</h4>
          <p>
            {this.state.author}
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    )
  }
}

class Talks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      required: {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore',
      }
    }
    this.replaceModalItem = this.replaceModalItem.bind(this)
  }

  replaceModalItem(item) {
    this.setState({
      required: item
    })
  }

  render() {
    let modalData = this.state.required
    return (
      <Container>
        {schedule.map(i => {
          return (
            <Row className="pb-4">
              <Col sm={1} className="pb-4 mr-2">
                <h5>{i.time}</h5>
              </Col>
              {i.talks.map((t) => {
                return (
                  <Col sm className="pb-4">
                    <div
                      onClick={()=>this.replaceModalItem(t)}
                      className="event border h-100"
                      style={{
                        padding: '1rem',
                        cursor: 'pointer',
                      }}
                    >
                      <h3>{t.title}</h3>
                      <h6>{t.description}</h6>
                      <div>{t.author}</div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          )
        })}
        <DetailView
        title={modalData.title} author={modalData.author} description={modalData.description}/>
      </Container>
    )
  }
}

export default () => (
  <Layout>
    <main id="index">
      <div id="hero">
        <Container>
          <h1 className="title">
            Linux Day Milano <span>2019</span>
          </h1>
          <h3 className="title">
            <small>organizzato da</small>{' '}
            <a
              href="//unixmib.github.io"
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
        <Talks />
      </section>
    </main>
  </Layout>
)
