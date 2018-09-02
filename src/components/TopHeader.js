import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {colorsAndFont} from '../style.js'

const HeadGrid = styled.div`
  color: ${colorsAndFont.blue};
  font-size:.75rem;
  display:grid;
  /*desktop*/
  grid-template-rows:auto;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas: 'headImg . hamburgercontent';
  margin: 3vh .25vh 1.5vh .25vh;
  /*phone*/
  @media screen and (max-width: 1025px){
    grid-template-rows:10vh;
    grid-template-columns: 4fr 2fr;
    grid-template-areas: 'headImg hamburgericon';
  }
  @media screen and (max-width: 1025px) and (orientation: landscape){
    grid-template-rows:auto;
  }
`;
 const Logo = styled(Link)`
  grid-area: headImg;
  align-self:center;
  width:75%;
`;
 const HamburgerContent = styled.div`
  /*desktop*/
  display:grid;
  grid-template-columns: 100%;
  grid-template-rows:75% 25%;
  grid-area:hamburgercontent;
  grid-template-areas: 'contact' 'nav';
  /*phone*/
  @media screen and (max-width: 1025px){
    display:none;
  }
`;

 const Contact = styled.div`
  list-style:none;
  grid-area: contact;
  text-align:right;
  display:flex;
  justify-content:space-around;
  li{
    i{
    }
    p{
      display:inline;
    }
  }
`;

 const Envelope = styled.li`
  &:hover{
    color:${colorsAndFont.grey};
  }
`;
 const PhoneNumber = styled.li``;
 const PayBillsButton = styled.li`
  /*desktop*/
  & > button{
    background-color:${colorsAndFont.blue};
    color:white;
    outline:none;
    border:none;
    border-radius:30px;
    /*font-family: ${colorsAndFont.font};*/
    &:hover{
      background-color:${colorsAndFont.grey};
    }
  }
  /*phone*/
  @media screen and (max-width: 1025px){
    & > button{
      background-color:${colorsAndFont.grey};
    }
    & > button:hover{
      background-color:${colorsAndFont.magenta};
    }
  }
`;

 const Nav = styled.div`
  grid-area: nav;
  display:flex;
  justify-content:space-around;
  /*grid-template-columns: auto auto auto;
  grid-template-rows:auto;*/
  list-style:none;
  color: black;
  position:relative;
  text-align:right;
  li{
    &:hover{
      color:${colorsAndFont.light_purp};
    }
  }
  li.aboutDrop:hover + div.aboutContent{
    visibility:visible;
  };
  li.leasingDrop:hover + div.leasingContent{
    visibility:visible;
  };
  div.aboutContent:hover{
    visibility:visible;
  }
  div.leasingContent:hover{
    visibility:visible;
  }
`;

 const DropdownContent = styled.div`
  color:white;
  visibility: hidden;
  transition:visibility 100ms linear;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 1;
  background-color:${colorsAndFont.grey};
  border-radius:5px;
  &.aboutContent{
    left: 1em;
    top: 3.5vh;
  }
  &.leasingContent{
    left:40%;
    top:3.5vh;
  }
  &:before {
      content:"";
      position: absolute;
      right: 50%;
      top: -.5vw;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 .5vw .5vw .5vw;
      border-color: transparent transparent ${colorsAndFont.grey} transparent;
      z-index:999;
  }
  ul{
    list-style:none;
    & > li:first-child:hover{
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    & > li:last-child:hover{
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    & > li{
    width:100%;
    text-align:center;
    padding: .5em .1em
    &:hover{
      background-color:${colorsAndFont.lightPurp};
      color:white;
      }
    }
  }
`;

 const HamburgerIcon = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:100%;
  color: ${colorsAndFont.blue};
  grid-area:hamburgericon;
  .burger-container{
    display:grid;
    align-content:center;
    justify-content:center;
    position:relative
  }
  .hamburger-menu, .hamburger-menu::after, .hamburger-menu:before{
    width: ${colorsAndFont.barWidth};
	  height: ${colorsAndFont.barHeight};
  }
  .hamburger-menu{
    transform: translateY(${colorsAndFont.barSpacing});
    background: ${colorsAndFont.blue};
    transition: all 0ms 300ms;
    &.animate {
      background: rgba(255, 255, 255, 0);
    }
  }
  .hamburger-menu:before {
	  content: "";
	  position: absolute;
	  left: 0;
    bottom: ${colorsAndFont.barSpacing};
  background: ${colorsAndFont.blue};
	  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hamburger-menu:after {
	  content: "";
	  position: absolute;
	  left: 0;
    top: ${colorsAndFont.barSpacing};
  background: ${colorsAndFont.blue};
	  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hamburger-menu.animate:after {
	  top: 0;
	  transform: rotate(45deg);
	  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
  }

  .hamburger-menu.animate:before {
	  bottom: 0;
	  transform: rotate(-45deg);
	  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
  }

  @media screen and (min-width: 1025px){
    display:none;
  }
`;

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
