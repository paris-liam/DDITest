import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
const About = data => (
  <div style={{
    display:'grid',
    gridTemplateRows:'60vh 60vh 60vh 60vh',
  }}>
    <div id='Who'>
      <h1>Who</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div id='Why'>
      <h1>Why</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div id='Equipt'>
      <h1>Equipt</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div id='Team'>
      <h1>Team</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </div>
);

export default About;

export const query = graphql`
  query AboutQuery {
    cover: imageSharp(id:{regex: "/CoverAbout.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }

  }
`;
/*
get the other images
*/

