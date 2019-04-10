import React from 'react';
import IMG from 'gatsby-image';


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
      <div className='Member'
        id={this.props.info.name}
        className="accordianPanel"
        style={{
          height: (this.props.show) ? (this.state.height) : ('0px'),
        }}
      >
        <div className='MemberShot'>
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
        </div>
        <div className='MemberInfo'>
          <div className='MemberTitle'>
            <h5>{this.props.info.name}</h5>
            <h5>{this.props.info.title}</h5>
            <h5>{this.props.info.location}</h5>
          </div>
          <div className='MemberBio'>
            {this.props.info.body}
          </div>
          <div className='MemberContact'>
            <a href={`mailto:${this.props.info.email}`} >{this.props.info.email}</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Membertile;
