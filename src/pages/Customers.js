import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';

const Customers = data => (
  <div>
    <h1>Customers</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Customers;

export const query = graphql`
  query CustomerQuery {
    cover: imageSharp(id:{regex: "/CoverCustomers.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;