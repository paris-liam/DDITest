import React, { useState, useEffect } from 'react';
import Link from 'gatsby-link';
import IMG from 'gatsby-image';
import Membertile from '../components/Membertile';
import { teamInfo } from '../style/dataAndCopy';
import { gatsbyImgStyle } from '../style/dataAndCopy';
import Layout from '../components/layout';
import { useStaticQuery } from 'gatsby';

export default function About() {

  const data = useStaticQuery(graphql`
  query AboutQuery {
    cover: imageSharp(fluid: {originalName: {regex: "/CoverAbout.jpg/"}}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    equipt1: imageSharp(fluid: {originalName: {regex: "/AboutEquipt1.jpg/"}}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    equipt2: imageSharp(fluid: {originalName: {regex: "/AboutEquipt2.jpg/"}}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    equipt3: imageSharp(fluid: {originalName: {regex: "/AboutEquipt3.jpg/"}}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    memberPhotos: allImageSharp(filter: { original: {src: {regex: "/member/"}}}) {
      edges {
        node {
          resolutions {
            ... GatsbyImageSharpResolutions
            originalName
          }
        }
      }
    }
  }
`);

/*    
    } */
const imageCycle = () => {
  setEquiptmentCurrent(equiptmentCurrent + 1);
  console.log(equiptmentCurrent);
  if(equiptmentCurrent >= 3) {
    setEquiptmentCurrent(0);
  }
}

function teamInfoParse(info, images) {
  images.forEach((member) => {
    let memberId = member.node.resolutions.originalName.split('-');
    memberId.shift();
    memberId = memberId.join("-");
    const MemberName = memberId.split('.')[0];
    console.log(MemberName);
    if (info[MemberName]) {
      info[MemberName].image = member.node.resolutions;
      console.log(info[MemberName].image)
    }
  },
  );
  return info;
}

const [showAccordian, setShowAccordian] = useState(false);
const [equiptmentCurrent, setEquiptmentCurrent] = useState(0);
const equiptmentImages = [data.equipt1.sizes, data.equipt2.sizes, data.equipt3.sizes];
const teamInfoParsed = teamInfoParse(teamInfo, data.memberPhotos.edges);


useEffect(()=>{
  setInterval(imageCycle, 5000);
  return () => clearInterval(imageCycle);
},[]);

    return (
      <Layout>
      <div className='AboutGrid'>
        <div className='CoverHold'>
          <IMG
            sizes={data.cover.sizes}
            outerWrapperClassName="coverOuter"
            position="absolute"
            style={gatsbyImgStyle}
          />
          <div className='CoverText' id='AboutCoverText'>
            <h1>
              Trusted Independent Advisor
            </h1>
            <p>
              With so many financing options, it’s not always easy to know which solution will work best for your organization. Since 1993, we’ve delivered independent and innovative technology leasing and financing solutions designed to meet the specific needs of our clients. Reach out to DDI: we will make your decision easy.
            </p>
          </div>
        </div>
        <div className='WhoWeAre' id="Who">
          <div className='WhoTitle'><h1>WHO WE ARE</h1></div>
          <div className='WhoContainer'>
            <div className='WhoLetter'>
              <p>&emsp;To Our Valued Partners – When we founded DDI Capital in 1993, we wanted to create a company that valued honest work and genuine customer interaction. We wanted to create a place where employees understand their clients and the business challenges they face, and collaborate to find the best solutions. 30 years later, DDI Capital has grown into a company that accomplishes all this and much more.</p>
              <p>&emsp;Our philosophy has always been to put our clients’ needs above our own. While we pride ourselves on being financial consultants to our customers, we strive to make each business interaction much more than that. Our employees create a personal relationship with each customer, allowing us to better understand your needs and wants. We work with our clients every step of the way in order to offer best of breed solutions aimed at allowing partners to continue their growth, and create financial programs that will fit each partner’s budget. DDI knows that your business is not like anyone else’s: your financial program shouldn’t be either.</p>
              <p>&emsp;Adaptability is what DDI does best. We are not satisfied until we find a solution that fits the ethos of your business and allows your company to grow and prosper.   Welcome to DDI Capital, we’re happy you’re here.</p>
              <p>Sincerely,<br />Mike Moran<br />Founder and CEO</p>
            </div>
            <div className='WhoList'>
              <ul className="fa-ul">
                <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Over 30 years of experience</li>
                <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Specialized leasing solutions for all industries and customer types</li>
                <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Competitive rates and unmatched flexibility</li>
                <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Over 5,000 end-users including startups and Fortune 100s</li>
                <li><span className="fa-li"><i className="fas fa-check-circle" /></span>Headquartered in Parsippany, New Jersey with satellite offices in Spring Lake, NJ; Westhampton, NY; and Ponte Vedra, FL.</li>
                <li><span className="fa-li"><i className="fas fa-check-circle" /></span>Proud members of the National Equipment Finance Association (NEFA)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='WhyDDI' id="Why">
          <div className='WhyTitle'><h1>Why DDI?</h1></div>
          <div className='FocusedBody' id='WhyBody'>
            <div className='focusedrow'>
              <div className='whyItem' id='experience'>
                <h1 style={{ marginRight: '4.5vw' }}><i className="fa fa-clock" /></h1>
                <p><strong>Experience:</strong>DDI has been an innovator in the leasing industry for over 30 years. Our professionals are experts and have extensive relationships to help you source the right solution for your needs.
              </p>
              </div>
              <div className='whyItem' id='rates'>
                <h1><i className="fa fa-money-bill-wave" /></h1>
                <p><strong>Rates:</strong> DDI consistently delivers the lowest rates in the industry. Our payment solutions are affordable, flexible and easy to manage.</p>
              </div>
            </div>
            <div className='focusedrow'>
              <div className='whyItem' id='speed'>
                <h1><i className="fa fa-shipping-fast" /></h1>
                <p><strong>Speed and Convenience:</strong> We turn around proposals, approvals and lease documents in hours, not days. From start to finish, no leasing firm is more efficient than DDI.</p>
              </div>
              <div className='whyItem' id='creative'>
                <h1 style={{ marginRight: '4.5vw' }}><i className="fa fa-paint-brush" /></h1>
                <p><strong>Creativity:</strong> Every end-user is unique. Your leasing solution should be too. DDI works side by side with our partners to design the most effective and efficient financing plans to fit your business model and help your company grow.</p>
              </div>
            </div>
            <div className='focusedrow'>
            <div className='whyItem' id='adapt'>
              <h1 ><i className="fa fa-people-carry" /></h1>
              <p className="adaptCopy"><strong>Adaptability:</strong> From the design of your financing solution, to mid-lease options to end-of-term flexibility, DDI works with you to adapt your financing program as your budget, cash flow and technology requirements change over time.</p>
            </div>
            </div>
          </div>
        </div>
        <div className='EquiptmentFinanced' id="Equipt">
          <div className='EquiptList'>
            <IMG
              sizes={equiptmentImages[equiptmentCurrent]}
              outerWrapperClassName="coverOuter"
              position="absolute"
              style={gatsbyImgStyle}
            />
            <div className='EquiptText'>
              <div className='EquiptTitle'>
                <h1>EQUIPMENT FINANCED</h1>
                <p>
                  Because we are aligned with all the major hardware manufacturers and their partners, DDI is able to assist you with a wide range of technology options.
                    Select any vendor and we can arrange the leasing program that compliments your technology solution.
                </p>
              </div>
              <div className='EquiptTextLists'>
                <ul>
                  <li>Storage Products</li>
                  <li>Desktop/Laptop Computers</li>
                  <li>Telecommunications Products</li>
                  <li>Tablets/iPads</li>
                  <li>Enterprise Servers/Switches</li>
                  <li>LAN/WAN Infrastructure</li>
                </ul>
                <ul>
                  <li>Software/Maintenance-Only Financing</li>
                  <li>Unified Communications Equipment</li>
                  <li>Cloud Financing</li>
                  <li>Medical Equipment</li>
                  <li>Furniture</li>
                  <li>Handheld Devices/Barcode Scanners</li>
                </ul>
                <ul>
                  <li>Point-of-Sale Equipment</li>
                  <li>ERP Software Projects</li>
                  <li>Manufacturing and Other Capital Equipment</li>
                  <li>Printing Systems and Associated Peripherals</li>
                  <li>Warehouse Equipment</li>
                  <li>Non-Traditional Assets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='MeetTheTeam' id="Team">
          <div className='MeetTheTeamTitle' onClick={()=>{setShowAccordian(!showAccordian)}}>
          <h1>MEET THE TEAM</h1>
            <p>We deliver high-integrity, convenience-based financing solutions our technology partners can provide to their customers. Here’s the people that make this happen.</p>
            <i className={`fa fa-angle-right meetTeamArrow ${showAccordian ? ('animateArrow') : ('resetArrow')}`} />
          </div>
          <div className='MeetTheTeamAccordian'
            style={{
              height: (showAccordian) ? ('60vh') : ('0px'),
            }}
          >
            {
              Object.keys(teamInfoParsed).map(member => <Membertile key={teamInfoParsed[member].name} info={teamInfoParsed[member]} show={showAccordian} />)
            }
          </div>
        </div>
        <div className='AboutInterestedSlide' >
          <div className='Interested' id='AboutInterested'>
            <h1>Interested?<br /> Checkout Specific Information for:</h1>
            <div><Link to="/Vendors"><button>Vendors</button></Link></div>
            <div><Link to="/Customers"><button> Customers</button></Link></div>
          </div>
        </div>
      </div>
     </Layout>
    );
}