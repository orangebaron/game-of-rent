import React from 'react';

import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberRolled: 0,
    };
  }

  //   rollDoneCallback(num) {
  //     // this.setState(() => ({
  //     //   numberRolled: num,
  //     // }));
  //     // console.log(`You rolled a ${num}`);
  //   }

  render() {
    const { numberRolled } = this.state;
    return (
      <div style={{ border: '1px black solid' }}>
        <h1>Hello from Dice</h1>
        <h1>
          You rolled:
          {' '}
          {numberRolled}
        </h1>
        <ReactDice
          numDice={1}
          faceColor="#ffffff"
          dotColor="#000000"
          rollDone={this.rollDoneCallback}
        />
      </div>
    );
  }
}
