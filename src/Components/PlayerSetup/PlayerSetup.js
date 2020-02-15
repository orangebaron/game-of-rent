import React from 'react';

const setup = ['Setup page 1', 'Setup page 2', '...'];

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
        className="PlayerSetup"
        style={{ backgroundColor: 'gray' }}
      >
        <p>{setup[this.state.setupLocation]}</p>
      </div>
    );
  }
}

export default PlayerSetup;
