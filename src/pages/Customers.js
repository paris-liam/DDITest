import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';

import { IndexGrid, CoverHold, CoverText, LearnMore, FocusedBody, FocusedTitle, FocusedSlide } from '../style/style-index';
import { gatsbyImgStyle } from '../style/style';

const CustGrid = IndexGrid.extend`
  grid-template-rows: 70 auto;
`;
const Customers = data => (
  <CustGrid>
    <CoverHold><IMG sizes={data.data.cover.sizes} style={gatsbyImgStyle} />
      <CoverText>
        <h1>Focused on You – Where you work</h1>
      </CoverText>
    </CoverHold>
    <FocusedSlide>
      <FocusedTitle><h2>DDI will work closely with you to customize a financing plan that best suits your budget, cash flow and technology requirements.</h2><p>Our professionals know more than leasing – they are familiar with the technology that
you use – and they are willing to spend the time with you to put it to maximum advantage.
                                                                                                                                                             </p>
      </FocusedTitle>
      <FocusedBody />
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
