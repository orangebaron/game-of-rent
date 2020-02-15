import React from 'react';

function PlayerIcon(props) {
  return (
    <img style={{width: "60px"}} src={require(`./imgs/${props.num}.png`)} />
  );
}


export default PlayerIcon;
