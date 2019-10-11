import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

const aula_ia = "Ux-xx"
const aula_ot= "Ux-yy"
const aula_mix= "Ux-zz"

const enable = false;

const schedule = [
  {
    time: '9:30',
    talks: [
      {
        title: 'Keynote',
        description: "Apertura del Linux Day e introduzione all'Intelligenza Artificiale",
        author: 'Daniele Barcella, Ilaria Battiston - unixMiB',
        room: aula_ia,
        duration: '60 min'
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
        room: aula_ia,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_ot,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_mix,
        duration: '60 min'
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
        room: '',
        duration: '15 min'
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
        room: aula_ia,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_ot,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_mix,
        duration: '60 min'
      },
    ],
  },
  {
    time: '12:45',
    talks: [
      {
        title: 'Pausa pranzo',
        description: 'Una breve pausa per rinfrescare la mente',
        author: '',
        room: '',
        duration: '1 ora e 15 min'
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
        room: aula_ia,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_ot,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_mix,
        duration: '60 min'
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
        room: aula_ia,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_ot,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_mix,
        duration: '60 min'
      },
    ],
  },
  {
    time: '16:00',
    talks: [
      {
        title: 'Pausa caffé',
        description: 'Una breve pausa per rinfrescare la mente',
        author: '',
        room: '',
        duration: '60 min'
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
        room: aula_ia,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_ot,
        duration: '60 min'
      },
      {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore - Azienda',
        room: aula_mix,
        duration: '60 min'
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
        room: '',
        duration: '60 min'
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
      description: "Breve descrizione del talk",
      room: "Aula",
      duration: "Durata intervento"
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: true,
      title: nextProps.title,
      author: nextProps.author,
      description: nextProps.description,
      room: nextProps.room,
      duration: nextProps.duration
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
          <p>{this.state.description}</p>
          <br/>
          <h6>
            {this.state.author}
          </h6>
          <Row>
            <Col>Durata: {this.state.duration}</Col>
            <Col className="text-right">Aula: {this.state.room}</Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={()=>{this.setState({show:false})}}>Chiudi</Button>
        </Modal.Footer>
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
        room: 'Aula',
        duration: 'Durata'
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
                      <h4>{t.title}</h4>
                      <h6>{t.author}</h6>
                      <Row>
                        <Col>{t.duration}</Col>
                        <Col className="text-right">{t.room}</Col>
                      </Row>
                    </div>
                  </Col>
                )
              })}
            </Row>
          )
        })}
        <DetailView
        title={modalData.title} author={modalData.author} description={modalData.description} room={modalData.room} duration={modalData.duration}/>
      </Container>
    )
  }
}

function Placeholder(props) {
  return(
    <div>
      <Container>
        <h1>Presto disponibile</h1>
        <h6>Il nostro team di pinguini sta terminando il programma del Linux Day, ricontrolla fra qualche giorno.</h6>
      </Container>
    </div>
  )
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
        {enable ? <Talks /> : <Placeholder/>}
      </section>
    </main>
  </Layout>
)
