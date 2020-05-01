import React from 'react';

class MathBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 5715,
      allowance: 1714,
      bedrooms: 2,
      rent: 1100,
      neighborhoodCards: 3,
      commuteDistance: 4,
    };
  }

  render() {
    const allowanceMinusRentOver100 = Math.floor((this.state.allowance - this.state.rent) / 100);
    return (
      <div
        style={{ backgroundColor: 'gray' }}
      >
        <p>
Total Household Monthly Income: $
          {this.state.income}
        </p>
        <p>
Monthly Housing Allowance: $
          {this.state.allowance}
        </p>
        <p>
Minimum Number of Bedrooms:
          {this.state.bedrooms}
        </p>
        <h1>Scoring</h1>
        <p>
(Housing Allowance) - (Rent) / 100 =
          {allowanceMinusRentOver100}
        </p>
        <p>
Subtract Neighborhood Cards -
          {this.state.neighborhoodCards}
        </p>
        <p>
Subtract Commute Distance -
          {this.state.commuteDistance}
        </p>
        <p>
Total Score:
          {allowanceMinusRentOver100 - this.state.neighborhoodCards - this.state.commuteDistance}
        </p>
      </div>
    );
  }
}

export default MathBox;
