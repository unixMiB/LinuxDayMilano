import React from 'react'
import Layout from '../components/layout'
import { Button, Row, Container, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import watch from '../assets/watch.png'
import talks from '../assets/talk-subscription.png'
import ear from '../assets/ear-piece.png'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <Layout>
    <main id="index">
      <div id="hero">
        <Container>
          <h1 class="title">
            Linux Day Milano <span>2019</span>
          </h1>
          <h3 class="title">
            <small>organizzato da</small> <a href="//unixmib.github.io" target="_blank"  rel="noopener noreferrer">unix<span className="unixmib">MiB</span></a>
          </h3>
          <br/>
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
          <Button href="/#explore" className="scroll btn-lg" variant="warning">
            Scopri di più
          </Button>
        </Container>
      </div>
      <section id="explore">
        <Row>
          <div className="watch">
            <img alt="" role="presentation" src={watch} />
          </div>
          {/* <div class="col-md-offset-1 front text"> */}
          <div class="front text">
            <p>
              <h2>
                IL LINUX DAY <span>MILANO</span> SI SVOLGERÀ
                <br />
                <span>SABATO 26 OTTOBRE 2019</span>
              </h2>
              <br />
              Torna la principale manifestazione italiana dedicata a GNU/Linux,
              al software libero, alla cultura aperta e alla condivisione.
              <br />
              <span>
                L'edizione 2019 è dedicata al mondo dell'Intelligenza
                Artificiale. 
              </span>
            </p>
          </div>
        </Row>
      </section>
      <section id="schedule">
        <Container>
          <Row>
            <div className="col-sm inspire">
              <img
                className="img-fluid"
                alt=""
                role="presentation"
                src={talks}
              />
            </div>
            <div className="col text">
              <h2>PROGRAMMA</h2>
              <p>
                <b style={{'font-size':'1.25rem'}}>
                  Il nostro team di pinguini sta terminando il programma
                  del Linux Day, ricontrolla fra qualche giorno.
                </b>
                <br />
                <br />
                Per ora ecco qualche indizio:
                <br />
                <br />
                <ul>
                  <li>Linux, software e hardware Open Source</li>
                  <li>Machine Learning e Intelligenza Artificiale</li> 
                  <li>Open Source nel mondo dell'Intelligenza Artificiale</li>
                  <li>Alternative open a software proprietari</li>
                  <li>Programmazione e tecniche di sviluppo</li>
                  <li>... e molto altro ancora!</li>
                </ul>
              </p>
              <br />
              <Button href="/programma" disabled="true" className="btn-lg" variant="warning">
                Guarda il programma
              </Button>
            </div>
          </Row>
        </Container>
      </section>
      {/*
      <section id="sponsors">
        <Container>
          <div className="text">
            <h2>SPONSORS Linux Day Milano</h2>
          </div>
          <div class="row">
            {data.allFile.nodes.map(item => {
              return (
                <div class="col-sm-6 col-lg-3 pb-3">
                  <a href={item.publicURL} title={item.name}>
                    <Img width="5rem" fluid={item.childImageSharp.fluid} />
                  </a>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
      */}
      <section id="contattaci">
        <Row>
          <div id="ear">
            <img alt="" role="presentation" src={ear} />
          </div>
          <div class="text front">
            <h3>Contatta l'organizzazione</h3>
            <ul>
              <li title="Indirizzo di posta">
                <FontAwesomeIcon icon="envelope" />{' '}
                <a href="mailto:unixmib@gmail.com">unixmib@gmail.com</a>
              </li>
              <li title="Sito web">
                <FontAwesomeIcon icon="globe" />{' '}
                <a href="https://unixmib.github.io" title="Sito web">
                  unixmib.github.io
                </a>
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon="map-marked-alt" /> Università Milano
                Bicocca
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon="chevron-right" /> Via Bicocca degli
                Arcimboldi 8
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon="chevron-right" /> Edificio U7
              </li>
              <li title="Luogo dell'evento">
                <FontAwesomeIcon icon="chevron-right" /> 20126 Milano MI
              </li>
            </ul>
          </div>
        </Row>
      </section>
      <footer>
        Quest'opera è distribuita con Licenza Creative Commons Attribuzione -{' '}
        <span className="ldmi">
          Condividi allo stesso modo 4.0 Internazionale
        </span>{' '}
        - unix
        <span className="unixmib">MiB</span> 2019
      </footer>
    </main>
  </Layout>
)

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "brands" } }) {
      nodes {
        name
        publicURL
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

export default IndexPage
