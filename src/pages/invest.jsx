import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { Link } from 'gatsby';

const Contact = center => (
    <Layout>
      <Helmet title={'Invest'} />
      <Header title="Invest"/>
      <Container center={center}>
        <h3>Interested in working with me? <Link to="/contact">Contact me</Link></h3>
      </Container>
    </Layout>
  );
  
  export default Contact;