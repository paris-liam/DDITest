import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby-link';
import IMG from 'gatsby-image';
import { gatsbyImgStyle } from '../style/style.js';

const Member = styled.div`
    overflow: hidden;
    transition: max-height 0.2s ease;
`;
const MemberShot = styled.div``;
const MemberInfo = styled.div``;
const MemberTitle = styled.div``;
const MemberBio = styled.div``;
const MemberContact = styled.div``;


class Membertile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: '0px',
    };
  }
  componentDidMount() {
    const thisPanel = document.getElementById(this.props.info.name);
    console.log(thisPanel.scrollHeight);
    this.setState({
      maxHeight: `${thisPanel.scrollHeight}px`,
    });
  }
  render() {
    return (
      <Member
        id={this.props.info.name}
        className="accordianPanel"
        style={{
        maxHeight: (this.props.show) ? (this.state.maxHeight) : ('0px'),
      }}
      >
        <MemberShot>
          <IMG
            sizes={this.props.info.image}
            outerWrapperClassName="coverOuter"
            position="absolute"
            style={{
              width: '10%',
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
