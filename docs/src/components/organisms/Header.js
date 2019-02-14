import React from 'react';
import axios from 'axios';

import Column from '../atoms/Column';
import Container from '../atoms/Container';
import Grid from '../atoms/Grid';
import Logo from '../../images/logo.full.svg';
import USP from '../molecules/USP';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 1.7,
    };
  }

  componentDidMount() {
    axios
      .get('https://bundlephobia.com/api/size?package=@idix/flexi')
      .then(r => r.data)
      .then(data => this.setState({ size: Math.floor((data.gzip / 1000) * 100) / 100 }));
  }

  render() {
    const { size } = this.state;

    return (
      <header className="c-header mdc-theme--primary-bg">
        <Container fullWidth>
          <Grid>
            <Column xs={12}>
              <p align="center">
                <Logo role="img" aria-label="Flexi" width={252} height={96} />
              </p>
              <h6 align="center" className="mdc-typography--headline6 mdc-theme--secondary">
                A mobile-first, lightweight flexbox grid system.
              </h6>
            </Column>
          </Grid>
          <Grid alignXs="center">
            <Column xs={12} md={4}>
              <USP title={`${size} kb`} description="minified and gzipped" />
            </Column>
            <Column xs={12} md={4}>
              <USP
                title="Mobile-first, fluid & responsive"
                description="with simple class modifiers"
              />
            </Column>
            <Column xs={12} md={4}>
              <USP
                title="Based on Material Design"
                description="using breakpoint-specific gutter sizes"
              />
            </Column>
          </Grid>
          <Grid>
            <Column xs={12} sm={6} alignContentXs="center">
              <a
                href="https://github.com/idriesalbender/flexi/releases/latest"
                className="mdc-button mdc-theme--secondary-bg"
              >
                <span className="mdc-button__label mdc-theme--on-secondary">
                  Download flexi.min.css
                </span>
              </a>
            </Column>
            <Column xs={12} sm={6} alignContentXs="center">
              <a
                href="https://github.com/idriesalbender/flexi"
                className="mdc-button mdc-button--outlined c-button--outlined"
              >
                <span className="mdc-button__label mdc-theme--on-primary">
                  Check out on GitHub
                </span>
              </a>
            </Column>
          </Grid>
        </Container>
      </header>
    );
  }
}

export default Header;
