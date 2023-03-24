import React from 'react';
import IMG from 'gatsby-image';
import { gatsbyImgStyle } from '../style/dataAndCopy';
import Layout from '../components/layout';
import { StaticQuery } from 'gatsby';

const Customers = () => (
  <Layout>
    <StaticQuery query={graphql`
  query CustomerQuery {
    cover: imageSharp(fluid: {originalName: {regex: "/CoverCustomers.jpg/"}}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
  }
`} render={data => (  <div className='indexGrid' id='singlegrid'>
    <div className='CoverHold'>
      <IMG
        sizes={data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <div className='CoverText' id='SingleCoverText'>
        <h1>Focused on You – Where you work</h1>
      </div>
    </div>
    <div className='focusedslide' id='singleslide'>
      <div className='CustTitle'>
        <h1>DDI will work closely with you to customize a financing plan that best suits your budget, cash flow and technology requirements.</h1>
      </div>
      <div className='CustBody'>
        <div className='Requirements'>
          <ul className="fa-ul">
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span> Competitive Lease Rates with Highly Flexible Terms and Conditions</li>
            <ul>
              <li>Multiple Lease Structures – Deferred payments, Step Leases, Tech Upgrades</li>
              <li>Mid-Lease Options – Upgrade, Add On, Refinance, Restructure or Swap</li>
              <li>End of Lease Options – Purchase, Renew or Return Equipment</li>
            </ul>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Independent Financial Consultant with Industry Expertise</li>
            <ul>
              <li>Marketing and Consulting During Life of the Lease</li>
              <li>Aligned with All Major Hardware Manufacturers and Their Partners to Provide a Wide Range of Technology Financing Options</li>
            </ul>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Proactive – Adaptable – Collaborative</li>
            <ul>
              <li>Match Terms to Unique Business Requirements</li>
              <li>Ability to Finance All Technology Needs</li>
              <li>Account Managers are pragmatic, hands-on and share your operating vision</li>
            </ul>
          </ul>
        </div>
        <div className='Offerings' id='CustOff'>
          <h1>Offerings Include:</h1>
          <ul className="fa-ul">
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Master Lease Agreements</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Installment Payment Agreements</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Capital and Operating Leases</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Software Only Financing</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Lease Lines</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Purchase Leaseback Structures</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Asset Management</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Network Integration and Consulting</li>
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Project Management</li>
          </ul>
        </div>
      </div>
    </div>
  </div>)} />
  </Layout>)
export default Customers;