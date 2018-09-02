import styled from 'styled-components';
import {colorsAndFont} from './style.js'

/* Index Page Slides */
export const IndexGrid = styled.div`
  display:grid;
  grid-template-rows: 70vh auto auto 20vh auto;
  grid-template-columns: auto;
  color:white;
`;
export const CoverHold = styled.div`
  position:relative;
  background-color:black;
  display:grid;
  grid-template-rows:1px 99%;

`;
export const CoverText = styled.div`
  position:relative;
  z-index:2;
  display:grid;
  text-align:center;
  align-self:center;
  justify-self:center;
  grid-template-columns:auto;
  grid-template-rows:auto auto 10vh;
  h1{
    margin-bottom:.5em;
  }
  p{
    width:80%;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
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
  grid-template-columns: auto;
  height:auto;
  grid-template-rows: 1fr 1fr 8fr;
  @media screen and (max-width:1025px){
    grid-template-rows: auto auto max-content;
  }
  text-align:center;
  h1{
  }
  div.Focusedsubtitle{
    display:flex;
    justify-content:center;
    p{
      width:60%;
      @media screen and (max-width:1025px){
        width:80%;
      }
   }
  }
`;

export const FocusedBody = styled.div`
  color:${colorsAndFont.blue};
  text-align:left;
  display:grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin: 0 2vw 1vh 2vw;
  @media screen and (max-width:1025px){
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    margin: 2vh 2vw 1vh 2vw;
    div{
        margin-bottom: 5vh;
    }
  }
  & > div{
    display:flex;
    *{
      margin-top:auto;
      margin-bottom:auto;
    }
    h1{
      margin-right: 1.5vw;
    }
    p{
    }
  }

`;
export const SolutionsSlide = styled.div`
    background-color: ${colorsAndFont.blue};
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    padding-bottom: 5vh;
    h1.title{
      text-align:center;
      font-size:1.5em;
      width:60%;
      margin: 0 auto;
      padding-top: 2vh;
      padding-bottom:3vh;
      ${colorsAndFont.tableBreak}{
          width:95%;
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
        width:60vw;
      }
    }
`;
export const SolTitle = styled.div`
`;
export const SolBody = styled.div`
  color:white;
  width:80%;
  margin-left:auto;
  margin-right:auto;
  font-size: .75em;
`;
export const SolIcon = styled.div`

`;
export const NefaSlide = CoverHold.extend`
  h1{
    color:white;
    align-self:center;
    justify-self:center;
    z-index:2;
    position:absolute;
    text-align:center;
    span{
      font-family:'Ubuntu Mono';
      display:block;
    }
  }
  @media screen and (max-width: 700px) and (orientation: landscape){
    h1{
      span{
      }
    }
  }
`;

export const InterestedSlide = styled.div`
  background-color:${colorsAndFont.blue};
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
    grid-area:copyright;
    text-align:center;
    vertical-align:bottom;
    font-size: .5em;
  }
`;

export const Offerings = styled.div`
  grid-area:offerings;
  border-left: 1px solid white;
  /*phone*/
  @media screen and (max-width: 1025px){
    border-left:none;
    h1{
      text-align:center;
    }
    ul{
        text-align:left;
        width:50%;
        margin: 0 auto 0 auto !important;
    }
  }
  *{
    margin-left:3vw;
  }
  ul{
    margin-left:5vw;
  }
`;

export const Interested = styled.div`
  grid-area: interested;
  text-align:center;
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 1fr 1fr;
  ${colorsAndFont.tabletBreak}{
    grid-template-rows: 5vh 10vh 10vh;
    grid-row-gap: 2vh;
  }
  div{
    button{
      background-color: ${colorsAndFont.grey};
      color:white;
      outline:none;
      border:none;
      border-radius:50px;
      padding:.5em 1em;
    }
    button:hover{
      background-color:${colorsAndFont.magenta};
    }
  }

`;
