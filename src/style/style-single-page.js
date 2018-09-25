import styled from 'styled-components';
import { colorsAndFont } from './style';
import { IndexGrid, CoverText, FocusedSlide, Offerings } from './style-index';

/* All pages */
export const SingleGrid = IndexGrid.extend`
  grid-template-rows: 45vh auto;
`;
export const SingleCoverText = CoverText.extend`
  grid-template-rows: auto auto;
  h1{
    width:100%;
  }
  p{
    width:95%;
  }
`;
export const SingleSlide = FocusedSlide.extend`
  background-color:${colorsAndFont.blue};
  color:white;
  margin: 0;
`;

/* Customer Page */
export const CustBody = styled.div`
  display:grid;
  text-align:left;
  padding-bottom:1vh;
  width:90%;
  margin: 0 auto;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-template-areas: 'reqs' 'custOff';
  @media screen and (min-width:1024px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'reqs custOff';
  }
`;

export const Requirements = styled.div`
  grid-area: reqs;
  ul > ul{
    list-style:none;
    font-weight:200;
    margin:2vh 2vh 2vh 0;
    li{
      padding-bottom:.5em;
      font-size:.85em;
    }
    li:before{
      display: inline-block;
    content: "-";
    width: 1em;
    margin-left: -1em;
    }
  }
`;
export const CustOff = Offerings.extend`
  padding-top:4vh;
  margin:0 0 0 3vw;
  border:none;
  grid-area: custOff;
  font-size:1.1em;
  grid-template-rows: min-content auto;
  @media screen and (min-width:1024px){
    padding-top:inherit;
    margin: 0 auto;
  }
  h1{
    margin-top:0;
    margin-bottom: 3.5vh;
  }
  li{
    margin-bottom:1.5vh;
  }

`;

export const CustTitle = styled.div`
  padding-top:3vh;
  padding-bottom:7vh;
  text-align:center;
  *{
    width:80%;
    margin: 1vh auto 0 auto;
  }
`;

/* Vendor Page */
export const VendorBody = styled.div`
  display:grid;
  grid-column-gap:5vw;
  color:white;
  padding: 2vh 1vh;
  text-align:left;
  grid-template-columns: auto;
  grid-template-rows: auto 40vh;
  margin:0;
  .handshakeImage{
    margin: 0 auto;
    width:70%;
  }
  @media screen and (min-width:1024px){
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;
    margin: 2vh 3vw 0 1vw;
    .handshakeImage{
      margin: 0 auto;
      width:100%;
    }
  }
`;

export const Following = styled.div`
  ul{
    li{
      padding-bottom:2em;
      line-height:1.5;
      font-weight:300;
    }
    @media screen and (max-width:1024px){
      display:flex;
      justify-content:space-evenly;
      li{
        width:30%;
        font-size:.75em;
        margin-left:2vh;
      }
    }
  }
`;

/* Contact Page */
export const ContactBody = styled.div`
  display:grid;
  margin: 4vh 3vw;
  grid-template-rows:auto auto;
  grid-template-columns: auto;
  @media screen and (min-width:1024px)  {
    grid-template-rows:auto;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: auto auto auto;
 grid-row-gap: 1vh;
 grid-template-areas: 'Corporate .' 'ponte north ' 'charlotte quogue' 'spring .';
 ul{
   list-style:none;
   text-align:left;
 }
 ul:first-of-type{
   margin-bottom:2vh;
 }
`;
export const ContactForm = styled.form`
margin:4vh 0;
text-align:left;
display:grid;
grid-template-columns: min-content auto;
grid-column-gap: 3vw;
grid-template-rows: auto auto auto auto;
grid-row-gap: 1vh;
input{
  width:75%;
  height:50%;
}
textarea{
  resize:none;
  margin-bottom:1vh;
}
div{
  grid-column-start: 2;
  grid-row-start: 4;
  input{
  width: auto;
  background-color: ${colorsAndFont.lightPurp};
  outline:none;
  border:none;
  color:white;
  border-radius: 5vh;
  padding-top: .5vh;
  padding-bottom:.5vh;
  &:hover{
    background-color:${colorsAndFont.grey};
  }
}
}

`;
