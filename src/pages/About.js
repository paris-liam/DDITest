import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
import { Row, Grid, Col } from 'react-bootstrap';

const About = data => (
  <Grid>
    <Row>
    <Col sm={6} md={3}>1</Col>
    <Col sm={6} md={3}>2</Col>
    <Col sm={6} md={2}>3</Col>
  </Row>
    <Row>
    <Link to="/">Go back to the homepage</Link>
  </Row>
  </Grid>
);

export default About;
