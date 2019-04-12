import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import SimpleSlider from '../components/SimpleSlider';
import { gatsbyImgStyle } from '../style/dataAndCopy';

export const nefaCoverStyle = {
  width: '25vh',
  height: '25vh',
};

// test
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.imageCycle = this.imageCycle.bind(this);
    this.state = {
      indexImages: [this.props.data.cover.sizes, this.props.data.equipt1.sizes, this.props.data.equipt2.sizes, this.props.data.equipt3.sizes],
      currentPhoto: 0,
      intervalFunction: null,
      nefa: this.props.data.nefa.sizes,
      nefaLogo: this.props.data.nefaLogo.original.src,
    };
  }
  componentDidMount() {
    this.setState({
      intervalFunction: setInterval(this.imageCycle, 5000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.intervalFunction);
  }
  imageCycle() {
    let newImage = this.state.currentPhoto + 1;
    if (newImage >= this.state.indexImages.length) {
      newImage = 0;
    }
    this.setState(state => ({
      currentPhoto: newImage,
    }));
  }
  learnScroll() {
    const focused = document.getElementById('focusedslide');
    const focused_location = focused.getBoundingClientRect();
    window.scrollTo({ top: focused_location.top + window.pageYOffset, behavior: 'smooth' });
  }
  render() {
    return (
      <div className='indexGrid'>
        <div className='CoverHold'>
          <Img
            sizes={this.state.indexImages[this.state.currentPhoto]}
            outerWrapperClassName="coverOuter"
            position="absolute"
            style={gatsbyImgStyle}
          />
          <div className='CoverText'>
            <h1>DDI Capital is your Independent Trusted Advisor </h1>
            <p>Whether you are just starting out or ready to bring your current organization to a new level of growth, DDI Capital offers you the most innovative financial strategies allowing you to acquire and finance technology solutions at the best possible price.</p>
            <div className='LearnMore'><button onClick={this.learnScroll}> Learn More &nbsp;&nbsp;<i className="fa fa-arrow-alt-circle-down" /></button></div>
          </div>
        </div>
        <div className='focusedslide' id="focusedslide">
          <div className='FocusedTitle'>
            <h1>Focused on You – Where you work</h1>
            <p>We know your challenges, understand your technology options and aren’t satisfied  until we recommend a solution that exceeds your expectations.</p>
          </div>
          <div className='FocusedBody'>
            <div className='focusedRow'>
              <div><h1><i className="fa fa-money-check-alt" /></h1><p>DDI will work closely with you to customize a financing plan that  best suits your budget, cash flow and technology requirements.</p></div>
              <div><h1><i className="fa fa-users" /></h1><p>Our team’s collective experience, industry contacts and collaborative,  consultative work process ensure that you will get the best possible solution with each lease transaction.</p></div>
            </div>
            <div className='focusedRow'>
              <div><h1><i className="fa fa-hands-helping" /></h1><p>We view our clients as business partners and approach each deal with a long-term focus.  Each and every one of our DDI professionals is acutely aware of the relationship between the growth of your business and ours.</p></div>
              <div><h1><i className="fa fa-hdd" /></h1><p>Our professionals know more than leasing – they are familiar with the technology that you use and they are willing to spend the time with you to put it to maximum advantage.</p></div>
            </div>
          </div>
        </div>
        <div className='SolutionsSlide'>
          <h1 className="title">
        Whether you’re a startup or a Fortune 100 company
        DDI has the appropriate solutions to help you finance your growth
          </h1>
          <SimpleSlider />
        </div>
        <div className='NefaSlide'>
          <Img
            sizes={this.state.nefa}
            position="absolute"
            style={gatsbyImgStyle}
          />
          <div className='CoverText' id='NefaLogoGrid'>
            <h1>Proud Members of </h1>
            <img
              src={this.state.nefaLogo}
              alt="nefa logo"
            />
          </div>
        </div>
        <div className='InterestedSlide'>
          <div className='Offerings'>
            <h1>Offerings Include:</h1>
            <ul className="fa-ul">
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Master Lease Agreements</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Installment Payment Agreements</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Capital and Operating Leases</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Software Only Financing</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Lease Lines</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Purchase Leaseback Structures</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Asset Management</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Network Integration and Consulting</li>
              <li><span className="fa-li" ><i className="fas fa-check-circle" /></span>Project Management</li>
            </ul>
          </div>
          <div className='Interested'>
            <h1>Interested?<br /> 
            Let's Talk</h1>
            <div><Link to="/Vendors"><button>Vendor Opportunities</button></Link></div>
            <div><Link to="/Customers"><button> Customer Information</button></Link></div>
          </div>
        </div>
      </div>

    );
  }
}

export default IndexPage;

export const query = graphql`
  query LandingQuery {
    cover: imageSharp(id:{regex: "/CoverLanding.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    nefa: imageSharp(id:{regex: "/CoverNefa.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    nefaLogo:  imageSharp(id:{regex: "/nefaLogo.png/"}){
      original{
        src
      }
    }
    equipt1: imageSharp(id:{regex: "/AboutEquipt1.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    equipt2: imageSharp(id:{regex: "/AboutEquipt2.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
    equipt3: imageSharp(id:{regex: "/AboutEquipt3.jpg/"}){
      sizes(maxWidth:1900){
        ... GatsbyImageSharpSizes
      }
    }
  }
`
