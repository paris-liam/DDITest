import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { HeadGrid, Contact, Nav, Envelope, PhoneNumber, PayBillsButton, Logo, AboutContent, DropdownContent, HamburgerContent, HamburgerIcon } from '../style.js';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleNav(e) {
    e.preventDefault();
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
        <HamburgerIcon><div /><div className="burger-container" onClick={this.toggleNav}><div className="hamburger-menu" /></div></HamburgerIcon>
        <HamburgerContent>
          <Contact>
            <Envelope><i className="fa fa-envelope" /></Envelope>
            <PhoneNumber><i className="fa fa-phone-square" />  (908)-781-9300</PhoneNumber>
            <li style={{ marginRight: '.5rem', marginLeft: '.75rem' }}>
              <PayBillsButton>Pay Bills Online</PayBillsButton>
            </li>
          </Contact>
          <Nav>
            <li className="aboutDrop">About</li>
            <DropdownContent className="aboutContent">
              <ul>
                <li>Who We Are</li>
                <li>Why DDI</li>
                <li>Equiptment Financed</li>
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


export default Header;
