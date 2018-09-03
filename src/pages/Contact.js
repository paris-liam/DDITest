import React from 'react';
import Link from 'gatsby-link';

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Contact;

/*export const query = graphql`
  query ContactQuery {
    contactHeader: imageSharp(id:{regex:}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;*/