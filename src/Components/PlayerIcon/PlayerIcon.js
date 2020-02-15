import React from 'react';
import { Image } from 'react-native'

import './PlayerIcon.css';

function PlayerIcon(n) {
  return (
    <Image source={require('./imgs/'+n)} />
  );
}

export default PlayerIcon;
