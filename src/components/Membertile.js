import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby-link';
import IMG from 'gatsby-image';
import { gatsbyImgStyle } from '../style/style.js';

const Member = styled.div`
`;
const MemberShot = styled.div``;
const MemberInfo = styled.div``;
const MemberTitle = styled.div``;
const MemberBio = styled.div``;
const MemberContact = styled.div``;


class Membertile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Member>
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
