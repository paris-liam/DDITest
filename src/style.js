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
  margin-top:1vh;
  margin-bottom: 0.5vh;
  display:grid;
  grid-template-rows:5rem;
  grid-template-columns: 4fr 2fr;
  grid-template-areas: 'headImg hamburgericon';
  @media screen and (min-width: 1025px){
    grid-template-rows:auto;
    grid-template-columns: 3fr 2fr 2fr;
    grid-template-areas: 'headImg . hamburgercontent';
  }
`;
export const Logo = styled(Link)`
  grid-area: headImg;
  align-self:center;
`;
export const Nav = styled.ul`
  grid-area: nav;
  display:inline-flex;
  justify-content:space-evenly;
  list-style:none;
  color: black;
  margin-left:0px;
  margin-bottom:0px;
  font-size:1.5vw;
  position:relative;
  li{
  margin-left: .1rem;
  margin-right:.1rem;
  vertical-align:bottom;
  margin-bottom:0px;
  }
  li:hover{
    color:${light_purp};
  }
  li.aboutDrop:hover + div.aboutContent{
    visibility:visible;
  };
  li.aboutDrop:focus + div.aboutContent{
    visibility:visible;
  };
  li.leasingDrop:hover + div.leasingContent{
    visibility:visible;
  };
  li.leasingDrop:focus + div.leasingContent{
    visibility:visible;
  };

  div.aboutContent:hover{
    visibility:visible;
  }
  div.leasingContent:hover{
    visibility:visible;
  }
`;
export const Contact = styled.ul`
  display:inline-flex;
  justify-content:flex-end;
  list-style:none;
  margin-left:0px;
  margin-bottom:.75rem;
  grid-area: contact;
  grid-template-row:auto;
  grid-template-columns: auto auto auto;

`;
export const Envelope = styled.li`
  font-size:1.25vw
  margin-right:1rem;
  padding-top:.2rem;
  &:hover{
    color:${grey};
  }
`;
export const PhoneNumber = styled.li`
  font-size:1.25vw
  margin-right:1rem;
  padding-top:.2rem;
`;
export const PayBillsButton = styled.button`
    background-color:${grey};
    color:white;
    outline:none;
    border:none;
    border-radius:1rem;
    padding:.3vw;
    font-size:1vw;
    font-family: ${font}
    &:hover{
      background-color:${magenta};
    }
    @media screen and (min-width: 1025px){
    background-color:${blue};
    &:hover{
      background-color:${grey};
    }
    }
`;
export const DropdownContent = styled.div`
color:white;
font-size:.8em;
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
  left: 0rem;
  top: 4vh;
}
&.leasingContent{
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
}
li{
  width:100%;
  text-align:center;
  padding: .5em .25em .5em .25em
}
li:hover{
  background-color:${light_purp};
  color:white;
}
`;
export const HamburgerContent = styled.div`
  display:none;
  @media screen and (min-width: 1025px){
    display:grid;
    grid-template-columns: auto;
    grid-template-rows:auto auto;
    grid-area:hamburgercontent;
    grid-template-areas: 'contact' 'nav'
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

export const IndexGrid = styled.div`
  display:grid;
  grid-template-rows: 90vh auto auto auto auto;
  grid-template-columns: auto;
  @media screen and (min-width:1025px) {
    grid-template-rows: 70vh auto auto auto auto;
  }
`;
export const CoverHold = styled.div`
  font-family:'Lato';
  color:white;
  overflow:hidden;
  position:relative;
  display:grid;
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

export const Sidebar = styled.div`
    font-family: ${font};
    padding-top:5px;
`;
export const SidebarItem = styled.ul`
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
