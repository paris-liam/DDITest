import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { toggleNav } from '../style/dataAndCopy';

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const siteWrap = document.querySelector('#site-wrapper');
    siteWrap.classList.remove('show-nav');
    const ham = document.querySelector('.hamburger-menu');
    ham.classList.remove('animate');

  }
  render() {
    return (
      <div className='headGrid'>
        <Link className='Logo' to="/">
          <Img sizes={this.props.logo.sizes} />
        </Link>
        <div className='headerPlaceholder'> </div>
        <div className='HamburgerIcon'><div /><div className="burger-container" onClick={toggleNav}>
          <div
            className="hamburger-menu"
            style={{ position: 'absolute', top: '30%', left: '30%', }} />
        </div>
        </div>
        <div className='HamburgerContent'>
          <div className='contact'>
            <li className="linked"><a href="https://www.linkedin.com/company/ddi-capital-inc/"><i className="fa fa-linkedin-square"></i></a></li>
            <li className='envelope'><a href="mailto:info@ddicapitalinc.com"><i className="fa fa-envelope" /><p>&nbsp;&nbsp; Email us</p></a></li>
            <li><i className="fa fa-phone-square" /><p>&nbsp;&nbsp;(908)-781-9300</p></li>
            <li className='payBillsButton'>
              <a href="https://smartpay.profitstars.com/express/DDICPP"><button>Pay Bills Online</button></a>
            </li>
          </div>
          <div className='nav'>
            <li className="aboutDrop"><Link to="/About">About</Link><div className="DropdownContent aboutContent">
              <ul>
                <li><Link to="/About">Who We Are</Link></li>
                <li><Link to="/About#Why">Why DDI</Link></li>
                <li><Link to="/About#Equipt">Equipment Financed</Link></li>
                <li><Link to="/About#Team" state={{ accordian: true }}>
                Meet The Team
                </Link>
                </li>
              </ul>
            </div>
            </li>

            <li className="leasingDrop">Leasing Solutions
              <div className="DropdownContent leasingContent">
                <ul>
                  <li><Link to="/Customers">Client Offerings</Link></li>
                  <li><Link to="/Vendors">Vendor Programs</Link></li>
                </ul>
              </div>
            </li>

            <li><Link to="/Contact">Contact</Link></li>
          </div>
        </div>
      </div>
    );
  }
}


export default TopHeader;
