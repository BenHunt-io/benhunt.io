import React from 'react';
import { Layout, Container} from 'layouts';
import Helmet from 'react-helmet'; // HTML Head section (metadata)
import { Header } from 'components';
import { Document, Page } from 'react-pdf';
import theme from '../../config/theme';
import pdfResume from '../../static/career/resume_03.31.2018.pdf';

// This is a lambda function. It points to a function, Resume = (function) React.createElement(...)
// Inside the parathesis gets transpiled (using Babel) to the above. Can call, Resume.createElement
const Resume = (center) => (
  <Layout>
    <Helmet title={'Resume'} /> 
    <Header title="Resume"/>
    <Container center={center}>
      <Document css={{boxShadow: theme.shadow.card}} className="resume" file={pdfResume}>
        <Page pageNumber={1}/>
      </Document>
    </Container>
  </Layout>
);

export default Resume;