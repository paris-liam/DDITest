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

export const gatsbyImgStyle = {
  top: 0,
  left: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
};

/* header */
export const HeadGrid = styled.div`
  color: ${blue};
  font-family: ${font};
  font-size:1vw;
  display:grid;
  /*desktop*/
  margin-top: 2vh;
  margin-bottom:1vh;
  grid-template-rows:auto;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas: 'headImg . hamburgercontent';
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
  display:flex;
  justify-content:space-around
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
  display:flex;
  justify-content:space-around;
  /*grid-template-columns: auto auto auto;
  grid-template-rows:auto;*/
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
    font-size: 1.25em;
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
  grid-template-rows: 70vh max-content max-content 50vh max-content;
  grid-template-columns: auto;
  font-family:${font} !important;
  color:white;
  font-size:calc(1vw + 10px);
`;
export const CoverHold = styled.div`
  position:relative;
  background-color:black;
  display:grid;
  grid-template-rows:1px 99%;
  font-size:1vw;
`;
export const CoverText = styled.div`
  position:relative;
  z-index:2;
  width:90%;
  display:grid;
  text-align:left;
  align-self:center;
  justify-self:center;
  grid-template-columns:auto;
  grid-template-rows:auto auto auto;
  margin-left:25vw;
  margin-top:5vw;
  h1{
    font-size:calc(2.5em + 5px);
    font-family:${font} !important;
  }
  p{
    width:70%;
    font-size: calc(1.25em + 5px);
    line-height:1.5
    font-family:${font} !important;
  }
  @media screen and (max-width:1024px){
    text-align:center;
    margin-left:0;
    margin-top:10vw;
    h1{
      font-size:4em;
    }
    p{
      margin-left:auto;
      margin-right:auto;
      font-size: 2em;
    }
  }
  @media screen and (max-width:600px){
    h1{
      font-size:6.5em;
    }
    p{
      width:100%;
      margin-left:auto;
      margin-right:auto;
      font-size: 4em;
    }
  }
  @media screen and (max-width:700px) and (orientation:landscape){
    margin-top:0vh;
    h1{
      font-size:3.5em;
    }
    p{
      width:100%;
      margin-left:auto;
      margin-right:auto;
      font-size: 2em;
    }
  }
`;
export const LearnMore = styled.div`
    button{
      margin-top:3vh;
      margin-left: 25vw;
      padding:.75em 1.25em .75em 1.25em
      font-size:1.5em;
      border-radius:30px;
      background-color:${blue};
      color:white;
      outline:none;
      border:none;
      @media screen and (max-width:1024px){
        margin-left:auto;
        margin-right:auto;
        font-size:3em;
      }
      @media screen and (max-width:600px){
        margin-left:auto;
        margin-right:auto;
        font-size:4em;
      }
      @media screen and (max-width:700px) and (orientation:landscape){
        margin-left:auto;
        margin-right:auto;
        font-size:2em;
        padding:.25em .75em .25em .75em
      }
    }
`;
export const FocusedSlide = styled.div`
  color:${grey};
  background-color:white;
  padding: 5vh 1.5em 10vh 1.5em;
  display:grid;
  grid-template-columns: auto;
  height:min-content;
  grid-template-rows: 1fr 1fr 8fr;
  @media screen and (max-width:1025px){
    grid-template-rows: auto auto max-content;
  }
  text-align:center;
  font-family:${font};
  h1{
    font-size:2em;
    margin-bottom:.5em;
    font-family: ${font} !important;
  }
  div.Focusedsubtitle{
    display:flex;
    justify-content:center;
    p{
      width:60%;
      font-size:1em ;
      margin:0;
      line-height:1.2;
      font-family:${font} !important;
      @media screen and (max-width:1025px){
        width:80%;
      }
   }
  }
`;

