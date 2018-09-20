import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colorsAndFont } from '../style/style.js';
import { accordianTeam } from '../style/dataAndCopy';

const toggleNav = function () {
  const siteWrap = document.querySelector('#site-wrapper');
  siteWrap.classList.toggle('show-nav');
  const ham = document.querySelector('.hamburger-menu');
  ham.classList.toggle('animate');
};

const HeadGrid = styled.div`
  color: ${colorsAndFont.blue};
  display:grid;
  /*desktop*/
  grid-template-rows:auto;
  grid-template-columns: 2fr 1fr 3fr;
  grid-template-areas: 'headImg . hamburgercontent';
  margin: 1.5em 2em .5em 4em;
  /*phone*/
  @media screen and (max-width: 1025px){
    grid-template-rows:10vh;
    grid-template-columns: 4fr 2fr;
    grid-template-areas: 'headImg hamburgericon';
    margin-top:2vh;
    margin-left: 2em;
  }
  @media screen and (max-width: 1025px) and (orientation: landscape){
    grid-template-rows:auto;
  }
`;
const Logo = styled(Link)`
  grid-area: headImg;
  align-self:center;
  width:90%;
  padding-top:5px;
`;
const HamburgerContent = styled.div`
  /*desktop*/
  display:grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows:1fr 2fr;
  grid-row-gap:3vh;
  grid-area:hamburgercontent;
  grid-template-areas: '. contact' '. nav';
  /*phone*/
  @media screen and (max-width: 1025px){
    display:none;
  }
`;

const Contact = styled.div`
  font-size:.75em;

  @media screen and (max-width:1200px){
    font-size:.55em;
  }
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
      font-weight:400 !important;
    }
  }
`;

const Envelope = styled.li`
  a{
    text-decoration:none;
    color:inherit;
    &:hover{
      color:${colorsAndFont.grey};
    }
  }

`;
const PhoneNumber = styled.li``;
const PayBillsButton = styled.li`
  /*desktop*/
  & > a > button{
    background-color:${colorsAndFont.blue};
    color:white;
    outline:none;
    border:none;
    border-radius:30em;
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
  justify-content:space-evenly;
  list-style:none;
  position:relative;
  text-align:right;
  color: black;
  @media screen and (max-width:1200px){
    font-size:.8em;
  }
  li{
    font-size:1.25em;
      a{
        color:black;
      }
      a:hover{
       color:${colorsAndFont.lightPurp};
      }
  }
  li:hover{
    color:${colorsAndFont.lightPurp};
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
  font-size:.75em;
  color:white;
  visibility: hidden;
  transition:visibility 100ms linear;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 100;
  background-color:${colorsAndFont.grey};
  border-radius:.5em;
  &.aboutContent{
    top: 100%;
    left:-4%;
  }
  &.leasingContent{
    top:100%;
    left:35%;
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
    margin:0;
    padding:0;
    & > li:first-child:hover{
      border-top-left-radius: .5em;
      border-top-right-radius: .5em;
    }
    & > li:last-child:hover{
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
    }
    & > li{
    width:100%;
    text-align:center;
    padding: .5em .1em;
    a{
      color: white;
    }
    &:hover{
      background-color:${colorsAndFont.lightPurp};
      a{
        color:white;
      }
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

  render() {
    return (
      <HeadGrid>
        <Logo to="/">
          <Img sizes={this.props.logo.sizes} />
        </Logo>
        <HamburgerIcon><div /><div className="burger-container" onClick={toggleNav}><div
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
            <Envelope><a href="mailto:g.nappi@ddileasing.com"><i className="fa fa-envelope" /><p>&nbsp;&nbsp; Email us</p></a></Envelope>
            <PhoneNumber><i className="fa fa-phone-square" /><p>&nbsp;&nbsp;(908)-781-9300</p></PhoneNumber>
            <PayBillsButton>
              <a href="https://smartpay.profitstars.com/express/DDICPP"><button>Pay Bills Online</button></a>
            </PayBillsButton>
          </Contact>
          <Nav>
            <li className="aboutDrop"><Link to="/About">About</Link></li>
            <DropdownContent className="aboutContent">
              <ul>
                <li><Link to="/About">Who We Are</Link></li>
                <li><Link to="/About#Why">Why DDI</Link></li>
                <li><Link to="/About#Equipt">Equipment Financed</Link></li>
                <li><Link to="/About#Team">Meet The Team</Link></li>
              </ul>
            </DropdownContent>
            <li className="leasingDrop">Leasing Solutions</li>
            <DropdownContent className="leasingContent">
              <ul>
                <li><Link to="/Customers">Client Offerings</Link></li>
                <li><Link to="/Vendors">Vendor Programs</Link></li>
              </ul>
            </DropdownContent>
            <li><Link to="/Contact">Contact</Link></li>
          </Nav>
        </HamburgerContent>
      </HeadGrid>
    );
  }
}


export default TopHeader;
