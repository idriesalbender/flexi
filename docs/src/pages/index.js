import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/atoms/Container';
import Grid from '../components/atoms/Grid';
import Column from '../components/atoms/Column';

import MaterialDesignGrid from '../organisms/material-design-grid';
import Usage from '../organisms/usage';

const IndexPage = () => (
  <Layout>
    <SEO
      title=""
      keywords={['css', 'grid', 'flexbox', 'responsive', 'fluid', 'mobile-first']}
    />
    <Container>
      <Grid>
        <Column xs={12}>
          <h6 className="mdc-typography--headline6">
            Flexi is a mobile-first, lightweight CSS grid system based on the flexbox spec,
            taking some cues from Material Design guidelines regarding breakpoints and grid
            spacing/gutters.
          </h6>
          <Usage />
          <MaterialDesignGrid />
        </Column>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
