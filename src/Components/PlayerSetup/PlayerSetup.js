import React from 'react';

const setup = [
  "Welcome to the game of rent! You will now take on the role of a person in [CITY] searching for affordable housing. It is your job to find the best housing for you and your family considering all your circumstances. Let's find out more about your character. Click on the yellow card to discover your occupation!",
  "Now that you have your occupation, it's time to determine your household! Click on the die to roll for the number of family members.",
  "That means you have X other family members in your household. Draw a household card and an occupation card if that family members is of working age.",
  "Everyone has unforseen circumstances arise in their lives. Draw a life card for each adult in your household including yourself!",
  "Your household is finally set! Now click on the calculator icon to find out your monthly housing allowance. This is how much you can afford to spending on housing each month.",
];

class PlayerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setupLocation: 0,
    };
  }

  nextStep() {
    this.setState({
      setupLocation: this.state.setupLocation + 1,
    });
  }

  render() {
    return (
      <div
        style={{ backgroundColor: 'gray' }}
      >
        <p>{setup[this.state.setupLocation].replace("[CITY]", this.props.city || "Nashville")}</p>
      </div>
    );
  }
}

export default PlayerSetup;
