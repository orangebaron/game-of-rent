import React from 'react';

const sumList = l => l.reduce((a, b) => a+b, 0)
const makePricesIntoString = l => " " + (l.map(a => "$" + a).join(" + ") || "$0")

class StartGameMathBox extends React.Component {
  constructor(props) {
    super(props);
    // will be set in props later but here's some default values
    const incomes = [1000,1001];
    const household = [];
    const life = [10,20,30];

    const income = sumList(incomes)-sumList(household)-sumList(life);
    const allowance = Math.floor(income*.3);
    this.state = {
      incomes, household, life, income, allowance
    };
  }

  render() {
    return (
      <div
        style={{ backgroundColor: 'gray' }}
      >
        <p>
Income From Occupations:
          {makePricesIntoString(this.state.incomes)}
        </p>
        <p>
- Deductions From Household:
          {makePricesIntoString(this.state.household)}
        </p>
        <p>
- Deductions From Life Cards:
          {makePricesIntoString(this.state.life)}
        </p>
        <p>
= Total Household Monthly Income: $
          {this.state.income}
        </p>
        <p>
Monthly Housing Allowance: $
          {this.state.allowance}
        </p>
      </div>
    );
  }
}

export default StartGameMathBox;
