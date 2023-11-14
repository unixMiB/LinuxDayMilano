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

const Talks = ({
  scheduleData,
  showStarred,
  starredTalksForYear,
  toggleTalkStar,
}) => {
  const [data, setData] = useState(scheduleData);
  const [modalData, setModalData] = useState({
    show: false,
    title: "Titolo",
    description: "Descrizione",
    author: "Autore",
    room: "Aula",
    duration: "Durata",
    slides: "",
    video: "",
  });

  const replaceModalItem = (item) => {
    setModalData((current) => ({
      ...item,
      show: !current.show,
    }));
  };

  const handleStarClick = (title, clickEvent) => {
    clickEvent.stopPropagation();
    toggleTalkStar(title);
  };

  const StarToggle = ({ title }) => (
    <FontAwesomeIcon
      icon={
        starredTalksForYear?.includes(title)
          ? icon({
              name: "star",
              family: "classic",
              style: "solid",
            })
          : icon({
              name: "star",
              family: "classic",
              style: "regular",
            })
      }
      onClick={(e) => handleStarClick(title, e)}
    />
  );

  return (
    <>
      <Modal
        show={modalData.show}
        onHide={() => {
          setModalData((current) => ({
            ...current,
            show: false,
          }));
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

        <Modal.Footer className='justify-content-between'>
          <div className='d-flex flex-start gap-1'>
            <Button
              variant='warning'
              onClick={(e) => handleStarClick(modalData.title, e)}
              className='d-flex gap-1 align-items-center'
            >
              <StarToggle title={modalData.title} />
              {starredTalksForYear?.includes(modalData.title)
                ? "Rimuovi da"
                : "Aggiungi ad"}{" "}
              agenda personale
            </Button>
          </div>
          <div className='d-flex flex-end gap-1'>
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
                setModalData((current) => ({
                  ...current,
                  show: false,
                }));
              }}
            >
              Chiudi
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      {data.map((i, k) => {
        return (
          <Row key={k} className='pb-4'>
            <Col lg={1} md={12} className='pb-4 mr-2'>
              <h5 className='schedule-time'>{i.time}</h5>
            </Col>
            {i.talks.map((t, u) => {
              if ("development" === activeEnv) console.log(showStarred);
              return !showStarred || starredTalksForYear?.includes(t.title) ? (
                <Col key={u} sm={12} md className='pb-4'>
                  <div
                    onKeyPress={() => replaceModalItem(t)}
                    onClick={() => replaceModalItem(t)}
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
                    <Row className='d-flex flex-grow-1' />
                    <Row className='mt-3 align-items-center'>
                      <Col className='align-bottom text-start'>
                        {t.duration}
                      </Col>
                      <Col className='align-bottom text-center'>{t.room}</Col>
                      <Col className='d-flex gap-1 justify-content-end'>
                        <Button
                          variant='warning'
                          onClick={(e) => handleStarClick(t.title, e)}
                        >
                          <StarToggle title={t.title} />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ) : undefined;
            })}
          </Row>
        );
      })}
    </>
  );
};

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

const Page = ({ data }) => {
  const allSchedules = data.allSchedulesYaml.nodes;
  const [schedData, setSchedData] = useState(allSchedules[0]);
  const [starredTalks, setStarredTalks] = useState({});
  const [showStarred, setShowStarred] = useState(false);

  const params = new URLSearchParams(
    typeof window !== "undefined" && window.location.search
  );
  const year = params.get("year");

  useEffect(() => {
    let current = localStorage.getItem("starredTalks");
    if (current) {
      try {
        current = JSON.parse(current);
        setStarredTalks(current);
      } catch (e) {
        console.error(
          "localStorage.starredTalks was set, but can't be parsed as JSON"
        );
        setStarredTalks({});
      }
    }
    localStorage.getItem("showStarred") === "true" && setShowStarred(true);
  }, []);

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
        <section id='calendar' className='text-body'>
          <Container>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center align-middle mb-5'>
              <h2 className='text-md-left text-center'>
                Programma della giornata
              </h2>

              <div className='d-flex flex-row gap-3 d-print-none'>
                <Button
                  variant='warning'
                  onClick={() => {
                    setShowStarred((curr) => !curr);
                    localStorage.setItem("showStarred", !showStarred);
                  }}
                >
                  {showStarred ? "Tutte le talk" : "Agenda personale"}
                </Button>
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
            </div>

            {schedData?.schedule.length ? (
              <Talks
                scheduleData={schedData?.schedule}
                showStarred={showStarred}
                starredTalksForYear={starredTalks[schedData?.year]}
                toggleTalkStar={(title) => {
                  setStarredTalks((current) => {
                    let next;

                    if (current[schedData?.year]?.includes(title)) {
                      next = {
                        ...current,
                        [schedData?.year]: current[schedData?.year].filter(
                          (t) => t !== title
                        ),
                      };
                    } else {
                      next = {
                        ...current,
                        [schedData?.year]: [
                          ...(current[schedData?.year] || []),
                          title,
                        ],
                      };
                    }

                    localStorage.setItem("starredTalks", JSON.stringify(next));

                    return next;
                  });
                }}
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
