import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/atoms/Container';
import Grid from '../components/atoms/Grid';
import Column from '../components/atoms/Column';

import MaterialDesignGrid from '../organisms/material-design-grid';

const IndexPage = () => (
  <Layout>
    <SEO
      title=""
      keywords={['css', 'grid', 'flexbox', 'responsive', 'fluid', 'mobile-first']}
    />
    <Container>
      <Grid>
        <Column xs={12}>
          <MaterialDesignGrid />
        </Column>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
