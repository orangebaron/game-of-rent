import React from 'react';

class PlayerIcon extends React.Component {
  render() {
    return (
      <img src={require(`./imgs/${this.props.num}.png`)} />
    );
  }
}

export default PlayerIcon;
