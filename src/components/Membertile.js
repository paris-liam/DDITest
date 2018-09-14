import React from 'react';
import styled from 'styled-components';
import favicon from '../pages/images/favicon.ico';

const Member = styled.div``;
const MemberShot = styled.img``;
const MemberInfo = styled.div``;
const MemberTitle = styled.div``;
const MemberBio = styled.div``;
const MemberContact = styled.div``;


class Membertile extends React.Component {
  render() {
    return (<Member>
      <MemberShot src={favicon} />
      <MemberInfo>
        <MemberTitle>
          Christian Moscicki
          Managing Director
          New York, NY
        </MemberTitle>
        <MemberBio>
          Christian joined DDI Capital in mid-2015 after 8 successful years as an institutional equity salesperson at several broker-dealers and banks (most recently FBR, Inc.). Christian graduated from Middlebury College with a degree in English in 2006 and has lived in New York City ever since. He initially spent 3 years in public/investor relations before pursuing a career in financial product/services sales.
        </MemberBio>
        <MemberContact>
          cmoscicki@ddicapitalinc.com
        </MemberContact>
      </MemberInfo>
            </Member>
    );
  }
}
export default Membertile;
