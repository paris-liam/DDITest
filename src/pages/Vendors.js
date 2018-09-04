import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
import { IndexGrid, CoverHold, CoverText, LearnMore, FocusedBody, FocusedTitle, FocusedSlide } from '../style/style-index';
import { gatsbyImgStyle } from '../style/style';

const VendorGrid = IndexGrid.extend`
  grid-template-rows: 70 auto;
`;
const Vendors = data => (
  <VendorGrid>
    <CoverHold><IMG sizes={data.data.cover.sizes} style={gatsbyImgStyle} />
      <CoverText>
        <h1>Getting it Done – Simply</h1>
        <p>Team with DDI and gain a competitive advantage that results
        in increased revenue and growing market share.
        Our objective is to create a relationship of trust between you, your client and the DDI team.
        </p>
      </CoverText>
    </CoverHold>
    <FocusedSlide>
      <p> We Offer the following:</p>
      <ul className="fa-ul">
        <li><span className="fa-li" ><i className="fas fa-check-circle" /></span> Flexibility – DDI Capital will help you structure deals of any size and with multiple suppliers. We are a truly independent lessor and we will make your offering more attractive by structuring either operating and / or capital leases for your client.</li>
        <li><span className="fa-li"><i className="fas fa-check-circle" /></span>Creativity – In today’s complex IT environment, not all deals are easy to close. DDI’s extensive experience, aggressive funding resources and creative leasing professionals can help you overcome the toughest challenges. We’ll get the deal done.</li>
        <li><span className="fa-li"><i className="fas fa-check-circle" /></span>Convenience – Our ability to bundle hard and soft costs together into one low monthly payment not only simplifies the acquisition process for your customers – it makes doing business more affordable.</li>
      </ul>
      <IMG sizes={data.data.body.sizes} />
    </FocusedSlide>
  </VendorGrid>
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
