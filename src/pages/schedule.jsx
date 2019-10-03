import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container, Row, Col } from 'react-bootstrap'

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
        title: 'Titolo davvero molto lungo che probabilmente dovrebbe andare a capo',
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
  },{
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

export default () => (
  <Layout>
    <main id="index">
      <div id="hero">
        <p>
          <h1 class="title">
            Linux Day Milano <span>2019</span>
          </h1>
          <h3 class="title">
            unix<span className="unixmib">MiB</span>
          </h3>
          <FontAwesomeIcon icon="calendar" /> Sabato 26 Ottobre 2019
          <br />
          <FontAwesomeIcon icon="clock" /> Ore 9:30
          <br />
          <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
          <br />
          <FontAwesomeIcon icon="chevron-right" /> Edificio U7
        </p>
      </div>
      <section style={{ color: 'black' }}>
        <Container>
          {schedule.map(i => {
            return (
              <Row className="pb-4">
                <Col sm={1} className="pb-4 mr-2">
                  <h5>
                    {i.time}
                  </h5>
                </Col>
                {i.talks.map(t => {
                  return (
                    <Col sm className="pb-4">
                      <div
                        className="border h-100"
                        style={{
                          //   border: '1px solid #e2e2e2',
                          padding: '1rem',
                        }}
                      >
                        <h3>{t.title}</h3>
                        <h6>{t.description}</h6>
                        <h7>{t.author}</h7>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            )
          })}
        </Container>
      </section>
    </main>
  </Layout>
)
