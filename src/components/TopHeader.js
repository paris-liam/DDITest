import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colorsAndFont } from '../style/style.js';
import { toggleNav } from '../style/dataAndCopy';

const HeadGrid = styled.div`
  color: ${colorsAndFont.blue};
  display:grid; 
  display:-ms-grid; 
  /*phone*/
  -ms-grid-rows: 10vh;  
  grid-template-rows:10vh;
  -ms-grid-columns: 4fr 2fr;
  grid-template-columns: 4fr 2fr;
  grid-template-areas: 'headImg hamburgericon';
  margin-top:2vh;
  margin-left: 2em;
  /*desktop*/
  @media screen and (min-width: 1025px){
    -ms-grid-rows:auto;
    grid-template-rows:auto;
    -ms-grid-columns: 2fr 1fr 3fr;
    grid-template-columns: 2fr 1fr 3fr;
    grid-template-areas: 'headImg . hamburgercontent';
    margin: 1.5em 2em .5em 4em;
  }
  /* phone landscape*/
  @media screen and (max-width: 1025px) and (orientation: landscape){
    -ms-grid-rows: auto;
    grid-template-rows:auto;
    margin-bottom: 4vh;
  }
`;
const Logo = styled(Link)`
  -ms-grid-row:1; 
  -ms-grid-column:1; 
  -ms-grid-column-span:1;
  grid-area: headImg;
  align-self:center;
  width:90%;
  padding-top:5px;
`;
const HamburgerContent = styled.div`
  /*phone*/
  display:none;
  /*desktop*/
  @media screen and (min-width: 1025px){
    display:grid; 
    display:-ms-grid; 
    -ms-grid-columns:1fr 3fr;
    grid-template-columns: 1fr 3fr;
    -ms-grid-rows: 1fr 1fr;
    grid-template-rows:1fr 1fr;
    grid-row-gap:3vh;
    -ms-grid-row:1; 
    -ms-grid-column:-1; 
    -ms-grid-column-span:1;
    grid-area:hamburgercontent;
    grid-template-areas: '. contact' '. nav';
  }
`;

const Contact = styled.div`
  list-style:none;
  -ms-grid-row:1; 
  -ms-grid-column:2; 
  -ms-grid-column-span:1;
  grid-area: contact;
  text-align:right;
  display:flex;
  justify-content:space-evenly;
  font-size:.55em;
  /*desktop*/
  @media screen and (min-width:1200px){
    font-size:.75em;
  }
  li{
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
  a > button{
    background-color:${colorsAndFont.blue};
    color:white;
    outline:none;
    border:none;
    border-radius:30em;
    &:hover{
      background-color:${colorsAndFont.grey};
    }
  }
`;

const Nav = styled.div`
  -ms-grid-row:2; 
  -ms-grid-column:2; 
  -ms-grid-column-span:1;
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
    font-size:1em;
    font-weight:300;
    a{
      color:black;
      &:hover{
        color:${colorsAndFont.lightPurp};
      }

    }
  }
  li:hover{
    color:${colorsAndFont.lightPurp};
  }
  li.aboutDrop:hover > div.aboutContent{
    visibility:visible;
  };
  li.leasingDrop:hover > div.leasingContent{
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
  border-radius:.5em .5em .5em .5em;
  &.aboutContent{
    top:120%;
  }
  &.leasingContent{
    top:120%;
  }
  ul{
    list-style:none;
    margin:0;
    padding:0;
    & > li:first-child:hover{
      border-top-left-radius: .5em;
      border-top-right-radius: .5em;
      &:before{
        border-color: transparent transparent ${colorsAndFont.lightPurp} transparent;
      }
    }
    & > li:first-child:before{
      content:"";
      position: absolute;
      left: 1px;
      top: -.45vw;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0 .5vw .75vw .5vw;
      border-color: transparent transparent ${colorsAndFont.grey} transparent;
      z-index:999;
    }

    & > li:last-child:hover{
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
    }
    & > li{
    text-align:left;
    padding: .75em .3em;
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
display:-ms-grid; 
  -ms-grid-columns: 1fr 1fr;
grid-template-columns:1fr 1fr;
  -ms-grid-rows: 100%;
grid-template-rows:100%;
  color: ${colorsAndFont.blue};
  -ms-grid-row:1; 
   -ms-grid-column:2; 
   -ms-grid-column-span:1;
   grid-area:hamburgericon;
  .burger-container{
    display:grid; 
display:-ms-grid; 
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
    this.onpageAccordian = this.onpageAccordian.bind(this);
  }
  componentDidMount() {
    const siteWrap = document.querySelector('#site-wrapper');
    siteWrap.classList.remove('show-nav');
    const ham = document.querySelector('.hamburger-menu');
    ham.classList.remove('animate');

  }
  onpageAccordian(){
    console.log(this.props);
  }
  render() {
    return (
      <HeadGrid>
        <Logo to="/">
          <Img sizes={this.props.logo.sizes} />
        </Logo>
        <HamburgerIcon><div /><div className="burger-container" onClick={toggleNav}>
          <div
            className="hamburger-menu"
            style={{position: 'absolute',top: '30%',left: '30%',}}/>
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
            <li className="aboutDrop"><Link to="/About">About</Link><DropdownContent className="aboutContent">
              <ul>
                <li><Link to="/About" onClick={this.onpageAccordian}>Who We Are</Link></li>
                <li><Link to="/About#Why" onClick={this.onpageAccordian}>Why DDI</Link></li>
                <li><Link to="/About#Equipt" onClick={this.onpageAccordian}>Equipment Financed</Link></li>
                <li><Link to={{
                      pathname: '/About',
                      hash: '#Team',
                      state: { accordian: true },
                    }}
                    onClick={this.onpageAccordian}
                >Meet The Team
                    </Link>
                </li>
              </ul>
                                                                    </DropdownContent>
            </li>

            <li className="leasingDrop">Leasing Solutions
              <DropdownContent className="leasingContent">
                <ul>
                  <li><Link to="/Customers">Client Offerings</Link></li>
                  <li><Link to="/Vendors">Vendor Programs</Link></li>
                </ul>
              </DropdownContent>
            </li>

            <li><Link to="/Contact">Contact</Link></li>
          </Nav>
        </HamburgerContent>
      </HeadGrid>
    );
  }
}


export default TopHeader;
