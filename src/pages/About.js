import React from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
import { IndexGrid, CoverHold, CoverText, LearnMore, FocusedBody, FocusedTitle, FocusedSlide, SolutionsSlide, NefaSlide, NefaDiv, InterestedSlide, Offerings, Interested } from '../style/style-index';
import { gatsbyImgStyle } from '../style/style';

const About = data => (
  <IndexGrid>
    <CoverHold>
      <IMG
sizes={data.data.cover.sizes}
outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle} 
      />
      <CoverText>
        <h1>
        Independent Trusted Advisor
        </h1>
        <p>
        With so many financing options, it’s not always easy to know which solution will work best for your organization. For more than 25 years, we’ve delivered independent and innovative technology leasing and financing solutions designed to meet the specific needs of our clients. Reach out to DDI: we will make your decision easy.
        </p>
      </CoverText>
    </CoverHold>
    <div id="Who">
      <h1>Who</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div id="Why">
      <h1>Why</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div id="Equipt">
      <h1>Equipt</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div id="Team">
      <h1>Team</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </IndexGrid>
);

export default About;

export const query = graphql`
  query AboutQuery {
    cover: imageSharp(id:{regex: "/CoverAbout.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }

  }
`;
/*
get the other images
*/

