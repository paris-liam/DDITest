import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import IMG from 'gatsby-image';
import { PayBillsButton } from '../style';

const IndexGrid = styled.div`
  display:grid;
  grid-template-rows: 60vh auto auto auto auto;
  grid-template-columns: auto;
`;
const CoverHold = styled.div`
  font-family:'Lato';
  color:white;
  overflow:hidden;
  position:relative;
`;
const CoverText = styled.div`
  position: absolute;
  z-index:100;
  top:40%;
  text-align:center;
  align-self:center;
  justify-self:center;
  grid-auto-columns:60%;
  grid-auto-rows:auto auto
  & > *{
    display:inline-block;
    margin-left:auto;
    margin-right:auto;
  }
  & > p{
    width:40%;
    font-weight:500;
    font-size:1.25vw
  }
`;
const LearnMore = styled.div`
    position:absolute;
    bottom:10vh;
    left:45%;
    align-self:center;
    width:30%;
`;
const IndexPage = data => (
  <IndexGrid>
    <CoverHold>
      <IMG sizes={data.data.cover.sizes} position="absolute" />
      <CoverText>
        <h1>DDI Capital is your Independent Trusted Advisor </h1> <br />
        <p>Whether you are just starting out, or ready to bring your current organization to a new level of growth – DDI Capital offers you the most innovative financial strategies allowing you to acquire and finance technology solutions at the best possible price.</p>
      </CoverText>
      <LearnMore><PayBillsButton> Learn More <i className="fa fa-arrow-alt-circle-down" /></PayBillsButton></LearnMore>
    </CoverHold>
    <div>
      <h1>Focused on You – Where you work</h1>
      <p>We know your challenges, understand your technology options and aren’t satisfied until we recommend a solution that exceeds your expectations.</p>
      <div>
        <div><i className="fa fa-money-check-alt" /><p>DDI will work closely with you to customize a financing plan that best suits your budget, cash flow and technology requirements.</p></div>
        <div><i className="fa fa-anchor" /><p>Our team’s collective experience, industry contacts and collaborative, consultative work process insure that you will get the best possible solution with each lease transaction.</p></div>
        <div><i className="fa fa-hands-helping" /><p>We view our clients as business partners and approach each deal with a long term focus. Each and every one of our DDI professionals is acutely aware of the relationship between the growth of your business and ours.</p></div>
        <div><i className="fa fa-hdd" /><p>Our professionals know more than leasing – they are familiar with the technology that you use – and they are willing to spend the time with you to put it to maximum advantage.</p></div>
      </div>
    </div>
    <div><h1>Whether you’re a startup or a Fortune 100 company
DDI has the appropriate solutions to help you finance your growth
         </h1>
      <h2>no idea</h2>
    </div>
    <div>
      <IMG sizes={data.data.nefa.sizes} />
      <h1>Proud Member of <span>NEFA</span></h1>
    </div>
    <div>
      <div>
        <h1>Interested</h1>
        <button>Vendor Opportunities</button>
        <button> Customer Information</button>
      </div>
      <div>
        <h1>Offerings Include:</h1>
        <ul>
          <li>Software Only Financing</li>
          <li>Capital and Operating Leases</li>
          <li>Master Lease Agreements</li>
          <li>Lease Lines</li>
          <li>Purchase Leaseback Structures</li>
          <li>Asset Management</li>
          <li>Network Integration and Consulting</li>
          <li>Project Management</li>
        </ul>
      </div>
    </div>
  </IndexGrid>
);

export default IndexPage;

export const query = graphql`
  query LandingQuery {
    cover: imageSharp(id:{regex: "/CoverLanding.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    nefa: imageSharp(id:{regex: "/landing2.jpg/"}){
      sizes(maxWidth:4000){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;
