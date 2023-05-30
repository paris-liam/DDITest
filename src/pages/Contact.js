import React from 'react';
import { gatsbyImgStyle } from '../style/dataAndCopy';
import IMG from 'gatsby-image';
import Layout from '../components/layout';
import { StaticQuery } from 'gatsby';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => (
    <Layout>
        <StaticQuery query={graphql`    query ContactQuery {
        cover: imageSharp(fluid: {originalName: {regex: "/CoverContact.jpg/"}}) {
            sizes(maxWidth: 1900) {
                ...GatsbyImageSharpSizes
            }
        }
    }`} render={data => (<div className="indexGrid" id="singlegrid">
        <div className="CoverHold">
            <IMG
                sizes={data.cover.sizes}
                outerWrapperClassName="coverOuter"
                position="absolute"
                style={gatsbyImgStyle}
            />
            <div className="CoverText" id="SingleCoverText">
                <h1>CONTACT US</h1>
                <p>We'd love to hear from you!</p>
            </div>
        </div>
        <div className="focusedslide" id="singleslide">
            <div className="ContactBody">
                <div className="ContactInfo">
                    <ul id="corporate">
                        <li>DDI Capital Headquarters</li>
                        <li>181 New Road, Suite 304</li>
                        <li>Parsippany, NJ 07054</li>
                        <li>Tel: 908-781-9300</li>
                    </ul>
                    <div>
                        <ul id="ponte">
                            <li>Ponte Vedra, FL</li>
                            <li>Tel: 904-473-5413</li>
                        </ul>
                        <ul id="quogue">
                            <li>Westhampton, NY</li>
                            <li>Tel: 631-996-2675</li>
                        </ul>
                        <ul id="spring">
                            <li>Spring Lake, NJ</li>
                            <li>Tel: 732-449-1999</li>
                        </ul>
                    </div>
                </div>
                <div className="ContactForm">
                    <form
                        name="contact-new"
                        form-name="contact-new"
                        method="POST"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                    >
                        <input type="hidden" name="form-name" value="contact-new" />
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" />
                        <div data-netlify-recaptcha="true"></div>
                        <ReCAPTCHA sitekey="6Lfz4cggAAAAAP2ZpL8LHHLCIzv6bfqrRa6VCVhe" />

                        <div>
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)}/>
</Layout>);

export default Contact;
