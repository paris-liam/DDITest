import styled from 'styled-components';
import { colorsAndFont } from './style';

/* Index Page Slides */
export const IndexGrid = styled.div`
  display:grid; 
display:-ms-grid; 
  -ms-grid-rows: 70vh auto auto 40vh auto;
grid-template-rows: 70vh auto auto 40vh auto;
  -ms-grid-columns: auto;
grid-template-columns: auto;
  color:white;
  @media screen and (max-width: 900px) and (orientation: landscape){
    -ms-grid-rows: 90vh auto auto 35vh auto;
grid-template-rows: 90vh auto auto 35vh auto;
  }
`;
export const CoverHold = styled.div`
  position:relative;
  background-color:black;
  display:grid; 
display:-ms-grid; 
  -ms-grid-rows:1px 99%;
grid-template-rows:1px 99%;
`;
export const CoverText = styled.div`
  position:relative;
  z-index:2;
  display:grid; 
display:-ms-grid; 
  text-align:center;
  align-self:center;
  justify-self:center;
  -ms-grid-columns: auto;
grid-template-columns:auto;
  -ms-grid-rows: auto auto 10vh;
grid-template-rows:auto auto 10vh;
  h1{
    width: 95%;
    margin: 0 auto .5em auto;
    font-size:2.5em;
  }
  p{
    width:80%;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    font-size:1.25em;
  }
`;
export const LearnMore = styled.div`
    button{
      margin-top: 10vh;
      border-radius:3em;
      background-color:${colorsAndFont.blue};
      color:white;
      outline:none;
      border:none;
      padding:.5em 1em;
      &:hover{
          background-color:${colorsAndFont.grey}
      }
    }
`;

export const FocusedSlide = styled.div`
  color:${colorsAndFont.grey};
  background-color:white;
  display:grid; 
display:-ms-grid; 
  -ms-grid-columns: auto;
grid-template-columns: auto;
  height:auto;
  -ms-grid-rows: 2fr auto;
grid-template-rows: 2fr auto;
  padding-bottom: 5vh;
  text-align:center;
  margin: 3vh 6vw;
`;
export const FocusedTitle = styled.div`
  margin: 0 auto 0 auto;
  h1{
    font-size:2.3em;
  }
  p{
    display:flex;
    justify-content:center;
    margin: 1.5vh auto 1.5vh auto;
    width:80%;
    @media screen and (min-width:1025px){
        width:60%;
    }
    font-size:1.25em;
   }
`;
export const FocusedBody = styled.div`
  border-top: 1px solid ${colorsAndFont.blue};
  color:${colorsAndFont.blue};
  text-align:left;
  display:grid; 
display:-ms-grid; 
  grid-column-gap: 5vh;
  grid-row-gap: 5vh;
  padding: 1vh .5vh;
  text-align:center;
  -ms-grid-columns:  auto;
grid-template-columns: auto;
  -ms-grid-rows: max-content max-content max-content max-content;
grid-template-rows: max-content max-content max-content max-content;
  @media screen and (min-width:1025px){
    -ms-grid-columns: auto auto;
grid-template-columns: auto auto;
    -ms-grid-rows: max-content max-content;
grid-template-rows: max-content max-content;
  }
  & > div{
    display:flex;
    h1{
      font-size:4.5em;
      margin-right: 3vw;
    }
    p{
      margin-top:2vh;
      padding-top:0;
      @media screen and (min-width:1025px){
        padding-top:inherit
      }
    }
  }
`;
export const SolutionsSlide = styled.div`
    background-color: ${colorsAndFont.blue};
    display:grid; 
display:-ms-grid; 
    -ms-grid-columns: auto;
grid-template-columns: auto;
    -ms-grid-rows: 1fr 3fr;
grid-template-rows: 1fr 3fr;
    padding: 3vh 2vh;
    height:auto;
    h1.title{
      text-align:center;
      width:95%;
      margin: 0 auto;
      font-size:1.75em;
    }
    & > div{
      justify-self:center;
      align-self:center;
      position:relative;
      width:80vw;
      height:max-content;
      @media screen and (min-width: 1025px){
        width:90vw;
      }
      @media screen and (max-width: 700px) and (orientation: landscape){
        width:60vw;
      }
    }
`;
export const SolTitle = styled.div`
  font-size:1.5em;
  padding:2vh 0;
  font-weight:300;
`;
export const SolBody = styled.div`
  color:white;
  width:80%;
  margin-left:auto;
  margin-right:auto;
  font-size: 1em;
`;
export const SolIcon = styled.div`
  font-size:2.25em;

`;
export const NefaSlide = styled.div`
  position:relative;
  background-color:black;
  display:grid; 
display:-ms-grid; 
  -ms-grid-rows: 1px auto;
grid-template-rows:1px auto;
`;
export const NefaLogoGrid = CoverText.extend`
  -ms-grid-rows: auto auto; 
grid-template-rows: auto auto;
  h1{
    width:100%;
    color:white;
    text-align:center;
    line-height:1;
    font-size:2.5em;
    padding-top:2vh;
  }
  img{
    width: calc(30% + 10vh);
    text-align:center;
    margin-left:auto;
    margin-right:auto;
  }
`;
export const InterestedSlide = styled.div`
  background-color:${colorsAndFont.blue};
  height:auto;
  color:white;
  display:grid; 
display:-ms-grid; 
  -ms-grid-columns: 1fr 1fr;
grid-template-columns:1fr 1fr;
  padding: 2vh .5vw 0 .5vw;
  /*desktop*/
  @media screen and (min-width: 1024px){
    padding: 2vh 5vh 0 5vh;
  }
  -ms-grid-rows: auto 2vh; 
grid-template-rows: auto 2vh;
  grid-row-gap: 1vh;
  grid-template-areas: 'offerings interested ' 'copyright copyright';
  p.copyright{
    grid-area:copyright;
    text-align:center;
    vertical-align:bottom;
    text-transform:uppercase;
    font-size: .75em;
  }
`;

