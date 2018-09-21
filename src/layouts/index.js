import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TopHeader from '../components/TopHeader'; import './index.css';
import favicon from '../pages/images/favicon.ico';
import Link from 'gatsby-link';
import { Sidebar, SidebarItem, SidebarDropdown, SidebarContact } from '../style/style';
import { toggleNav } from '../style/dataAndCopy';

const Layout = ({ data, children }) => (
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
        <Sidebar id="site-menu">
          <SidebarItem>
            <Link to="/About" onClick={toggleNav}><h3>About</h3></Link>
            <SidebarDropdown>
              <li><Link to="/About#Who" onClick={toggleNav}>Who We Are</Link></li>
              <li><Link to="/About#Why" onClick={toggleNav}>Why DDI</Link></li>
              <li><Link to="/About#Equipt" onClick={toggleNav}>Equiptment Financed</Link></li>
              <li><Link to="/About#Team" onClick={toggleNav}>Meet The Team</Link></li>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem>
            <h3>Leasing Solutions </h3>
            <SidebarDropdown>
              <li><Link to="/Customers" onClick={toggleNav}>Client Offerings</Link></li>
              <li><Link to="/Vendors" onClick={toggleNav}>Vendor Programs</Link></li>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem>
            <Link to="/Contact" onClick={toggleNav}><h3>Contact</h3></Link>
          </SidebarItem>
          <SidebarContact>
            <li className="sideenv"><a href="mailto:g.nappi@ddileasing.com"><i className="fa fa-envelope" />&nbsp;&nbsp; Email us</a></li>

            <li className="sidephone"><i className="fa fa-phone-square" />  (908)-781-9300</li>
            <li>
              <a href="https://smartpay.profitstars.com/express/DDICPP">
                <button className="sidebill">Pay Bills Online</button>
              </a>
            </li>
          </SidebarContact>
        </Sidebar>
        <TopHeader siteTitle={data.site.siteMetadata.title} logo={data.head} />
        {children()}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    head: imageSharp(id:{regex: "/HeadLogo.png/"}){
      sizes(maxWidth:800){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;
