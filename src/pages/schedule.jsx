import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

const aula_ia = 'U7-03'
const aula_ot = 'U7-04'
const aula_mix = 'U7-05'

const enable = true

const schedule = [
  {
    time: '9:30',
    talks: [
      {
        title: 'Keynote',
        description:
          "Apertura del Linux Day e introduzione all'Intelligenza Artificiale",
        author: 'Daniele Barcella, Ilaria Battiston - unixMiB',
        room: aula_ia,
        duration: '60 min',
      },
    ],
  },
  {
    time: '10:30',
    talks: [
      {
        title: 'Machine Data - Machines are talking. Are you listening?',
        description:
          'Analisi dei machine-data ovvero dei dati generati dalle macchine al fine di semplificare le attività di operations, troubleshooting e anche le attività BAU (Business As Usual).',
        author: 'Francesco Fresta',
        room: aula_ia,
        duration: '60 min',
      },
      {
        title:
          'Open Hardware, Software Libero e Stampa 3D attrattori "Farfalla" del PowerPC Notebook project',
        description:
          "Un modesto progetto Open Hardware di una scheda madre PowerPC per notebook  portato avanti da volontari e autofinanziato potrebbe generare indirettamente importanti cambiamenti nell'industria dell' elettronica, inducendo un \"Effetto Farfalla\". Open Hardware, Software Libero e Stampa 3D hanno rimescolato le carte del cambiamento nell'industria elettronica; sono un'opportunità per decentralizzare e democratizzare la produzione elettronica, il sapere e distribuire uniformemente i fattori di vantaggio che generano. Vedremo esempi concreti come la progettazione della scheda madre OSWH PowerPC Notebook con licenza Open Hardware Cern, la creazione pacchetti Debian PowerPC a 64 bit e l'uso di Blender e FreeCad per la progettazione dello chassis Open Hardware.",
        author: 'Roberto Innocenti',
        room: aula_ot,
        duration: '60 min',
      },
      {
        title: 'La Unix Way e i metodi per produrre software',
        description:
          "Scrivere applicazioni per mestiere non è più una disciplina individuale da molte decadi: piuttosto è un gioco di squadra, team. William Deming, celebre statistico, dimostrò che il 90% dei risultati ottenuti in azienda sono determinati da processi e metodi in uso, ancor prima che dalle prestazioni individuali: il \"genio\" individuale è sopravvalutato. Oggi la tecnologia rappresenta una grande opportunità per le imprese ma coniugarne lo sviluppo all'agilità e all'affidabilità dei processi non è facile. Negli anni metodi e metodologie sono evoluti radicalmente, ma il Free Software e l'Open Source hanno sempre regalato contributi determinanti. Con l'acronimo KISS (Keep It Simple and Stupid) si evoca un modo di fare software antico: la Unix Way. Declinata oggi nel mondo Linux da migliaia di tecnici e organizzazioni, include assunti come modularità, semplicità, composizione e chiarezza nel fare. Tra gli esempi? GNU/Linux, e git. Una panoramica sui metodi, dalla Crisi del Software degli anni '60 fino ai metodi Agili e DevOps.",
        author: 'Fabio Mora',
        room: aula_mix,
        duration: '60 min',
      },
    ],
  },
  {
    time: '11:30',
    talks: [
      {
        title: 'Pausa caffé',
        description: 'Una breve pausa per rinfrescare la mente',
        author: '',
        room: '',
        duration: '15 min',
      },
    ],
  },
  {
    time: '11:45',
    talks: [
      {
        title: 'Intelligenza a livello umano o abilità a livello animale?',
        description:
          'L’intervento sintetizza lo stato di avanzamento dell’Intelligenza Artificiale, con particolare attenzione ai recenti sviluppi nell’ambito del Deep Learning, un sottoinsieme dell’Intelligenza Artificiale che ha visto tre pionieri del settore ricevere il premio Turing 2018. Si cerca di analizzare criticamente cosa sia stato effettivamente raggiunto, cosa sia a portata di mano e cosa sia ancora molto lontano dalle nostre attuali conoscenze.',
        author: 'Fabio Stella - Università Milano Bicocca',
        room: aula_ia,
        duration: '60 min',
      },
      {
        title:
          "Joomla! - Privacy Tool Suite: Come difendere la privacy e l'individualità degli utenti del tuo sito web in pieno rispetto del GDPR",
        description:
          "Come difendere la privacy e l'individualità degli utenti del tuo sito web in pieno rispetto del GDPR",
        author: 'Luca Racchetti',
        room: aula_ot,
        duration: '60 min',
      },
      {
        title:
          'PHP: un linguaggio, come tanti, vivo grazie alle community Open source',
        description:
          'Le licenze libere per il software possono salvare un linguaggio di programmazione? La risposta è si! Un esempio è il PHP, un linguaggio dato per morto diverse volte ma che è sempre nei primi posto per utilizzo.',
        author: 'Matteo Enna',
        room: aula_mix,
        duration: '60 min',
      },
    ],
  },
  {
    time: '12:45',
    talks: [
      {
        title: 'Pausa pranzo',
        description: 'Una pausa per rinfrescare la mente',
        author: '',
        room: '',
        duration: '1 ora e 15 min',
      },
    ],
  },
  {
    time: '14:00',
    talks: [
      {
        title: 'Weaving a story',
        description:
          "Retrospettiva sull'intelligenza artificale e sulle tecnologie che l'hanno resa possibile, a partire dalle speranze dei pionieri dell'informatica fino alla fine del secolo scorso, tramite un'analisi delle architetture hardware del software e dei carichi di lavoro, molto diversi da quelli a cui siamo abituati oggi.",
        author: 'Jacopo Maltagliati',
        room: aula_ia,
        duration: '60 min',
      },
      {
        title:
          'Diritto alla riparazione e free software - impatto sulle emissioni di CO2',
        description: "Il diritto alla riparazione #RightToRepair è, l'ultimo tra i \"nuovi diritti\" e deriva da quelli che Stefano Rodotà indicava come conseguenza delle \"pacifiche rivoluzioni del Novecento, delle donne, degli ecologisti, della scienza e della tecnica\". Si intende come diritto alla riparazione la rimozione di tutti gli ostacoli che, spesso, rendono impossibile riparare un oggetto di nostra proprietà, si va dalla mancata disponibilità di parti di ricambio a prezzi ragionevoli, alla impossibilità di aprire un dispositivo o un apparecchio per poterlo riparare a causa di parti termosaldate, viti che si possono solo stringere etc. etc. Intorno alla riparazione sono nate iniziative come i Restart Party o i Repair Cafè, feste della riparazione comunitaria e condivisa, come amano chiamarla in Gran Bretagna gli inventori di questa formula, e a partire da questo movimento si è sviluppata recentemente una intensa attività di lobby a livello europeo che ha già conseguito dei risultati legislativi. Il movimento per il diritto alla riparazione è strettamente connesso con il movimento di lotta ai cambiamenti climatici e il punto di collegamento è proprio la lunghezza della vita dei nostri dispositivi, ogni anno di vita guadagnato si può tradurre in un mancato incremento di CO2 emessa. Il software libero gioca in questa prospettiva un ruolo importantissimo nel porre un freno alla cultura usa e getta, rendendo utilizzabili PC desktop e portatili altrimenti destinati ad essere smaltiti in ricicleria pur essendo perfettamente funzionanti.",
        author: 'Savino Curci - PC Officina',
        room: aula_ot,
        duration: '60 min',
      },
      {
        title: 'How to virtualize in containers',
        description:
          'Linux containers are everywhere. But what if your workflow still requires virtual machines? Some applications can not be easily containerized. But do we need to bother? Come to learn how to run and monitor both types of workloads together on a single distributed platform. The KubeVirt - virtualization addon for Kubernetes will be introduced.',
        author: 'Marek Libra',
        room: aula_mix,
        duration: '60 min',
      },
    ],
  },
  {
    time: '15:00',
    talks: [
      {
        title: 'Vettorizzazione: a hands-on approach in Python',
        description:
          "Sapevi che il progresso nel campo del ML non è legato solo all'invenzione di nuovi algoritmi, ma anche all'introduzione di nuove tecnologie come la vettorizzazione? Scopriamo cos'è con semplici esempi in Python!",
        author: 'Davide Riva',
        room: aula_ia,
        duration: '60 min',
      },
      {
        title:
          "Linee Guida su Acquisizione e Riuso di Software per le PA, le novità dell'ultima versione in vigore dal 9 maggio 2019",
        description: 'Una sintesi delle principali novità che emergono da una lettura critica delle Linee Guida su Acquisizione e Riuso di Software per le PA. Perché si tratta di un documento importante, per il software open source e per i formati standard e aperti. Cosa fare, e come farlo, per comunicare e sfruttare i vantaggi delle linee guida per la comunità open source.',
        author: 'Italo Vignoli',
        room: aula_ot,
        duration: '60 min',
      },
      {
        title: 'BiBirra: Deep image retrieval for beer recognition',
        description:
          "Raccontando lo sviluppo di una applicazione in grado di riconoscere una birra da una foto della bottiglia, sarà descritto il processo che porta da un'idea all'implementazione di un modello di Machine Learning.Si analizzeranno i problemi più comuni e come scegliere tra le possibili soluzioni.",
        author: 'Matteo Ronchetti - ML Milan',
        room: aula_mix,
        duration: '60 min',
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
        duration: '15 min',
      },
    ],
  },
  {
    time: '16:15',
    talks: [
      {
        title: 'The art of Machine Learning',
        description:
          "Cosa possono avere in comune un quadro battuto all'asta da Christie's per 435.000$ e la colonna sonora di un videogioco di esplorazione interplanetaria? Esiste qualcosa che collega Van Gogh, Rembrandt e la teoria dei giochi? Entrambe queste domande possono finire sotto un'altra macro domanda: \"È possibile creare con l'intelligenza artificiale?\" In questo talk veranno presentate alcune applicazioni del machine learning ad arti visive e musica elettronica, di come le reti neurali artificiali si stanno facendo strada all'interno dei processi creativi uscendo dai laboratori di ricerca per entrare nei musei, nelle case d'aste, nelle nostre cuffie e sui palchi di festival musicali internazionali.",
        author: 'Luca Carcano',
        room: aula_ia,
        duration: '60 min',
      },
      {
        title: 'I formati aperti e standard',
        description: 'La differenza tra De jure e De facto',
        author: 'Enio Gemmo',
        room: aula_ot,
        duration: '60 min',
      },
      {
        title: 'The Dark side of AI',
        description: 'Nessuna descrizione disponibile',
        author: 'Marco Schiaffino',
        room: aula_mix,
        duration: '60 min',
      },
    ],
  },
  {
    time: '17:15',
    talks: [
      {
        title: 'Chiusura',
        description: 'Chisura della giornata',
        author: '',
        room: '',
        duration: '',
      },
    ],
  },
]

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
      required: {
        title: 'Titolo',
        description: 'Descrizione',
        author: 'Autore',
        room: 'Aula',
        duration: 'Durata',
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
        {schedule.map(i => {
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
                      className="event border h-100 d-flex flex-column"
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
        {enable ? <Talks /> : <Placeholder />}
      </section>
    </main>
  </Layout>
)
