import React from 'react';

function PlayerIcon(props) {
  return (
    <img style={{width: props.width}} src={require(`./imgs/${props.num}.png`)} />
  );
}


export default PlayerIcon;
