import React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Seo from "../components/seo";
import Hero from "../components/hero";

const CodeofconductPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <main>
        <section id='' className='text-body'>
          <Container className='py-5'>
            <h2 style={{ textTransform: "uppercase" }}>Code of Conduct</h2>
            <h3 id='italian' className='pt-3'>
              Versione Italiana
            </h3>
            <p>
              Tutti i partecipanti del Linux Day Milano sono tenuti ad attenersi
              al seguente codice di condotta. I volontari del team UnixMiB
              faranno rispettare questo codice durante tutta la conferenza.
            </p>
            <ul>
              <li>
                Gli organizzatori della conferenza (tra comunità partecipanti e
                volontari) si impegnano a fornire un'esperienza della conferenza
                senza molestie per tutti, indipendentemente da genere,
                orientamento sessuale, disabilità, aspetto fisico, dimensione
                corporea, razza o religione.
              </li>
              <li>
                Non tolleriamo molestie ai partecipanti alla conferenza o ai
                volontari in qualsiasi forma.
              </li>
              <li>
                Linguaggio e immagini sessuali non sono appropriate per
                qualsiasi ambito della conferenza, compresi le presentazioni
              </li>
              <li>
                Gli accompagnatori di bambini minori di 14 anni sono tenuti a
                non separarsene.
              </li>
              <li>
                I partecipanti alla conferenza che violano queste regole possono
                essere espulsi dalla conferenza a discrezione degli
                organizzatori della conferenza
              </li>
            </ul>
            <span>Note</span>
            <p>
              Le molestie includono commenti offensivi verbali legati a genere,
              orientamento sessuale, disabilità, aspetto fisico, dimensione
              corporea, razza, religione, immagini sessuali in spazi pubblici,
              intimidazioni intenzionali, stalking, inseguimenti, fotografie o
              registrazioni moleste, interruzione continuata di presentazioni o
              altri eventi, contatto fisico inappropriato e attenzioni sessuali
              sgradite.
              <br />
              I partecipanti cui viene chiesto di interrompere qualsiasi
              comportamento molesto sono tenuti a conformarsi immediatamente
              <br />
              <br />
              Se vieni molestato/a, noti che qualcun altro/a viene molestato/a,
              o hai qualsiasi altra preoccupazione, contatta immediatamente uno
              dei punti di contatto: Lorenzo Olearo o Elisa Pioldi.
              <br />
              Tramite Telegram contattare{" "}
              <a href='https://t.me/unixmib_contact_bot'>
                @unixmib_contact_bot
              </a>{" "}
              per eventuali segnalazioni.
              <br />
              <br />
              Ringranziamo MergeIT e{" "}
              <a href='https://web.archive.org/web/20210614152255/https://pycon.it/it/code-of-conduct'>
                Python Italia
              </a>{" "}
              per averci permesso di usare il loro Codice di Condotta come base.
            </p>
            <h3 id='english' className='pt-3'>
              English version
            </h3>
            <p>
              All Linux Day Milan participants are required to abide by the
              following code of conduct. Volunteers from the UnixMiB team will
              enforce this code throughout the conference.
            </p>
            <ul>
              <li>
                Conference organizers (including community participants and
                volunteers) are committed to providing a harassment-free
                conference experience for all, regardless of gender, sexual
                orientation, disability, physical appearance, body size, race or
                religion. We do not tolerate harassment of conference attendees
                or volunteers in any form.
              </li>
              <li>
                Sexual language and images are inappropriate for any part of the
                conference, including presentations
              </li>
              <li>
                Those accompanying children under 14 are required not to
                separate them.
              </li>
              <li>
                Sexual language and images are inappropriate for any part of the
                conference, including presentations.
              </li>
              <li>
                Conference participants who violate these rules may be expelled
                from the conference at the discretion of the conference
                organizers
              </li>
            </ul>
            <span>Notes</span>
            <p>
              Harassment includes offensive verbal comments related to gender,
              sexual orientation, disability, physical appearance, body size,
              race, religion, sexual images in public spaces, intentional
              intimidation, stalking, stalking, harassing photography or
              recording, persistent disruption of presentations or other events
              , inappropriate physical contact and unwelcome sexual attention.
              <br />
              Participants who are asked to stop any harassing behavior are
              expected to comply immediately
              <br />
              <br />
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact one of the
              contact points immediately: Lorenzo Olearo or Elisa Pioldi.
              <br />
              Via Telegram contact{" "}
              <a href='https://t.me/unixmib_contact_bot'>
                @unixmib_contact_bot
              </a>{" "}
              for any reports.
              <br />
              <br />
              We thank MergeIT e{" "}
              <a href='https://web.archive.org/web/20210614152255/https://pycon.it/it/code-of-conduct'>
                Python Italia
              </a>{" "}
              for allowing us to use their Code of Conduct as a basis.
            </p>
          </Container>
        </section>
      </main>
    </Layout>
  );
};

export default CodeofconductPage;
