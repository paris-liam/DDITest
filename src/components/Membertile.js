import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby-link';
import IMG from 'gatsby-image';
import { gatsbyImgStyle, colorsAndFont } from '../style/style.js';

const Member = styled.div`
    transition: height 0.2s ease;
    border-top: 4px solid ${colorsAndFont.magenta};
    display:grid;
    grid-template-columns:auto auto;
    grid-auto-rows:auto;
    padding: 1vh 3vw;
    overflow:hidden;
`;
const MemberShot = styled.div`
  position:relative;
`;
const MemberInfo = styled.div``;
const MemberTitle = styled.div``;
const MemberBio = styled.div``;
const MemberContact = styled.div``;


class Membertile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '0px',
    };
  }
  componentDidMount() {
    const thisPanel = document.getElementById(this.props.info.name);
    console.log(thisPanel.scrollHeight);
    this.setState({
      height: `${thisPanel.scrollHeight}px`,
    });
    console.log(this.state.height);
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
            sizes={this.props.info.image}
            outerWrapperClassName="coverOuter"
            position="absolute"
            style={{
              top: 0,
              left: 0,
              position: 'absolute',
              width: '40%',
              borderRadius: '15vh',
              margin: 'auto auto',
            }}
          />
        </MemberShot>
        <MemberInfo>
          <MemberTitle>
            {this.props.info.title}
          </MemberTitle>
          <MemberBio>
            {this.props.info.body}
          </MemberBio>
          <MemberContact>
            {this.props.info.email}
          </MemberContact>
        </MemberInfo>
      </Member>
    );
  }
}
export default Membertile;
