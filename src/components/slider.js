import React from 'react';
import styled from 'styled-components';

const Container = styled.div;
const LeftArrow = styled.div``;
const RightArrow = styled.div``;
const info = [
];
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="slider">
        <LeftArrow />
        <RightArrow />
      </div>
    );
  }
}
export default Slider;
