import styled from 'styled-components';

import { CoverText, CoverHold, FocusedBody } from './style-index';
import { colorsAndFont } from './style';

export const AboutGrid = styled.div`
 display:grid;
 grid-template-rows: 45vh auto auto auto auto auto;
 grid-template-columns:auto;
 background-color: ${colorsAndFont.blue};
 color:white;
 grid-template-areas: 'AboutCover' 'Who' 'Why' 'Equipt' 'Meet' 'Interested';
`;
export const AboutCoverText = CoverText.extend`
  grid-template-rows: auto auto;
`;
export const WhoWeAre = styled.div`
  grid-area:'Who';
  padding: 2.5vh 5vw;
  display:grid;
  grid-template-rows: auto auto;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'title .' 'letter list';
  @media screen and (max-width: 1024px){
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
    grid-template-areas: 'title' 'letter' 'list';
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
  @media screen and (min-width:1024px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'experience rates' 'speed creative' 'adapt adapt';
    /* grid-row-gap:4vh;
    grid-column-gap: 4vw;*/
  }
  strong{
    margin:0;
  }
`;

export const EquiptmentFinanced = styled.div`
  grid-area:'Equipt';
`;
export const EquiptTitle = styled.div`
  padding: 2.5vh 5vw;
  h1{
    margin-bottom:2vh;
  }
  grid-area: title;
`;
export const EquiptList = CoverHold.extend`
  height:70vh;
  grid-area: list;
`;
export const EquiptText = CoverText.extend`
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'title title title' 'list list list';
  grid-row-gap: 2vh;
  grid-column-gap: 3vw;
  margin: 0 auto;
  ul{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    text-align:left;
    list-style:none;
    width:auto;
  }
`;

export const MeetTheTeam = styled.div`
  grid-area:'Meet';
  background-color: ${colorsAndFont.grey};
  padding: 2.5vh 2vw;
`;

export const MeetTheTeamTitle = styled.div`
 display:flex;
 flex-direction:row;
 i{
   font-size:2.75em;
   margin:auto 0;
 }
 text-align:center;
 p{
   margin: auto auto;
 }
`;

