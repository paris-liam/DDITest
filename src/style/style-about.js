import styled from 'styled-components';

import { CoverText, FocusedBody, Interested } from './style-index';
import { colorsAndFont } from './style';

export const AboutGrid = styled.div`
 display:grid;
 grid-template-rows: 45vh auto auto auto auto auto;
 grid-template-columns:100%;
 background-color: ${colorsAndFont.blue};
 color:white;
 grid-template-areas: 'AboutCover' 'Who' 'Why' 'Equipt' 'Meet' 'Interested';
 /*phone landscape mode*/
 @media screen and (max-width: 900px) and (orientation: landscape){
  grid-template-rows: 60vh auto auto auto auto auto;

      }

`;
export const AboutCoverText = CoverText.extend`
  grid-template-rows: auto auto;
`;
export const WhoWeAre = styled.div`
  grid-area:'Who';
  padding: 2.5vh 5vw;
  display:grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto;
  grid-template-areas: 'title' 'letter' 'list';
  @media screen and (min-width: 1024px){
    grid-template-rows: auto auto;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: 'title .' 'letter list';
  }
`;

export const WhoTitle = styled.div`
  grid-area: title;
`;
export const WhoLetter = styled.div`
  grid-area: letter;
  p:first-child{
      margin-top:1em;
  }
  p{
    margin-bottom: 1em;
    line-height:1.5;
  }
`;
export const WhoList = styled.div`
  grid-area:list;
  margin-top:1em;
  ul{
      height:100%;
      display:flex;
      flex-direction:column;
      li{
          margin-bottom: 3vh;
      }
  }
`;


export const WhyDDI = styled.div`
  grid-area:'Why';
  color:${colorsAndFont.blue};
  background-color:white;
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  padding: 2.5vh 5vw;
`;
export const WhyTitle = styled.div`
`;
export const WhyBody = FocusedBody.extend`
  margin-top:2vh;
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto;
  grid-template-areas: 'experience' 'rates' 'speed' 'creative' 'adapt';
  /*desktop*/
  @media screen and (min-width:1024px){
    .adaptCopy{
      margin-top:3vh;
    }
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'experience rates' 'speed creative' 'adapt adapt';
  }
  strong{
    margin:0;
  }
`;

export const EquiptmentFinanced = styled.div`
  grid-area:'Equipt';
`;
export const EquiptTitle = styled.div`
  margin-top: 3vh;
  text-align:center;
  h1{
    margin-bottom:2vh;
  }
  grid-area: title;
`;
export const EquiptList = styled.div`
  height:70vh;
  grid-area: 'list';
  position:relative;
  background-color:black;
  display:grid;
  grid-template-rows:1px 99%;
  overflow:hidden;
  /*landscape mode*/
  @media screen and (max-width: 900px) and (orientation: landscape){
   height:90vh;
  }
`;
export const EquiptText = styled.div`
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'title title title' 'list list list';
  margin: 0 auto;
  ul{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    text-align:center;
    list-style:none;
    width:auto;
    font-weight:bolder
  }
  position:relative;
  z-index:2;
  display:grid;
  text-align:left;
  h1{
    width: 95%;
    font-size:2.5em;
  }
  p{
    width: 95%;
    margin:0 auto;
    text-align:center;
  }
`;

export const MeetTheTeam = styled.div`
  grid-area:'Meet';
  background-color: ${colorsAndFont.grey};
  display:grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
`;

export const MeetTheTeamTitle = styled.div`
 display:grid;
 grid-template-columns: auto auto auto;
 padding: 2.5vh 2vw;
   i{
    font-size:2.75em;
    margin:auto 4vw auto 0vw;
    &:hover{
      color:${colorsAndFont.lightPurp};
      cursor:pointer;
    }
   }
 text-align:center;
 margin-bottom:2vh;
 p{
   margin: auto 10%;
 }
`;

export const MeetTheTeamAccordian = styled.div`
  overflow-y:scroll;
`;

export const AboutInterestedSlide = styled.div`
 grid-area: Interested;
 grid-template-columns:auto;
 margin: auto auto;
 padding: 4vh 2vw;
`;

export const AboutInterested = Interested.extend`
  button{
    margin-bottom: 2em;
  }
`;

