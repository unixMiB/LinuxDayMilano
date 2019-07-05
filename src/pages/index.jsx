import React from 'react'
import Layout from '../components/layout'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import watch from '../assets/watch.png'
import talks from '../assets/talk-subscription.png'
import ear from '../assets/ear-piece.png'

const IndexPage = () => (
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
          <FontAwesomeIcon icon="calendar" /> Sabato 27 Ottobre<br />
          <FontAwesomeIcon icon="clock" /> Ore 9:30
          <br />
          <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
          <br />
          <FontAwesomeIcon icon="chevron-right" /> Edificio U7
          <br />
          <Button className="scroll" variant="warning">
            Scopri di più
          </Button>
        </p>
      </div>
      <section id="explore">
        <Container>
          <Row>
            <div className="watch">
              <img src={watch} />
            </div>
            <div class="col-md-offset-1 front text">
              <p>
                <h2>
                  IL LINUX DAY <span>MILANO</span> SI SVOLGERÀ
                <br />
                  <span>SABATO 27 OTTOBRE 2018</span>
                </h2>
                <br />
                Torna la principale manifestazione italiana dedicata a GNU/Linux,
                al software libero, alla cultura aperta e alla condivisione.
              <br />
                <span>
                  Questa edizione è dedicata al mondo dell'educazione Open Source
              </span>
              </p>
            </div>
          </Row>
        </Container>
      </section>
      <section id="schedule">
        <Row>
          <div className="inspire">
            <img src={talks} style={{ maxWidth: '400px', paddingRight: '2rem' }} />
          </div>
          <div className="text" style={{ minWidth: '300px' }}>
            <h2>CALL FOR PAPERS</h2>
            <p>
              Vuoi proporci un tuo talk? Vorresti approfondire un argomento?
          <ul>
                <li>Linux, software e hardware Open Source</li>
                <li>Programmazione e tecniche di sviluppo</li>
                <li>Open Source nel mondo dell'educazione</li>
                <li>Alternative open a software proprietari</li>
                <li>... e molto altro ancora!</li>
              </ul>
              Scrivici una mail al nostro indirizzo:<br /><br />
              <Button size="lg" variant="success" href="mailto:unixmib@gmail.com?subject=Proposta talk Linux Day: Titolo proposta"><FontAwesomeIcon icon="envelope" /> unixmib@gmail.com</Button>
            </p>
          </div>
        </Row>
      </section>
      {/* <section id="sponsors">

      </section> */}
      <section id="contattaci">
        <Container>
          <Row>
            <div id="ear">
              <img src={ear} />
            </div>
            <div class="text front">
              <h3>Contatti</h3>
              <ul>
                <li><FontAwesomeIcon icon="envelope" /> unixmib@gmail.com</li>
                <li><FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca</li>
                <li><FontAwesomeIcon icon="chevron-right" /> Via Bicocca degli Arcimboldi 8</li>
                <li><FontAwesomeIcon icon="chevron-right" /> Edificio U7</li>
                <li><FontAwesomeIcon icon="chevron-right" /> 20126 Milano MI</li>
              </ul>
            </div>
          </Row>
        </Container>
      </section>
      <footer>
        Quest'opera è distribuita con Licenza Creative Commons Attribuzione - <span>Condividi allo stesso modo 4.0 Internazionale</span> - unix<span className="unixmib">MiB</span> 2019
      </footer>

    </main>
  </Layout >
)

export default IndexPage
