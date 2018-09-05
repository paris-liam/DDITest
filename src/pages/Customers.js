import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
import styled from 'styled-components'
import { IndexGrid, CoverHold, CoverText, LearnMore, FocusedBody, FocusedTitle, FocusedSlide, Offerings } from '../style/style-index';
import { gatsbyImgStyle } from '../style/style';

const CustGrid = IndexGrid.extend`
  grid-template-rows: 40vh auto;
`;
const CustBody = styled.div`
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
`;
const Customers = data => (
  <CustGrid>
    <CoverHold>
      <IMG
        sizes={data.data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <CoverText>
        <h1>Focused on You – Where you work</h1>
      </CoverText>
    </CoverHold>
    <FocusedSlide>
      <FocusedTitle>
        <h2>DDI will work closely with you to customize a financing plan that best suits your budget, cash flow and technology requirements.</h2>
        <p>Our professionals know more than leasing – they are familiar with the technology that you use – and they are willing to spend the time with you to put it to maximum advantage.</p>
      </FocusedTitle>
      <CustBody>
        <div>
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
        </div>
        <Offerings>
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
        </Offerings>
      </CustBody>
    </FocusedSlide>
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
