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
            <li className="linked"><a href="https://www.linkedin.com/company/ddi-capital-inc/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a></li>
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
                  <li><Link to="/Section179">Section 179 Calculator</Link></li>
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