export const FocusedBody = styled.div`
  font-size:1em;
  color:${blue};
  padding: 0 1.5em 0px 1.5em;
  text-align:left;
  display:grid;
  grid-column-gap: 1.5em;
  grid-template-columns: auto auto;
  grid-template-rows: min-content min-content;
  grid-row-gap:3em;
  @media screen and (max-width:1025px){
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-row-gap:1.75em;
    padding-top:1em;
    height: calc(auto + 10vh;)
    & > div{
    display:flex;
    p{
      font-size:1em
      line-height:1.5;
      margin-top:auto;
      margin-bottom:auto;
    }
    i{
      display:block;
      font-size: 2.5em;
      margin-right:20px;
      margin-top:auto;
      margin-bottom:auto;
    }
  }
  }
  & > div{
    display:flex;
    p{
      font-size:1em
      line-height:1.5;
      margin-top:auto;
      margin-bottom:auto;
    }
    i{
      display:block;
      font-size: 2.5em;
      margin-right:20px;
      margin-top:auto;
      margin-bottom:auto;
    }
  }

`;
export const SolutionsSlide = styled.div`
    background-color: ${blue};
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto calc(max-content + 5vh);
    grid-row-gap:2em;
    @media screen and (max-width: 1025px){
        grid-row-gap:3em
      }
    @media screen and (max-width: 700px) and (orientation: landscape){
        grid-template-rows: auto max-content;
        grid-row-gap:2em;
      }
    h1{
      padding-top:3vh;
      margin: 0 2% 0 2%;
      text-align:center;
      font-size:1.75em;
      font-family:${font} !important;
      line-height:1.25;
      @media screen and (max-width: 700px) and (orientation: landscape){
        font-size:1em;
      }
    }
    & > div{
      justify-self:center;
      align-self:center;
      position:relative;
      width:90vw;
      height:max-content;
      @media screen and (max-width: 1025px){
        width:80vw;
      }
      @media screen and (max-width: 700px) and (orientation: landscape){
        padding-top:2vh;
        width:60vw;
      }
    }
`;
export const SolTitle = styled.div`
  font-size: 1em;
  padding-bottom:10px;
`;
export const SolBody = styled.div`
  font-size: 1rem;
  color:white;
  width:70%;
  margin: 0 auto 0 auto;
  @media screen and (max-width: 1300px){
    font-size:.75rem;
  }
  @media screen and (max-width: 700px) and (orientation: landscape){
    font-size:.75rem;
    line-height:1.2;
  }
`;
export const SolIcon = styled.div`
  font-size: 3.5rem;
  @media screen and (max-width: 1300px){
    font-size: 2.25rem;
  }
  @media screen and (max-width: 700px) and (orientation: landscape){
    font-size: 1.75rem;
  }
`;
export const NefaSlide = CoverHold.extend`
  h1{
    font-size:3.5rem;
    color:white;
    align-self:center;
    justify-self:center;
    z-index:2;
    position:absolute;
    text-align:center;
    font-weight:bold;
    font-family:${font};
    span{
      font-family:'Ubuntu Mono';
      font-size:6rem;
      font-weight:100;
      display:block;
      padding-top:5px;
    }
  }
  @media screen and (max-width: 700px) and (orientation: landscape){
    h1{
      font-size:2rem;
      span{
        font-size:3rem;
      }
    }
  }
`;

export const InterestedSlide = styled.div`
  padding: 5vh 5vh 0 5vh
  background-color:${blue};
  color:white;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows: auto 5%;
  grid-template-areas: 'interested offerings' 'copyright copyright';
  /*phone*/
  @media screen and (max-width: 1025px){
    grid-template-columns:auto;
    grid-template-rows: auto auto 5%;
    grid-template-areas: 'offerings' 'interested' 'copyright';
  }
  p.copyright{
  margin:5vh 0 0 0;
    grid-area:copyright;
    text-align:center;
    font-size:.5em;
    vertical-align:bottom;
  }
`;

export const Offerings = styled.div`
  grid-area:offerings
  border-left: 1px solid white;
  /*phone*/
  @media screen and (max-width: 1025px){
    margin-top:2vh;
    border-left:none;
    h1{
      padding-top:.5vh
      text-align:center;
    }
  }
  *{
    margin-left:3vw
  }
  ul{
    font-size: 1em;
  }
`;

export const Interested = styled.div`
  font-family:${font};
  grid-area: interested;
  text-align:center;
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: 10% 40% 40%;
  div{
    padding-top:5vh;
    button{
      font-size: .75em;
      background-color: ${grey};
      color:white;
      outline:none;
      border:none;
      border-radius:50px;
      padding:1em;
    }
    button:hover{
      background-color:${magenta};
    }
  }

`;
