import React from 'react';
import IMG from 'gatsby-image';
import { gatsbyImgStyle } from '../style/dataAndCopy';
import { StaticQuery } from 'gatsby';
import Layout from '../components/layout';

const Vendors = () => (
<Layout>
         <StaticQuery
       query={graphql`
       query VendorQuery {
        cover: imageSharp(fluid: {originalName: {regex: "/CoverVendors.jpg/"}}){
          sizes(maxWidth:1900){
            ... GatsbyImageSharpSizes
          }
        }
        body: imageSharp(fluid: {originalName: {regex: "/bodyVendor.jpg/"}}){
          sizes(maxWidth:900){
            ... GatsbyImageSharpSizes
          }
        }
      }
      
       `}
    render={data => <div className='indexGrid' id='singlegrid'>
    <div className='CoverHold'>
      <IMG
        sizes={data.cover.sizes}
        outerWrapperClassName="coverOuter"
        position="absolute"
        style={gatsbyImgStyle}
      />
      <div className='CoverText' id='SingleCoverText'>
        <h1>Getting it Done – Simply</h1>
        <p>Team with DDI and gain a competitive advantage that results
        in increased revenue and growing market share.
        Our objective is to create a relationship of trust between you, your client and the DDI team.
        </p>
      </div>
    </div>
    <div className='focusedslide' id='singleslide'>
      <div className='VendorBody'>
        <div className='Following'>
          <ul className="fa-ul">
            <li><span className="fa-li" ><i className="fas fa-check-circle" /></span><span className='following'>Flexibility</span><p>DDI Capital will help you structure deals of any size and with multiple suppliers. We are a truly independent lessor and we will make your offering more attractive by structuring either operating and / or capital leases for your client.</p></li>
            <li><span className="fa-li"><i className="fas fa-check-circle" /></span><span className='following'>Creativity </span><p>In today’s complex IT environment, not all deals are easy to close. DDI’s extensive experience, aggressive funding resources and creative leasing professionals can help you overcome the toughest challenges.</p></li>
            <li><span className="fa-li"><i className="fas fa-check-circle" /></span><span className='following'>Convenience</span><p>Our ability to bundle hard and soft costs together into one low monthly payment not only simplifies the acquisition process for your customers – it makes doing business more affordable.</p></li>
          </ul>
        </div>
        <div className="handshakeImage" style={{ position: 'relative' }}>
          <IMG sizes={data.body.sizes} style={gatsbyImgStyle} />
        </div>
      </div>
    </div>
  </div>}/>
  </Layout>
);

export default Vendors;