export const Offerings = styled.div`
  grid-area:offerings;
  display:grid; 
display:-ms-grid; 
  -ms-grid-rows: auto auto;
grid-template-rows: auto auto;
  border-right: 1px solid white;
  margin-left: 10%;
  h1{
      font-size: 1.5em;
      margin: auto 0 2.5vh 0;
      text-transform: uppercase;
    }
  ul{
    font-weight:200;
    font-size:.75em;
    margin-left: 2em;
    li{
    padding-bottom: 1vh;
    }
  }
  @media screen and (min-width:1024px){
    h1{
      font-size:1.75em;
    }
    ul{
      font-weight:200;
      font-size:1em;
      li{
        padding-bottom: .5vh;
      }
    }
  }
`;

export const Interested = styled.div`
  grid-area: interested;
  text-align:center;
  display:grid; 
display:-ms-grid; 
  -ms-grid-columns: auto;
grid-template-columns: auto;
  -ms-grid-rows: min-content 8vh 8vh;
grid-template-rows: min-content 8vh 8vh;
  text-transform:uppercase;
  h1{
    font-size:1.75em;
    margin-bottom:.75em
  }
  div{
    display:grid; 
display:-ms-grid; 
    a{
      align-self:center;
      justify-self:center;
    }
    button{
      background-color: ${colorsAndFont.grey};
      font-size:.75em;
      color:white;
      outline:none;
      border:none;
      padding: .75em;
      border-radius: 3em;
    }
    button:hover{
      background-color:${colorsAndFont.magenta};
    }
  }
  @media screen and (max-width:1024px){
    padding: 0 .25vh;
    h1{
      font-size: 1.75em;
    }
    div > a > button{
        padding: 1vh;
        font-size: 1.25em;
    }
  }
`;
