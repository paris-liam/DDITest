import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
const Vendors = data => (
  <div>
    <h1>Vendors</h1>
    <Link to="/">Go back to the homepage</Link>
    <IMG sizes={data.data.cover.sizes}/>
    <IMG sizes={data.data.body.sizes}/>
    <ul className="fa-ul">
      <li><span className="fa-li" ><i className="fas fa-check-square"></i></span>List icons can</li>
      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>be used to</li>
      <li><span className="fa-li"><i className="fas fa-spinner fa-pulse"></i></span>replace bullets</li>
      <li><span className="fa-li"><i className="far fa-square"></i></span>in lists</li>
    </ul>
  </div>
);

export default Vendors;

export const query = graphql`
  query VendorQuery {
    cover: imageSharp(id:{regex: "/CoverVendors.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    body: imageSharp(id:{regex: "/bodyVendor.jpg/"}){
      sizes(maxWidth:700){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;