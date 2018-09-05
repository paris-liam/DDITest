import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import SimpleSlider from '../components/SimpleSlider';
import { IndexGrid, CoverHold, CoverText, LearnMore, FocusedBody, FocusedTitle, FocusedSlide, SolutionsSlide, NefaSlide, NefaDiv, InterestedSlide, Offerings, Interested } from '../style/style-index';
import { gatsbyImgStyle } from '../style/style';

const learnScroll = function () {
  window.scrollTo({ top: 690, behavior: 'smooth' });
};
const IndexPage = data => (
  <IndexGrid>
    <CoverHold>
      <Img
        sizes={data.data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <CoverText>
        <h1>DDI Capital is your Independent Trusted Advisor </h1>
        <p>Whether you are just starting out, or ready to bring your current organization to a new level of growth DDI Capital offers you the most innovative financial strategies allowing you to acquire and finance technology solutions at the best possible price.</p>
        <LearnMore><button onClick={learnScroll}> Learn More &nbsp;&nbsp;<i className="fa fa-arrow-alt-circle-down" /></button></LearnMore>
      </CoverText>
    </CoverHold>
    <FocusedSlide>
      <FocusedTitle>
        <h1>Focused on You – Where you work</h1>
        <p>We know your challenges, understand your technology options and aren’t satisfied  until we recommend a solution that exceeds your expectations.</p>
      </FocusedTitle>
      <FocusedBody>
        <div><h1><i className="fa fa-money-check-alt" /></h1><p>DDI will work closely with you to customize a financing plan that  best suits your budget, cash flow and technology requirements.</p></div>
        <div><h1><i className="fa fa-anchor" /></h1><p>Our team’s collective experience, industry contacts and collaborative,  consultative work process insure that you will get the best possible solution with each lease transaction.</p></div>
        <div><h1><i className="fa fa-hands-helping" /></h1><p>We view our clients as business partners and approach each deal with a long-term focus.  Each and every one of our DDI professionals is acutely aware of the relationship between the growth of your business and ours.</p></div>
        <div><h1><i className="fa fa-hdd" /></h1><p>Our professionals know more than leasing – they are familiar with the technology that you use and they are willing to spend the time with you to put it to maximum advantage.</p></div>
      </FocusedBody>
    </FocusedSlide>
    <SolutionsSlide>
      <h1 className="title">
        Whether you’re a startup or a Fortune 100 company
        DDI has the appropriate solutions to help you finance your growth
      </h1>
      <SimpleSlider />
    </SolutionsSlide>
    <NefaSlide>
      <Img
        sizes={data.data.nefa.sizes}
        position="absolute"
        style={gatsbyImgStyle}
      />
      <h1>Proud Members of <span>NEFA</span></h1>
    </NefaSlide>
    <InterestedSlide>
      <Interested>
        <h1>Interested?<br /> Let's Talk!</h1>
        <div><Link to="/Vendors"><button>Vendor Opportunities</button></Link></div>
        <div><Link to="/Customers"><button> Customer Information</button></Link></div>
      </Interested>
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
      <p className="copyright">site designed by Liam Paris</p>
    </InterestedSlide>
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
    nefa: imageSharp(id:{regex: "/CoverNefa.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;
