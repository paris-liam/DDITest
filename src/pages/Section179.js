import React from 'react';
import styled from 'styled-components';
import { colorsAndFont } from '../style/style';
const PageGrid = styled.div`
    display:grid;
    height:88vh;
    grid-template-columns:auto;
    grid-template-rows:auto auto;
    background-color:${colorsAndFont.blue};
    color:white;
    h1{
        text-align:center;
    }
`
const CalculatorGrid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:auto auto;
    width:80%;
    justify-self:center;
    align-self: center;
    grid-row-gap:3rem;
    grid-template-areas: 'labels input' 'final final';
`;
const Labels = styled.div`
    grid-area:labels;
    display:grid;
    grid-template-columns:auto;
    grid-row-gap:2em;
`;
const InputGrid = styled.form`
    grid-area:input;
    display:grid;
    grid-template-columns:auto;
    grid-row-gap:2em;
    input, select{
        border: 1px black solid;
        width:min-content;
    }
`;
const Final = styled.div`
    grid-area:final;
    display:grid;
    grid-template-columns:auto auto;
    grid-template-rows: 1fr 1fr;
`

class Section179 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taxBrack:.1,
            purchaseAmount: 1,
            deducation: 0,
            bonus:'  -',
            firstYearDeduction:0,
            CashSavings:0,
            LoweredCost:0,
        }
        this.calculator = this.calculator.bind(this);
        this.checkAmount = this.checkAmount.bind(this);
    }
    checkAmount(event){
        if(event.target.value > 2500000){
            event.target.value = 2500000;
        }
    }
    calculator(event) {
        if(event.target.name == 'amount'){
            if(event.target.value > 2500000){
                event.target.value = 2500000
            }
        }
        let taxBrack = document.getElementById('taxBrack').value;
        let purchaseAmount = document.getElementById('purchaseAmount').value;
        let deduction = (purchaseAmount >= 1000000 ? (1000000):(purchaseAmount))
        let bonus = (deduction >= 1000000 ? (purchaseAmount - 1000000):('-'));
        let firstYearDeduction = deduction;
        let CashSavings = purchaseAmount * taxBrack;
        let LoweredCost = purchaseAmount - CashSavings;
        this.setState({
            taxBrack: taxBrack,
            purchaseAmount: purchaseAmount,
            deducation:deduction,
            bonus:bonus,
            firstYearDeduction:firstYearDeduction,
            CashSavings:CashSavings,
            LoweredCost:LoweredCost,
        });
        this.forceUpdate();
    }
    render(){ return(
        <PageGrid>
            <h1>Section179 Calculator</h1>
        <CalculatorGrid>
            <Labels>
                <div>Tax Bracket:</div>
                <div>Equipment Purchase Amount:</div>
                <div>Section 179 Deduction</div>
                <div><p>Bonus Depreciation</p><p>(100% in 2018)</p></div>
                <div>Normal First Year Depreciation:</div>
                <div>Total First Year Deduction</div>
                <div>Cash Savings on your Purchase</div>
                <div>
                <p>Lowered Cost of Equiptment:</p>
                <p>(After Tax Savings)</p>
            </div>
            </Labels>
            <InputGrid>
                <select name='tax' id='taxBrack'  onInput={this.calculator}>
                    <option value='.1'>10%</option>
                    <option value='.12'>12%</option>
                    <option value='.21'>21%</option>
                    <option value='.22'>22%</option>
                    <option value='.24'>24%</option>
                    <option value='.32'>32%</option>
                    <option value='.35'>35%</option>
                    <option value='.37'>37%</option>
                </select>
                <input id='purchaseAmount' name='amount' style={{display:'block'}} type='number' onInput={this.calculator}></input>
                <div>${this.state.deducation}</div>
                <div>${this.state.bonus}</div>
                <div>$0</div>
                <div>${this.state.firstYearDeduction}</div>
                <div>${this.state.CashSavings}</div>
                <div>
                ${this.state.LoweredCost}
            </div>
            </InputGrid>
            <p>*Information provided is for illustrative purpose only and accuracy is not guaranteed.</p>
        </CalculatorGrid>
        </PageGrid>)
    }
}

export default Section179;

