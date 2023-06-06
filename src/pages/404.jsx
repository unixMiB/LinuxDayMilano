import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title='Pagina non trovata' />
    <main>
      <section className='py-5 text-center'>
        <h1>Pagina non trovata</h1>
        <p>La pagina che stai cercando non esiste.</p>
      </section>
    </main>
  </Layout>
);

export default NotFoundPage;
