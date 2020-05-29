import React from 'react';

function PlayerIcon(props) {
  return (
    <img style={{width: "3.3vw"}} src={require(`./imgs/${props.num}.png`)} />
  );
}


export default PlayerIcon;
