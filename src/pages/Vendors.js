import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
import styled from 'styled-components';
import { CoverHold, CoverText } from '../style/style-index';
import { gatsbyImgStyle, colorsAndFont } from '../style/style';

const VendorGrid = styled.div`
  grid-template-rows: 50vh auto;
  display:grid;
  grid-template-columns: auto;
  color:white;
  height:100%;
`;
const VendorSlide = styled.div`
  background-color:${colorsAndFont.blue};
  height:auto;
`;
const VendorBody = styled.div`
  display:grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  color:white;
  padding: 2vh 1vh;
  width:100%;
  height:100%;
  @media screen and (max-width:1025px){
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;
const Vendors = data => (
  <VendorGrid>
    <CoverHold>
      <IMG
        sizes={data.data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <CoverText>
        <h1>Getting it Done – Simply</h1>
        <p>Team with DDI and gain a competitive advantage that results
        in increased revenue and growing market share.
        Our objective is to create a relationship of trust between you, your client and the DDI team.
        </p>
      </CoverText>
    </CoverHold>
    <VendorSlide>
      <VendorBody>
        <div>
          <p> We Offer the following:</p>
          <ul className="fa-ul">
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span> Flexibility – DDI Capital will help you structure deals of any size and with multiple suppliers. We are a truly independent lessor and we will make your offering more attractive by structuring either operating and / or capital leases for your client.</li>
            <li><span className="fa-li"><i className="fas fa-check-circle" /></span>Creativity – In today’s complex IT environment, not all deals are easy to close. DDI’s extensive experience, aggressive funding resources and creative leasing professionals can help you overcome the toughest challenges. We’ll get the deal done.</li>
            <li><span className="fa-li"><i className="fas fa-check-circle" /></span>Convenience – Our ability to bundle hard and soft costs together into one low monthly payment not only simplifies the acquisition process for your customers – it makes doing business more affordable.</li>
          </ul>
        </div>
        <div style={{ position: 'relative' }}>
          <IMG sizes={data.data.body.sizes} style={gatsbyImgStyle} />
        </div>
      </VendorBody>
    </VendorSlide>
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
