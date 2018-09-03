import styled from 'styled-components';
import Link from 'gatsby-link';

export const colorsAndFont = {
 blue: '#585B8C',
 magenta: '#775997',
 lightPurp: '#888DD8',
 grey: '#292A3E',
 lightGrey: '#535358',
 font: 'Lato',
 barWidth: '2rem',
 barHeight: '.25rem',
 barSpacing: '.75rem',
 tabletBreak: "@media screen and (max-width:1025px)",
 phoneBreak:"@media screen and (max-width:600px)",
}

export const gatsbyImgStyle = {
  top: 0,
  left: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
};

/* hamburger sidebar */
export const Sidebar = styled.div`
&:first-child{
  padding-top:2vh;
}
font-size:1.25rem;
`;
export const SidebarItem = styled.ul`
list-style:none;
padding-top:1vh;
padding-left:4vw;
padding-bottom: .25vh;
a{
  text-decoration:none;
  color:white;
}
a:hover{
  color:${colorsAndFont.grey};
}
`;
export const SidebarDropdown = styled.ul`
list-style:none;
padding-left:2vw;
  & > *:hover{
    color:${colorsAndFont.grey};
  }
  & > *{
    padding-bottom:.5vh;
  }
`;
export const SidebarContact = styled.ul`
    list-style:none;
    padding-top:1vh;
    padding-left:4vw;
    & > *{
      padding-bottom: .75vh;
    }
    & > .sideenv:hover{
      color:${colorsAndFont.grey};
    }
    & > li:nth-child(3){
      padding-top: 1vh;
    }
    .sidebill{
      padding:.5em;
      border-radius:30px;
      color:white;
      background-color:${colorsAndFont.grey};
      outline:none;
      border:none;
    }
    .sidebill:hover{
      background-color:${colorsAndFont.magenta};

    }

`;

