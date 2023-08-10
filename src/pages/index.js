import React, { useEffect, useState } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import SimpleSlider from '../components/SimpleSlider';
import { gatsbyImgStyle } from '../style/dataAndCopy';
import { useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

export const nefaCoverStyle = {
    width: '25vh',
    height: '25vh',
};

export default function Index() {
    const data = useStaticQuery(graphql`
        query LandingQuery {
            cover: imageSharp(fluid: {originalName: {regex: "/CoverLanding.jpg/"}}){
                sizes(maxWidth:1900){
                ... GatsbyImageSharpSizes
                }
            }
            nefa: imageSharp(fluid: {originalName: {regex: "/CoverNefa.jpg/"}}){
                sizes(maxWidth:1900){
                ... GatsbyImageSharpSizes
                }
            }
            nefaLogo: imageSharp(fluid: {originalName: {regex: "/nefaLogo.png/"}}){
                original{
                    src
                  }
            }
            elfaLogo: imageSharp(fluid: {originalName: {regex: "/elfaLogo.png/"}}){
                original{
                    src
                  }
            }
            equipt1: imageSharp(fluid: {originalName: {regex: "/AboutEquipt1.jpg/"}}){
                sizes(maxWidth:1900){
                ... GatsbyImageSharpSizes
                }
            }
            equipt2: imageSharp(fluid: {originalName: {regex: "/AboutEquipt2.jpg/"}}){
                sizes(maxWidth:1900){
                ... GatsbyImageSharpSizes
                }
            }
            equipt3: imageSharp(fluid: {originalName: {regex: "/AboutEquipt3.jpg/"}}){
                sizes(maxWidth:1900){
                ... GatsbyImageSharpSizes
                }
            }
        }
    `)
    const photoArray = [data.cover.sizes, data.equipt1.sizes, data.equipt2.sizes, data.equipt3.sizes];
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const imageCycle = () => {
        setCurrentPhoto(currentPhoto + 1);
        console.log(currentPhoto);
        if (currentPhoto >= 4) {
            setCurrentPhoto(0);
        }
    }
    useEffect(() => {
        setInterval(imageCycle, 5000);
        return () => clearInterval(imageCycle);
    }, []);

    function learnScroll() {
        const focused = document.getElementById('focusedslide');
        const focused_location = focused.getBoundingClientRect();
        window.scrollTo({ top: focused_location.top + window.pageYOffset, behavior: 'smooth' });
    }

    return (
        <Layout>
            <div className='indexGrid'>
                <div className='CoverHold'>
                    <Img
                        sizes={photoArray[currentPhoto]}
                        outerWrapperClassName="coverOuter"
                        position="absolute"
                        style={gatsbyImgStyle}
                    />
                    <div className='CoverText'>
                        <h1>DDI Capital is your Trusted Independent Advisor </h1>
                        <p>DDI Capital offers the most innovative financing strategies and cash-flow solutions, allowing our clients to acquire and consume technology at the best possible price.</p>
                        <div className='LearnMore'><button onClick={() => { learnScroll() }}> Learn More &nbsp;&nbsp;<i className="fa fa-arrow-alt-circle-down" /></button></div>
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
                            <div><h1><i className="fa fa-hands-helping" /></h1><p>We view our clients as business partners and approach each deal with a long-term outlook. Each of our DDI professionals is laser-focused on strategies to help you grow your business.</p></div>
                            <div><h1><i className="fa fa-hdd" /></h1><p>We work with many of the largest and most diversified corporations in the country. They choose DDI Capital because we offer greater flexibility, more speed and a more customized finance experience than any of our competitors.</p></div>
                        </div>
                    </div>
                </div>
                <div className='SolutionsSlide'>
                    <h1 className="title">
                        Whether you’re a small, family-owned business or a Fortune 100 company
                        DDI has the appropriate solutions to help you finance your growth
                    </h1>
                    <SimpleSlider />
                </div>
                <div className='NefaSlide'>
                    <Img
                        sizes={data.nefa.sizes}
                        position="absolute"
                        style={gatsbyImgStyle}
                    />
                    <div className='overlay'></div>
                    <div className='CoverText' id='NefaLogoGrid'>
                        <h1>Proud Members of </h1>
                        <div className='image-container'><img
                            src={data.nefaLogo.original.src}
                            alt="nefa logo"
                        />
                        <img
                            src={data.elfaLogo.original.src}
                            alt="elfa logo"
                        /></div>
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
        </Layout>
    );
}