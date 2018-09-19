import styled from 'styled-components';
import { colorsAndFont } from './style';

/* Index Page Slides */
export const IndexGrid = styled.div`
  display:grid;
  grid-template-rows: 70vh auto auto 25vh auto;
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

/*
export const IndexGrid = styled.div`
  display:grid;
  grid-template-rows: 45vh auto auto 30vh auto;
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
  text-align:left;
  align-self:left;
  justify-self:center;
  grid-template-columns:auto;
  grid-template-rows:auto auto 10vh;
  margin-left: 5vw;
  h1{
    width: 100%;
    margin: 10vh auto 0 auto;
    font-size:2.25em;
  }
  p{
    width:80%;
    text-align:justify;
    margin-right:auto;
  }
`;
export const LearnMore = styled.div`
    button{
      margin-top: 2vh;
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
*/
export const FocusedSlide = styled.div`
  color:${colorsAndFont.grey};
  background-color:white;
  display:grid;
  grid-template-columns: auto;
  height:auto;
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
    width:60%;
      @media screen and (max-width:1025px){
        width:80%;
      }
    font-size:1.25em;
   }
`;
export const FocusedBody = styled.div`
  border-top: 1px solid ${colorsAndFont.blue};
  color:${colorsAndFont.blue};
  text-align:left;
  display:grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5vh;
  grid-row-gap: 5vh;
  grid-template-rows: max-content max-content;
  padding: 1vh .5vh;
  text-align:center;
  @media screen and (max-width:1025px){
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: max-content max-content max-content max-content;
  }
  & > div{
    display:flex;
    h1{
      font-size:4.5em;
      margin-right: 3vw;
    }
    p{
      margin-top:2vh;
      @media screen and (max-width:1025px){
        padding-top:0;
      }
    }
  }

`;
export const SolutionsSlide = styled.div`
    background-color: ${colorsAndFont.blue};
    display:grid;
    grid-template-columns: auto;
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
  font-size:1.5em;
  padding:2vh 0;
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
export const NefaSlide = CoverHold.extend`
  h1{
    color:white;
    align-self:center;
    justify-self:center;
    z-index:2;
    position:absolute;
    text-align:center;
    line-height:1;
    font-size:2em;
    span{
      font-family:'Ubuntu Mono';
      display:block;
      font-size:3em;
    }
  }
`;

export const InterestedSlide = styled.div`
  padding: 2vh 5vh 0 5vh;
  background-color:${colorsAndFont.blue};
  height:auto;
  color:white;
  display:grid;
  grid-template-columns:1fr 1fr;
  @media screen and (max-width: 1024px){
    padding: 2vh .5vw 0 .5vw;
  }
  grid-template-rows: auto 2vh;
  grid-row-gap: 1vh;
  grid-template-areas: 'offerings interested ' 'copyright copyright';
  /*phone*/
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
  grid-template-rows: auto auto;
  border-right: 1px solid white;
  margin-left: 10%;
  h1{
    font-size:1.75em;
    margin: auto 0 2.5vh 0;
    text-transform: uppercase;
  }
  ul{
    margin-left: 2em;
    font-size:1em;
    li{
      padding-bottom: .5vh;
    }
  }
  @media screen and (max-width:1024px){
    h1{
      font-size: 1.5em;
    }
    ul{
      font-size:.75em;
      li{
      padding-bottom: 1vh;
      }
    }
  }

`;

export const Interested = styled.div`
  grid-area: interested;
  text-align:center;
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: min-content 10vh 10vh;
  text-transform:uppercase;
  h1{
    font-size:1.75em;
    margin-bottom: 1.5em;
  }
  div{
    display:grid;
    margin-bottom: 1.25em;
    a{
      align-self:center;
      justify-self:center;
    }
    button{
      background-color: ${colorsAndFont.grey};
      font-size:1em;
      color:white;
      outline:none;
      border:none;
      padding: 1em;
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
