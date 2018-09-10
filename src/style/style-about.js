import styled from 'styled-components';

import { IndexGrid, CoverHold, CoverText, Interested } from './style-index';
import { gatsbyImgStyle, colorsAndFont } from './style';

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
`;
export const WhyDDI = styled.div`
  grid-area:'Why';
  color:${colorsAndFont.blue};
  background-color:white;
`;
export const EquiptmentFinanced = styled.div`
  grid-area:'Equipt';
`;
export const MeetTheTeam = styled.div`
  grid-area:'Meet';
  background-color: ${colorsAndFont.grey};
`;
