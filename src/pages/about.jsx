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
      What makes you excited to get up in the morning? What is that singular force that captivates entrepreneurs,
      scientists and engineers alike? <b>Curiosity.</b> Why are things the way they are?
      <br/>
      <br/>
      Why do unwarranted thoughts just seem to appear in our mind? <br/>
      Why is modeling simple human behaviors with the world's most powerful machines seemingly impossible? <br/> 
      Why do we as a collective mathematically program the same behavior thousands of times over? <br/> 
      <br/> 
      <br/>
      First and foremost, I'm a curious person.
      Secondly, I'm a 24 year old software developer living in Austin Texas working in fintech for Open Lending.
      I'm passionate about building scalable systems through architecture and performance. 
      <br/> 
      <br/>
      For physical fun, I enjoy skateboarding (yes like kickflips and the like), playing basketball, sand volleyball,
      hiking, biking and all kinds of things that get the endorphins going. Mentally, I enjoy reading about the innerworkings
      of our mind, conciousness, and how our decisions are influenced by our internal state. SciFi, Sci, health, software, and
      anything that peaks my <i>curiosity</i> is good too.
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
