import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby-link';
import IMG from 'gatsby-image';
import { gatsbyImgStyle, colorsAndFont } from '../style/style.js';

const Member = styled.div`
    transition: height 0.2s ease-in-out;
    border-top: 4px solid ${colorsAndFont.magenta};
    padding: 1vh 3vw;
    display:grid;
    grid-template-columns: auto auto;
`;
const MemberShot = styled.div`
  margin: auto auto;
  .coverOuter{
  }
`;
const MemberInfo = styled.div`
  margin-left: 3vh;
  margin-top:5vh;
  display:grid;
  grid-template-columns:auto;
  grid-template-rows: auto auto auto;
`;
const MemberTitle = styled.div`
  line-height: 1.25;
  margin-bottom:2vh;
`;
const MemberBio = styled.div`
   font-size: 1em;
   font-weight:200;
`;
const MemberContact = styled.div`
 margin-top:2vh;
 margin-bottom:5vh;
a{
  text-decoration:none;
  color:inherit;
}
`;


class Membertile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '0px',
    };
  }
  componentDidMount() {
    const thisPanel = document.getElementById(this.props.info.name);
    this.setState({
      height: `${thisPanel.scrollHeight}px`,
    });
  }
  render() {
    return (
      <Member
        id={this.props.info.name}
        className="accordianPanel"
        style={{
        height: (this.props.show) ? (this.state.height) : ('0px'),
      }}
      >
        <MemberShot>
          <IMG
            resolutions={this.props.info.image}
            outerWrapperClassName="coverOuter"
            position="absolute"
            style={{
              borderRadius: '20vh',
              width: '15vh',
              height: '25vh',
            }}
          />
        </MemberShot>
        <MemberInfo>
          <MemberTitle>
            <h5>{this.props.info.name}</h5>
            <h5>{this.props.info.title}</h5>
            <h5>{this.props.info.location}</h5>
          </MemberTitle>
          <MemberBio>
            {this.props.info.body}
          </MemberBio>
          <MemberContact>
            <a href={`mailto:${this.props.info.email}`} >{this.props.info.email}</a>
          </MemberContact>
        </MemberInfo>
      </Member>
    );
  }
}
export default Membertile;
