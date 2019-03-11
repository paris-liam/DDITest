import styled from 'styled-components';

import { CoverText, FocusedBody, Interested } from './style-index';
import { colorsAndFont } from './style';

export const AboutGrid = styled.div`
 display:grid; 
display:-ms-grid; 
 -ms-grid-rows:45vh auto auto auto auto auto;
grid-template-rows: 45vh auto auto auto auto auto;
 -ms-grid-columns:100%;
grid-template-columns:100%;
 background-color: ${colorsAndFont.blue};
 color:white;
 grid-template-areas: 'AboutCover' 'Who' 'Why' 'Equipt' 'Meet' 'Interested';
 /*phone landscape mode*/
 @media screen and (max-width: 900px) and (orientation: landscape){
  -ms-grid-rows:60vh auto auto auto auto auto;
grid-template-rows: 60vh auto auto auto auto auto;

      }

`;
export const AboutCoverText = CoverText.extend`
  -ms-grid-rows: auto auto;
grid-template-rows: auto auto;
`;
export const WhoWeAre = styled.div`
     -ms-grid-row:2; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
   grid-area:'Who';
  padding: 2.5vh 5vw;
  display:grid; 
display:-ms-grid; 
  -ms-grid-rows: auto auto auto;
grid-template-rows: auto auto auto;
  -ms-grid-columns: auto;
grid-template-columns: auto;
  grid-template-areas: 'title' 'letter' 'list';
  @media screen and (min-width: 1024px){
    -ms-grid-rows: auto auto;
grid-template-rows: auto auto;
    -ms-grid-columns: 3fr 2fr;
grid-template-columns: 3fr 2fr;
    grid-template-areas: 'title .' 'letter list';
  }
`;

export const WhoTitle = styled.div`
     -ms-grid-row:1; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
   grid-area: title;
`;
export const WhoLetter = styled.div`
     -ms-grid-row:2; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
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
    -ms-grid-row:3; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
   @media screen and (min-width: 1024px){
    -ms-grid-row:2; 
    -ms-grid-column:2; 
    -ms-grid-column-span:1;
   }

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
     -ms-grid-row:3; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
   grid-area:'Why';
  color:${colorsAndFont.blue};
  background-color:white;
  display:grid; 
display:-ms-grid; 
  -ms-grid-columns: auto;
grid-template-columns: auto;
  -ms-grid-rows:  auto auto;
grid-template-rows: auto auto;
  padding: 2.5vh 5vw;
`;
export const WhyTitle = styled.div`
`;
export const WhyBody = FocusedBody.extend`
  margin-top:2vh;
  display:grid; 
display:-ms-grid; 
  -ms-grid-columns: auto;
grid-template-columns: auto;
  -ms-grid-rows: auto auto auto auto auto;
grid-template-rows: auto auto auto auto auto;
  grid-template-areas: 'experience' 'rates' 'speed' 'creative' 'adapt';

  & > div#experience {
  -ms-grid-row: 1
  -ms-grid-column: 1
  -ms-grid-row-span: 1
  -ms-grid-column-span: 1
  }
  & > div#rates {
      -ms-grid-row: 2
  -ms-grid-column: 2
  -ms-grid-row-span: 2
  -ms-grid-column-span: 2
  }
  & > div#speed {
      -ms-grid-row: 3
  -ms-grid-column: 3
  -ms-grid-row-span: 3
  -ms-grid-column-span: 3
  }
  & > div#creative {
      -ms-grid-row: 4
  -ms-grid-column: 4
  -ms-grid-row-span: 4
  -ms-grid-column-span: 4
  }
  & > div#adapt {
      -ms-grid-row: 5
  -ms-grid-column: 5
  -ms-grid-row-span: 5
  -ms-grid-column-span: 5
  }
  /*desktop*/
  @media screen and (min-width:1024px){
    .adaptCopy{
      margin-top:3vh;
    }
    -ms-grid-columns: 1fr 1fr;
grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto auto;
grid-template-rows: auto auto auto;
    grid-template-areas: 'experience rates' 'speed creative' 'adapt adapt';

  strong{
    margin:0;
  }
  & > div#experience {
      -ms-grid-row: 1
  -ms-grid-column: 1
  -ms-grid-row-span: 1
  -ms-grid-column-span: 1
  }
  & > div#rates {
      -ms-grid-row: 1
  -ms-grid-column: 2
  -ms-grid-row-span: 1
  -ms-grid-column-span: 1
  }
  & > div#speed {
      -ms-grid-row: 2
  -ms-grid-column: 1
  -ms-grid-row-span: 1
  -ms-grid-column-span: 1
  }
  & > div#creative {
      -ms-grid-row: 2
  -ms-grid-column: 2
  -ms-grid-row-span: 1
  -ms-grid-column-span: 1
  }
  & > div#adapt {
      -ms-grid-row: 3
  -ms-grid-column: 1
  -ms-grid-row-span: 1
  -ms-grid-column-span: 2
  }
}
`;

export const EquiptmentFinanced = styled.div`
     -ms-grid-row:4; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
   grid-area:'Equipt';
`;
export const EquiptTitle = styled.div`
  margin-top: 3vh;
  text-align:center;
  h1{
    margin-bottom:2vh;
  }
  -ms-grid-row:1; 
  -ms-grid-column:1; 
  -ms-grid-column-span:3;
  grid-area: title;
`;
export const EquiptList = styled.div`
  height:70vh;
  -ms-grid-row:2; 
  -ms-grid-column:1; 
  -ms-grid-column-span:3;
  grid-area: 'list';
  position:relative;
  background-color:black;
  display:grid; 
display:-ms-grid; 
  -ms-grid-rows: 1px 99%;
grid-template-rows:1px 99%;
  overflow:hidden;
  /*landscape mode*/
  @media screen and (max-width: 900px) and (orientation: landscape){
   height:90vh;
  }
`;
export const EquiptText = styled.div`
  -ms-grid-rows: 1fr 5fr;
grid-template-rows: 1fr 5fr;
  -ms-grid-columns: 1fr 1fr 1fr;
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
    font-weight:bold;
  }
  position:relative;
  z-index:2;
  display:grid; 
display:-ms-grid; 
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
     -ms-grid-row:5; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
   grid-area:'Meet';
  background-color: ${colorsAndFont.grey};
  display:grid; 
display:-ms-grid; 
  -ms-grid-rows: auto auto; 
grid-template-rows: auto auto;
  -ms-grid-columns: auto; 
grid-template-columns: auto;
`;

export const MeetTheTeamTitle = styled.div`
 display:grid; 
display:-ms-grid; 
 -ms-grid-columns: auto auto auto;
grid-template-columns: auto auto auto;
 padding: 2.5vh 2vw;
   i{
    font-size:2.75em;
    margin:auto 4vw auto 0vw;
    &:hover{
      color:${colorsAndFont.magenta};
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
    -ms-grid-row:6; 
   -ms-grid-column:1; 
   -ms-grid-column-span:1;
   grid-area: Interested;
 -ms-grid-columns: auto;
grid-template-columns:auto;
 margin: auto auto;
 padding: 4vh 2vw;
`;

export const AboutInterested = Interested.extend`
  button{
    margin-bottom: 2em;
  }
`;

