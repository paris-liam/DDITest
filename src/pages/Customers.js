import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
import styled from 'styled-components'
import { IndexGrid, CoverHold, CoverText, LearnMore, FocusedBody, FocusedTitle, FocusedSlide, Offerings } from '../style/style-index';
import { colorsAndFont,gatsbyImgStyle } from '../style/style';

const CustGrid = IndexGrid.extend`
  grid-template-rows: 45vh auto;
`;
const CustCoverText = CoverText.extend`
  grid-template-rows: auto auto;
  h1{
    width:100%;
  }
`
const CustBody = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'reqs custOff';
  text-align:left;
  padding-bottom:1vh;
  width:90%;
  margin: 0 auto;
  @media screen and (max-width:1024px){
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'reqs' 'custOff';
  }
`;

const Requirements = styled.div`
  grid-area: reqs;
  ul > ul{
    list-style:none;
    margin-left:2vh;
    li{
      padding-bottom:.25em;
    }
  }
`
const CustOff = Offerings.extend`
  margin: 0 auto;
  @media screen and (max-width:1024px){
    padding-top:4vh;
    margin:0 0 0 3vw;
  }
  grid-area: custOff;
  font-size:1.1em;
  grid-template-rows: min-content auto;
  h1{
    margin-top:0;
    margin-bottom: 1vh;
  }
  li{
    margin-bottom:1.5vh;
  }
  border:none;
`
const CustSlide = FocusedSlide.extend`
  background-color:${colorsAndFont.blue};
  color:white;
  margin: 0;
`
const CustTitle = styled.div`
  padding-top:3vh;
  padding-bottom:3vh;
  text-align:center;
  *{
    width:80%;
    margin: 1vh auto 0 auto;
  }
`
const Customers = data => (
  <CustGrid>
    <CoverHold>
      <IMG
        sizes={data.data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <CustCoverText>
        <h1>Focused on You – Where you work</h1>
        <p>Our professionals know more than leasing – they are familiar with the technology that you use – and they are willing to spend the time with you to put it to maximum advantage.</p>
      </CustCoverText>
    </CoverHold>
    <CustSlide>
      <CustTitle>
        <h1>DDI will work closely with you to customize a financing plan that best suits your budget, cash flow and technology requirements.</h1>
      </CustTitle>
      <CustBody>
        <Requirements>
          <ul className="fa-ul">
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Software Only Financing</li>
            <ul>
              <li>Multiple Lease Structures – Defer payments, Step Leases, Tech Upgrades</li>
              <li>Mid-Lease Options – Upgrade, Add On, Refinance, Restructure or Swap</li>
              <li>End of Lease Options – Purchase, Renew or Return Equipment</li>
            </ul>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Capital and Operating Leases</li>
            <ul>
              <li>Multiple Lease Structures – Defer payments, Step Leases, Tech Upgrades</li>
              <li>Mid-Lease Options – Upgrade, Add On, Refinance, Restructure or Swap</li>
              <li>End of Lease Options – Purchase, Renew or Return Equipment</li>
            </ul>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Master Lease Agreements</li>
            <ul>
              <li>Multiple Lease Structures – Defer payments, Step Leases, Tech Upgrades</li>
              <li>Mid-Lease Options – Upgrade, Add On, Refinance, Restructure or Swap</li>
              <li>End of Lease Options – Purchase, Renew or Return Equipment</li>
            </ul>
          </ul>
        </Requirements>
        <CustOff>
          <h1>Offerings Include:</h1>
          <ul className="fa-ul">
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Software Only Financing</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Capital and Operating Leases</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Master Lease Agreements</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Lease Lines</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Purchase Leaseback Structures</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Asset Management</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Network Integration and Consulting</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Project Management</li>
          </ul>
        </CustOff>
      </CustBody>
    </CustSlide>
  </CustGrid>
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
