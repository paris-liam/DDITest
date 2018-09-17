import React from 'react';
import { SingleGrid, SingleCoverText, SingleSlide, ContactBody, ContactInfo, ContactForm } from '../style/style-single-page';
import { CoverHold } from '../style/style-index';
import { gatsbyImgStyle } from '../style/style';
import IMG from 'gatsby-image';

const Contact = data => (
  <SingleGrid>
    <CoverHold>
      <IMG
        sizes={data.data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <SingleCoverText>
        <h1>CONTACT US</h1>
        <p>We'd Love to hear from you!</p>
      </SingleCoverText>
    </CoverHold>
    <SingleSlide>
      <ContactBody>
        <ContactInfo>
          <ul style={{ gridArea: 'Corporate' }}>
            <li>DDI Capital Corporate Headquarters</li>
            <li>221 Somerville Road</li>
            <li>Bedminster, NJ 07921</li>
            <li>Tel: 908-781-9300</li>
            <li>Fax: 908-781-7906</li>
          </ul>
          <ul style={{ gridArea: 'north' }}>
            <li>North Haven, CT</li>
            <li>Tel: 203-821-7825</li>
          </ul>
          <ul style={{ gridArea: 'ponte' }}>
            <li>Ponte Vedra, FL</li>
            <li>Tel: 904-280-4464</li>
            <li>Fax: 904-280- 4431</li>
          </ul>
          <ul style={{ gridArea: 'charlotte' }}>
            <li>Charlotte, NC</li>
            <li>Tel: 704-843-9363</li>
            <li>Fax: 704-843-9462</li>
          </ul>
          <ul style={{ gridArea: 'spring' }}>
            <li>Spring Lake, NJ</li>
            <li>Tel: 732-449-6108</li>
            <li>Fax: 732-449-6128</li>
          </ul>
        </ContactInfo>
        <ContactForm>
          <label>Name</label>
          <input />
          <label>Email</label>
          <input />
          <label>Message</label>
          <textarea />
          <div><button>Send</button></div>
        </ContactForm>
      </ContactBody>
    </SingleSlide>
  </SingleGrid>
);

export default Contact;


export const query = graphql`
  query ContactQuery {
    cover: imageSharp(id:{regex: "/CoverContact.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;
