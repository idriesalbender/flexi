import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/atoms/Container';

const IndexPage = () => (
  <Layout>
    <SEO
      title=""
      keywords={['css', 'grid', 'flexbox', 'responsive', 'fluid', 'mobile-first']}
    />
    <Container>
      <p align="center" className="mdc-typography--body1">
        Docs coming soon!
      </p>
    </Container>
  </Layout>
);

export default IndexPage;
