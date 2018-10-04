import React from 'react';
import styled from 'styled-components';
const PageGrid = styled.div`
    display:grid;
    grid-template-columns:auto;
    grid-template-rows:auto auto;
`
const CalculatorGrid = styled.div`
    display:grid;
    grid-template-columns:auto auto;
    grid-template-rows:auto;
`;
const Labels = styled.div`
    display:grid;
    grid-template-columns:auto;
`;
const InputGrid = styled.div`
    display:grid;
    grid-template-columns:auto;
    input, select{
        border: 1px black solid;
        width:min-content;
    }
`;
const Final = styled.div`
    display:grid;
    grid-template-columns:auto auto;
`


class Section179 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taxBrack:.1,
            purchaseAmount: 1,
            deducation: 0,
            bonus:0,
            firstYearDep:0,
            firstYearDeduction:0,
            CashSavings:0,
            LoweredCost:0,
        }
        this.calculator = this.calculator.bind(this);
    }
    calculator(event) {
        if(event.target.name === 'tax'){
            this.setState({
                taxBrack: event.target.value,
            })
        }
        else if (event.target.name === 'amount'){
            this.setState({
                purchaseAmount: event.target.value,
            })
        }
        let calcDeduction = (this.state.purchaseAmount >= 1000000 ? (1000000):(this.state.purchaseAmount))
        let bonus = calcDeduction;
        let firstYearDep = calcDeduction;
        let firstYearDeduction = calcDeduction;
        let CashSavings = calcDeduction;
        let LoweredCost = calcDeduction;
        this.setState({
            deducation:calcDeduction,
            bonus:bonus,
            firstYearDep:firstYearDep,
            firstYearDeduction:firstYearDeduction,
            CashSavings:CashSavings,
            LoweredCost:LoweredCost,
        },()=>{console.log('new state')});
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
            </Labels>
            <InputGrid>
                <select name='tax' value={this.state.taxBrack} onChange={this.calculator}>
                    <option value='.1'>10%</option>
                    <option value='.12'>12%</option>
                    <option value='.21'>21%</option>
                    <option value='.22'>22%</option>
                    <option value='.24'>24%</option>
                    <option value='.32'>32%</option>
                    <option value='.35'>35%</option>
                    <option value='.37'>37%</option>
                </select>
                <input name='amount' style={{display:'block'}} type='number'  value={this.state.purchaseAmount} onChange={this.calculator}></input>
                <div>${this.state.deduction}</div>
                <div>${this.state.bonus}</div>
                <div>${this.state.firstYearDep}</div>
                <div>${this.state.firstYearDeduction}</div>
                <div>${this.state.CashSavings}</div>
            </InputGrid>
            <Final>
            <div>
                <p>Lowered Cost of Equiptment:</p>
                <p>(After Tax Savings)</p>
            </div>
            <div>
                ${this.state.LoweredCost}
            </div>
            <p>*Information provided is for illustrative purpose only and accuracy is not guaranteed.</p>
            </Final>
        </CalculatorGrid>
        </PageGrid>)
    }
}

export default Section179;

