
import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Link from 'gatsby-link';


const MAX_DEDUCTION_AMOUNT = 1160000;
const BONUS_SAVINGS = 1
export default function Section179() {

    const [taxBrack, setTaxBrack] = React.useState(0.35)
    const [purchaseAmount, setPurchaseAmount] = React.useState(50000)
    const [deduction, setDeduction] = React.useState(0)
    const [bonus, setBonus] = React.useState(0)
    const [firstYearDeduction, setFirstYearDeduction] = React.useState(0)
    const [cashSavings, setCashSavings] = React.useState(0)
    const [loweredCost, setLoweredCost] = React.useState(0)

    const date = new Date();

    const formatNumber = (number) => {
        return number ? parseInt(number).toLocaleString() : 0;
    }

    //runs whenever tax bracket or purchase amount changes
    useEffect(() => {
        let calculatedDeduction = 0;
        let calculatedBonus = 0
        // if purchase amount is over MAX_DEDUCTION_AMOUNT (set above) set to MAX_DEDUCTION AMOUNT and calculate bonus 
        if (!purchaseAmount) {
            calculatedDeduction = 0
        } else if(purchaseAmount >= MAX_DEDUCTION_AMOUNT) {
            calculatedDeduction = MAX_DEDUCTION_AMOUNT
            calculatedBonus = (purchaseAmount - calculatedDeduction) * BONUS_SAVINGS
        } else {
            calculatedDeduction = purchaseAmount
        }
        const calculatedFirstYear = calculatedDeduction + calculatedBonus
        const calculatedCashSavings = calculatedFirstYear * taxBrack;
        const calculatedLowerCost = purchaseAmount - calculatedCashSavings;

        //setting and formatting values
        setBonus(formatNumber(calculatedBonus))
        setCashSavings(formatNumber(calculatedCashSavings))
        setDeduction(formatNumber(calculatedDeduction));
        setFirstYearDeduction(formatNumber(calculatedFirstYear));
        setLoweredCost(formatNumber(calculatedLowerCost))
    }, [taxBrack, purchaseAmount])

    return (<Layout><div className="pageGrid">
        <div className="copy">
            <h2>
                Use the Below Calculator to Check Your Tax Write Off for&nbsp;
                {date.getFullYear()}
            </h2>
            <p>
                The Section 179 Tax Deduction is meant to encourage businesses to stay
                competitive by purchasing needed equipment, and writing off the full amount
                on their taxes for the current year. This free Section 179 calculator is
                fully updated for {date.getFullYear()} – go ahead, run some
                numbers and see how much you can actually save in real dollars this year.
            </p>
        </div>

        <div className="copy">
            <p style={{ fontSize: '.8em' }}>
                To take advantage of these high Section 179 limits for{' '}
                {date.getFullYear()}, the equipment must be purchased and put
                into service by midnight 12/31/{date.getFullYear()}. Use Form
                4562 to claim your deduction.
            </p>
        </div>

        <div className="calculatorGrid">
            <h2>Section179 Calculator</h2>
            <form
                className="inputGrid"
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <div className="inputColumn">
                    <div>Tax Bracket:</div>
                    <div>
                        <select name="tax" id="taxBrack" onChange={(e) => {
                            setTaxBrack(e.target.value)
                        }}>
                            <option value={0.1}>10%</option>
                            <option value={0.12}>12%</option>
                            <option value={0.21}>21%</option>
                            <option value={0.22}>22%</option>
                            <option value={0.24}>24%</option>
                            <option value={0.32}>32%</option>
                            <option value={0.35} selected>
                                35%
                            </option>
                            <option value={0.37}>37%</option>
                        </select>
                    </div>
                    <div>Equipment Purchase Amount:</div>
                    <span>
                        $
                        <input
                            id="purchaseAmount"
                            name="amount"
                            type='string'
                            defaultValue={5000}
                            style={{
                                display: 'inline-block',
                                outline: 'none',
                                border: '1px #585b8c solid',
                                width: '50%'
                            }}
                            className="numberInput"
                            onChange={(e) => {
                                if(e.target.value) {
                                    const noCommas = e.target.value.replace(/\,/g, '');
                                    const amount = parseInt(noCommas, 10)
                                    setPurchaseAmount(amount)
                                    e.target.value = amount.toLocaleString()
                                } else {
                                    e.target.value = 0;
                                    setPurchaseAmount(0);
                                }
                                
                            }}
                            
                        />
                        {/*onBlur={(e) => {
                                console.warn('on blur called');
                                const noCommas = parseInt(e.target.value.replace(/\,/g, ''),10);
                                e.target.value = `${noCommas}`.split(/(?=(?:\d{3})+$)/).join(',');
                            }}*/}
                        {purchaseAmount > 2590000 && <div className="warningText" id="warningText">
                            for amounts higher than 2.59 million, please contact DDI directly
                        </div>}
                    </span>

                    <div>Section 179 Deduction:</div>
                    <div>${deduction}</div>
                    <div>
                        <p>Bonus Depreciation:</p>
                        <p>(100% in {date.getFullYear()})</p>
                    </div>
                    <div>${bonus}</div>
                    <div>Normal First Year Depreciation:</div>
                    <div>$0</div>
                    <div>Total First Year Deduction:</div>
                    <div>${firstYearDeduction}</div>
                    <div style={{ fontSize: '1.25em' }}>
                        <p>Lowered Cost of Equipment:</p>
                        <p>(After Tax Savings)</p>
                    </div>
                    <div style={{ fontSize: '1.25em' }}>${loweredCost}</div>
                    <div>Cash Savings on your Purchase:</div>
                    <div>${cashSavings}</div>
                </div>
            </form>
            <p style={{ fontSize: '.75em' }}>
                *Information provided is for illustrative purpose only and accuracy is not
                guaranteed.
            </p>
        </div>

        <div
            style={{ display: 'flex', flexDirection: 'row', borderTop: '2px solid white' }}
        >
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
                        Software Only Financing
                    </li>
                    <li>
                        <span className="fa-li">
                            <i className="fas fa-check-circle" />
                        </span>
                        Lease Lines
                    </li>
                    <li>
                        <span className="fa-li">
                            <i className="fas fa-check-circle" />
                        </span>
                        Purchase Leaseback Structures
                    </li>
                    <li>
                        <span className="fa-li">
                            <i className="fas fa-check-circle" />
                        </span>
                        Asset Management
                    </li>
                    <li>
                        <span className="fa-li">
                            <i className="fas fa-check-circle" />
                        </span>
                        Network Integration and Consulting
                    </li>
                    <li>
                        <span className="fa-li">
                            <i className="fas fa-check-circle" />
                        </span>
                        Project Management
                    </li>
                </ul>
            </div>
            <div className="InterestedSlideCalculator" style={{ fontSize: '.8em' }}>
                <div className="Interested" style={{ width: '100%', margin: 'auto' }}>
                    <h1>
                        Interested in DDI?
                        <br /> Let's Talk
                    </h1>
                    <div>
                        <Link to="/Vendors">
                            <button>Vendor Opportunities</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Customers">
                            <button> Customer Information</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div></Layout>)
}
