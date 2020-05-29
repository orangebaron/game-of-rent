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

  rollDoneCallback(num) {
   console.log("rolled a " + num);
   // NOTE: this is where more dice roll logic can be done
   this.setState({
     numberRolled: num,
   });
  }

  render() {
    const { numberRolled } = this.state;
    return (
        <ReactDice
          numDice={1}
          faceColor="#ffffff"
          dotColor="#000000"
          rollDone={num => this.rollDoneCallback(num)}
        />
    );
  }
}
