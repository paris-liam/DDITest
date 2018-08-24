import styled from 'styled-components';
import Link from 'gatsby-link';

const blue = '#585B8C';
const magenta = '#775997';
const light_purp = '#888DD8';
const grey = '#292A3E';
const light_grey = '#535358';
const font = 'Lato';
const barWidth = '2rem';
const barHeight = '.25rem';
const barSpacing = '.75rem';

/* header */
export const HeadGrid = styled.div`
  color: ${blue};
  font-family: ${font};
  font-size:17px;
  display:grid;
  /*desktop*/
  margin-top: 2vh;
  margin-bottom:1vh;
  grid-template-rows:auto;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas: 'headImg . hamburgercontent';
  @media screen and (max-width:1400px){
    font-size:13px;
  }
  /*phone*/
  @media screen and (max-width: 1025px){
    grid-template-rows:10vh;
    grid-template-columns: 4fr 2fr;
    grid-template-areas: 'headImg hamburgericon';
  }
`;

export const Logo = styled(Link)`
  padding-top:.5vh;
  padding-bottom:.5vh
  padding-left:1.5vw;
  grid-area: headImg;
  align-self:center;
`;

export const HamburgerContent = styled.div`
  /*desktop*/
  padding-right:2vw
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

export const Contact = styled.div`
  list-style:none;
  grid-area: contact;
  text-align:right;
  display:grid;
  grid-template-rows:auto;
  grid-template-columns: 1fr 1fr 1fr;
  li{
    padding-top:.5vh;
    i{
      font-size:1.25em;
    }
    p{
      padding:0;
      margin: 0
      font-size:1em;
      display:inline;
    }
  }
`;

export const Envelope = styled.li`
  &:hover{
    color:${grey};
  }
`;
export const PhoneNumber = styled.li``;
export const PayBillsButton = styled.li`
  /*desktop*/
  padding-top:0!important;
  & > button{
    width:80%;
    padding: .5vh 0 .5vh 0
    background-color:${blue};
    color:white;
    outline:none;
    border:none;
    border-radius:30px;
    font-family: ${font};
    &:hover{
      background-color:${grey};
    }
  }
  /*phone*/
  @media screen and (max-width: 1025px){
    & > button{
      background-color:${grey};
    }
    & > button:hover{
      background-color:${magenta};
    }
  }
