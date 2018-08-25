import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { HeadGrid, Contact, Nav, Envelope, PhoneNumber, PayBillsButton, Logo, AboutContent, DropdownContent, HamburgerContent, HamburgerIcon } from '../style.js';


class TopHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const siteWrap = document.querySelector('#site-wrapper');
    siteWrap.classList.remove('show-nav');
    const ham = document.querySelector('.hamburger-menu');
    ham.classList.remove('animate');
  }
  toggleNav() {
    const siteWrap = document.querySelector('#site-wrapper');
    siteWrap.classList.toggle('show-nav');
    const ham = document.querySelector('.hamburger-menu');
    ham.classList.toggle('animate');
  }
  render() {
    return (
      <HeadGrid>
        <Logo to="/">
          <Img sizes={this.props.logo.sizes} />
        </Logo>
        <HamburgerIcon><div /><div className="burger-container" onClick={this.toggleNav}><div
          className="hamburger-menu"
          style={{
    position: 'absolute',
    top: '30%',
    left: '30%',
        }}
        />
        </div>
        </HamburgerIcon>
        <HamburgerContent>
          <Contact>
            <Envelope><i className="fa fa-envelope" /><p>&nbsp;&nbsp; Test@DDILeasing.com</p></Envelope>
            <PhoneNumber><i className="fa fa-phone-square" /><p>&nbsp;&nbsp;(908)-781-9300</p></PhoneNumber>
            <PayBillsButton>
              <button>Pay Bills Online</button>
            </PayBillsButton>
          </Contact>
          <Nav>
            <li className="aboutDrop">About</li>
            <DropdownContent className="aboutContent">
              <ul>
                <li>Who We Are</li>
                <li>Why DDI</li>
                <li>Equipment Financed</li>
                <li>Meet The Team</li>
              </ul>
            </DropdownContent>
            <li className="leasingDrop">Leasing Solutions</li>
            <DropdownContent className="leasingContent">
              <ul>
                <li>Client Offerings</li>
                <li>Vendor Programs</li>
              </ul>
            </DropdownContent>
            <li>Contact</li>
          </Nav>
        </HamburgerContent>
      </HeadGrid>
    );
  }
}


export default TopHeader;
