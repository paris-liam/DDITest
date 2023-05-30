import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TopHeader from './TopHeader'
import '../style/index.scss';
import favicon from '../pages/images/favicon.ico';
import Link from 'gatsby-link';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { toggleNav } from '../style/dataAndCopy';

const Layout = ({ children }) => (
  <StaticQuery
  query={graphql`

 query SiteTitleQuery {
   site {
     siteMetadata {
       title
     }
   }
   head: imageSharp(fluid: {originalName: {regex: "/HeadLogo.png/"} }){
     sizes(maxWidth:800){
       ... GatsbyImageSharpSizes
     }
   }
 }
  `}
render={data =>(
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'DDI Captial' },
        { name: 'keywords', content: 'DDI, Capital, Techonology Leasing, Leasing, New Jersey' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: favicon },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.2.0/css/solid.css',
          integrity: 'sha384-wnAC7ln+XN0UKdcPvJvtqIH3jOjs9pnKnq9qX68ImXvOGz2JuFoEiCjT8jyZQX2z',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css',
          integrity: 'sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          charset: 'UTF-8',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          charset: 'UTF-8',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
        },
    ]}
    />
    <div id="site-wrapper">
      <div id="site-canvas">
        <div className='Sidebar' id="site-menu">
          <ul className='SidebarItem'>
            <Link to="/About" onClick={toggleNav}><h3>About</h3></Link>
            <ul className='SidebarDropdown'>
              <li><Link to="/About#Who" onClick={toggleNav}>Who We Are</Link></li>
              <li><Link to="/About#Why" onClick={toggleNav}>Why DDI</Link></li>
              <li><Link to="/About#Equipt" onClick={toggleNav}>Equiptment Financed</Link></li>
              <li><Link to="/About#Team" state={{ accordian: true }}>Meet The Team</Link></li>
            </ul>
          </ul>
          <ul className='SidebarItem'>
            <h3>Leasing Solutions </h3>
            <ul className='SidebarDropdown'>
              <li><Link to="/Customers" onClick={toggleNav}>Client Offerings</Link></li>
              <li><Link to="/Vendors" onClick={toggleNav}>Vendor Programs</Link></li>
            </ul>
          </ul>
          <ul className='SidebarItem'>
            <Link to="/Contact" onClick={toggleNav}><h3>Contact</h3></Link>
          </ul>
          <ul className='SidebarContact'>
            <li className="sidelinked"><a href="https://www.linkedin.com/company/ddi-capital-inc/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a></li>
            <li className="sideenv"><a href="mailto:info@ddicapitalinc.com"><i className="fa fa-envelope" />&nbsp;&nbsp; Email us</a></li>
            <li className="sidephone"><i className="fa fa-phone-square" />  (908)-781-9300</li>
            <li>
              <a href="https://smartpay.profitstars.com/express/DDICPP">
                <button className="sidebill">Pay Bills Online</button>
              </a>
            </li>
          </ul>
        </div>
        <TopHeader siteTitle={data.site.siteMetadata.title} logo={data.head} />
        {children}
      </div>
    </div>
  </div>
)} />);
Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;