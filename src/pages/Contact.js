import React from 'react';
import { gatsbyImgStyle } from '../style/dataAndCopy';
import IMG from 'gatsby-image';

const Contact = data => (
  <div className='indexGrid' id='singlegrid'>
    <div className='CoverHold'>
      <IMG
        sizes={data.data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <div className='CoverText' id='SingleCoverText'>
        <h1>CONTACT US</h1>
        <p>We'd love to hear from you!</p>
      </div>
    </div>
    <div className='focusedslide' id='singleslide'>
      <div className='ContactBody'>
        <div className='ContactInfo'>
          <ul id='corporate'>
            <li>DDI Capital Headquarters</li>
            <li>221 Somerville Road</li>
            <li>Bedminster, NJ 07921</li>
            <li>Tel: 908-781-9300</li>
            <li>Fax: 908-781-7906</li>
          </ul>
          <div>
            <ul id='ponte'>
              <li>Ponte Vedra, FL</li>
              <li>Tel: 904-280-4464</li>
              <li>Fax: 904-280- 4431</li>
            </ul>
            <ul id='north'>
              <li>North Haven, CT</li>
              <li>Tel: 203-821-7825</li>
            </ul>
          </div>
          <div>
            <ul id='charlotte'>
              <li>Charlotte, NC</li>
              <li>Tel: 704-843-9363</li>
              <li>Fax: 704-843-9462</li>
            </ul>
            <ul id='quogue'>
              <li>Quogue, NY</li>
              <li>Tel: 631-996-2675</li>
            </ul>
          </div>            
          <ul id='spring'>
              <li>Spring Lake, NJ</li>
              <li>Tel: 732-449-1999</li>
              <li>Fax: 732-449-6128</li>
            </ul>
        </div>
        <div className='ContactForm'>
          <form name='contact' form-name='contact' method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" />
          <div><input type="submit" value="Send" /></div>
          </form>
        </div>
      </div>
    </div>
  </div>
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
`
