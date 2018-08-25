import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TopHeader from '../components/TopHeader';
import Slide from '../components/Slide';
import './index.css';
import favicon from '../images/favicon.ico';
import { Sidebar, SidebarItem, SidebarDropdown, SidebarContact, Envelope, PhoneNumber, PayBillsButton } from '../style';

const Layout = ({ children, data }) => (
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
        }, /*
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
        }, */
      ]}
    />
    <TopHeader siteTitle={data.site.siteMetadata.title} logo={data.head} />
    <div
      id="site-wrapper"
    >
      <div id="site-canvas">
        <Sidebar id="site-menu">
          <SidebarItem>
            <h2>About</h2>
            <SidebarDropdown>
              <li>Who We Are</li>
              <li>Why DDI</li>
              <li>Equiptment Financed</li>
              <li>Meet The Team</li>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem>
            <h2>Leasing Solutions </h2>
            <SidebarDropdown>
              <li>Client Offerings</li>
              <li>Vendor Programs</li>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarContact>
            <li className="sideenv"><i className="fa fa-envelope" />&nbsp;test@ddi.com</li>
            <li className="sidephone"><i className="fa fa-phone-square" />  (908)-781-9300</li>
            <li>
              <button className="sidebill">Pay Bills Online</button>
            </li>
          </SidebarContact>
        </Sidebar>
        {children()}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
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
      sizes(maxWidth:1000){
        ... GatsbyImageSharpSizes
      }
    }
  }
`;
