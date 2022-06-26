import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About"> First, thank you for taking the time to check out my blog!
    </Header>
    <Container center={center}>
      I'm a full stack software engineer living out of Austin Texas.

      My interest in technology first began by playing games. 
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
