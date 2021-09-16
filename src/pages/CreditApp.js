import React from 'react';
import Layout from '../components/layout';

class CreditApp extends React.Component {
    componentDidMount() {
        let inputs = document.querySelectorAll('input');
        let typeOfBusiness = document.querySelector('#type_of_business');
        let publicQuestion = document.querySelector('#are_you_public');

        typeOfBusiness.addEventListener('change', (evt) => {
            console.warn(evt.target.value)
            if (evt.target.value === 'other') {
                document.querySelector('#other-type-section').style.display = "block";
            } else {
                document.querySelector('#other-type-section').style.display = "none";
            }
        })

        publicQuestion.addEventListener('change', (evt) => {
            console.warn(evt.target.value)
            if (evt.target.value === 'yes') {
                document.querySelector('#ticker-symbol-section').style.display = "block";
            } else {
                document.querySelector('#ticker-symbol-section').style.display = "none";
            }
        })
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
        let transactionSize = document.querySelector('#total_size_of_transaction');
        transactionSize.addEventListener('input', (evt) => {
            let number = evt.target.value.toString();
            let noDollar = number.replace('\$', '');
            let noComma = noDollar.replace(',', '');
            let formattedValue = noComma;
            formattedValue = formattedValue.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            console.warn(formattedValue);
            transactionSize.value = `$${formattedValue}`;
        })

        let form = document.querySelector('form.credit-app-grid');

        form.addEventListener('onSubmit', () => {
            form.style.display = 'none';
            document.querySelector('#thanks-for-submitting').style.display = 'block';
        })


    }

    render() {
        return (<Layout>
            <div className="pageGrid">
                <div className="copy">
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
                            <label htmlFor="applicant_name">Applicant (Use Exact Legal Name of Entity)</label>
                        </div>
                        <div className="input-section input-tel">
                            <input type="tel" id="business_phone_number" name="business_phone_number" required></input>
                            <label htmlFor="business_phone_number">Business Phone Number</label>
                        </div>
                        <div className="input-section input-tel">
                            <input id="fax_number" name="fax_number" type="tel"></input>
                            <label htmlFor="fax_number">Fax Number</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="contact_persons_name" name="contact_persons_name" type="text" required></input>
                            <label htmlFor="contact_persons_name">Contact Person's Name</label>
                        </div>
                        <div className="input-section input-tel">
                            <input id="contact_persons_cell_number" name="contact_persons_cell_number" type="tel" required></input>
                            <label htmlFor="contact_persons_cell_number">Contact Person's Cell Number</label>
                        </div>
                        <div className="input-section input-email">
                            <input id="contact_persons_email" name="contact_persons_email" type="email" required></input>
                            <label htmlFor="contact_persons_email">Contact Person's E-mail Address</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="web_address" name="web_address" type="text"></input>
                            <label htmlFor="web_address">Web Address</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_address" name="main_business_office_address" type="text" required></input>
                            <label htmlFor="main_business_office_address">Applicant’s Main Business Office Address</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_city" name="main_business_office_city" type="text" required></input>
                            <label htmlFor="main_business_office_city">Main Office City</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_state" name="main_business_office_state" type="text" required></input>
                            <label htmlFor="main_business_office_state">Main Office State</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="main_business_office_zip" name="main_business_office_zip" type="text" required></input>
                            <label htmlFor="main_business_office_zip">Main Office Zip</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_address" name="proposed_property_address" type="text"></input>
                            <label htmlFor="proposed_property_address">Proposed Address of Equipment/Property</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_city" name="proposed_property_city" type="text"></input>
                            <label htmlFor="proposed_property_city">Property City</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_state" name="proposed_property_state" type="text"></input>
                            <label htmlFor="proposed_property_state">Property State</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="proposed_property_zip" name="proposed_property_zip" type="text"></input>
                            <label htmlFor="proposed_property_zip">Property Zip</label>
                        </div>
                        <div className="input-section input-number">
                            <input id="years_in_business" name="years_in_business" required type="number"></input>
                            <label htmlFor="years_in_business">Years In Business</label>
                        </div>
                        <div className="select-section">
                            <label>Select Type of Business</label>
                            <select defaultValue="c_corp" required id="type_of_business" name="type_of_business">
                                <option value="c_corp">C-Corp</option>
                                <option value="sub_s_corp">Sub-S Corp</option>
                                <option value="sole_proprietorship">Sole Proprietorship</option>
                                <option value="llc">LLC</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div id="other-type-section" className="input-section input-text other-type">
                            <input id="other_type" name="other_type" type="text"></input>
                            <label htmlFor="other_type">Other Type:</label>
                        </div>
                        <div className="input-section input-number">
                            <input id="annual_revenue" name="annual_revenue" type="number"></input>
                            <label htmlFor="annual_revenue">Annual Revenue</label>
                        </div>
                        <div className="input-section input-number">
                            <input id="number_of_employees" name="number_of_employees" type="number"></input>
                            <label htmlFor="number_of_employees">Number of Employees</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="federal_ID_number" name="federal_ID_number" type="text"></input>
                            <label htmlFor="federal_ID_number">Federal ID Number</label>
                        </div>
                        <div className="input-section input-text">
                            <input id="d_and_b_number" name="d_and_b_number" type="text"></input>
                            <label htmlFor="d_and_b_number">D&B Number</label>
                        </div>
                        <div className="select-section">
                            <label>Are you public?</label>
                            <select defaultValue="no" id="are_you_public" name="are_you_public">
                                <option value="yes">yes</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                        <div id="ticker-symbol-section" className="input-section input-text">
                            <input id="ticker_symbol" name="ticker_symbol" type="text"></input>
                            <label htmlFor="ticker_symbol">Ticker Symbol</label>
                        </div>
                        <p className='sub-header'>Deal Summary</p>
                        <div className="input-section input-text">
                            <input id="total_size_of_transaction" name="total_size_of_transaction" type="text"></input>
                            <label htmlFor="total_size_of_transaction">Total size of transaction</label>
                        </div>
                        <div className="select-section">
                            <label>Length of term (Months)</label>
                            <select defaultValue="12" id="length_of_terms" name="leng_of_terms">
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="48">48</option>
                                <option value="60">60</option>
                            </select>
                        </div>
                        <div className="input-text-area">
                            {/*<input className="file-input" name="equiptment_description_attachment" type="file" />*/}
                            <textarea id="comments" name="comments"></textarea>
                            <label htmlFor="comments">Equiptment Description</label>
                        </div>
                        <div className="input-text-area">
                            <textarea id="comments" name="comments"></textarea>
                            <label htmlFor="comments">General Comments</label>
                        </div>
                        <div className="submit-button-area">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                    <div id="thanks-for-submitting">
                        <h2>Thanks for Submitting!</h2>
                        <p>We'll get back to you shortly</p>
                    </div>
                </div>
                <div className="copy">
                    <p style={{ fontSize: '.8em' }}>
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
                                Quick, Application-Only Credit Approvals for Purchases Under $250,000
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
