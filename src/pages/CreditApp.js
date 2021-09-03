import React from 'react';
import Layout from '../components/layout';

class CreditApp extends React.Component {
    componentDidMount() {
        let inputs = document.querySelectorAll('input');
        console.warn(inputs);

        inputs.forEach((input) => {
            input.addEventListener('focus', (evt) => {
                input.classList.add('mini-label');
            });
            input.addEventListener('blur', (evt) => {
                if (evt.target.value.trim() === '') {
                    input.classList.remove('mini-label');
                }
            })
        })
    }

    render() {
        return (<Layout>
            <div className="pageGrid">
                <div className="copy">
                    <h2>title</h2>
                    <p>body</p>
                </div>
                <div className="creditAppGrid">
                    <h2>Credit Application</h2>
                    <form className="inputGrid credit-app-grid"
                        name="credit-app"
                        form-name="credit-app"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="bot-field" />
                        <div className="input-section input-text">
                            <input id="applicant_name" name="applicant_name" type="text" required></input>
                            <label for="applicant_name">Applicant (Use exact legal name of entity)</label>
                        </div>
                        <div className="input-section input-tel">
                            <input type="tel" id="phone_number" name="phone_number" required></input>
                            <label for="phone_number">Phone Number</label>
                        </div>
                        <div className="input-section input-tel">
                            <input id="fax_number" name="fax_number" type="tel"></input>
                            <label for="fax_number">Fax Number</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="contact_persons_name" name="contact_persons_name" type="text" required></input>
                            <label for="contact_persons_name">Contact Person's Name</label>
                        </div>
                        <div className="input-section input-tel">
                            <input id="contact_persons_cell_number" name="contact_persons_cell_number" type="tel" required></input>
                            <label for="contact_persons_cell_number">Contact Person's Cell Number</label>
                        </div>
                        <div className="input-section input-email">
                            <input id="contact_persons_email" name="contact_persons_email" type="email" required></input>
                            <label for="contact_persons_email">Contact Person's E-mail Address</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="web_address" name="web_address" type="text"></input>
                            <label for="web_address">Web Address</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_address" name="main_business_office_address" type="text" required></input>
                            <label for="main_business_office_address">Applicant’s main business office address</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_city" name="main_business_office_city" type="text" required></input>
                            <label for="main_business_office_city">City</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_state" name="main_business_office_state" type="text" required></input>
                            <label for="main_business_office_state">State</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_zip" name="main_business_office_zip" type="text" required></input>
                            <label for="main_business_office_zip">Zip</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_address" name="proposed_property_address" type="text"></input>
                            <label for="proposed_property_address">Proposed address of equipment/property</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_city" name="proposed_property_city" type="text"></input>
                            <label for="proposed_property_city">City</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_state" name="proposed_property_state" type="text"></input>
                            <label for="proposed_property_state">State</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_zip" name="proposed_property_zip" type="text"></input>
                            <label for="proposed_property_zip">Zip</label>
                        </div>
                        <div className="input-section input-number">
                            <input id="years_in_business" name="years_in_business" required type="number"></input>
                            <label for="years_in_business">Years In Business</label>
                        </div>
                        <div className="select-section">
                            <label>select type of business</label>
                            <select required id="type_of_business" name="type_of_business">
                                <option selected value="c_corp">C-Corp</option>
                                <option value="sub_s_corp">Sub-S Corp</option>
                                <option value="sole_proprietorship">Sole Proprietorship</option>
                                <option value="llc">LLC</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="input-section input-text other-type">
                            <input id="other_type" name="other_type" type="text"></input>
                            <label for="other_type">Other Type:</label>
                        </div>
                        <div className="input-section input-number">
                            <input id="annual_revenue" name="annual_revenue" type="number"></input>
                            <label for="annual_revenue">Annual Revenue</label>
                        </div>
                        <div className="input-section input-number">
                            <input id="number_of_employees" name="number_of_employees" type="number"></input>
                            <label for="number_of_employees">Number of Employees</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="federal_ID_number" name="federal_ID_number" type="text"></input>
                            <label for="federal_ID_number">Federal ID Number</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="d_and_b_number" name="d_and_b_number" type="text"></input>
                            <label for="d_and_b_number">D&B Number</label>
                        </div>
                        <div className="select-section">
                            <label>Are you public?</label>
                            <select id="are_you_public" name="are_you_public">
                                <option selected value="yes">yes</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                        <div className="input-section input-text">
                            <input id="ticker_symbol" name="ticker_symbol" type="text"></input>
                            <label for="ticker_symbol">Ticker Symbol</label>
                        </div>
                        <p>Deal Summary</p>
                        <div className="input-section input-text">
                            <input id="total_size_of_transaction" name="total_size_of_transaction" type="text"></input>
                            <label for="total_size_of_transaction">Total size of transaction</label>
                        </div>
                        <div className="select-section">
                            <label>Length of terms</label>
                            <select id="leng_of_terms" name="leng_of_terms">
                                <option selected value="12">12</option>
                                <option value="24">24</option>
                                <option selected value="36">36</option>
                                <option value="48">48</option>
                                <option selected value="60">60</option>
                            </select>
                        </div>
                        <div className="input-section input-text-area">
                            <textarea id="comments" name="comments"></textarea>
                            <label for="comments">General Comments</label>
                        </div>
                        <div className="submit-button-area">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                <div className="copy">
                    <p style={{ fontSize: '.8em' }}>
                        subtitle
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', borderTop: '2px solid white' }}>
                    <div className="Offerings" style={{ padding: '3vh 0 3vh' }}>
                        <h1>Offerings Include:</h1>
                        <ul className="fa-ul">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Master Lease Agreements
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Installment Payment Agreements
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Capital and Operating Leases
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                0% (or sub-0%) Fair Market Value Terms
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                100% Bundled Financing
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Payment Deferrals and Step Lease Structures
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Quick, Application-Only Credit Approvals for purchases under $250,000
                            </li>
                        </ul>
                    </div>
                    <div className="Offerings2" style={{ padding: '3vh 0 3vh' }}>
                        <h1>General Terms and Conditions</h1>
                        <ul className="fa-ul">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                No fees due at signing.                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                No down payments necessary.                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Monthly, quarterly, or annual billing available.                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Proposed numbers are subject to credit approval and review of final equipment.                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                For transactions over $250,000, proposed payments are based on like-term SWAP interest rates as published in the
                                Intercontinental Exchange daily update, and will adjust accordingly at time of lease execution to protect both parties.                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Proposed pricing is for discussion purposes only.                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>);
    }
}

export default CreditApp;