`;

export const Nav = styled.div`
  font-size:1.5em;
  grid-area: nav;
  display:grid;
  grid-template-columns: auto auto auto;
  grid-template-rows:auto;
  list-style:none;
  color: black;
  position:relative;
  text-align:right;
  li{
    margin:0;
    vertical-align:bottom;
    &:hover{
      color:${light_purp};
    }
    &:nth-child(5){
      text-align:right;
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

export const DropdownContent = styled.div`
  color:white;
  visibility: hidden;
  transition:visibility 100ms linear;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding:0px;
  z-index: 1;
  background-color:${grey};
  border-radius:5px;
  &.aboutContent{
    left: 1em;
    top: 4vh;
  }
  &.leasingContent{
    left:40%;
    top:4vh;
  }
  &:before {
      content:"";
      position: absolute;
      right: 50%;
      top: -10px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent ${grey} transparent;
      z-index:9999;
  }
  ul{
    list-style:none;
    padding:0px;
    margin:0px;
    & > li:first-child:hover{
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    & > li:last-child:hover{
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    & > li{
    font-size:.75em;
    margin-left:0px;
    margin-right:0px;
    width:100%;
    text-align:center;
    padding: .5em .25em .5em .25em
    &:hover{
      background-color:${light_purp};
      color:white;
    }
    }
  }
`;

export const HamburgerIcon = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:100%;
  color: ${blue};
  grid-area:hamburgericon;
  .burger-container{
    display:grid;
    align-content:center;
    justify-content:center;
    position:relative
  }
  .hamburger-menu, .hamburger-menu::after, .hamburger-menu:before{
    width: ${barWidth};
	  height: ${barHeight};
  }
  .hamburger-menu{
    transform: translateY(${barSpacing});
    background: ${blue};
    transition: all 0ms 300ms;
    &.animate {
      background: rgba(255, 255, 255, 0);
    }
  }
  .hamburger-menu:before {
	  content: "";
	  position: absolute;
	  left: 0;
    bottom: ${barSpacing};
  background: ${blue};
	  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hamburger-menu:after {
	  content: "";
	  position: absolute;
	  left: 0;
    top: ${barSpacing};
  background: ${blue};
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

/* hamburger sidebar */
export const Sidebar = styled.div`
    font-family: ${font};
    padding-top:5px;
`;
export const SidebarItem = styled.ul`
margin-left:1.5vh;
margin-bottom:1.5vh;
list-style:none;
h2{
  margin-bottom:5px;
}
li{
  margin-bottom:5px;
}
`;
export const SidebarDropdown = styled.ul`
list-style:none;
  & > *:hover{
    color:${grey};
  }
`;
export const SidebarContact = styled.ul`
    margin-left:1.5vh;
    list-style:none;
    font-size: 1.25rem;
    & > .sideenv:hover{
      color:${grey};
    }
    .sidebill{
      border-radius:30px;
      color:white;
      background-color:${grey};
      outline:none;
      border:none;
      padding:8px;
    }
    .sidebill:hover{
      background-color:${magenta};

    }

`;
/* Index Page Slides */

export const IndexGrid = styled.div`
  display:grid;
  grid-template-rows: 90vh auto auto auto auto;
  grid-template-columns: auto;
  @media screen and (min-width:1025px) {
    grid-template-rows: 80vh auto 50vh 25vh auto;
  }
`;
export const CoverHold = styled.div`
  font-family:'Lato';
  color:white;
  position:relative;
  display:grid;
  overflow:hidden;
`;
export const CoverText = styled.div`
  font-size:20px;
  width:80%;
  z-index:2;
  position: absolute;
  display:grid;
  text-align:center;
  align-self:center;
  justify-self:center;
  grid-template-columns:auto;
  grid-template-rows:auto auto auto;
  & > *{
    display:block;
    margin-left:auto;
    margin-right:auto;
  }
  h1{
    font-size: 2.5rem;
  }
  p{
    font-size: 1.25rem;
  }
  @media screen and (min-width:1025px) {
    top:40%;
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 1.5rem;
    }
    width:70%;
  }
`;
export const LearnMore = styled.div`
    margin-top:5vh;
    align-self:center;
    button{
      padding:10px;
      font-size:1rem;
      border-radius:30px;
      background-color:${blue};
      color:white;
      outline:none;
      border:none;
    }
`;
export const FocusedSlide = styled.div`
  padding: 0px 2.5rem 0px 2.5rem;
  display:grid;
  grid-template-columns: auto;
  height:auto;
  grid-template-rows: 1fr 1fr 8fr;
  text-align:center;
  font-family:${font};
  font-size:14px;
  h1{
    font-size: 3rem;
  }
  p{
    font-size:1.75rem;
  }
`;

export const FocusedBody = styled.div`
  padding: 0px .5rem 0px .5rem;
  text-align:left;
  display:grid;
  grid-column-gap: .25rem;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  @media screen and (min-width:1025px){
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  font-size:1.5rem;
  color:${blue};
  & > div{
    display:flex;
    p{
      line-height:2rem;
    }
    i{
      display:block;
    font-size: 3rem;
    margin-right:20px;
  }
  }

`;
export const SolutionsSlide = styled.div`
    background-color: ${blue};
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 9fr;
    div{
      justify-self:center;
      align-self:center;
      position:relative;
      width:30%;
    }
`;
export const NefaSlide = styled.div`
  position:relative;
  display:grid;
  overflow:hidden;
  h1{
    font-size:3rem;
    color:white;
    align-self:center;
    justify-self:center;
    z-index:2;
    position:absolute;
    text-align:center;
    font-weight:bold;
    span{
      font-family:'Ubuntu Mono';
      font-size:6rem;
      font-weight:100;
      display:block;
      padding-top:5px;
    }

  }

`;

export const InterestedSlide = styled.div`
  background-color:${blue};
  color:white;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows: auto;
`;
