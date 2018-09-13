import React from 'react';
import IMG from 'gatsby-image';
import { CoverHold } from '../style/style-index';
import { gatsbyImgStyle } from '../style/style';
import { SingleCoverText, SingleGrid, SingleSlide, VendorBody, Following } from '../style/style-single-page';

const Vendors = data => (
  <SingleGrid>
    <CoverHold>
      <IMG
        sizes={data.data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <SingleCoverText>
        <h1>Getting it Done – Simply</h1>
        <p>Team with DDI and gain a competitive advantage that results
        in increased revenue and growing market share.
        Our objective is to create a relationship of trust between you, your client and the DDI team.
        </p>
      </SingleCoverText>
    </CoverHold>
    <SingleSlide>
      <VendorBody>
        <Following>
          <ul className="fa-ul">
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span><strong>Flexibility</strong> – DDI Capital will help you structure deals of any size and with multiple suppliers. We are a truly independent lessor and we will make your offering more attractive by structuring either operating and / or capital leases for your client.</li>
            <li><span className="fa-li"><i className="fas fa-check-circle" /></span><strong>Creativity </strong>– In today’s complex IT environment, not all deals are easy to close. DDI’s extensive experience, aggressive funding resources and creative leasing professionals can help you overcome the toughest challenges. We’ll get the deal done.</li>
            <li><span className="fa-li"><i className="fas fa-check-circle" /></span><strong>Convenience</strong> – Our ability to bundle hard and soft costs together into one low monthly payment not only simplifies the acquisition process for your customers – it makes doing business more affordable.</li>
          </ul>
        </Following>
        <div className="handshakeImage" style={{ position: 'relative' }}>
          <IMG sizes={data.data.body.sizes} style={gatsbyImgStyle} />
        </div>
      </VendorBody>
    </SingleSlide>
  </SingleGrid>
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
      sizes(maxWidth:900){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;
